/**
 * WordPress dependencies
 */

import { parse } from '@wordpress/blocks';
import { store as coreStore } from '@wordpress/core-data';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Returns a generator converting one or more static blocks into a pattern, or creating a new empty pattern.
 *
 * @param {string}            title     Pattern title.
 * @param {'full'|'unsynced'} syncType  They way block is synced, 'full' or 'unsynced'.
 * @param {string}            [content] Optional serialized content of blocks to convert to pattern.
 */
export const __experimentalCreatePattern =
	( title, syncType, content ) =>
	async ( { registry } ) => {
		const meta =
			syncType === 'unsynced'
				? {
						wp_pattern_sync_status: syncType,
				  }
				: undefined;

		const reusableBlock = {
			title,
			content,
			status: 'publish',
			meta,
		};

		const updatedRecord = await registry
			.dispatch( coreStore )
			.saveEntityRecord( 'postType', 'wp_block', reusableBlock );

		return updatedRecord;
	};

/**
 * Create a pattern from a JSON file.
 * @param {File} file The JSON file instance of the pattern.
 */
export const __experimentalCreatePatternFromFile =
	( file ) =>
	async ( { dispatch } ) => {
		const fileContent = await file.text();
		/** @type {import('./types').PatternJSON} */
		let parsedContent;
		try {
			parsedContent = JSON.parse( fileContent );
		} catch ( e ) {
			throw new Error( 'Invalid JSON file' );
		}
		if (
			parsedContent.__file !== 'wp_block' ||
			! parsedContent.title ||
			! parsedContent.content ||
			typeof parsedContent.title !== 'string' ||
			typeof parsedContent.content !== 'string' ||
			( parsedContent.syncStatus &&
				typeof parsedContent.syncStatus !== 'string' )
		) {
			throw new Error( 'Invalid Pattern JSON file' );
		}

		const pattern = await dispatch.__experimentalCreatePattern(
			parsedContent.title,
			parsedContent.syncStatus,
			parsedContent.content
		);

		return pattern;
	};

/**
 * Returns a generator converting a synced pattern block into a static block.
 *
 * @param {string} clientId The client ID of the block to attach.
 */
export const __experimentalConvertSyncedPatternToStatic =
	( clientId ) =>
	( { registry } ) => {
		const oldBlock = registry
			.select( blockEditorStore )
			.getBlock( clientId );
		const pattern = registry
			.select( 'core' )
			.getEditedEntityRecord(
				'postType',
				'wp_block',
				oldBlock.attributes.ref
			);

		const newBlocks = parse(
			typeof pattern.content === 'function'
				? pattern.content( pattern )
				: pattern.content
		);
		registry
			.dispatch( blockEditorStore )
			.replaceBlocks( oldBlock.clientId, newBlocks );
	};

/**
 * Returns an action descriptor for SET_EDITING_PATTERN action.
 *
 * @param {string}  clientId  The clientID of the pattern to target.
 * @param {boolean} isEditing Whether the block should be in editing state.
 * @return {Object} Action descriptor.
 */
export function __experimentalSetEditingPattern( clientId, isEditing ) {
	return {
		type: 'SET_EDITING_PATTERN',
		clientId,
		isEditing,
	};
}
