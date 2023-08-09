/**
 * External dependencies
 */
import * as path from 'path';
import { test as base, expect } from '@playwright/test';
import type { ConsoleMessage } from '@playwright/test';
import { type Browser, chromium } from 'playwright';
import * as getPort from 'get-port';

/**
 * Internal dependencies
 */
import { Admin, Editor, PageUtils, RequestUtils, Metrics } from './index';

const STORAGE_STATE_PATH =
	process.env.STORAGE_STATE_PATH ||
	path.join( process.cwd(), 'artifacts/storage-states/admin.json' );

/**
 * Set of console logging types observed to protect against unexpected yet
 * handled (i.e. not catastrophic) errors or warnings. Each key corresponds
 * to the Playwright ConsoleMessage type, its value the corresponding function
 * on the console global object.
 */
const OBSERVED_CONSOLE_MESSAGE_TYPES = [ 'warn', 'error' ] as const;

/**
 * Adds a page event handler to emit uncaught exception to process if one of
 * the observed console logging types is encountered.
 *
 * @param message The console message.
 */
function observeConsoleLogging( message: ConsoleMessage ) {
	const type = message.type();
	if (
		! OBSERVED_CONSOLE_MESSAGE_TYPES.includes(
			type as ( typeof OBSERVED_CONSOLE_MESSAGE_TYPES )[ number ]
		)
	) {
		return;
	}

	const text = message.text();

	// An exception is made for _blanket_ deprecation warnings: Those
	// which log regardless of whether a deprecated feature is in use.
	if ( text.includes( 'This is a global warning' ) ) {
		return;
	}

	// A chrome advisory warning about SameSite cookies is informational
	// about future changes, tracked separately for improvement in core.
	//
	// See: https://core.trac.wordpress.org/ticket/37000
	// See: https://www.chromestatus.com/feature/5088147346030592
	// See: https://www.chromestatus.com/feature/5633521622188032
	if ( text.includes( 'A cookie associated with a cross-site resource' ) ) {
		return;
	}

	// Viewing posts on the front end can result in this error, which
	// has nothing to do with Gutenberg.
	if ( text.includes( 'net::ERR_UNKNOWN_URL_SCHEME' ) ) {
		return;
	}

	// TODO: Not implemented yet.
	// Network errors are ignored only if we are intentionally testing
	// offline mode.
	// if (
	// 	text.includes( 'net::ERR_INTERNET_DISCONNECTED' ) &&
	// 	isOfflineMode()
	// ) {
	// 	return;
	// }

	// As of WordPress 5.3.2 in Chrome 79, navigating to the block editor
	// (Posts > Add New) will display a console warning about
	// non - unique IDs.
	// See: https://core.trac.wordpress.org/ticket/23165
	if ( text.includes( 'elements with non-unique id #_wpnonce' ) ) {
		return;
	}

	// Ignore all JQMIGRATE (jQuery migrate) deprecation warnings.
	if ( text.includes( 'JQMIGRATE' ) ) {
		return;
	}

	const logFunction =
		type as ( typeof OBSERVED_CONSOLE_MESSAGE_TYPES )[ number ];

	// Disable reason: We intentionally bubble up the console message
	// which, unless the test explicitly anticipates the logging via
	// @wordpress/jest-console matchers, will cause the intended test
	// failure.

	// eslint-disable-next-line no-console
	console[ logFunction ]( text );
}

const test = base.extend<
	{
		admin: Admin;
		editor: Editor;
		pageUtils: PageUtils;
		snapshotConfig: void;
		metrics: Metrics;
	},
	{
		requestUtils: RequestUtils;
		port: number;
		browser: Browser;
	}
>( {
	admin: async ( { page, pageUtils }, use ) => {
		await use( new Admin( { page, pageUtils } ) );
	},
	editor: async ( { page }, use ) => {
		await use( new Editor( { page } ) );
	},
	page: async ( { page }, use ) => {
		page.on( 'console', observeConsoleLogging );

		await use( page );

		// Clear local storage after each test.
		await page.evaluate( () => {
			window.localStorage.clear();
		} );

		await page.close();
	},
	pageUtils: async ( { page }, use ) => {
		await use( new PageUtils( { page } ) );
	},
	requestUtils: [
		async ( {}, use, workerInfo ) => {
			const requestUtils = await RequestUtils.setup( {
				baseURL: workerInfo.project.use.baseURL,
				storageStatePath: STORAGE_STATE_PATH,
			} );

			await use( requestUtils );
		},
		{ scope: 'worker', auto: true },
	],
	port: [
		async ( {}, use ) => {
			const port = await getPort();
			await use( port );
		},
		{ scope: 'worker' },
	],
	browser: [
		async ( { port }, use ) => {
			const browser = await chromium.launch( {
				args: [ `--remote-debugging-port=${ port }` ],
			} );
			await use( browser );

			await browser.close();
		},
		{ scope: 'worker' },
	],
	metrics: async ( { page, port }, use ) => {
		await use( new Metrics( page, port ) );
	},
} );

export { test, expect };
