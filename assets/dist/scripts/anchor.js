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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/anchor.js":
/***/ (function(module, exports) {

/**
 * plugin.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('anchor', function (editor) {
	function showDialog() {
		var selectedNode = editor.selection.getNode();
		editor.windowManager.open({
			title: 'Anchor',
			body: {
				type: 'textbox',
				name: 'name',
				size: 40,
				label: 'Name',
				value: selectedNode.name || selectedNode.id
			},
			onsubmit: function onsubmit(e) {
				editor.execCommand('mceInsertContent', false, editor.dom.createHTML('a', { id: e.data.name }));
			}
		});
	}
	editor.addButton('anchor', {
		icon: 'anchor',
		tooltip: 'Anchor',
		onclick: showDialog,
		stateSelector: 'a:not([href])'
	});
	editor.addMenuItem('anchor', {
		icon: 'anchor',
		text: 'Anchor',
		context: 'insert',
		onclick: showDialog
	});
});

/***/ }),

/***/ "./assets/src/styles/catalog.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/cloner.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/colors-pb.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/covergenerator.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/export.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/login.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/metadata.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/network-managers.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/organize.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/pressbooks.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/search-and-replace.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/select2.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/style-catalog.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./assets/src/styles/theme-options.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./assets/src/scripts/anchor.js");
__webpack_require__("./assets/src/styles/catalog.scss");
__webpack_require__("./assets/src/styles/colors-pb.scss");
__webpack_require__("./assets/src/styles/covergenerator.scss");
__webpack_require__("./assets/src/styles/cloner.scss");
__webpack_require__("./assets/src/styles/export.scss");
__webpack_require__("./assets/src/styles/login.scss");
__webpack_require__("./assets/src/styles/metadata.scss");
__webpack_require__("./assets/src/styles/network-managers.scss");
__webpack_require__("./assets/src/styles/organize.scss");
__webpack_require__("./assets/src/styles/pressbooks.scss");
__webpack_require__("./assets/src/styles/search-and-replace.scss");
__webpack_require__("./assets/src/styles/select2.scss");
__webpack_require__("./assets/src/styles/style-catalog.scss");
module.exports = __webpack_require__("./assets/src/styles/theme-options.scss");


/***/ })

/******/ });