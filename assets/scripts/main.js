import $ from 'jquery';
import Router from './tools/Router';

import common from './routes/Common';
import home from './routes/Home';

__webpack_public_path__ = document.head.querySelector('meta[name="base_assets"]').content;

const router = new Router({
    common,
    home
});

window.router = router;

$(document).ready(() => router.loadEvents());
