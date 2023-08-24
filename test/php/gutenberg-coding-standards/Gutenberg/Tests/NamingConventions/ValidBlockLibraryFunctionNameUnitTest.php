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
use PHP_CodeSniffer\Ruleset;

/**
 * Unit test class for the ValidBlockLibraryFunctionNameSniff sniff.
 */
final class ValidBlockLibraryFunctionNameUnitTest extends AbstractSniffUnitTest {

	const SNIFF_CODE = 'Gutenberg.NamingConventions.ValidBlockLibraryFunctionName';

	/**
	 * Holds the original Ruleset instance.
	 *
	 * @var Ruleset
	 */
	private static $orignial_ruleset;

	/**
	 * Returns the lines where errors should occur.
	 *
	 * @return array <int line number> => <int number of errors>
	 */
	public function getErrorList() {
		return array(
			8  => 1,
			17 => 1,
			26 => 1,
			35 => 1,
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

	/**
	 * Prepares the environment before executing tests. Specifically, sets prefixes for the
	 * ValidBlockLibraryFunctionName sniff.This is needed since AbstractSniffUnitTest class
	 * doesn't apply sniff properties from the Gutenberg/ruleset.xml file.
	 */
	public static function setUpBeforeClass() {
		parent::setUpBeforeClass();

		if ( ! isset( $GLOBALS['PHP_CODESNIFFER_RULESETS']['Gutenberg'] ) ) {
			// If no prior tests were executed,
			// $GLOBALS['PHP_CODESNIFFER_RULESETS']['Gutenberg'] will be empty.
			$GLOBALS['PHP_CODESNIFFER_RULESETS']['Gutenberg'] = self::make_ruleset();
		}

		if ( ! $GLOBALS['PHP_CODESNIFFER_RULESETS']['Gutenberg'] instanceof Ruleset ) {
			throw new \RuntimeException( 'Cannot set ruleset parameters required for this test.' );
		}

		// Backup original Ruleset instance, not the cloned one.
		self::$orignial_ruleset = $GLOBALS['PHP_CODESNIFFER_RULESETS']['Gutenberg'];

		$current_ruleset                                  = clone self::$orignial_ruleset;
		$GLOBALS['PHP_CODESNIFFER_RULESETS']['Gutenberg'] = $current_ruleset;

		$prefixes = array(
			'block_core_',
			'render_block_core_',
			'register_block_core_'
		);

		$current_ruleset->ruleset[ self::SNIFF_CODE ]['properties']['prefixes'] = $prefixes;
	}

	/**
	 * Creates and returns a new Ruleset instance.
	 *
	 * @return Ruleset
	 */
	private static function make_ruleset() {
		$config            = new Config();
		$config->cache     = false;
		$config->standards = [ 'Gutenberg' ];
		$config->sniffs    = [ self::SNIFF_CODE ];
		$config->ignored   = [];

		return new Ruleset( $config );
	}

	/**
	 * Cleans up the environment after tests are executed.
	 */
	static function tearDownAfterClass() {
		$GLOBALS['PHP_CODESNIFFER_RULESETS']['Gutenberg'] = self::$orignial_ruleset;
		self::$orignial_ruleset                           = null;
		parent::tearDownAfterClass();
	}

	/**
	 * @param $testFileBase
	 *
	 * @return string[] Contains a list of files that the current sniff will be tested on.
	 */
	protected function getTestFiles( $testFileBase ) {
		return array(
			__DIR__ . '/../fixtures/block-library/src/my-block/index.inc',
		);
	}
}
