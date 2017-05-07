<?php
/**
 * @author  Pressbooks <code@pressbooks.com>
 * @license GPLv2 (or any later version)
 */
namespace Pressbooks\L10n;

/**
 * KindleGen is based on Mobipocket Creator and apparently supports only the following language codes.
 * This populates the language dropdown on the Book Info page.
 *
 * @see http://www.mobileread.com/forums/showpost.php?p=2453537&postcount=2
 * @return array
 */
function supported_languages() {

	$languages = array(
		'' => '',
		'af' => 'Afrikaans',
		'sq' => 'Albanian',
		'ar' => 'Arabic',
		'ar-dz' => 'Arabic (Algeria)',
		'ar-bh' => 'Arabic (Bahrain)',
		'ar-eg' => 'Arabic (Egypt)',
		'ar-jo' => 'Arabic (Jordan)',
		'ar-kw' => 'Arabic (Kuwait)',
		'ar-lb' => 'Arabic (Lebanon)',
		'ar-ma' => 'Arabic (Morocco)',
		'ar-om' => 'Arabic (Oman)',
		'ar-qa' => 'Arabic (Qatar)',
		'ar-sa' => 'Arabic (Saudi Arabia)',
		'ar-sy' => 'Arabic (Syria)',
		'ar-tn' => 'Arabic (Tunisia)',
		'ar-ae' => 'Arabic (U.A.E.)',
		'ar-ye' => 'Arabic (Yemen)',
		'hy' => 'Armenian',
		'az' => 'Azeri',
		'eu' => 'Basque',
		'be' => 'Belarusian',
		'bn' => 'Bengali',
		'bg' => 'Bulgarian',
		'ca' => 'Catalan',
		'zh' => 'Chinese',
		'zh-hk' => 'Chinese (Hong Kong)',
		'zh-cn' => 'Chinese (PRC)',
		'zh-sg' => 'Chinese (Singapore)',
		'zh-tw' => 'Chinese (Taiwan)',
		'hr' => 'Croatian',
		'cs' => 'Czech',
		'da' => 'Danish',
		'nl' => 'Dutch',
		'nl-be' => 'Dutch (Belgium)',
		'en' => 'English',
		'en-au' => 'English (Australia)',
		'en-bz' => 'English (Belize)',
		'en-ca' => 'English (Canada)',
		'en-ie' => 'English (Ireland)',
		'en-jm' => 'English (Jamaica)',
		'en-nz' => 'English (New Zealand)',
		'en-ph' => 'English (Philippines)',
		'en-za' => 'English (South Africa)',
		'en-tt' => 'English (Trinidad)',
		'en-gb' => 'English (United Kingdom)',
		'en-us' => 'English (United States)',
		'en-zw' => 'English (Zimbabwe)',
		'et' => 'Estonian',
		'fo' => 'Faeroese',
		'fa' => 'Farsi',
		'fi' => 'Finnish',
		'fr-be' => 'French (Belgium)',
		'fr-ca' => 'French (Canada)',
		'fr' => 'French',
		'fr-lu' => 'French (Luxembourg)',
		'fr-mc' => 'French (Monaco)',
		'fr-ch' => 'French (Switzerland)',
		'ka' => 'Georgian',
		'de' => 'German',
		'de-at' => 'German (Austria)',
		'de-li' => 'German (Liechtenstein)',
		'de-lu' => 'German (Luxembourg)',
		'de-ch' => 'German (Switzerland)',
		'el' => 'Greek',
		'gu' => 'Gujarati',
		'he' => 'Hebrew',
		'hi' => 'Hindi',
		'hu' => 'Hungarian',
		'is' => 'Icelandic',
		'id' => 'Indonesian',
		'it' => 'Italian',
		'it-ch' => 'Italian (Switzerland)',
		'ja' => 'Japanese',
		'kn' => 'Kannada',
		'kk' => 'Kazakh',
		'x-kok' => 'Konkani',
		'ko' => 'Korean',
		'lv' => 'Latvian',
		'lt' => 'Lithuanian',
		'mk' => 'Macedonian',
		'ms' => 'Malay',
		'ml' => 'Malayalam',
		'mt' => 'Maltese',
		'mr' => 'Marathi',
		'ne' => 'Nepali',
		'no' => 'Norwegian',
		'nb' => 'Norwegian (Bokm&aring;l)',
		'nn' => 'Norwegian (Nynorsk)',
		'or' => 'Oriya',
		'pl' => 'Polish',
		'pt' => 'Portuguese',
		'pt-br' => 'Portuguese (Brazil)',
		'pa' => 'Punjabi',
		'rm' => 'Rhaeto-Romanic',
		'ro' => 'Romanian',
		'ro-mo' => 'Romanian (Moldova)',
		'ru' => 'Russian',
		'ru-mo' => 'Russian (Moldova)',
		'sz' => 'Sami (Lappish)',
		'sa' => 'Sanskrit',
		'sr' => 'Serbian',
		'sk' => 'Slovak',
		'sl' => 'Slovenian',
		'sb' => 'Sorbian',
		'es' => 'Spanish',
		'es-ar' => 'Spanish (Argentina)',
		'es-bo' => 'Spanish (Bolivia)',
		'es-cl' => 'Spanish (Chile)',
		'es-co' => 'Spanish (Colombia)',
		'es-cr' => 'Spanish (Costa Rica)',
		'es-do' => 'Spanish (Dominican Republic)',
		'es-ec' => 'Spanish (Ecuador)',
		'es-sv' => 'Spanish (El Salvador)',
		'es-gt' => 'Spanish (Guatemala)',
		'es-hn' => 'Spanish (Honduras)',
		'es-mx' => 'Spanish (Mexico)',
		'es-ni' => 'Spanish (Nicaragua)',
		'es-pa' => 'Spanish (Panama)',
		'es-py' => 'Spanish (Paraguay)',
		'es-pe' => 'Spanish (Peru)',
		'es-pr' => 'Spanish (Puerto Rico)',
		'es-uy' => 'Spanish (Uruguay)',
		'es-ve' => 'Spanish (Venezuela)',
		'sx' => 'Sutu',
		'sw' => 'Swahili',
		'sv' => 'Swedish',
		'sv-fi' => 'Swedish (Finland)',
		'ta' => 'Tamil',
		'tt' => 'Tatar',
		'te' => 'Telugu',
		'th' => 'Thai',
		'ts' => 'Tsonga',
		'tn' => 'Tswana',
		'tr' => 'Turkish',
		'uk' => 'Ukranian',
		'ur' => 'Urdu',
		'uz' => 'Uzbek',
		'vi' => 'Vietnamese',
		'xh' => 'Xhosa',
		'zu' => 'Zulu',
	);

	asort( $languages );

	return $languages;
}

