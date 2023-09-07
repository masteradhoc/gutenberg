<?php
/**
 * Enable theme previews in the Site Editor for block themes.
 *
 * @package gutenberg
 */

/**
 * Allow developers to customize the back to dashboard link in the Site Editor
 *
 * @param array $settings The editor settings.
 * @return array The editor settings.
 */

function gutenberg_theme_preview_block_editor_settings_all( $settings ) {
	$settings['__experimentalDashboardLink'] = 'themes.php';
	return $settings;
}

// Attaches filters to enable theme previews in the Site Editor.
if ( ! empty( $_GET['wp_theme_preview'] ) ) {
	add_filter( 'block_editor_settings_all', 'gutenberg_theme_preview_block_editor_settings_all' );
}
