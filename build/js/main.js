/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ios-vh-fix */ "./js/utils/ios-vh-fix.js");
/* harmony import */ var _modules_modals_init_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals/init-modals */ "./js/modules/modals/init-modals.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu/menu */ "./js/modules/menu/menu.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/map/map */ "./js/modules/map/map.js");
/* harmony import */ var _modules_scroll_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll/scroll */ "./js/modules/scroll/scroll.js");
/* harmony import */ var _modules_modals_validate_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modals/validate-form */ "./js/modules/modals/validate-form.js");





 // ---------------------------------

window.addEventListener('DOMContentLoaded', function () {
  // Utils
  // ---------------------------------
  Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__["iosVhFix"])(); // Modules
  // ---------------------------------

  Object(_modules_scroll_scroll__WEBPACK_IMPORTED_MODULE_4__["smoothScroll"])();
  Object(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__["showMenu"])();
  Object(_modules_modals_validate_form__WEBPACK_IMPORTED_MODULE_5__["validateForm"])(); // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана

  window.addEventListener('load', function () {
    Object(_modules_map_map__WEBPACK_IMPORTED_MODULE_3__["initMap"])();
    Object(_modules_modals_init_modals__WEBPACK_IMPORTED_MODULE_1__["initModals"])();
  });
}); // ---------------------------------
// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.
// привязывайте js не на классы, а на дата атрибуты (data-validate)
// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️
// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.
// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();
// используйте .closest(el)

/***/ }),

/***/ "./js/modules/map/map.js":
/*!*******************************!*\
  !*** ./js/modules/map/map.js ***!
  \*******************************/
/*! exports provided: initMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });
var initMap = function initMap() {
  var uluru = {
    lat: 59.938823968762776,
    lng: 30.323025941216045
  };
  var map = new window.google.maps.Map(document.querySelector('[data-map]'), {
    center: uluru,
    zoom: 16
  });
  var marker = new window.google.maps.Marker({
    position: uluru,
    icon: {
      url: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent('<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M15.364 15.5563L9 22L2.636 15.5563C1.37734 14.2819 0.520187 12.6581 0.172928 10.8905C-0.17433 9.12277 0.00390685 7.29051 0.685099 5.62539C1.36629 3.96027 2.51984 2.53707 3.99988 1.53576C5.47992 0.534448 7.21998 0 9 0C10.78 0 12.5201 0.534448 14.0001 1.53576C15.4802 2.53707 16.6337 3.96027 17.3149 5.62539C17.9961 7.29051 18.1743 9.12277 17.8271 10.8905C17.4798 12.6581 16.6227 14.2819 15.364 15.5563ZM9 11.1377C9.53044 11.1377 10.0391 10.9243 10.4142 10.5445C10.7893 10.1648 11 9.64969 11 9.11262C11 8.57554 10.7893 8.06047 10.4142 7.6807C10.0391 7.30093 9.53044 7.08757 9 7.08757C8.46957 7.08757 7.96086 7.30093 7.58579 7.6807C7.21072 8.06047 7 8.57554 7 9.11262C7 9.64969 7.21072 10.1648 7.58579 10.5445C7.96086 10.9243 8.46957 11.1377 9 11.1377Z" fill="#011C40"/>' + '</svg>'),
      size: new window.google.maps.Size(18, 22)
    },
    map: map
  });
  marker.setMap(map);
};



/***/ }),

/***/ "./js/modules/menu/menu.js":
/*!*********************************!*\
  !*** ./js/modules/menu/menu.js ***!
  \*********************************/
/*! exports provided: showMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMenu", function() { return showMenu; });
var showMenu = function showMenu() {
  var navMain = document.querySelector('[data-menu="menu"]');
  var navToggle = navMain.querySelector('[data-menu="toggle"]');
  navMain.classList.remove('navigation--no-js');
  navToggle.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (navMain.classList.contains('navigation--is-closed')) {
      navMain.classList.remove('navigation--is-closed');
      navMain.classList.add('navigation--is-opened');
    } else {
      navMain.classList.remove('navigation--is-opened');
      navMain.classList.add('navigation--is-closed');
    }
  });
};



/***/ }),

