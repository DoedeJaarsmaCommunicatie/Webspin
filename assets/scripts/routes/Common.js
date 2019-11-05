import { MenuOpener } from './Common/Menu';

const menuOpener = MenuOpener();
menuOpener.buttonSelector = '.js-menu-open-button';
menuOpener.menuSelector = '.js-nav-menu';

export default {
    init() {
        // Javascript that fires on all pages.
        menuOpener.init();
    },

    finalize() {
        // Javascript that fires on all pages. after page specific JS is fires.
    }
}
