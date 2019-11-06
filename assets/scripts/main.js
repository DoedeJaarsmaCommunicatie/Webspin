import './bootstrap';
import $ from 'jquery';
import Router from './tools/Router';

import common from './routes/Common';
import home from './routes/Home';

const router = new Router({
    common,
    home
});

$(document).ready(() => router.loadEvents());
