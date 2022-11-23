/**
 * WordPress dependencies
 */
import { isEntirelySelected } from '@wordpress/dom';
import { useSelect, useDispatch } from '@wordpress/data';
import { __unstableUseShortcutEventMatch as useShortcutEventMatch } from '@wordpress/keyboard-shortcuts';
import { useRefEffect } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../store';

export default function useSelectAll() {
	const { getBlockOrder, getSelectedBlockClientIds, getBlockRootClientId } =
		useSelect( blockEditorStore );
	const { multiSelect, selectBlock } = useDispatch( blockEditorStore );
	const isMatch = useShortcutEventMatch();

	return useRefEffect( ( node ) => {
		function onKeyDown( event ) {
			if ( ! isMatch( 'core/block-editor/select-all', event ) ) {
				return;
			}

			const selectedClientIds = getSelectedBlockClientIds();

			event.preventDefault();

			const { ownerDocument } = node;
			const { defaultView } = ownerDocument;
			const { anchorNode } = defaultView.getSelection();
			const anchorElement =
				anchorNode.nodeType === anchorNode.ELEMENT_NODE
					? anchorNode
					: anchorNode.parentElement;
			const selectedContentEditable =
				anchorElement.closest( '[contenteditable]' );

			if (
				selectedClientIds.length < 2 &&
				! isEntirelySelected( selectedContentEditable )
			) {
				defaultView.getSelection().removeAllRanges();
				const range = ownerDocument.createRange();
				range.selectNodeContents( selectedContentEditable );
				defaultView.getSelection().addRange( range );
				return;
			}

			const [ firstSelectedClientId ] = selectedClientIds;
			const rootClientId = getBlockRootClientId( firstSelectedClientId );
			const blockClientIds = getBlockOrder( rootClientId );

			// If we have selected all sibling nested blocks, try selecting up a
			// level. See: https://github.com/WordPress/gutenberg/pull/31859/
			if ( selectedClientIds.length === blockClientIds.length ) {
				if ( rootClientId ) {
					node.ownerDocument.defaultView
						.getSelection()
						.removeAllRanges();
					selectBlock( rootClientId );
				}
				return;
			}

			node.ownerDocument.defaultView.getSelection().removeAllRanges();

			multiSelect(
				blockClientIds[ 0 ],
				blockClientIds[ blockClientIds.length - 1 ]
			);
		}

		node.addEventListener( 'keydown', onKeyDown );

		return () => {
			node.removeEventListener( 'keydown', onKeyDown );
		};
	}, [] );
}
