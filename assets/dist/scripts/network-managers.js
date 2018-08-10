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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/network-managers.js":
/***/ (function(module, exports) {

jQuery(function ($) {
	$(document).ready(function () {
		$('div.row-actions .restrict a, div.row-actions .unrestrict a').on('click', function () {
			var link = $(this);
			var parent = link.parent('span');
			var parent_row = parent.parent('div').parent('td').parent('tr');
			var admin_id = parent_row.attr('id');
			var restrict_string = link.attr('data-restrict-text');
			var unrestrict_string = link.attr('data-unrestrict-text');
			var change_status_to = link.attr('data-restrict');
			$.ajax({
				url: ajaxurl,
				type: 'POST',
				data: {
					action: 'pb_update_admin_status',
					admin_id: admin_id,
					status: change_status_to,
					_ajax_nonce: PB_NetworkManagerToken.networkManagerNonce
				},
				success: function success() {
					parent_row.toggleClass('restricted');
					if (change_status_to === '0') {
						parent.removeClass('unrestrict').addClass('restrict');
						link.attr('data-restrict', '1');
						link.text(restrict_string);
					} else if (change_status_to === '1') {
						parent.removeClass('restrict').addClass('unrestrict');
						link.attr('data-restrict', '0');
						link.text(unrestrict_string);
					}
				},
				error: function error(jqXHR, textStatus, errorThrown) {
					alert(jqXHR + ' :: ' + textStatus + ' :: ' + errorThrown);
				}
			});
		});
	});
});

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/src/scripts/network-managers.js");


/***/ })

/******/ });