<?php

namespace App\Controllers\Filters;

class PostCard
{
    public function __construct()
    {
        $this->register();
    }
    
    public function register()
    {
        \add_filter('webspin/post-card/content', [ $this, 'excerpt'], 10, 4);
    }
    
    public function excerpt($content, $excerpt, $id): string
    {
        return get_the_excerpt($id);
    }
}
