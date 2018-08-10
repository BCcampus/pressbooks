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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/small-menu.js":
/***/ (function(module, exports) {

/**
 * Handles toggling the sidebar menu for small screens.
 */
jQuery(document).ready(function ($) {
	var masthead = $('#catalog-sidebar');
	var timeout = false;

	$.fn.smallMenu = function () {
		masthead.find('.sidebar-inner-wrap').removeClass('main-navigation').addClass('main-small-navigation');
		masthead.find('.tag-menu').removeClass('assistive-text').addClass('menu-toggle');

		$('.menu-toggle').unbind('click').click(function () {
			masthead.find('.main-small-navigation').slideToggle();
			$(this).toggleClass('toggled-on');
		});
	};

	// Check viewport width on first load.
	if ($(window).width() < 600) $.fn.smallMenu();

	// Check viewport width when user resizes the browser window.
	$(window).resize(function () {
		var browserWidth = $(window).width();

		if (timeout !== false) clearTimeout(timeout);

		timeout = setTimeout(function () {
			if (browserWidth < 600) {
				$.fn.smallMenu();
			} else {
				masthead.find('.sidebar-inner-wrap').removeClass('main-small-navigation').addClass('main-navigation');
				masthead.find('.tag-menu').removeClass('menu-toggle').addClass('assistive-text');
				masthead.find('.main-navigation').removeAttr('style');
			}
		}, 200);
	});
});

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/src/scripts/small-menu.js");


/***/ })

/******/ });