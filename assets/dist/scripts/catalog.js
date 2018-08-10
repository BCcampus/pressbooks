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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/catalog.js":
/***/ (function(module, exports) {

jQuery(function ($) {
	var $container = $('#catalog-content');
	$container.isotope({
		itemSelector: '.mix',
		layoutMode: 'fitRows'
	});
	$('.mix').matchHeight({});
	$.fn.matchHeight._afterUpdate = function (event, groups) {
		$container.isotope('layout');
	};
	$('.filter-group-1').click(function () {
		var filter1_id = $(this).attr('data-filter');
		var filter1_name = $(this).text();
		var filter2_id = void 0,
		    filter2_name = void 0,
		    currentFilterIDs = void 0,
		    currentFilters = void 0;
		if ($('.filter-group-2.active').length !== 0) {
			filter2_id = $('.filter-group-2.active').attr('data-filter');
			filter2_name = $('.filter-group-2.active').text();
		} else {
			filter2_id = '';
			filter2_name = '';
		}
		if (filter2_id !== '') {
			currentFilterIDs = filter1_id + filter2_id;
		} else {
			currentFilterIDs = filter1_id;
		}
		$container.isotope({ filter: currentFilterIDs });
		$('.filter-group-1.active').removeClass('active');
		$(this).addClass('active');
		if (filter2_name !== '') {
			currentFilters = filter1_name + ', ' + filter2_name;
		} else {
			currentFilters = filter1_name;
		}
		$('.catalog-content-wrap h1 span.current-filters').text(currentFilters).show();
		$('.catalog-content-wrap h1 span.filtered-by').show();
		$('.catalog-content-wrap h1 span.clear-filters').show();
	});
	$('.filter-group-2').click(function () {
		var filter2_id = $(this).attr('data-filter');
		var filter2_name = $(this).text();
		var filter1_id = void 0,
		    filter1_name = void 0,
		    currentFilterIDs = void 0,
		    currentFilters = void 0;
		if ($('.filter-group-1.active').length !== 0) {
			filter1_id = $('.filter-group-1.active').attr('data-filter');
			filter1_name = $('.filter-group-1.active').text();
		} else {
			filter1_id = '';
			filter1_name = '';
		}
		if (filter1_id !== '') {
			currentFilterIDs = filter1_id + filter2_id;
		} else {
			currentFilterIDs = filter2_id;
		}
		$container.isotope({ filter: currentFilterIDs });
		$('.filter-group-2.active').removeClass('active');
		$(this).addClass('active');
		if (filter1_name !== '') {
			currentFilters = filter1_name + ', ' + filter2_name;
		} else {
			currentFilters = filter2_name;
		}
		$('.catalog-content-wrap h1 span.current-filters').text(currentFilters).show();
		$('.catalog-content-wrap h1 span.filtered-by').show();
		$('.catalog-content-wrap h1 span.clear-filters').show();
	});
	$('a.clear-filters').click(function (e) {
		$('.filter-group-1.active').removeClass('active');
		$('.filter-group-2.active').removeClass('active');
		$container.isotope({ filter: '*' });
		$('.catalog-content-wrap h1 span.filtered-by').hide();
		$('.catalog-content-wrap h1 span.clear-filters').hide();
		$('.catalog-content-wrap h1 span.current-filters').text('');
		e.preventDefault();
	});
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/src/scripts/catalog.js");


/***/ })

/******/ });