/**
 * This helps us convert KindleGen language codes to WordPress-compatible ones and vice versa.
 *
 * @return array
 */
function wplang_codes() {

	$languages = array(
		'af' => 'af', // Afrikaans
		'sq' => 'sq', // Albanian
		'ar' => 'ar', // Arabic
		'ar-dz' => 'ar', // Arabic (Algeria)
		'ar-bh' => 'ar', // Arabic (Bahrain)
		'ar-eg' => 'ar', // Arabic (Egypt)
		'ar-jo' => 'ar', // Arabic (Jordan)
		'ar-kw' => 'ar', // Arabic (Kuwait)
		'ar-lb' => 'ar', // Arabic (Lebanon)
		'ar-ma' => 'ary', // Arabic (Morocco)
		'ar-om' => 'ar', // Arabic (Oman)
		'ar-qa' => 'ar', // Arabic (Qatar)
		'ar-sa' => 'ar', // Arabic (Saudi Aria)
		'ar-sy' => 'ar', // Arabic (Syria)
		'ar-tn' => 'ar', // Arabic (Tunisia)
		'ar-ae' => 'ar', // Arabic (U.A.E.)
		'ar-ye' => 'ar', // Arabic (Yemen)
		'hy' => 'hy', // Armenian
		'az' => 'az', // Azerbaijani
		'eu' => 'eu', // Basque
		'be' => '', // Belarusian
		'bn' => 'bn_BD', // Bengali
		'bg' => 'bg_BG', // Bulgarian
		'ca' => 'ca', // Catalan
		'zh' => 'zh_CN', // Chinese
		'zh-hk' => 'zh_HK', // Chinese (Hong Kong)
		'zh-cn' => 'zh_CN', // Chinese (PRC)
		'zh-sg' => 'zh_CN', // Chinese (Singapore)
		'zh-tw' => 'zh_TW', // Chinese (Taiwan)
		'hr' => 'hr', // Croatian
		'cs' => 'cs_CZ', // Czech
		'da' => 'da_DK', // Danish
		'nl' => 'nl_NL', // Dutch
		'nl-be' => 'nl_NL', // Dutch (Belgium)
		'en' => 'en_US', // English (United States)
		'en-au' => 'en_AU', // English (Australia)
		'en-bz' => 'en_US', // English (Belize)
		'en-ca' => 'en_CA', // English (Canada)
		'en-ie' => 'en_UK', // English (Ireland)
		'en-jm' => 'en_US', // English (Jamaica)
		'en-nz' => 'en_NZ', // English (New Zealand)
		'en-ph' => 'en_US', // English (Philippines)
		'en-za' => 'en_ZA', // English (South Africa)
		'en-tt' => 'en_US', // English (Trinidad)
		'en-gb' => 'en_GB', // English (United Kingdom)
		'en-us' => 'en_US', // English (United States)
		'en-zw' => 'en_US', // English (Zimbabwe)
		'et' => 'et', // Estonian
		'fo' => '', // Faeroese
		'fa' => 'fa_IR', // Farsi
		'fi' => 'fi', // Finnish
		'fr' => 'fr_FR', // French
		'fr-ca' => 'fr_CA', // French (Canada)
		'fr-be' => 'fr_FR', // French (Belgium)
		'fr-lu' => 'fr_FR', // French (Luxembourg)
		'fr-mc' => 'fr_FR', // French (Monaco)
		'fr-ch' => 'fr_FR', // French (Switzerland)
		'ka' => 'ka_GE', // Georgian
		'de' => 'de_DE', // German
		'de-at' => 'de_DE', // German (Austria)
		'de-li' => 'de_DE', // German (Liechtenstein)
		'de-lu' => 'de_DE', // German (Luxembourg)
		'de-ch' => 'de_CH', // German (Switzerland)
		'el' => 'el', // Greek
		'gu' => 'gu', // Gujarati
		'he' => 'he_IL', // Hebrew
		'hi' => 'hi_IN', // Hindi
		'hu' => 'hu_HU', // Hungarian
		'is' => 'is_IS', // Icelandic
		'id' => 'id_ID', // Indonesian
		'it' => 'it_IT', // Italian
		'it-ch' => 'it_IT', // Italian (Switzerland)
		'ja' => 'ja', // Japanese
		'kn' => '', // Kannada
		'kk' => '', // Kazakh
		'x-kok' => '', // Konkani
		'ko' => 'ko_KR', // Korean
		'lv' => 'lv', // Latvian
		'lt' => 'lt_LT', // Lithuanian
		'mk' => 'mk_MK', // Macedonian
		'ms' => 'ms_MY', // Malay
		'ml' => '', // Malayalam
		'mt' => '', // Maltese
		'mr' => 'mr', // Marathi
		'ne' => '', // Nepali
		'no' => 'nb_NO', // Norwegian (Bokmal)
		'nb' => 'nb_NO', // Norwegian (Bokmal)
		'nn' => 'nn_NO', // Norwegian (Nynorsk)
		'or' => 'Oriya',
		'pl' => 'pl_PL', // Polish
		'pt' => 'pt_PT', // Portuguese (Portugal)
		'pt-br' => 'pt_BR', // Portuguese (Brazil)
		'pa' => '', // Punjabi
		'rm' => '', // Rhaeto-Romanic
		'ro' => 'ro_RO', // Romanian
		'ro-mo' => 'ro_RO', // Romanian (Moldova)
		'ru' => 'ru_RU', // Russian
		'ru-mo' => 'ru_RU', // Russian (Moldova)
		'sz' => '', // Sami (Lappish)
		'sa' => '', // Sanskrit
		'sr' => 'sr_RS', // Serbian
		'sk' => 'sk_SK', // Slovak
		'sl' => 'sl_SI', // Slovenian
		'sb' => '', // Sorbian
		'es' => 'es_ES', // Spanish
		'es-ar' => 'es_AR', // Spanish (Argentina)
		'es-bo' => '', // Spanish (Bolivia)
		'es-cl' => 'es_CL', // Spanish (Chile)
		'es-co' => 'es_CO', // Spanish (Colombia)
		'es-cr' => '', // Spanish (Costa Rica)
		'es-do' => '', // Spanish (Dominican Republic)
		'es-ec' => '', // Spanish (Ecuador)
		'es-sv' => '', // Spanish (El Salvador)
		'es-gt' => 'es_GT', // Spanish (Guatemala)
		'es-hn' => '', // Spanish (Honduras)
		'es-mx' => 'es_MX', // Spanish (Mexico)
		'es-ni' => '', // Spanish (Nicaragua)
		'es-pa' => '', // Spanish (Panama)
		'es-py' => '', // Spanish (Paraguay)
		'es-pe' => 'es_PE', // Spanish (Peru)
		'es-pr' => '', // Spanish (Puerto Rico)
		'es-uy' => '', // Spanish (Uruguay)
		'es-ve' => 'es_VE', // Spanish (Venezuela)
		'sx' => '', // Sutu
		'sw' => '', // Swahili
		'sv' => 'sv_SE', // Swedish
		'sv-fi' => 'sv_SE', // Swedish (Finland)
		'ta' => '', // Tamil
		'tt' => '', // Tatar
		'te' => '', // Telugu
		'th' => 'th', // Thai
		'ts' => '', // Tsonga
		'tn' => '', // Tswana
		'tr' => 'tr_TR', // Turkish
		'uk' => 'uk', // Ukrainian
		'ur' => '', // Urdu
		'uz' => '', // Uzbek
		'vi' => 'vi', // Vietnamese
		'xh' => '', // Xhosa
		'zu' => '', // Zulu
	);

	return $languages;
}