/***/ "./js/modules/modals/init-modals.js":
/*!******************************************!*\
  !*** ./js/modules/modals/init-modals.js ***!
  \******************************************/
/*! exports provided: modals, initModals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modals", function() { return modals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModals", function() { return initModals; });
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./js/modules/modals/modals.js");

var modals; // Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };
// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

var settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false
  }
};

var initModals = function initModals() {
  var modalElements = document.querySelectorAll('.modal');
  modalElements.forEach(function (el) {
    setTimeout(function () {
      el.classList.remove('modal--preload');
    }, 100);
  });
  modals = new _modals__WEBPACK_IMPORTED_MODULE_0__["Modals"](settings); // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда

  window.modals = modals;
};



/***/ }),

/***/ "./js/modules/modals/modals.js":
/*!*************************************!*\
  !*** ./js/modules/modals/modals.js ***!
  \*************************************/
/*! exports provided: Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* harmony import */ var _utils_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/scroll-lock */ "./js/utils/scroll-lock.js");
/* harmony import */ var _utils_focus_lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-lock */ "./js/utils/focus-lock.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Modals = /*#__PURE__*/function () {
  function Modals() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Modals);

    this._scrollLock = new _utils_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["ScrollLock"]();
    this._focusLock = new _utils_focus_lock__WEBPACK_IMPORTED_MODULE_1__["FocusLock"]();
    this._modalOpenElements = document.querySelectorAll('[data-open-modal]');
    this._openedModalElement = null;
    this._modalName = null;
    this._enableScrolling = true;
    this._settingKey = 'default';
    this._settings = settings;
    this._preventDefault = this._settings[this._settingKey].preventDefault;
    this._stopPlay = this._settings[this._settingKey].stopPlay;
    this._lockFocus = this._settings[this._settingKey].lockFocus;
    this._startFocus = this._settings[this._settingKey].startFocus;
    this._focusBack = this._settings[this._settingKey].focusBack;
    this._eventTimeout = this._settings[this._settingKey].eventTimeout;
    this._openCallback = this._settings[this._settingKey].openCallback;
    this._closeCallback = this._settings[this._settingKey].closeCallback;
    this._documentKeydownHandler = this._documentKeydownHandler.bind(this);
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._modalClickHandler = this._modalClickHandler.bind(this);

    this._init();
  }

  _createClass(Modals, [{
    key: "_init",
    value: function _init() {
      if (this._modalOpenElements.length) {
        document.addEventListener('click', this._documentClickHandler);
      }
    }
  }, {
    key: "_setSettings",
    value: function _setSettings() {
      var settingKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._settingKey;

      if (!this._settings[settingKey]) {
        return;
      }

      this._preventDefault = typeof this._settings[settingKey].preventDefault === 'boolean' ? this._settings[settingKey].preventDefault : this._settings[this._settingKey].preventDefault;
      this._stopPlay = typeof this._settings[settingKey].stopPlay === 'boolean' ? this._settings[settingKey].stopPlay : this._settings[this._settingKey].stopPlay;
      this._lockFocus = typeof this._settings[settingKey].lockFocus === 'boolean' ? this._settings[settingKey].lockFocus : this._settings[this._settingKey].lockFocus;
      this._startFocus = typeof this._settings[settingKey].startFocus === 'boolean' ? this._settings[settingKey].startFocus : this._settings[this._settingKey].startFocus;
      this._focusBack = typeof this._settings[settingKey].lockFocus === 'boolean' ? this._settings[settingKey].focusBack : this._settings[this._settingKey].focusBack;
      this._eventTimeout = typeof this._settings[settingKey].eventTimeout === 'number' ? this._settings[settingKey].eventTimeout : this._settings[this._settingKey].eventTimeout;
      this._openCallback = this._settings[settingKey].openCallback || this._settings[this._settingKey].openCallback;
      this._closeCallback = this._settings[settingKey].closeCallback || this._settings[this._settingKey].closeCallback;
    }
  }, {
    key: "_documentClickHandler",
    value: function _documentClickHandler(evt) {
      var target = evt.target;

      if (!target.closest('[data-open-modal]')) {
        return;
      }

      evt.preventDefault();
      this._modalName = target.closest('[data-open-modal]').dataset.openModal;

      if (!this._modalName) {
        return;
      }

      this.open();
    }
  }, {
    key: "_documentKeydownHandler",
    value: function _documentKeydownHandler(evt) {
      var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

      if (isEscKey) {
        evt.preventDefault();
        this.close(document.querySelector('.modal.is-active').dataset.modal);
      }
    }
  }, {
    key: "_modalClickHandler",
    value: function _modalClickHandler(evt) {
      var target = evt.target;

      if (!target.closest('[data-close-modal]')) {
        return;
      }

      this.close(target.closest('[data-modal]').dataset.modal);
    }
  }, {
    key: "_addListeners",
    value: function _addListeners(modal) {
      modal.addEventListener('click', this._modalClickHandler);
      document.addEventListener('keydown', this._documentKeydownHandler);
    }
  }, {
    key: "_removeListeners",
    value: function _removeListeners(modal) {
      modal.removeEventListener('click', this._modalClickHandler);
      document.removeEventListener('keydown', this._documentKeydownHandler);
    }
  }, {
    key: "_stopInteractive",
    value: function _stopInteractive(modal) {
      if (this._stopPlay) {
        modal.querySelectorAll('video, audio').forEach(function (el) {
          return el.pause();
        });
        modal.querySelectorAll('[data-iframe]').forEach(function (el) {
          el.querySelector('iframe').contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', '*');
        });
      }
    }
  }, {
    key: "_autoPlay",
    value: function _autoPlay(modal) {
      modal.querySelectorAll('[data-iframe]').forEach(function (el) {
        var autoPlay = el.closest('[data-auto-play]');

        if (autoPlay) {
          el.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      var _this = this;

      var modalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._modalName;
      var modal = document.querySelector("[data-modal=\"".concat(modalName, "\"]"));

      if (!modal || modal.classList.contains('is-active')) {
        return;
      }

      document.removeEventListener('click', this._documentClickHandler);
      this._openedModalElement = document.querySelector('.modal.is-active');

      if (this._openedModalElement) {
        this._enableScrolling = false;
        this.close(this._openedModalElement.dataset.modal);
      }

      this._setSettings(modalName);

      modal.classList.add('is-active');

      if (!this._openedModalElement) {
        this._scrollLock.disableScrolling();
      }

      if (this._openCallback) {
        this._openCallback();
      }

      if (this._lockFocus) {
        this._focusLock.lock('.modal.is-active', this._startFocus);
      }

      setTimeout(function () {
        _this._addListeners(modal);

        _this._autoPlay(modal);

        document.addEventListener('click', _this._documentClickHandler);
      }, this._eventTimeout);
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      var modalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._modalName;
      var modal = document.querySelector("[data-modal=\"".concat(modalName, "\"]"));
      document.removeEventListener('click', this._documentClickHandler);

      if (!modal || !modal.classList.contains('is-active')) {
        return;
      }

      if (this._lockFocus) {
        this._focusLock.unlock(this._focusBack);
      }

      modal.classList.remove('is-active');

      this._removeListeners(modal);

      this._stopInteractive(modal);

      if (this._closeCallback) {
        this._closeCallback();
      }

      if (this._enableScrolling) {
        setTimeout(function () {
          _this2._scrollLock.enableScrolling();
        }, this._eventTimeout);
      }

      setTimeout(function () {
        document.addEventListener('click', _this2._documentClickHandler);
      }, this._eventTimeout);

      this._setSettings('default');

      this._enableScrolling = true;
    }
  }]);

  return Modals;
}();

/***/ }),

