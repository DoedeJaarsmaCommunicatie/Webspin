<?php

namespace App\Providers;

use App\Helpers\Str;
use Timber\Menu;

use function apply_filters;
use function register_nav_menus;

/**
 * Class MenuServiceProvider
 *
 * @package App\Providers
 */
class MenuServiceProvider
{
    /**
     * The registered menus
     *
     * @var array
     */
    protected $menus = [
        'primary-menu' => 'Primary',
    ];
    
    /**
     * MenuServiceProvider constructor.
     */
    public function __construct()
    {
        $this->boot();
    }
    
    /**
     * Register nav menus in timber
     *
     * @return void
     */
    public function boot(): void
    {
        
        register_nav_menus(
            apply_filters('webspin/menus/register', $this->menus)
        );
        
        add_filter('timber/context', [ $this, 'registerContent' ]);
    }
    
    /**
     * Register nav menu's in twig.
     *
     * @param array $content
     *
     * @return mixed
     */
    public function registerContent($content)
    {
        foreach ($this->menus as $key => $name) {
            $content[ Str::camel($key) ] = new Menu($key);
        }
        return $content;
    }
}
