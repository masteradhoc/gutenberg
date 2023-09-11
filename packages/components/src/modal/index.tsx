/**
 * External dependencies
 */
import classnames from 'classnames';
import type { ForwardedRef, KeyboardEvent, UIEvent } from 'react';

/**
 * WordPress dependencies
 */
import {
	createPortal,
	useCallback,
	useEffect,
	useRef,
	useState,
	forwardRef,
	useLayoutEffect,
} from '@wordpress/element';
import {
	useInstanceId,
	useFocusReturn,
	useFocusOnMount,
	__experimentalUseFocusOutside as useFocusOutside,
	useConstrainedTabbing,
	useMergeRefs,
} from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { close } from '@wordpress/icons';
import { getScrollContainer } from '@wordpress/dom';

/**
 * Internal dependencies
 */
import * as ariaHelper from './aria-helper';
import Button from '../button';
import StyleProvider from '../style-provider';
import type { ModalProps } from './types';

// Used to count the number of open modals.
let openModalCount = 0;

const MODAL_HEADER_CLASSNAME = 'components-modal__header';

/**
 * When `firstElement` is passed to `focusOnMount`, this function is optimised to
 * avoid focusing on the `Close` button (or other "header" elements of the Modal
 * and instead focus within the Modal's contents.
 * However, if no tabbable elements are found within the Modal's contents, the
 * first tabbable element (likely the `Close` button) will be focused instead.
 * This ensures that at least one element is focused whilst still optimising
 * for the best a11y experience.
 *
 * See: https://github.com/WordPress/gutenberg/issues/54106.
 * @param tabbables HTMLElement[] an array of tabbable elements.
 * @return HTMLElement the first tabbable element that is not a close button.
 */
function getFirstTabbableElement( tabbables: HTMLElement[] ) {
	// Attempt to locate tabbable outside of the header portion of the Modal.
	const firstContentTabbable = tabbables.find( ( tabbable ) => {
		return tabbable.closest( `.${ MODAL_HEADER_CLASSNAME }` ) === null;
	} );

	if ( firstContentTabbable ) {
		return firstContentTabbable;
	}

	// Fallback to the first tabbable element anywhere within the Modal.
	// Likely the `Close` button.
	return tabbables[ 0 ];
}

