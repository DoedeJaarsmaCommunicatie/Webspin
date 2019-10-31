<?php

namespace App\Providers;

use App\Helpers\WP;

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
    }
    
    public function register(): void
    {
        $this->updateChecker();
        do_action('webspin/app/registered');
    }
    
    protected function updateChecker(): void
    {
        $checker = \Puc_v4_Factory::buildUpdateChecker(
            'https://github.com/DoedeJaarsmaCommunicatie/Webspin',
            WEBSPIN_FILE,
            'webspin',
            '5'
        );
    }
}
