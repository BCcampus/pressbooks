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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/glossary.js":
/***/ (function(module, exports) {

(function () {

	tinymce.create('tinymce.plugins.glossary', {
		init: function init(ed, url) {

			// get and clean up the data
			var json_str = PB_GlossaryToken.glossary_terms.replace(/&quot;/g, '"');
			var terms = jQuery.parseJSON(json_str);

			// get the keys
			var keys = Object.keys(terms);

			// get values for the listbox
			function getListTerms() {
				var terms = [];

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var i = _step.value;

						var termList = {};
						termList['text'] = i;
						termList['value'] = i;
						terms.push(termList);
					}

					// sort the array of objects alphabetically
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				terms.sort(function (a, b) {
					return a.text > b.text ? 1 : b.text > a.text ? -1 : 0;
				});

				return terms;
			}

			// compares the term to an existing key for a match, converts both to lowercase to be case insensitive
			function termCompare(term) {
				var match = keys.filter(function (item) {
					return item.toLowerCase().indexOf(term.toLowerCase().trim()) !== -1;
				});
				return match;
			}

			// checks if the term exists, returns the value or false if not found
			function termMatch(termName) {

				var matchResults = termCompare(termName);

				if (typeof matchResults[0] === 'undefined') {
					return false;
				} else {
					return matchResults[0];
				}
			}

			// returns the ID of a term in the glossary
			function termID(termValue) {

				var matches = termCompare(termValue);

				if (typeof matches[0] === 'undefined') {
					return '';
				} else {
					// get the id for the match, returns an empty array if none found
					var matchingID = matches.map(function (key) {
						return terms[key]['id'];
					});

					// check if matchingID array does not exist, is not an array, or is empty
					if (Array.isArray(matchingID) || matchingID.length) {
						return matchingID[0];
					}
				}
			}

			// This button adds the glossary short-code that generates a list of all terms
			ed.addButton('glossary_all', {
				title: PB_GlossaryToken.glossary_all_title,
				text: 'Glossary',
				icon: false,
				onclick: function onclick() {
					ed.selection.setContent('[pb_glossary]');
				}
			});

			// This button adds the single glossary term short-code with the corresponding term id as an attribute
			ed.addButton('glossary', {
				title: PB_GlossaryToken.glossary_title,
				text: 'GL',
				icon: false,
				onclick: function onclick() {
					// get the highlighted selection
					var mySelection = ed.selection.getContent();
					// placeholder for our default listbox value
					var listValue = '';
					// placeholder for our term doesn't exist message
					var termExists = '';

					// if the selection matches an existing term, let's set it so we can use it as our default listbox value
					if (termMatch(mySelection) !== false) {
						listValue = termMatch(mySelection);
					} else {
						termExists = 'Glossary term <b>"' + mySelection + '"</b> not found.<br />Please create it, or select a term from the list below to use that definition:';
					}

					// display the UI
					tinymce.activeEditor.windowManager.open({

						title: 'Glossary terms',
						width: 500,
						height: 100,

						buttons: [{
							text: 'Insert',
							subtype: 'primary',
							onclick: 'submit'
						}, {
							text: 'Close',
							onclick: 'close'
						}],

						body: [{
							type: 'container',
							name: 'container',
							html: termExists
						}, {
							type: 'listbox',
							name: 'terms',
							label: 'Select a Term',
							values: getListTerms(),
							value: listValue
						}],
						// insert the short-code with the associated term ID as an attribute
						onsubmit: function onsubmit(e) {
							if (mySelection !== '') {
								// if there's a highlighted selection, use that as the text
								ed.selection.setContent('[pb_glossary id="' + termID(e.data.terms) + '"]' + mySelection + '[/pb_glossary]');
							} else {
								// otherwise, use the value of the listbox as the text
								ed.selection.setContent('[pb_glossary id="' + termID(e.data.terms) + '"]' + e.data.terms + '[/pb_glossary]');
							}
						}
					});

					// insert the short-code with the id as an attribute
				}
			});
		},
		createControl: function createControl(n, cm) {
			return null;
		}
	});
	tinymce.PluginManager.add('glossary_all', tinymce.plugins.glossary.all);
	tinymce.PluginManager.add('glossary', tinymce.plugins.glossary);
})();

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/src/scripts/glossary.js");


/***/ })

/******/ });