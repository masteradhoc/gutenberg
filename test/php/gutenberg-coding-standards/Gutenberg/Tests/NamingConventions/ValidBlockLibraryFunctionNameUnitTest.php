<?php
/**
 * Unit test class for Gutenberg Coding Standard.
 *
 * @package gutenberg-coding-standards/gbc
 * @link    https://github.com/WordPress/gutenberg
 * @license https://opensource.org/licenses/MIT MIT
 */

namespace GutenbergCS\Gutenberg\Tests\NamingConventions;

use PHP_CodeSniffer\Config;
use PHP_CodeSniffer\Tests\Standards\AbstractSniffUnitTest;

/**
 * Unit test class for the GuardedFunctionAndClassNames sniff.
 */
final class ValidBlockLibraryFunctionNameUnitTest extends AbstractSniffUnitTest {

	/**
	 * Returns the lines where errors should occur.
	 *
	 * @return array <int line number> => <int number of errors>
	 */
	public function getErrorList() {
		return array(
			17 => 1,
			25 => 1,
		);
	}

	/**
	 * Returns the lines where warnings should occur.
	 *
	 * @return array <int line number> => <int number of warnings>
	 */
	public function getWarningList() {
		return array();
	}

	public static function setUpBeforeClass() {
		parent::setUpBeforeClass();
		if ( isset( $GLOBALS['PHP_CODESNIFFER_CONFIG'] ) ) {
			$config = $GLOBALS['PHP_CODESNIFFER_CONFIG'];
		} else {
			$config        = new Config();
			$config->cache = false;
		}


		$GLOBALS['PHP_CODESNIFFER_CONFIG'] = $config;
	}

	protected function getTestFiles($testFileBase) {
		$a = 5;
		return array(
			__DIR__ . '/../fixtures/block-library/src/my-block/index.inc',
		);
	}
}
