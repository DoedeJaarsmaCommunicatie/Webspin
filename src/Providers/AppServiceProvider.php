<?php

namespace App\Providers;

use App\Helpers\WP;
use ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager;

use function do_action;

class AppServiceProvider
{
    protected $providers;
    
    public function __construct()
    {
        $providers = include WP::getStylesheetDir() . '/src/config/app.php';
        $this->providers = $providers['providers'];
        $this->boot();
        $this->register();
    }
    
    public function boot(): void
    {
        foreach ($this->providers as $provider) {
            new $provider();
        }
        
        do_action('webspin/providers/registered');
        
        add_theme_support('post-thumbnails');
        add_theme_support('html5');
        add_theme_support('custom-logo');
    }
    
    public function register(): void
    {
        $this->updateChecker();
        add_action('elementor/theme/register_locations', [ $this, 'registerElementorLocations']);
        do_action('webspin/app/registered');
    }
    
    /**
     * @param Locations_Manager $elementor_theme_manager
     */
    public function registerElementorLocations($elementor_theme_manager): void
    {
        $elementor_theme_manager->register_location(
            'footer',
            [
                'label'     => 'Footer',
                'multiple'  => false,
            ]
        );
        
        $elementor_theme_manager->register_location(
            'footer-top',
            [
                'label'     => 'Footer topper',
                'multiple'  => false,
            ]
        );
    }
    
    protected function updateChecker(): void
    {
         \Puc_v4_Factory::buildUpdateChecker(
             'https://github.com/DoedeJaarsmaCommunicatie/Webspin',
             WEBSPIN_FILE,
             'webspin',
             '5'
         );
    }
}
