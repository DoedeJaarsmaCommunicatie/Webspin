export default class MenuOpener {
    constructor() {
        this.menuClass = undefined;
        this.menuButton = undefined;
    }

    init() {
        this.bodyCloseListener();
        this.buttonOpenListener();
    }

    findOpenButton() {
        return document.querySelector(this.menuButton);
    }
    findMenu() {
        return document.querySelector(this.menuClass);
    }

    bodyCloseListener() {
        const body = document.body;
        const menu = this.findMenu();
        const button = this.findOpenButton();

        body.addEventListener('click', (e) => {
            if (e.target === menu ||
                menu.contains(e.target) ||
                e.target === button ||
                button.contains(e.target)) {
                return;
            }

            menu.classList.remove('active');
        });
    }

    buttonOpenListener() {
        const button = this.findOpenButton();
        const menu = this.findMenu();

        button.addEventListener('click', () => {
            menu.classList.add('active');
        });
    }

    set menuSelector(name) {
        this.menuClass = name;
    }

    set buttonSelector(name) {
        this.menuButton = name;
    }
}
