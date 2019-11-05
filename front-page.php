<?php

$context = \Timber\Timber::get_context();
$context['post'] = new \Timber\Post();
$context['posts'] = new \Timber\PostQuery([
    'post_type'     => 'post',
    'per_page'      => 3
]);

return \Timber\Timber::render(
    [
        \App\Helpers\Template::viewHtmlTwigFile('front-page'),
        \App\Helpers\Template::viewHtmlTwigFile('page'),
    ],
    $context
);