/***/ "./js/modules/modals/validate-form.js":
/*!********************************************!*\
  !*** ./js/modules/modals/validate-form.js ***!
  \********************************************/
/*! exports provided: validateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateForm", function() { return validateForm; });
var validateForm = function validateForm() {
  var nameField = document.querySelector('[data-input="name-field"]');
  var phoneField = document.querySelector('[data-input="phone-field"]');
  var emailField = document.querySelector('[data-input="email-field"]');
  var checkboxField = document.querySelector('[data-input="checkbox"]');
  var submitForm = document.querySelector('[data-form="submit"]');
  nameField.addEventListener('input', function () {
    var regName = /^[А-ЯЁа-яё]+$/;
    var invalidMessage = '';
    nameField.setCustomValidity('');
    var name = nameField.value.trim();

    if (name === '') {
      invalidMessage = 'Name is required';
    } else if (!regName.test(name)) {
      invalidMessage = 'Invalid name';
    }

    if (invalidMessage.length > 0) {
      nameField.setCustomValidity(invalidMessage);
    }

    nameField.reportValidity();
  });
  phoneField.addEventListener('input', function () {
    var regPhone = /^\+?\d{11}$/;
    var invalidMessage = '';
    phoneField.setCustomValidity('');
    var phone = phoneField.value.trim();

    if (phone === '') {
      invalidMessage = 'Phone is required';
    } else if (!regPhone.test(phone)) {
      invalidMessage = 'Invalid phone';
    }

    if (invalidMessage.length > 0) {
      phoneField.setCustomValidity(invalidMessage);
    }

    phoneField.reportValidity();
  });
  emailField.addEventListener('input', function () {
    var regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var invalidMessage = '';
    emailField.setCustomValidity('');
    var email = emailField.value.trim();

    if (email === '') {
      invalidMessage = 'Email is required';
    } else if (!regEmail.test(email)) {
      invalidMessage = 'Invalid email';
    }

    if (invalidMessage.length > 0) {
      emailField.setCustomValidity(invalidMessage);
    }

    emailField.reportValidity();
  });
  checkboxField.addEventListener('change', function () {
    var invalidMessage = '';
    checkboxField.setCustomValidity('');

    if (!checkboxField.checked) {
      invalidMessage = 'Consent required';
    }

    if (invalidMessage.length > 0) {
      checkboxField.setCustomValidity(invalidMessage);
    }

    checkboxField.reportValidity();
  });
  submitForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (nameField.value === '') {
      nameField.setCustomValidity('Name is required');
      nameField.reportValidity();
      nameField.focus();
    } else if (phoneField.value === '') {
      phoneField.setCustomValidity('Phone is required');
      phoneField.reportValidity();
      phoneField.focus();
    }
  });
};



/***/ }),

