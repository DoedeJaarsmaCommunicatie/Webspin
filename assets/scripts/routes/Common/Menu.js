export default class MenuOpener {
    constructor() {
        this.menuClass = undefined;
        this.menuButton = undefined;
        this.menu = undefined;
        this.button = undefined;
        this.ACTIVE_CLASS = 'active';
    }

    init() {
        this.fluidSetGetMenu();
        this.bodyCloseListener();
        this.buttonOpenListener();
    }

    fluidSetGetMenu() {
        if(this.menu) {
            return this.menu;
        }

        this.menu = document.querySelector(this.menuSelector);

        if (this.menu) {
            return this.menu;
        }

        throw new Error('Menu not found');
    }

    fluidGetSetButton() {
        if (this.button) {
            return this.button;
        }

        this.button = document.querySelector(this.buttonSelector);

        if (this.button) {
            return this.button;
        }

        throw new Error('Button not found');
    }

    bodyCloseListener() {
        const body = document.body;
        const menu = this.fluidSetGetMenu();
        const button = this.fluidGetSetButton();

        body.addEventListener('click', (e) => {
            if (e.target === menu ||
                menu.contains(e.target) ||
                e.target === button ||
                button.contains(e.target)) {
                return;
            }

            this.removeMenuActive();
        });
    }

    buttonOpenListener() {
        const button = this.fluidGetSetButton();
        button.addEventListener('click', () => this.addMenuActive());
    }

    removeMenuActive() {
        const menu = this.fluidSetGetMenu();
        menu.classList.remove(this.ACTIVE_CLASS);
    }

    addMenuActive() {
        const menu = this.fluidSetGetMenu();
        menu.classList.add(this.ACTIVE_CLASS);
    }

    get menuSelector() {
        if (!this.menuClass) {
            this.menuSelector = '.js-menu';
        }
        return this.menuClass;
    }

    set menuSelector(name) {
        this.menuClass = name;
    }

    get buttonSelector() {
        if (!this.menuButton) {
            this.buttonSelector = '.js-menu-button';
        }
        return this.menuButton;
    }

    set buttonSelector(name) {
        this.menuButton = name;
    }
}
