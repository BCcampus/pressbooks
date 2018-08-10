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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/scripts/covergenerator.js":
/***/ (function(module, exports) {

jQuery(function ($) {
	$(document).ready(function () {
		var mediaUploader = void 0;

		$('.front-background-image-upload-button').click(function (e) {
			e.preventDefault();
			// If the uploader object has already been created, reopen the dialog
			if (mediaUploader) {
				mediaUploader.open();
				return;
			}
			// Extend the wp.media object
			mediaUploader = wp.media.frames.file_frame = wp.media({
				multiple: false
			});

			// When a file is selected, grab the URL and set it as the text field's value
			mediaUploader.on('select', function () {
				var attachment = mediaUploader.state().get('selection').first().toJSON();
				$('#front_background_image').val(attachment.url);
				$('.front-background-image').attr('src', attachment.url);
				$('.front-background-image-preview-wrap').removeClass('hidden');
				$('.front-background-image-upload-button, .front-background-image-description').addClass('hidden');
			});

			// Open the uploader dialog
			mediaUploader.open();
		});
	});
	$('.colorpicker').wpColorPicker();
	if ($('#ppi').val() !== '') {
		$('#custom_ppi').parent().parent().hide();
	}
	$('#ppi').on('change', function () {
		if ($(this).val() === '') {
			$('#custom_ppi').parent().parent().show();
		} else {
			$('#custom_ppi').parent().parent().hide();
			$('#custom_ppi').val($(this).val());
		}
	});
	$('.delete-front-background-image').on('click', function () {
		$('#front_background_image').val('');
		$('.front-background-image-preview-wrap').addClass('hidden');
		$('.front-background-image-upload-button, .front-background-image-description').removeClass('hidden');
	});

	$('.settings-form').on('saveAndGenerate', function (event, fileType) {
		$(this).ajaxSubmit({
			success: function success() {
				$('form.' + fileType).trigger('submit');
			},
			timeout: 5000
		});
		return false;
	});

	$('#generate-pdf').click(function () {
		var editor = tinymce.get('pb_about_unlimited');
		if (editor) {
			var content = editor.getContent();
			$('#pb_about_unlimited').val(content);
		}
		$('form.settings-form').trigger('saveAndGenerate', ['pdf']);
	});

	$('#generate-jpg').click(function () {
		$('form.settings-form').trigger('saveAndGenerate', ['jpg']);
	});
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./assets/src/scripts/covergenerator.js");


/***/ })

/******/ });