/***/ "./js/modules/scroll/scroll.js":
/*!*************************************!*\
  !*** ./js/modules/scroll/scroll.js ***!
  \*************************************/
/*! exports provided: smoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var smoothScroll = function smoothScroll() {
  var anchorLinks = document.querySelectorAll('[data-link]');

  var _iterator = _createForOfIteratorHelper(anchorLinks),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (evt) {
        evt.preventDefault();
        var anchorHref = anchor.getAttribute('href').substring(1);
        document.getElementById(anchorHref).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};



/***/ }),

/***/ "./js/utils/focus-lock.js":
/*!********************************!*\
  !*** ./js/utils/focus-lock.js ***!
  \********************************/
/*! exports provided: FocusLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusLock", function() { return FocusLock; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SELECTORS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
var FocusLock = /*#__PURE__*/function () {
  function FocusLock() {
    _classCallCheck(this, FocusLock);

    this._lockedSelector = null;
    this._focusableElements = null;
    this._endElement = null;
    this._selectors = SELECTORS;
    this._documentKeydownHandler = this._documentKeydownHandler.bind(this);
  }

  _createClass(FocusLock, [{
    key: "_documentKeydownHandler",
    value: function _documentKeydownHandler(evt) {
      var activeElement = document.activeElement;

      if (evt.key === 'Tab') {
        if (!this._focusableElements.length) {
          evt.preventDefault();
          activeElement.blur();
          return;
        }

        if (this._focusableElements.length === 1) {
          evt.preventDefault();

          this._focusableElements[0].focus();

          return;
        }

        if (this._focusableElements.length > 1 && !activeElement.closest(this._lockedSelector)) {
          evt.preventDefault();

          this._focusableElements[0].focus();

          return;
        }
      }

      if (evt.key === 'Tab' && !evt.shiftKey && activeElement === this._focusableElements[this._focusableElements.length - 1]) {
        evt.preventDefault();

        this._focusableElements[0].focus();
      }

      if (evt.key === 'Tab' && evt.shiftKey && activeElement === this._focusableElements[0]) {
        evt.preventDefault();

        this._focusableElements[this._focusableElements.length - 1].focus();
      }
    }
  }, {
    key: "lock",
    value: function lock(lockedSelector) {
      var startFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.unlock();
      this._lockedSelector = lockedSelector;
      var lockedElement = document.querySelector(this._lockedSelector);

      if (!lockedElement) {
        return;
      }

      this._focusableElements = lockedElement.querySelectorAll(this._selectors);
      this._endElement = document.activeElement;

      var startElement = lockedElement.querySelector('[data-focus]') || this._focusableElements[0];

      if (this._endElement) {
        this._endElement.blur();
      }

      if (startElement && startFocus) {
        startElement.focus();
      }

      document.addEventListener('keydown', this._documentKeydownHandler);
    }
  }, {
    key: "unlock",
    value: function unlock() {
      var returnFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this._endElement && returnFocus) {
        this._endElement.focus();
      }

      this._lockedSelector = null;
      this._focusableElements = null;
      this._endElement = null;
      document.removeEventListener('keydown', this._documentKeydownHandler);
    }
  }]);

  return FocusLock;
}();
window.focusLock = new FocusLock();

