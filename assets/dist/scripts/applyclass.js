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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/applyclass.js":
/***/ (function(module, exports) {

tinymce.PluginManager.add('apply_class', function (editor) {
	function showDialog() {
		var selectedNode = editor.selection.getNode();
		var selectedContent = editor.selection.getContent();
		editor.windowManager.open({
			title: editor.getLang('strings.applyclass'),
			body: {
				type: 'textbox',
				name: 'class',
				size: 40,
				label: editor.getLang('strings.classtitle')
			},
			onsubmit: function onsubmit(e) {
				if (selectedContent !== '') {
					editor.selection.setContent('<span class="' + e.data.class + '">' + selectedContent + '</span>');
				} else {
					editor.dom.addClass(selectedNode, e.data.class);
				}
			}
		});
	}
	editor.addButton('apply_class', {
		icon: 'icon dashicons-art',
		tooltip: editor.getLang('strings.applyclass'),
		onclick: showDialog
	});
	editor.addMenuItem('apply_class', {
		icon: 'icon dashicons-art',
		text: editor.getLang('strings.applyclass'),
		context: 'insert',
		onclick: showDialog
	});
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/src/scripts/applyclass.js");


/***/ })

/******/ });