/**
 * Override get_locale
 * For performance reasons, we only want functions in this namespace to call WP get_locale once.
 *
 * @return string
 */
function get_locale() {

	// Cheap cache
	static $locale = null;

	if ( empty( $locale ) ) {
		$locale = \get_locale();
	}

	return $locale;
}

/**
 * When multiple mo-files are loaded for the same domain, the first found translation will be used. To allow for easier
 * customization we load from the WordPress languages directory by default then fallback on our own, if any.
 */
function load_plugin_textdomain() {
	$locale = apply_filters( 'plugin_locale', get_locale(), 'pressbooks' );
	load_textdomain( 'pressbooks', WP_LANG_DIR . '/pressbooks/pressbooks-' . $locale . '.mo' );
	\load_plugin_textdomain( 'pressbooks', false, 'pressbooks/languages' );
}


/**
 * Change core WordPress strings.
 *
 * @param $translated
 * @param $original
 * @param $domain
 *
 * @return mixed
 */
function override_core_strings( $translated, $original, $domain ) {

	// var_dump( array( $translated, $original, $domain) );

	$overrides = include_core_overrides();

	if ( isset( $overrides[ $original ] ) ) {
		$translations = get_translations_for_domain( $domain );
		// @codingStandardsIgnoreLine
		$translated = $translations->translate( $overrides[ $original ] );
	}

	return $translated;
}

