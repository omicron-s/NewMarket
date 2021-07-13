/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/modals/modal-form/modal-form.js":
/*!*******************************************************!*\
  !*** ../views/blocks/modals/modal-form/modal-form.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.form .input').on('input', function () {
    $(this).removeClass('invalid');
  });
  $('.button[data-modal="form"]').on('click', function () {
    Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_0__["modalOpen"])(this);
  });
  $('.modal__button-close').on('click', function () {
    Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_0__["modalCloseFunc"])();
  });
});

/***/ }),

/***/ "../views/blocks/modals/modal-privacy/modal-privacy.js":
/*!*************************************************************!*\
  !*** ../views/blocks/modals/modal-privacy/modal-privacy.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.form__personal button').on('click', function () {
    Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_0__["modalOpen"])(this, true);
  });
});

/***/ }),

/***/ "../views/blocks/modals/modal-thx/modal-thx.js":
/*!*****************************************************!*\
  !*** ../views/blocks/modals/modal-thx/modal-thx.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "../../node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.form__submit').on('click', function (e) {
    var inputs = $(this).parent('form').find('.input'),
        inputArray = [];
    inputs.each(function (i) {
      if (!this.validity.valid) {
        $(this).addClass('invalid');
        inputArray[i] = false;
      } else {
        inputArray[i] = true;
      }
    });
    var formDone = Object.values(inputArray).every(function (val) {
      return val !== false;
    });

    if (formDone) {
      e.preventDefault();
      Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_2__["modalOpen"])(this);
    }
  });
  $('.input').on('invalid', function (e) {
    e.preventDefault();
  });
  $('.modal__button-close').on('click', function () {
    Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_2__["modalCloseFunc"])();
  });
});

/***/ }),

/***/ "../views/layouts/header/header.js":
/*!*****************************************!*\
  !*** ../views/layouts/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /* Появление меню по кнопке */
  $('.button-burger').on('click', function () {
    var expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $(this).toggleClass('open');
    $('.header .infoblock').toggleClass('open');
    $('html').toggleClass('header__open');
  });
});

/***/ }),

/***/ "../views/layouts/modal/modal.js":
/*!***************************************!*\
  !*** ../views/layouts/modal/modal.js ***!
  \***************************************/
/*! exports provided: modalClose, modalCloseFunc, modalOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalClose", function() { return modalClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCloseFunc", function() { return modalCloseFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
var modalClose = function modalClose() {
  //Отмена по кнопке "Закрыть" и по фону
  $('.modal__button, .modal__close').on('click', function () {
    modalCloseFunc();
  });
  $('.modal-overlay').on('click', function () {
    modalCloseFunc();
  }); //Отмена по Esc

  $(document).on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 27) {
      modalCloseFunc();
    }
  });
}; //Закрытие модалки

var modalCloseFunc = function modalCloseFunc() {
  var html = $('html');

  if (html[0].modals) {
    $('.modal-privacy').removeClass('modal-showed');
    html[0].modals = false;
  } else {
    // не забыть убрать .header
    $('body, .modal, .header').css('padding-right', 0);
    $('.modal, .modal-overlay, html').removeClass('modal-showed');
    $('.modal-form__hidden, .modal-form__visible').removeClass('form-done');
  }
}; //открытие модального окна

var modalOpen = function modalOpen(el) {
  var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var modalName = $(el).data('modal'),
      body = $('body').width();
  var scrollWidth = window.innerWidth - body;

  if (second) {
    var html = $('html');
    html[0].modals = true;
  } //Показ модалки


  $(".modal[data-modal=\"".concat(modalName, "\"]")).addClass('modal-showed'); //Фиксируем страницу

  $('html').addClass('modal-showed');

  if (scrollWidth > 0) {
    // не забыть убрать .header
    $('body, .modal, .header').css('padding-right', scrollWidth);
  }
};

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-visible/dist/focus-visible.min */ "../../node_modules/focus-visible/dist/focus-visible.min.js");
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_modals_modal_form_modal_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blocks/modals/modal-form/modal-form */ "../views/blocks/modals/modal-form/modal-form.js");
/* harmony import */ var _blocks_modals_modal_thx_modal_thx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/modals/modal-thx/modal-thx */ "../views/blocks/modals/modal-thx/modal-thx.js");
/* harmony import */ var _blocks_modals_modal_privacy_modal_privacy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/modals/modal-privacy/modal-privacy */ "../views/blocks/modals/modal-privacy/modal-privacy.js");
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @layouts/header/header */ "../views/layouts/header/header.js");
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");
/* полифил для :focus-visible */






$(function () {
  Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_5__["modalClose"])();
  Object(_blocks_modals_modal_privacy_modal_privacy__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_blocks_modals_modal_form_modal_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_blocks_modals_modal_thx_modal_thx__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_layouts_header_header__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map