/***/ }),

/***/ "./js/utils/ios-checker.js":
/*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosChecker", function() { return iosChecker; });
var iosChecker = function iosChecker() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
};

/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosVhFix", function() { return iosVhFix; });
/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ "./js/utils/ios-checker.js");


var iosVhFix = function iosVhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    if (Object(_ios_checker__WEBPACK_IMPORTED_MODULE_0__["iosChecker"])()) {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      window.addEventListener('resize', function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      });
    }
  }
};



/***/ }),

/***/ "./js/utils/scroll-lock.js":
/*!*********************************!*\
  !*** ./js/utils/scroll-lock.js ***!
  \*********************************/
/*! exports provided: ScrollLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollLock", function() { return ScrollLock; });
/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ "./js/utils/ios-checker.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var ScrollLock = /*#__PURE__*/function () {
  function ScrollLock() {
    _classCallCheck(this, ScrollLock);

    this._iosChecker = _ios_checker__WEBPACK_IMPORTED_MODULE_0__["iosChecker"];
    this._lockClass = this._iosChecker() ? 'scroll-lock-ios' : 'scroll-lock';
    this._scrollTop = null;
    this._fixedBlockElements = document.querySelectorAll('[data-fix-block]');
  }

  _createClass(ScrollLock, [{
    key: "_getScrollbarWidth",
    value: function _getScrollbarWidth() {
      return window.innerWidth - document.documentElement.clientWidth;
    }
  }, {
    key: "_getBodyScrollTop",
    value: function _getBodyScrollTop() {
      return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || document.body && document.body.scrollTop;
    }
  }, {
    key: "disableScrolling",
    value: function disableScrolling() {
      var _this = this;

      this._scrollTop = document.body.dataset.scroll = document.body.dataset.scroll ? document.body.dataset.scroll : this._getBodyScrollTop();

      if (this._getScrollbarWidth()) {
        document.body.style.paddingRight = "".concat(this._getScrollbarWidth(), "px");

        this._fixedBlockElements.forEach(function (block) {
          block.style.paddingRight = "".concat(_this._getScrollbarWidth(), "px");
        });
      }

      document.body.style.top = "-".concat(this._scrollTop, "px");
      document.body.classList.add(this._lockClass);
    }
  }, {
    key: "enableScrolling",
    value: function enableScrolling() {
      document.body.classList.remove(this._lockClass);
      window.scrollTo(0, +document.body.dataset.scroll);
      document.body.style.paddingRight = null;
      document.body.style.top = null;

      this._fixedBlockElements.forEach(function (block) {
        block.style.paddingRight = null;
      });

      document.body.removeAttribute('data-scroll');
      this._scrollTop = null;
    }
  }]);

  return ScrollLock;
}();
window.scrollLock = new ScrollLock();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map