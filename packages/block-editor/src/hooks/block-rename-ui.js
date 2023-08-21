/**
 * WordPress dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { getBlockSupport } from '@wordpress/blocks';
import { MenuItem } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { BlockSettingsMenuControls } from '../components';
import { store as blockEditorStore } from '../store';

function BlockRenameControl( props ) {
	const { clientId } = props;

	// write a useSelect to get the block being renamed
	const blockBeingRenamed = useSelect( ( select ) => {
		return select( blockEditorStore ).getBlockBeingRenamed();
	} );

	const { setBlockBeingRenamed } = useDispatch( blockEditorStore );

	const renamingBlock = blockBeingRenamed === clientId;

	const setRenamingBlock = ( isRenaming ) => {
		if ( isRenaming ) {
			setBlockBeingRenamed( clientId );
		} else {
			setBlockBeingRenamed( null );
		}
	};

	return (
		<>
			<BlockSettingsMenuControls>
				{ ( { selectedClientIds, __unstableDisplayLocation } ) => {
					// Only enabled for single selections.
					const canRename =
						selectedClientIds.length === 1 &&
						clientId === selectedClientIds[ 0 ];

					// This check ensures the `BlockSettingsMenuControls` fill
					// doesn't render multiple times and also that it renders for
					// the block from which the menu was triggered.
					if (
						__unstableDisplayLocation !== 'list-view' ||
						! canRename
					) {
						return null;
					}

					return (
						<MenuItem
							onClick={ () => {
								setRenamingBlock( true );
							} }
							aria-expanded={ renamingBlock }
							aria-haspopup="dialog"
						>
							{ __( 'Rename' ) }
						</MenuItem>
					);
				} }
			</BlockSettingsMenuControls>
		</>
	);
}

export const withBlockRenameControl = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		const { clientId, name, attributes, setAttributes } = props;

		const metaDataSupport = getBlockSupport(
			name,
			'__experimentalMetadata',
			false
		);

		const supportsBlockNaming = !! (
			true === metaDataSupport || metaDataSupport?.name
		);

		return (
			<>
				{ supportsBlockNaming && (
					<BlockRenameControl
						clientId={ clientId }
						blockAttributes={ attributes }
						onChange={ setAttributes }
					/>
				) }

				<BlockEdit key="edit" { ...props } />
			</>
		);
	},
	'withToolbarControls'
);

addFilter(
	'editor.BlockEdit',
	'core/block-rename-ui/with-block-rename-control',
	withBlockRenameControl
);
