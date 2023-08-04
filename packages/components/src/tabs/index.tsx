/**
 * External dependencies
 */
import * as Ariakit from '@ariakit/react';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useInstanceId } from '@wordpress/compose';
import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import type {
	TabListProps,
	TabPanelProps,
	TabProps,
	TabsContextProps,
	TabsProps,
} from './types';
import Button from '../button';
import warning from '@wordpress/warning';

const TabsContext = createContext< TabsContextProps >( undefined );

function Tabs( {
	tabs,
	activeClass = 'is-active',
	selectOnMove = true,
	initialTabId,
	orientation = 'horizontal',
	onSelect,
	children,
}: TabsProps ) {
	const instanceId = useInstanceId( Tabs, 'tabs' );
	const store = Ariakit.useTabStore( {
		selectOnMove,
		orientation,
		defaultSelectedId: initialTabId && `${ instanceId }-${ initialTabId }`,
		setSelectedId: onSelect,
	} );

	const { items, selectedId } = store.useState();
	const selectedTab = items.find( ( item ) => item.id === selectedId );
	const firstEnabledTab = items.find( ( item ) => {
		// Ariakit internally refers to disabled tabs as `dimmed`.
		return ! item.dimmed;
	} );

	// Handle selecting the initial tab.
	useLayoutEffect( () => {
		const initialTab = items.find(
			( item ) => item.id === `${ instanceId }-${ initialTabId }`
		);

		// Wait for the denoted initial tab to be declared before making a
		// selection. This ensures that if a tab is declared lazily it can
		// still receive initial selection, as well as ensuring no tab is
		// selected if an invalid `initialTabId` is provided.
		if ( initialTabId && ! initialTab ) {
			return;
		}

		// If the currently selected tab is missing (i.e. removed from the DOM),
		// fall back to the initial tab or the first enabled tab.
		if ( ! items.find( ( item ) => item.id === selectedId ) ) {
			if ( initialTab && ! initialTab.dimmed ) {
				store.setSelectedId( initialTab?.id );
			} else {
				store.setSelectedId( firstEnabledTab?.id );
			}
		}
	}, [
		firstEnabledTab?.id,
		initialTabId,
		instanceId,
		store,
		items,
		selectedId,
	] );

	// Handle the currently selected tab becoming disabled.
	useEffect( () => {
		if ( ! selectedTab?.dimmed ) {
			return;
		}
		// If the currently selected tab becomes disabled, select the first enabled tab.
		// (if there is one).
		if ( firstEnabledTab ) {
			store.setSelectedId( firstEnabledTab?.id );
		}
	}, [
		items,
		store,
		selectedTab?.id,
		selectedTab?.dimmed,
		firstEnabledTab,
	] );

	return (
		<TabsContext.Provider value={ { store, instanceId, activeClass } }>
			{ tabs ? (
				<>
					<Tabs.TabList>
						{ tabs.map( ( tab ) => (
							<Tabs.Tab
								key={ tab.id }
								id={ tab.id }
								title={ tab.title }
								{ ...tab.tab }
							>
								{ ! tab.tab?.icon && tab.title }
							</Tabs.Tab>
						) ) }
					</Tabs.TabList>
					{ tabs.map( ( tab ) => (
						<Tabs.TabPanel key={ tab.id } id={ tab.id }>
							{ tab.content }
						</Tabs.TabPanel>
					) ) }
				</>
			) : (
				<>{ children }</>
			) }
		</TabsContext.Provider>
	);
}

function TabList( { children }: TabListProps ) {
	const context = useContext( TabsContext );
	if ( ! context ) {
		warning( '`Tabs.TabList` must be wrapped in a `Tabs` component.' );
		return null;
	}
	const { store } = context;
	return (
		<Ariakit.TabList store={ store } className="components-tab-panel__tabs">
			{ children }
		</Ariakit.TabList>
	);
}

function Tab( { children, id, className, disabled, icon, title }: TabProps ) {
	const context = useContext( TabsContext );
	if ( ! context ) {
		warning( '`Tabs.TabList` must be wrapped in a `Tabs` component.' );
		return null;
	}
	const { store, instanceId, activeClass } = context;
	const instancedTabId = `${ instanceId }-${ id }`;
	return (
		<Ariakit.Tab
			store={ store }
			id={ instancedTabId }
			className={ classnames(
				'components-tab-panel__tabs-item',
				className,
				{
					[ activeClass ]:
						instancedTabId === store.useState().activeId,
				}
			) }
			disabled={ disabled }
			render={
				<Button
					icon={ icon }
					label={ icon && title }
					showTooltip={ true }
				/>
			}
		>
			{ children }
		</Ariakit.Tab>
	);
}

function TabPanel( { children, id }: TabPanelProps ) {
	const context = useContext( TabsContext );
	if ( ! context ) {
		warning( '`Tabs.TabPanel` must be wrapped in a `Tabs` component.' );
		return null;
	}
	const { store, instanceId } = context;

	return (
		<Ariakit.TabPanel
			store={ store }
			id={ `${ instanceId }-${ id }-view` }
			className="components-tab-panel__tab-content"
		>
			{ children }
		</Ariakit.TabPanel>
	);
}

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
export default Tabs;