function UnforwardedModal(
	props: ModalProps,
	forwardedRef: ForwardedRef< HTMLDivElement >
) {
	const {
		bodyOpenClassName = 'modal-open',
		role = 'dialog',
		title = null,
		focusOnMount = true,
		shouldCloseOnEsc = true,
		shouldCloseOnClickOutside = true,
		isDismissible = true,
		/* Accessibility. */
		aria = {
			labelledby: undefined,
			describedby: undefined,
		},
		onRequestClose,
		icon,
		closeButtonLabel,
		children,
		style,
		overlayClassName,
		className,
		contentLabel,
		onKeyDown,
		isFullScreen = false,
		headerActions = null,
		__experimentalHideHeader = false,
	} = props;

	const ref = useRef< HTMLDivElement >();
	const instanceId = useInstanceId( Modal );
	const headingId = title
		? `components-modal-header-${ instanceId }`
		: aria.labelledby;

	const focusOnMountRef = useFocusOnMount(
		focusOnMount === 'firstElement' ? getFirstTabbableElement : focusOnMount
	);

	const constrainedTabbingRef = useConstrainedTabbing();
	const focusReturnRef = useFocusReturn();
	const focusOutsideProps = useFocusOutside( onRequestClose );
	const contentRef = useRef< HTMLDivElement >( null );
	const childrenContainerRef = useRef< HTMLDivElement >( null );

	const [ hasScrolledContent, setHasScrolledContent ] = useState( false );
	const [ hasScrollableContent, setHasScrollableContent ] = useState( false );

	// Determines whether the Modal content is scrollable and updates the state.
	const isContentScrollable = useCallback( () => {
		if ( ! contentRef.current ) {
			return;
		}

		const closestScrollContainer = getScrollContainer( contentRef.current );

		if ( contentRef.current === closestScrollContainer ) {
			setHasScrollableContent( true );
		} else {
			setHasScrollableContent( false );
		}
	}, [ contentRef ] );

	useEffect( () => {
		openModalCount++;

		if ( openModalCount === 1 ) {
			ariaHelper.hideApp( ref.current );
			document.body.classList.add( bodyOpenClassName );
		}

		return () => {
			openModalCount--;

			if ( openModalCount === 0 ) {
				document.body.classList.remove( bodyOpenClassName );
				ariaHelper.showApp();
			}
		};
	}, [ bodyOpenClassName ] );

	// Calls the isContentScrollable callback when the Modal children container resizes.
	useLayoutEffect( () => {
		if ( ! window.ResizeObserver || ! childrenContainerRef.current ) {
			return;
		}

		const resizeObserver = new ResizeObserver( isContentScrollable );
		resizeObserver.observe( childrenContainerRef.current );

		isContentScrollable();

		return () => {
			resizeObserver.disconnect();
		};
	}, [ isContentScrollable, childrenContainerRef ] );

	function handleEscapeKeyDown( event: KeyboardEvent< HTMLDivElement > ) {
		if (
			// Ignore keydowns from IMEs
			event.nativeEvent.isComposing ||
			// Workaround for Mac Safari where the final Enter/Backspace of an IME composition
			// is `isComposing=false`, even though it's technically still part of the composition.
			// These can only be detected by keyCode.
			event.keyCode === 229
		) {
			return;
		}

		if (
			shouldCloseOnEsc &&
			event.code === 'Escape' &&
			! event.defaultPrevented
		) {
			event.preventDefault();
			if ( onRequestClose ) {
				onRequestClose( event );
			}
		}
	}

	const onContentContainerScroll = useCallback(
		( e: UIEvent< HTMLDivElement > ) => {
			const scrollY = e?.currentTarget?.scrollTop ?? -1;

			if ( ! hasScrolledContent && scrollY > 0 ) {
				setHasScrolledContent( true );
			} else if ( hasScrolledContent && scrollY <= 0 ) {
				setHasScrolledContent( false );
			}
		},
		[ hasScrolledContent ]
	);

	let pressTarget: EventTarget | null = null;
	const overlayPressHandlers: {
		onPointerDown: React.PointerEventHandler< HTMLDivElement >;
		onPointerUp: React.PointerEventHandler< HTMLDivElement >;
	} = {
		onPointerDown: ( event ) => {
			if ( event.isPrimary && event.target === event.currentTarget ) {
				pressTarget = event.target;
				// Avoids loss of focus yet also leaves `useFocusOutside`
				// practically useless with its only potential trigger being
				// programmatic focus movement. TODO opt for either removing
				// the hook or enhancing it such that this isn't needed.
				event.preventDefault();
			}
		},
		// Closes the modal with two exceptions. 1. Opening the context menu on
		// the overlay. 2. Pressing on the overlay then dragging the pointer
		// over the modal and releasing. Due to the modal being a child of the
		// overlay, such a gesture is a `click` on the overlay and cannot be
		// excepted by a `click` handler. Thus the tactic of handling
		// `pointerup` and comparing its target to that of the `pointerdown`.
		onPointerUp: ( { target, button } ) => {
			const isSameTarget = target === pressTarget;
			pressTarget = null;
			if ( button === 0 && isSameTarget ) onRequestClose();
		},
	};

	return createPortal(
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<div
			ref={ useMergeRefs( [ ref, forwardedRef ] ) }
			className={ classnames(
				'components-modal__screen-overlay',
				overlayClassName
			) }
			onKeyDown={ handleEscapeKeyDown }
			{ ...( shouldCloseOnClickOutside ? overlayPressHandlers : {} ) }
		>
			<StyleProvider document={ document }>
				<div
					className={ classnames(
						'components-modal__frame',
						className,
						{
							'is-full-screen': isFullScreen,
						}
					) }
					style={ style }
					ref={ useMergeRefs( [
						constrainedTabbingRef,
						focusReturnRef,
						focusOnMountRef,
					] ) }
					role={ role }
					aria-label={ contentLabel }
					aria-labelledby={ contentLabel ? undefined : headingId }
					aria-describedby={ aria.describedby }
					tabIndex={ -1 }
					{ ...( shouldCloseOnClickOutside
						? focusOutsideProps
						: {} ) }
					onKeyDown={ onKeyDown }
				>
					<div
						className={ classnames( 'components-modal__content', {
							'hide-header': __experimentalHideHeader,
							'is-scrollable': hasScrollableContent,
							'has-scrolled-content': hasScrolledContent,
						} ) }
						role="document"
						onScroll={ onContentContainerScroll }
						ref={ contentRef }
						aria-label={
							hasScrollableContent
								? __( 'Scrollable section' )
								: undefined
						}
						tabIndex={ hasScrollableContent ? 0 : undefined }
					>
						{ ! __experimentalHideHeader && (
							<div className={ MODAL_HEADER_CLASSNAME }>
								<div className="components-modal__header-heading-container">
									{ icon && (
										<span
											className="components-modal__icon-container"
											aria-hidden
										>
											{ icon }
										</span>
									) }
									{ title && (
										<h1
											id={ headingId }
											className="components-modal__header-heading"
										>
											{ title }
										</h1>
									) }
								</div>
								{ headerActions }
								{ isDismissible && (
									<Button
										onClick={ onRequestClose }
										icon={ close }
										label={
											closeButtonLabel || __( 'Close' )
										}
									/>
								) }
							</div>
						) }
						<div ref={ childrenContainerRef }>{ children }</div>
					</div>
				</div>
			</StyleProvider>
		</div>,
		document.body
	);
}

/**
 * Modals give users information and choices related to a task they’re trying to
 * accomplish. They can contain critical information, require decisions, or
 * involve multiple tasks.
 *
 * ```jsx
 * import { Button, Modal } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyModal = () => {
 *   const [ isOpen, setOpen ] = useState( false );
 *   const openModal = () => setOpen( true );
 *   const closeModal = () => setOpen( false );
 *
 *   return (
 *     <>
 *       <Button variant="secondary" onClick={ openModal }>
 *         Open Modal
 *       </Button>
 *       { isOpen && (
 *         <Modal title="This is my modal" onRequestClose={ closeModal }>
 *           <Button variant="secondary" onClick={ closeModal }>
 *             My custom close button
 *           </Button>
 *         </Modal>
 *       ) }
 *     </>
 *   );
 * };
 * ```
 */
export const Modal = forwardRef( UnforwardedModal );

export default Modal;
