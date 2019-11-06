import $ from 'jquery';
import Router from './tools/Router';
// const common = () =>
//     import(/* webpackChunkName: "dist/scripts/common" */'./routes/Common')
//         .then(res => routes.common = res);
//
// const home = () =>
//     import(/* webpackChunkName: "dist/scripts/home" */ './routes/Home')
//         .then(res => routes.home = res);

import common from './routes/Common';
import home from './routes/Home';

const router = new Router({
    common,
    home
});

window.router = router;

$(document).ready(() => router.loadEvents());