/**
 * Include the core WordPress override file.
 * Looks for ./languages/core-en_US.php, where "en_US" is defined by get_locale()
 * Expects $overrides array.
 * For performance reasons this function will include the file only once.
 *
 * @return array
 */
function include_core_overrides() {

	// Cheap cache
	static $_overrides = array();

	$locale = apply_filters( 'plugin_locale', get_locale(), 'pressbooks' );
	$filename = 'core-' . strtolower( str_replace( '_', '-', $locale ) ) . '.php';
	$filepath = PB_PLUGIN_DIR . 'languages/' . $filename;

	if ( ! isset( $_overrides[ $locale ] ) ) {
		$_overrides[ $locale ] = array();
		if ( file_exists( $filepath ) ) {
			$_overrides[ $locale ] = include( $filepath );
		}
	}

	return $_overrides[ $locale ];
}


/**
 * Hook for add_filter('locale ', ...), change the user interface language
 *
 * @param string $lang
 *
 * @return string
 */
function set_locale( $lang ) {

	// Cheap cache
	static $loc = '__UNSET__';

	// Book information
	$metadata = \Pressbooks\Book::getBookInformation();
	$book_lang = ( ! empty( $metadata['pb_language'] ) ) ? $metadata['pb_language'] : 'en';

	if ( is_admin() ) {
		// If user locale isn't set, use the book information value.
		if ( ! get_user_option( 'locale' ) ) {
			if (  '__UNSET__' == $loc ) {
				$locations = \Pressbooks\L10n\wplang_codes();
				$loc = $locations[ $book_lang ];
			}
		}
	} elseif ( 'wp-signup.php' == @$GLOBALS['pagenow'] ) {
		// If we're on the registration page, use the global setting.
		$loc = get_site_option( 'WPLANG' );
	} else {
		// Use the book information value.
		if (  '__UNSET__' == $loc ) {
			$locations = \Pressbooks\L10n\wplang_codes();
			$loc = $locations[ $book_lang ];
		}
	}

	// Return
	if ( '__UNSET__' == $loc ) {
		return $lang;
	} else {
		return ( $loc ? $loc : $lang );
	}

}

