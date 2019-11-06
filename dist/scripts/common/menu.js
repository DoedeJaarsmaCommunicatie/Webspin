(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dist/scripts/common/menu"],{

/***/ "./assets/scripts/routes/Common/Menu.js":
/*!**********************************************!*\
  !*** ./assets/scripts/routes/Common/Menu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuOpener; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuOpener =
/*#__PURE__*/
function () {
  function MenuOpener() {
    _classCallCheck(this, MenuOpener);

    this.menuClass = undefined;
    this.menuButton = undefined;
    this.menu = undefined;
    this.button = undefined;
    this.ACTIVE_CLASS = 'active';
  }

  _createClass(MenuOpener, [{
    key: "init",
    value: function init() {
      this.fluidSetGetMenu();
      this.bodyCloseListener();
      this.buttonOpenListener();
    }
  }, {
    key: "fluidSetGetMenu",
    value: function fluidSetGetMenu() {
      if (this.menu) {
        return this.menu;
      }

      this.menu = document.querySelector(this.menuSelector);

      if (this.menu) {
        return this.menu;
      }

      throw new Error('Menu not found');
    }
  }, {
    key: "fluidGetSetButton",
    value: function fluidGetSetButton() {
      if (this.button) {
        return this.button;
      }

      this.button = document.querySelector(this.buttonSelector);

      if (this.button) {
        return this.button;
      }

      throw new Error('Button not found');
    }
  }, {
    key: "bodyCloseListener",
    value: function bodyCloseListener() {
      var _this = this;

      var body = document.body;
      var menu = this.fluidSetGetMenu();
      var button = this.fluidGetSetButton();
      body.addEventListener('click', function (e) {
        if (e.target === menu || menu.contains(e.target) || e.target === button || button.contains(e.target)) {
          return;
        }

        _this.removeMenuActive();
      });
    }
  }, {
    key: "buttonOpenListener",
    value: function buttonOpenListener() {
      var _this2 = this;

      var button = this.fluidGetSetButton();
      button.addEventListener('click', function () {
        return _this2.addMenuActive();
      });
    }
  }, {
    key: "removeMenuActive",
    value: function removeMenuActive() {
      var menu = this.fluidSetGetMenu();
      menu.classList.remove(this.ACTIVE_CLASS);
    }
  }, {
    key: "addMenuActive",
    value: function addMenuActive() {
      var menu = this.fluidSetGetMenu();
      menu.classList.add(this.ACTIVE_CLASS);
    }
  }, {
    key: "menuSelector",
    get: function get() {
      if (!this.menuClass) {
        this.menuSelector = '.js-menu';
      }

      return this.menuClass;
    },
    set: function set(name) {
      this.menuClass = name;
    }
  }, {
    key: "buttonSelector",
    get: function get() {
      if (!this.menuButton) {
        this.buttonSelector = '.js-menu-button';
      }

      return this.menuButton;
    },
    set: function set(name) {
      this.menuButton = name;
    }
  }]);

  return MenuOpener;
}();



/***/ })

}]);