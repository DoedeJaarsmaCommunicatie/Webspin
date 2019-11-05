<?php

namespace App\Providers;

use App\Helpers\WP;

class FilterServiceProvider
{
    protected $filters;
    
    public function __construct()
    {
        $filters = include WP::getStylesheetDir() . '/src/config/filters.php';
        $this->filters = $filters;
        
        $this->boot();
    }
    
    public function boot(): void
    {
        foreach ($this->filters as $filter) {
            new $filter();
        }
    }
}
