/**
 * WordPress dependencies
 */
import {
	__experimentalInputControl as InputControl,
	Popover,
	VisuallyHidden,
} from '@wordpress/components';
import { speak } from '@wordpress/a11y';
import { useInstanceId, useFocusOnMount } from '@wordpress/compose';
import { useState, forwardRef, useEffect } from '@wordpress/element';
import { ENTER, ESCAPE } from '@wordpress/keycodes';
import { __, sprintf } from '@wordpress/i18n';

const ListViewBlockRenameUI = forwardRef(
	( { blockTitle, onSubmit, onCancel }, ref ) => {
		const inputRef = useFocusOnMount();
		const inputDescriptionId = useInstanceId(
			ListViewBlockRenameUI,
			`block-editor-list-view-block-node__input-description`
		);

		const formDescriptionId = useInstanceId(
			ListViewBlockRenameUI,
			`block-editor-list-view-block-node__form-description`
		);

		// Local state for value of input **pre-submission**.
		const [ inputValue, setInputValue ] = useState( blockTitle );

		const onKeyDownHandler = ( event ) => {
			// Trap events to input when editing to avoid
			// default list view key handing (e.g. arrow
			// keys for navigation).
			event.stopPropagation();

			// Handle ENTER and ESC exits editing mode.
			if ( event.keyCode === ENTER || event.keyCode === ESCAPE ) {
				if ( event.keyCode === ESCAPE ) {
					handleCancel();
				}

				if ( event.keyCode === ENTER ) {
					handleSubmit();
				}
			}
		};

		const handleCancel = () => {
			// Reset the input's local state to avoid
			// stale values.
			setInputValue( blockTitle );

			onCancel();

			// Must be assertive to immediately announce change.
			speak( __( 'Leaving block name edit mode' ), 'assertive' );
		};

		const handleSubmit = () => {
			// Submit changes only for ENTER.
			onSubmit( inputValue );

			let successAnnouncement;

			if ( inputValue === '' ) {
				successAnnouncement = __( 'Block name reset.' );
			} else {
				successAnnouncement = sprintf(
					/* translators: %s: new name/label for the block */
					__( 'Block name updated to: "%s".' ),
					inputValue
				);
			}

			// Must be assertive to immediately announce change.
			speak( successAnnouncement, 'assertive' );
		};

		const autoSelectInputText = ( event ) => event.target.select();

		useEffect( () => {
			speak( __( 'Entering block name edit mode' ), 'assertive' );
		}, [] );

		return (
			<Popover
				anchorRef={ ref }
				placement={ 'overlay' }
				resize={ true }
				variant={ 'unstyled' }
				animate={ false }
				className="block-editor-list-view-block-rename__popover"
			>
				<form
					className="block-editor-list-view-block-rename__form"
					onSubmit={ ( e ) => {
						e.preventDefault();

						onSubmit( inputValue );
					} }
					aria-describedby={ formDescriptionId }
				>
					<VisuallyHidden>
						<p id={ formDescriptionId }>
							{ __( 'Choose a custom name for this block.' ) }
						</p>
					</VisuallyHidden>
					<InputControl
						ref={ inputRef }
						value={ inputValue }
						label={ __( 'Edit block name' ) }
						hideLabelFromVision
						onChange={ ( nextValue ) => {
							setInputValue( nextValue ?? '' );
						} }
						onBlur={ () => {
							// Cancel editing mode.
							handleCancel();
						} }
						onFocus={ autoSelectInputText }
						onKeyDown={ onKeyDownHandler }
						aria-describedby={ inputDescriptionId }
						required
					/>
					<VisuallyHidden>
						<p id={ inputDescriptionId }>
							{ __(
								'Press the ENTER key to submit or the ESCAPE key to cancel.'
							) }
						</p>
					</VisuallyHidden>
				</form>
			</Popover>
		);
	}
);

export default ListViewBlockRenameUI;
