const MenuOpener = () =>
    import(/* webpackChunkName: "dist/scripts/common/menu" */'./Common/Menu');

export default {
    init() {
        // Javascript that fires on all pages.
        menuLoaderBelowTablet();
    },

    finalize() {
        // Javascript that fires on all pages. after page specific JS is fires.
    }
};

const menuLoaderBelowTablet = () => {
    if (window.screen.width < 1025) {
        MenuOpener()
            .then(res => {
                const opener = new res.default();
                opener.buttonSelector = '.js-menu-open-button';
                opener.menuSelector = '.js-nav-menu';
                opener.init();
            });
    }
};
