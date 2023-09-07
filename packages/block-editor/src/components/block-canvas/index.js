/**
 * WordPress dependencies
 */
import { useMergeRefs } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import BlockList from '../block-list';
import EditorStyles from '../editor-styles';
import Iframe from '../iframe';
import WritingFlow from '../writing-flow';
import { useMouseMoveTypingReset } from '../observe-typing';
import { useClipboardHandler } from '../copy-handler';
import { useBlockSelectionClearer } from '../block-selection-clearer';
import { store as blockEditorStore } from '../../store';

/**
 * This component is for rendering block assets when the editor canvas is not
 * iframed. It might include assets that have already been enqueued for the
 * editor, so we need to filter them out.
 */
function UnIframedBlockAssets() {
	const blockAssets =
		useSelect( ( select ) => {
			return select( blockEditorStore ).getSettings()
				.__unstableResolvedAssets;
		}, [] ) || {};
	const { styles: _styles = '', scripts: _scripts = '' } = blockAssets;
	const assetsHtml = _styles + _scripts;
	const filteredAssetsHtml = useMemo( () => {
		const doc = document.implementation.createHTMLDocument( '' );
		doc.body.innerHTML = assetsHtml;
		// Remove assets already enqueued in the editor document.
		doc.querySelectorAll( '[id]' ).forEach( ( node ) => {
			if ( document.getElementById( node.id ) ) {
				node.remove();
			}
		} );
		return doc.body.innerHTML;
	}, [ assetsHtml ] );

	return (
		<div dangerouslySetInnerHTML={ { __html: filteredAssetsHtml } }></div>
	);
}

export function ExperimentalBlockCanvas( {
	shouldIframe = true,
	height = '300px',
	children = <BlockList />,
	styles,
	contentRef: contentRefProp,
	iframeProps,
} ) {
	const resetTypingRef = useMouseMoveTypingReset();
	const copyHandler = useClipboardHandler();
	const clearerRef = useBlockSelectionClearer();
	const contentRef = useMergeRefs( [
		copyHandler,
		contentRefProp,
		clearerRef,
	] );

	if ( ! shouldIframe ) {
		return (
			<>
				<UnIframedBlockAssets />
				<EditorStyles styles={ styles } />
				<WritingFlow
					ref={ contentRef }
					className="editor-styles-wrapper"
					tabIndex={ -1 }
					style={ { height } }
				>
					{ children }
				</WritingFlow>
			</>
		);
	}

	return (
		<Iframe
			{ ...iframeProps }
			ref={ resetTypingRef }
			contentRef={ contentRef }
			style={ {
				width: '100%',
				height,
				...iframeProps?.style,
			} }
			name="editor-canvas"
		>
			<EditorStyles styles={ styles } />
			{ children }
		</Iframe>
	);
}

/**
 * BlockCanvas component is a component used to display the canvas of the block editor.
 * What we call the canvas is an iframe containing the block list that you can manipulate.
 * The component is also responsible of wiring up all the necessary hooks to enable
 * the keyboard navigation across blocks in the editor and inject content styles into the iframe.
 *
 * @example
 *
 * ```jsx
 * function MyBlockEditor() {
 *   const [ blocks, updateBlocks ] = useState([]);
 *   return (
 *     <BlockEditorProvider
 *       value={ blocks }
 *       onInput={ updateBlocks }
 *       onChange={ persistBlocks }
 *      >
 *        <BlockCanvas height="400px" />
 *      </BlockEditorProvider>
 *    );
 * }
 * ```
 *
 * @param {Object}    props          Component props.
 * @param {string}    props.height   Canvas height, defaults to 300px.
 * @param {Array}     props.styles   Content styles to inject into the iframe.
 * @param {WPElement} props.children Content of the canvas, defaults to the BlockList component.
 * @return {WPElement}               Block Breadcrumb.
 */
function BlockCanvas( { children, height, styles } ) {
	return (
		<ExperimentalBlockCanvas height={ height } styles={ styles }>
			{ children }
		</ExperimentalBlockCanvas>
	);
}

export default BlockCanvas;
