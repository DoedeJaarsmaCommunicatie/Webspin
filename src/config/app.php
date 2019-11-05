<?php

namespace App;

use App\Providers\MenuServiceProvider;
use App\Providers\FilterServiceProvider;

return [
    'providers'     => [
        FilterServiceProvider::class,
        MenuServiceProvider::class,
    ]
];
