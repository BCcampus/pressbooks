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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/organize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_countup_js__ = __webpack_require__("./node_modules/countup.js/dist/countUp.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_countup_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_countup_js__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This script is loaded when a user is on the [ Text → Organize ] page



var $ = window.jQuery;

var pb = {
	organize: {
		bulkToggle: [],
		oldParent: null,
		newParent: null,
		oldOrder: null,
		newOrder: null,
		sortableOptions: {
			revert: true,
			helper: 'clone',
			zIndex: 2700,
			distance: 3,
			opacity: 0.6,
			placeholder: 'ui-state-highlight',
			dropOnEmpty: true,
			cursor: 'crosshair',
			items: 'tbody > tr',
			start: function start(event, ui) {
				pb.organize.oldParent = $(ui.item).parents('table').attr('id');
			},
			stop: function stop(event, ui) {
				pb.organize.newParent = $(ui.item).parents('table').attr('id');
				reorder($(ui.item));
			}
		}
	}
};

/**
 * Clear a modal using jQuery.unBlockUI()
 *
 * @param {string | object} item
 */
function showModal(item) {
	$.blockUI.defaults.applyPlatformOpacityRules = false;
	var alert = $('[role="alert"]');
	var alertMessage = void 0;
	if (item === 'book') {
		alertMessage = PB_OrganizeToken.updating.book;
	} else {
		var postType = item.post_type.replace('-', '');
		alertMessage = PB_OrganizeToken.updating[postType];
	}
	alert.children('p').text(alertMessage);
	alert.addClass('loading-content').removeClass('visually-hidden');
	$.blockUI({
		message: $(alert),
		baseZ: 100000
	});
}

/**
 * Clear a modal using jQuery.unBlockUI()
 *
 * @param {string | object} item
 * @param {string} status
 */
function removeModal(item, status) {
	var alert = $('[role="alert"]');
	var alertMessage = void 0;

	if (item === 'book') {
		alertMessage = PB_OrganizeToken[status].book;
	} else {
		var postType = item.post_type.replace('-', '');
		alertMessage = PB_OrganizeToken[status][postType];
	}

	$.unblockUI({
		onUnblock: function onUnblock() {
			alert.removeClass('loading-content').addClass('visually-hidden');
			alert.children('p').text(alertMessage);
		}
	});
}

/**
 * Update word count for exportable content.
 */
function updateWordCountForExport() {
	var data = {
		action: 'pb_update_word_count_for_export',
		_ajax_nonce: PB_OrganizeToken.wordCountNonce
	};
	$.post(ajaxurl, data, function (response) {
		var current_count = parseInt($('#wc-selected-for-export').text(), 10);
		var count_up = new __WEBPACK_IMPORTED_MODULE_0_countup_js___default.a('wc-selected-for-export', current_count, response, 0, 2.5, { separator: '' });
		count_up.start();
	});
}

/**
 * Get the table before or after the current table.
 *
 * @param {jQuery object} table
 * @param {string} relationship
 * @returns {jQuery object}
 */
function getAdjacentContainer(table, relationship) {
	if (relationship === 'prev') {
		return $(table).prev('[id^=part]');
	} else if (relationship === 'next') {
		return $(table).next('[id^=part]');
	}
}

/**
 * Get data for a table row.
 *
 * @param {jQuery object} row
 * @returns {object}
 */
function getRowData(row) {
	row = $(row).attr('id').split('_');
	var rowData = {
		id: row[row.length - 1],
		post_type: row[0]
	};
	return rowData;
}

/**
 * Get an array object of IDs in a table.
 *
 * @param {jQuery object} table
 * @returns {array} ids
 */
function getIdsInTable(table) {
	var ids = [];
	table.children('tbody').children('tr').each(function (i, el) {
		var row = getRowData($(el));
		ids.push(row.id);
	});

	return ids;
}

/**
 * Adjust the reorder controls throughout a table as part of a reorder operation.
 *
 * @param {jQuery object} table
 */
function updateControls(table) {
	table.children('tbody').children('tr').each(function (i, el) {
		var controls = '';
		var up = '<button class="move-up">Move Up</button>';
		var down = '<button class="move-down">Move Down</button>';

		if ($(el).is('tr:only-of-type')) {
			if (table.is('[id^=part]') && table.prev('[id^=part]').length && table.next('[id^=part]').length) {
				controls = ' | ' + up + ' | ' + down;
			} else if (table.is('[id^=part]') && table.next('[id^=part]').length) {
				controls = ' | ' + down;
			} else if (table.is('[id^=part]') && table.prev('[id^=part]').length) {
				controls = ' | ' + up;
			}
		} else if ($(el).is('tr:first-of-type')) {
			if (table.is('[id^=part]') && table.prev('[id^=part]').length) {
				controls = ' | ' + up + ' | ' + down;
			} else {
				controls = ' | ' + down;
			}
		} else if ($(el).is('tr:last-of-type')) {
			if (table.is('[id^=part]') && table.next('[id^=part]').length) {
				controls = ' | ' + up + ' | ' + down;
			} else {
				controls = ' | ' + up;
			}
		} else {
			controls = ' | ' + up + ' | ' + down;
		}

		$(el).children('.has-row-actions').children('.row-title').children('.row-actions').children('.reorder').html(controls);
	});
}

/**
 * Reorder the contents of a table, optionally moving the target row to a new table.
 *
 * @param {jQuery object} row
 * @param {jQuery object} source
 * @param {jQuery object} destination
 */
function reorder(row) {
	var item = getRowData(row);

	$.ajax({
		url: ajaxurl,
		type: 'POST',
		data: {
			action: 'pb_reorder',
			id: item.id,
			old_order: $('#' + pb.organize.oldParent).sortable('serialize'),
			new_order: $('#' + pb.organize.newParent).sortable('serialize'),
			old_parent: pb.organize.oldParent.replace(/^part_([0-9]+)$/i, '$1'),
			new_parent: pb.organize.newParent.replace(/^part_([0-9]+)$/i, '$1'),
			_ajax_nonce: PB_OrganizeToken.reorderNonce
		},
		beforeSend: function beforeSend() {
			showModal(item);
			if (pb.organize.oldParent !== pb.organize.newParent) {
				updateControls($('#' + pb.organize.oldParent));
			}
			updateControls($('#' + pb.organize.newParent));
		},
		success: function success() {
			removeModal(item, 'success');
		},
		error: function error() {
			removeModal(item, 'failure');
		}
	});
}

/**
 * Update post status for individual or multiple posts.
 *
 * @param {string} post_id
 */
function updateVisibility(ids, postType, output, visibility) {
	var data = {
		action: 'pb_update_post_visibility',
		post_ids: ids,
		_ajax_nonce: PB_OrganizeToken.postVisibilityNonce
	};

	$.ajax({
		url: ajaxurl,
		type: 'POST',
		data: Object.assign(data, _defineProperty({}, output, visibility)),
		beforeSend: function beforeSend() {
			showModal({ post_type: postType });
		},
		success: function success(response) {
			removeModal({ post_type: postType }, 'success');
			updateWordCountForExport();
		},
		error: function error() {
			removeModal({ post_type: postType }, 'failure');
		}
	});
}

/**
 * Update title visibility for individual or multiple posts.
 *
 * @param {string} ids Comma separated post IDs.
 * @param {string} postType
 * @param {bool} showTitle
 */
function updateTitleVisibility(ids, postType, showTitle) {
	$.ajax({
		url: ajaxurl,
		type: 'POST',
		data: {
			action: 'pb_update_post_title_visibility',
			post_ids: ids,
			show_title: showTitle,
			_ajax_nonce: PB_OrganizeToken.showTitleNonce
		},
		beforeSend: function beforeSend() {
			showModal({ post_type: postType });
		},
		success: function success(response) {
			removeModal({ post_type: postType }, 'success');
		},
		error: function error() {
			removeModal({ post_type: postType }, 'failure');
		}
	});
}

$(document).ready(function () {
	// Initialize jQuery.sortable()
	$('.allow-bulk-operations #front-matter').sortable(pb.organize.sortableOptions).disableSelection();
	$('.allow-bulk-operations table#back-matter').sortable(pb.organize.sortableOptions).disableSelection();
	$('.allow-bulk-operations table.chapters').sortable(Object.assign(pb.organize.sortableOptions, { connectWith: '.chapters' })).disableSelection();

	// Handle Global Privacy form changes.
	$('input[name=blog_public]').change(function (event) {
		var publicizeAlert = $('.publicize-alert');
		var publicizeAlertText = $('.publicize-alert > span');
		var blogPublic = void 0;
		if (parseInt(event.currentTarget.value, 10) === 1) {
			blogPublic = 1;
		} else {
			blogPublic = 0;
		}

		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {
				action: 'pb_update_global_privacy_options',
				blog_public: blogPublic,
				_ajax_nonce: PB_OrganizeToken.privacyNonce
			},
			beforeSend: function beforeSend() {
				showModal('book');
			},
			success: function success() {
				if (blogPublic === 0) {
					publicizeAlert.removeClass('public').addClass('private');
					publicizeAlertText.text(PB_OrganizeToken.bookPrivate);
				} else if (blogPublic === 1) {
					publicizeAlert.removeClass('private').addClass('public');
					publicizeAlertText.text(PB_OrganizeToken.bookPublic);
				}
				removeModal('book', 'success');
			},
			error: function error() {
				removeModal('book', 'failure');
			}
		});
	});

	// Handle visibility changes.
	$('.web_visibility, .export_visibility').change(function () {
		var row = $(this).parents('tr');
		var item = getRowData(row);
		var output = void 0;
		var visibility = 0;

		if ($(this).is(':checked')) {
			visibility = 1;
		}

		if ($(this).is('[id^="export_visibility"]')) {
			output = 'export';
		} else if ($(this).is('[id^="web_visibility"]')) {
			output = 'web';
		}

		updateVisibility(item.id, item.post_type, output, visibility);
	});

	// Handle title visibility changes.
	$('.show_title').change(function (event) {
		var row = $(event.target).parents('tr');
		var item = getRowData(row);

		var showTitle = '';

		if ($(event.currentTarget).is(':checked')) {
			showTitle = 'on';
		}

		updateTitleVisibility(item.id, item.post_type, showTitle);
	});

	// Handle "move up".
	$(document).on('click', '.move-up', function (event) {
		var row = $(event.target).parents('tr');
		var table = $(event.target).parents('table');
		pb.organize.oldParent = table.attr('id');
		if (row.is('tr:first-of-type') && table.is('[id^=part]') && table.prev('[id^=part]').length) {
			var targetTable = getAdjacentContainer(table, 'prev');
			pb.organize.newParent = targetTable.attr('id');
			targetTable.append(row);
			reorder(row);
		} else {
			pb.organize.newParent = table.attr('id');
			row.prev().before(row);
			reorder(row);
		}
	});

	// Handle "move down".
	$(document).on('click', '.move-down', function (event) {
		var row = $(event.target).parents('tr');
		var table = $(event.target).parents('table');
		pb.organize.oldParent = table.attr('id');
		if (row.is('tr:last-of-type') && table.is('[id^=part]') && table.next('[id^=part]').length) {
			var targetTable = getAdjacentContainer(table, 'next');
			pb.organize.newParent = targetTable.attr('id');
			targetTable.prepend(row);
			reorder(row);
		} else {
			pb.organize.newParent = table.attr('id');
			row.next().after(row);
			reorder(row);
		}
	});

	$('.allow-bulk-operations table thead th[id$="show_title"]').on('click', function (event) {
		var id = $(event.target).attr('id');
		id = id.replace('-', '');
		var table = $(event.target).parents('table');
		var postType = table.attr('id').split('_')[0];
		if (postType === 'part') {
			postType = 'chapter';
		}
		var ids = getIdsInTable(table);
		if (pb.organize.bulkToggle[id]) {
			table.find('tr td.column-showtitle input[type="checkbox"]').prop('checked', false);
			pb.organize.bulkToggle[id] = false;
			updateTitleVisibility(ids.join(), postType, '');
		} else {
			table.find('tr td.column-showtitle input[type="checkbox"]').prop('checked', true);
			pb.organize.bulkToggle[id] = true;
			updateTitleVisibility(ids.join(), postType, 'on');
		}
	});

	$('.allow-bulk-operations table thead th[id$="visibility"]').on('click', function (event) {
		var id = $(event.target).attr('id');
		id = id.replace('-', '');
		var format = id.split('_');
		format = format[format.length - 2];
		var table = $(event.target).parents('table');
		var postType = table.attr('id').split('_')[0];
		if (postType === 'part') {
			postType = 'chapter';
		}
		var ids = getIdsInTable(table);
		if (pb.organize.bulkToggle[id]) {
			table.find('tr td.column-' + format + ' input[type=checkbox]').prop('checked', false);
			pb.organize.bulkToggle[id] = false;
			updateVisibility(ids.join(), postType, format, 0);
		} else {
			table.find('tr td.column-' + format + ' input[type="checkbox"]').prop('checked', true);
			pb.organize.bulkToggle[id] = true;
			updateVisibility(ids.join(), postType, format, 1);
		}
	});

	// Warn of incomplete AJAX
	$(window).on('beforeunload', function () {
		if ($.active > 0) {
			return 'Changes you made may not be saved...';
		}
	});
});

/***/ }),

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,n){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/src/scripts/organize.js");


/***/ })

/******/ });