/**
 * WordPress dependencies
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import {
	DropdownMenu,
	MenuGroup,
	MenuItem,
	__experimentalConfirmDialog as ConfirmDialog,
} from '@wordpress/components';
import { moreVertical } from '@wordpress/icons';
import { store as noticesStore } from '@wordpress/notices';
import { decodeEntities } from '@wordpress/html-entities';
import { store as reusableBlocksStore } from '@wordpress/reusable-blocks';

/**
 * Internal dependencies
 */
import { store as editSiteStore } from '../../store';
import isTemplateRemovable from '../../utils/is-template-removable';
// import isTemplateRevertable from '../../utils/is-template-revertable';
import RenameTemplate from './rename-menu-item';
import RenamePattern from '../page-patterns/rename-menu-item';

export default function TemplateActions( {
	postType,
	postId,
	className,
	toggleProps,
	onRemove,
} ) {
	const template = useSelect(
		( select ) =>
			select( coreStore ).getEntityRecord( 'postType', postType, postId ),
		[ postType, postId ]
	);
	const { removeTemplate, revertTemplate } = useDispatch( editSiteStore );
	const { saveEditedEntityRecord } = useDispatch( coreStore );
	const { createSuccessNotice, createErrorNotice } =
		useDispatch( noticesStore );
	const { __experimentalDeleteReusableBlock } =
		useDispatch( reusableBlocksStore );
	// @TODO isRemovable and isRevertable do the same thing. Consolidate.
	const isRemovable = isTemplateRemovable( template );
	// const isRevertable = isTemplateRevertable( template );
	const isUserPattern = template?.type === 'wp_block';
	// Only custom patterns or custom template parts can be renamed or deleted.
	// @TODO Maybe abstract constants and utils in packages/edit-site/src/components/page-patterns/utils.js.
	const isTemplate =
		template?.type === 'wp_template' ||
		template?.type === 'wp_template_part';

	if ( ! isTemplate && ! isRemovable && ! isUserPattern ) {
		return null;
	}

	const isEditable = isUserPattern || isTemplateRemovable( template );

	/*
	 * @TODO This is because packages/edit-site/src/components/template-actions/rename-menu-item.js
	 * and packages/edit-site/src/components/page-patterns/rename-menu-item.js are slighly different.
	 * They should be consolidated.
	 */
	const record = isUserPattern
		? {
				...template,
				title: template?.title?.raw,
		  }
		: template;
	const RenameComponent = isUserPattern ? RenamePattern : RenameTemplate;

	const deletePattern = async ( pattern ) => {
		try {
			await __experimentalDeleteReusableBlock( pattern.id );
			createSuccessNotice(
				sprintf(
					// translators: %s: The pattern's title e.g. 'Call to action'.
					__( '"%s" deleted.' ),
					pattern.title
				),
				{ type: 'snackbar', id: 'edit-site-patterns-success' }
			);
		} catch ( error ) {
			const errorMessage =
				error.message && error.code !== 'unknown_error'
					? error.message
					: __( 'An error occurred while deleting the pattern.' );
			createErrorNotice( errorMessage, {
				type: 'snackbar',
				id: 'edit-site-patterns-error',
			} );
		}
	};

	const deleteItem = async ( item ) => {
		if ( isUserPattern ) {
			removeTemplate( item );
		} else if ( isTemplateRemovable( item ) ) {
			deletePattern( item );
		}
	};

	async function revertAndSaveTemplate( item ) {
		try {
			await revertTemplate( template, { allowUndo: false } );
			await saveEditedEntityRecord( 'postType', item.type, item.id );

			createSuccessNotice(
				sprintf(
					/* translators: The template/part's name. */
					__( '"%s" reverted.' ),
					decodeEntities( item.title.rendered )
				),
				{
					type: 'snackbar',
					id: 'edit-site-template-reverted',
				}
			);
		} catch ( error ) {
			const errorMessage =
				error.message && error.code !== 'unknown_error'
					? error.message
					: __( 'An error occurred while reverting the entity.' );

			createErrorNotice( errorMessage, { type: 'snackbar' } );
		}
	}

	return (
		<DropdownMenu
			icon={ moreVertical }
			label={ __( 'Actions' ) }
			className={ className }
			toggleProps={ toggleProps }
		>
			{ ( { onClose } ) => (
				<MenuGroup>
					{ isEditable && (
						<>
							<RenameComponent
								item={ record }
								onClose={ onClose }
							/>

							<DeleteMenuItem
								onRemove={ () => {
									deleteItem( record );
									onRemove?.();
									onClose();
								} }
								title={ record.title.rendered || record.title }
							/>
						</>
					) }

					{ isRemovable && (
						<MenuItem
							info={ __(
								'Use the template as supplied by the theme.'
							) }
							onClick={ () => {
								revertAndSaveTemplate( record );
								onClose();
							} }
						>
							{ __( 'Clear customizations' ) }
						</MenuItem>
					) }
				</MenuGroup>
			) }
		</DropdownMenu>
	);
}

function DeleteMenuItem( { onRemove, title } ) {
	const [ isModalOpen, setIsModalOpen ] = useState( false );
	return (
		<>
			<MenuItem isDestructive onClick={ () => setIsModalOpen( true ) }>
				{ __( 'Delete' ) }
			</MenuItem>
			<ConfirmDialog
				isOpen={ isModalOpen }
				onConfirm={ onRemove }
				onCancel={ () => setIsModalOpen( false ) }
				confirmButtonText={ __( 'Delete' ) }
			>
				{ sprintf(
					// translators: %s: The template or template part's title.
					__( 'Are you sure you want to delete "%s"?' ),
					decodeEntities( title )
				) }
			</ConfirmDialog>
		</>
	);
}
