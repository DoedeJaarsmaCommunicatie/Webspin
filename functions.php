<?php
defined('ABSPATH') || exit;
define('WEBSPIN_FILE', __FILE__);

use Timber\Timber;

include_once get_stylesheet_directory() . '/vendor/autoload.php';

Timber::$locations = [
    \App\Helpers\WP::getStylesheetDir() . '/templates/',
];
