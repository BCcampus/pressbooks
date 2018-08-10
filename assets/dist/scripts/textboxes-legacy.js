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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/textboxes-legacy.js":
/***/ (function(module, exports) {

/**
 * textboxes.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

tinymce.PluginManager.add('textboxes', function (editor) {
	function showDialog() {
		var selectedNode = editor.selection.getNode();

		editor.windowManager.open({
			title: editor.getLang('strings.customtextbox'),
			body: {
				type: 'textbox',
				name: 'className',
				size: 40,
				label: editor.getLang('strings.classtitle'),
				value: selectedNode.name || selectedNode.id
			},
			onsubmit: function onsubmit(e) {
				editor.execCommand('mceReplaceContent', false, '<div class="textbox ' + e.data.className + '">{$selection}</div>');
			}
		});
	}

	editor.addButton('textboxes', {
		type: 'menubutton',
		text: editor.getLang('strings.textboxes'),
		icon: false,
		menu: [{
			text: editor.getLang('strings.standard'),
			onclick: function onclick() {
				var selection = editor.selection.getContent();
				if (selection !== '') {
					editor.execCommand('mceReplaceContent', false, '<div class="textbox">' + selection + '</div><p></p>');
				} else {
					editor.execCommand('mceInsertContent', 0, '<div class="textbox">' + editor.getLang('strings.standardplaceholder') + '</div><p></p>');
				}
			}
		}, {
			text: editor.getLang('strings.shaded'),
			onclick: function onclick() {
				var selection = editor.selection.getContent();
				if (selection !== '') {
					editor.execCommand('mceReplaceContent', false, '<div class="textbox shaded">' + selection + '</div><p></p>');
				} else {
					editor.execCommand('mceInsertContent', 0, '<div class="textbox shaded">' + editor.getLang('strings.standardplaceholder') + '</div><p></p>');
				}
			}
		}, {
			text: editor.getLang('strings.learningobjectives'),
			onclick: function onclick() {
				var selection = editor.selection.getContent();
				if (selection !== '') {
					editor.execCommand('mceReplaceContent', false, '<div class="textbox learning-objectives"><h3 itemprop="educationalUse">' + editor.getLang('strings.learningobjectives') + '</h3>\n' + selection + '</div><p></p>');
				} else {
					editor.execCommand('mceInsertContent', 0, '<div class="textbox learning-objectives"><h3 itemprop="educationalUse">' + editor.getLang('strings.learningobjectives') + '</h3>\n<p>' + editor.getLang('strings.learningobjectivesplaceholder') + '</p><ul><li>' + editor.getLang('strings.first') + '</li><li>' + editor.getLang('strings.second') + '</li></ul></div><p></p>');
				}
			}
		}, {
			text: editor.getLang('strings.keytakeaways'),
			onclick: function onclick() {
				var selection = editor.selection.getContent();
				if (selection !== '') {
					editor.execCommand('mceReplaceContent', false, '<div class="textbox key-takeaways"><h3 itemprop="educationalUse">' + editor.getLang('strings.keytakeaways') + '</h3>\n' + selection + '</div><p></p>');
				} else {
					editor.execCommand('mceInsertContent', 0, '<div class="textbox key-takeaways"><h3 itemprop="educationalUse">' + editor.getLang('strings.keytakeaways') + '</h3>\n<p>' + editor.getLang('strings.keytakeawaysplaceholder') + '</p><ul><li>' + editor.getLang('strings.first') + '</li><li>' + editor.getLang('strings.second') + '</li></ul></div><p></p>');
				}
			}
		}, {
			text: editor.getLang('strings.exercises'),
			onclick: function onclick() {
				var selection = editor.selection.getContent();
				if (selection !== '') {
					editor.execCommand('mceReplaceContent', false, '<div class="textbox exercises"><h3 itemprop="educationalUse">' + editor.getLang('strings.exercises') + '</h3>\n' + selection + '</div><p></p>');
				} else {
					editor.execCommand('mceInsertContent', 0, '<div class="textbox exercises"><h3 itemprop="educationalUse">' + editor.getLang('strings.exercises') + '</h3>\n<p>' + editor.getLang('strings.exercisesplaceholder') + '</p><ul><li>' + editor.getLang('strings.first') + '</li><li>' + editor.getLang('strings.second') + '</li></ul></div><p></p>');
				}
			}
		}, {
			text: editor.getLang('strings.examples'),
			onclick: function onclick() {
				var selection = editor.selection.getContent();
				if (selection !== '') {
					editor.execCommand('mceReplaceContent', false, '<div class="textbox examples"><h3 itemprop="educationalUse">' + editor.getLang('strings.examples') + '</h3>\n' + selection + '</div><p></p>');
				} else {
					editor.execCommand('mceInsertContent', 0, '<div class="textbox examples"><h3 itemprop="educationalUse">' + editor.getLang('strings.examples') + '</h3>\n<p>' + editor.getLang('strings.examplesplaceholder') + '</p><ul><li>' + editor.getLang('strings.first') + '</li><li>' + editor.getLang('strings.second') + '</li></ul></div><p></p>');
				}
			}
		}, {
			text: editor.getLang('strings.customellipses'),
			onclick: function onclick() {
				showDialog();
			}
		}]
	});
});

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/src/scripts/textboxes-legacy.js");


/***/ })

/******/ });