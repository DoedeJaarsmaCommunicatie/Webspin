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
  }

  _createClass(MenuOpener, [{
    key: "init",
    value: function init() {
      this.bodyCloseListener();
      this.buttonOpenListener();
    }
  }, {
    key: "findOpenButton",
    value: function findOpenButton() {
      return document.querySelector(this.menuButton);
    }
  }, {
    key: "findMenu",
    value: function findMenu() {
      return document.querySelector(this.menuClass);
    }
  }, {
    key: "bodyCloseListener",
    value: function bodyCloseListener() {
      var body = document.body;
      var menu = this.findMenu();
      var button = this.findOpenButton();
      body.addEventListener('click', function (e) {
        if (e.target === menu || menu.contains(e.target) || e.target === button || button.contains(e.target)) {
          return;
        }

        menu.classList.remove('active');
      });
    }
  }, {
    key: "buttonOpenListener",
    value: function buttonOpenListener() {
      var button = this.findOpenButton();
      var menu = this.findMenu();
      button.addEventListener('click', function () {
        menu.classList.add('active');
      });
    }
  }, {
    key: "menuSelector",
    set: function set(name) {
      this.menuClass = name;
    }
  }, {
    key: "buttonSelector",
    set: function set(name) {
      this.menuButton = name;
    }
  }]);

  return MenuOpener;
}();



/***/ })

}]);