/**
 * External dependencies
 */
import * as Ariakit from '@ariakit/react/tooltip';

/**
 * WordPress dependencies
 */
import { useInstanceId } from '@wordpress/compose';
import { Children } from '@wordpress/element';
import deprecated from '@wordpress/deprecated';

/**
 * Internal dependencies
 */
import type { TooltipProps } from './types';
import Shortcut from '../shortcut';
import { positionToPlacement } from '../popover/utils';

/**
 * Time over anchor to wait before showing tooltip
 */
export const TOOLTIP_DELAY = 700;

function Tooltip( props: TooltipProps ) {
	const {
		children,
		delay = TOOLTIP_DELAY,
		placement,
		position,
		shortcut,
		text,
	} = props;

	const baseId = useInstanceId( Tooltip, 'tooltip' );
	const describedById = text || shortcut ? baseId : undefined;

	const isOnlyChild = Children.count( children ) === 1;
	// console error if more than one child element is added
	if ( ! isOnlyChild ) {
		if ( 'development' === process.env.NODE_ENV ) {
			// eslint-disable-next-line no-console
			console.error(
				'Tooltip should be called with only a single child element.'
			);
		}
	}

	const DEFAULT_PLACEMENT = 'bottom';

	// Compute tooltip's placement:
	// - give priority to `placement` prop, if defined
	// - otherwise, compute it from the legacy `position` prop (if defined)
	// - finally, fallback to the DEFAULT_PLACEMENT.
	let computedPlacement;
	if ( placement !== undefined ) {
		computedPlacement = placement;
	} else if ( position !== undefined ) {
		computedPlacement = positionToPlacement( position );
	}
	computedPlacement = computedPlacement || DEFAULT_PLACEMENT;

	if ( position !== undefined ) {
		deprecated( '`position` prop in wp.components.tooltip', {
			since: '6.4',
			alternative: '`placement` prop',
		} );
	}

	const tooltipStore = Ariakit.useTooltipStore( {
		placement: computedPlacement,
		timeout: delay,
	} );

	return (
		<>
			<Ariakit.TooltipAnchor
				onBlur={ tooltipStore.hide }
				onClick={ tooltipStore.hide }
				store={ tooltipStore }
				render={ isOnlyChild ? children : undefined }
			>
				{ isOnlyChild ? undefined : children }
			</Ariakit.TooltipAnchor>
			{ isOnlyChild && ( text || shortcut ) && (
				<Ariakit.Tooltip
					className="components-tooltip"
					gutter={ 4 }
					id={ describedById }
					overflowPadding={ 0.5 }
					store={ tooltipStore }
				>
					{ text }
					{ shortcut && (
						<Shortcut
							className={
								text ? 'components-tooltip__shortcut' : ''
							}
							shortcut={ shortcut }
						/>
					) }
				</Ariakit.Tooltip>
			) }
		</>
	);
}

export default Tooltip;