/**
 * Hook for add_filter('locale ', ...), change the user interface language
 *
 * @param string $lang
 *
 * @return string
 */
function set_root_locale( $lang ) {

	$loc = get_site_option( 'WPLANG' );
	return $loc;

}

/**
 * When a user changes their book's language, try to install the corresponding language pack.
 *
 * @since 3.9.6
 * @param int $meta_id The metadata ID
 * @param int $post_ID The book information post ID
 * @param string $meta_key The metadata key
 * @param string $meta_value The metadata value
 *
 * @return string|bool Returns the language code if successfully downloaded
 *                     (or already installed), or false on failure.
 */
function install_book_locale( $meta_id, $post_id, $meta_key, $meta_value  ) {
	if ( 'pb_language' != $meta_key ) {
		return false;
	}

	$languages = wplang_codes();
	$locale = $languages[ $meta_value ];
	if ( '' !== $locale && 'en_US' !== $locale ) {
		require_once( ABSPATH . '/wp-admin/includes/translation-install.php' );
		$result = \wp_download_language_pack( $locale );
		if ( false == $result ) {
			$supported_languages = supported_languages();
			$_SESSION['pb_errors'][] = sprintf( __( 'Please contact your system administrator if you would like them to install extended %s language support for the Pressbooks interface.', 'pressbooks' ), $supported_languages[ $meta_value ] );
		}
		return $result;
	}

	return false;
}



/**
 * Update previous user interface language meta value to WP 4.7 user locale, try to install the corresponding language pack.
 *
 * @since 3.9.6
 */
function update_user_locale() {
	if ( function_exists( 'get_user_meta' ) ) {
		$locale = get_user_meta( get_current_user_id(), 'user_interface_lang', true );
		if ( 'en_US' != $locale ) {
			update_user_meta( get_current_user_id(), 'locale', $locale );
			require_once( ABSPATH . '/wp-admin/includes/translation-install.php' );
			$result = \wp_download_language_pack( $locale );
			if ( false == $result ) {
				$supported_languages = supported_languages();
				$_SESSION['pb_errors'][] = sprintf( __( 'Please contact your system administrator if you would like them to install extended %s language support for the Pressbooks interface.', 'pressbooks' ), $supported_languages[ $meta_value ] );
			}
		}
		delete_user_meta( get_current_user_id(), 'user_interface_lang' );
	}
}

/**
 * Convert integer to roman numeral
 *
 * @param int $integer
 *
 * @return string
 */
function romanize( $integer ) {

	$integer = absint( $integer );

	$table = array( 'M' => 1000, 'CM' => 900, 'D' => 500, 'CD' => 400, 'C' => 100, 'XC' => 90, 'L' => 50, 'XL' => 40, 'X' => 10, 'IX' => 9, 'V' => 5, 'IV' => 4, 'I' => 1 );
	$return = '';
	while ( $integer > 0 ) {
		foreach ( $table as $rom => $arb ) {
			if ( $integer >= $arb ) {
				$integer -= $arb;
				$return .= $rom;
				break;
			}
		}
	}

	return $return;
}


/**
 * Use the book locale to load POT translations?
 *
 * @return bool
 */
function use_book_locale() {

	// @codingStandardsIgnoreLine
	if ( \Pressbooks\Modules\Export\Export::isFormSubmission() && is_array( @$_POST['export_formats'] ) ) {
		return true;
	}

	$uri = $_SERVER['REQUEST_URI'];
	if ( strpos( $uri, '/format/xhtml' ) !== false ) {
		return true;
	}

	return false;
}
