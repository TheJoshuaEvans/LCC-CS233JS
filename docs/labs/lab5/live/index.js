/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/labs/lab5/js/memes.js":
/*!************************************!*\
  !*** ./docs/labs/lab5/js/memes.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Memes = /*#__PURE__*/_createClass(function Memes() {
  var _this = this;
  _classCallCheck(this, Memes);
  //* ================ HTML ELEMENTS ==================== */
  /**
   * @type {HTMLElement}
   * Input element for the bottom text of the meme
   */
  _defineProperty(this, "$bottomTextInput", void 0);
  /**
   * @type {HTMLCanvasElement}
   * The canvas element that displays the meme
   */
  _defineProperty(this, "$canvas", void 0);
  /**
   * @type {HTMLElement}
   * The default image that is used to create the meme
   */
  _defineProperty(this, "$defaultImage", void 0);
  /**
   * @type {HTMLElement}
   * The button element that allows the user to download the meme
   */
  _defineProperty(this, "$downloadButton", void 0);
  /**
   * @type {HTMLElement}
   * The input element for the font size
   */
  _defineProperty(this, "$fontSizeInput", void 0);
  /**
   * @type {HTMLElement}
   * The input element for the image
   */
  _defineProperty(this, "$imageInput", void 0);
  /**
   * @type {HTMLImageElement}
   * The image that is used to create the meme
   */
  _defineProperty(this, "$image", void 0);
  /**
   * @type {HTMLElement}
   * Input element for the top text of the meme
   */
  _defineProperty(this, "$topTextInput", void 0);
  //* ================ PROPERTIES ==================== */
  /**
   * The context of the canvas element
   */
  _defineProperty(this, "canvasContext", void 0);
  /**
   * @type {number}
   * The width of the window
   */
  _defineProperty(this, "deviceWidth", void 0);
  //* ================ METHODS ==================== */
  /**
   * Add all the event listeners to the UI elements
   */
  _defineProperty(this, "addEventListeners", function () {
    // Create the meme when the user types in the bottom text input
    _this.$bottomTextInput.addEventListener('keyup', _this.createMeme);
    _this.$bottomTextInput.addEventListener('change', _this.createMeme);
    _this.$downloadButton.addEventListener('click', _this.downloadMeme);
    _this.$fontSizeInput.addEventListener('keyup', _this.createMeme);
    _this.$fontSizeInput.addEventListener('change', _this.createMeme);
    _this.$imageInput.addEventListener('change', _this.loadImage);
    _this.$topTextInput.addEventListener('keyup', _this.createMeme);
    _this.$topTextInput.addEventListener('change', _this.createMeme);
  });
  /**
   * Create the initial
   */
  _defineProperty(this, "createCanvas", function () {
    _this.$canvas.width = Math.min(1000, _this.deviceWidth - 30);
    _this.$canvas.height = Math.min(1000, _this.deviceWidth);
  });
  /**
   * Create the meme by drawing the image and the text on the canvas
   */
  _defineProperty(this, "createMeme", function () {
    _this.canvasContext.clearRect(0, 0, _this.$canvas.width, _this.$canvas.height);
    _this.resizeImage(_this.$image.width, _this.$image.height);
    _this.canvasContext.drawImage(_this.$image, 0, 0);

    // Set the font size based on the canvas size IF a font size is not provided
    var userFontSize = _this.$fontSizeInput.value;
    var fontSize = userFontSize ? userFontSize : (_this.$canvas.width + _this.$canvas.height) / 2 * 4 / 100;
    _this.canvasContext.font = "".concat(fontSize, "pt sans-serif");
    _this.canvasContext.textAlign = 'center';
    _this.canvasContext.textBaseline = 'top';
    _this.canvasContext.lineWidth = fontSize / 5;
    _this.canvasContext.strokeStyle = 'black';
    _this.canvasContext.fillStyle = 'white';
    var bottomText = _this.$bottomTextInput.value.toUpperCase();
    _this.canvasContext.strokeText(bottomText, _this.$canvas.width / 2, _this.$canvas.height * 3 / 4);
    _this.canvasContext.fillText(bottomText, _this.$canvas.width / 2, _this.$canvas.height * 3 / 4);
    var topText = _this.$topTextInput.value.toUpperCase();
    _this.canvasContext.strokeText(topText, _this.$canvas.width / 2, _this.$canvas.height / 4);
    _this.canvasContext.fillText(topText, _this.$canvas.width / 2, _this.$canvas.height / 4);
  });
  /**
   * Triggers the download of the meme from the canvas
   */
  _defineProperty(this, "downloadMeme", function () {
    var imageSource = _this.$canvas.toDataURL('image/png');
    _this.$downloadButton.setAttribute('href', imageSource);
    _this.$downloadButton.setAttribute('download', 'meme.png');
  });
  /**
   * Load an image from the file input into the canvas
   */
  _defineProperty(this, "loadImage", function () {
    if (_this.$imageInput.files && _this.$imageInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        _this.$image = new Image();
        _this.$image.onload = function () {
          _this.createMeme();
          _this.downloadMeme();
        };
        _this.$image.src = e.target.result;
      };
      reader.readAsDataURL(_this.$imageInput.files[0]);
    }
  });
  /**
   * @param {number} canvasHeight
   * @param {number} canvasWidth
   */
  _defineProperty(this, "resizeCanvas", function (canvasHeight, canvasWidth) {
    var height = canvasHeight;
    var width = canvasWidth;
    var scale = 1;
    while (height > Math.min(1000, _this.deviceWidth - 30) && width > Math.min(1000, _this.deviceWidth - 30)) {
      height /= 2;
      width /= 2;
      scale /= 2;
    }
    _this.$canvas.height = height;
    _this.$canvas.width = width;
    _this.canvasContext.scale(scale, scale);
  });
  /**
   * Resize the image
   */
  _defineProperty(this, "resizeImage", function () {
    var imageHeight = _this.$image.height;
    var imageWidth = _this.$image.width;
    _this.resizeCanvas(imageHeight, imageWidth);
  });
  this.$bottomTextInput = document.querySelector('#bottomText');
  this.$canvas = document.querySelector('#imgCanvas');
  this.$defaultImage = document.querySelector('#defaultImage');
  this.$downloadButton = document.querySelector('#downloadMeme');
  this.$fontSizeInput = document.querySelector('#fontSize');
  this.$imageInput = document.querySelector('#image');
  this.$image = this.$defaultImage;
  this.$topTextInput = document.querySelector('#topText');
  this.canvasContext = this.$canvas.getContext('2d');
  this.deviceWidth = window.innerWidth;
  this.createCanvas();
  this.createMeme();
  this.addEventListeners();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Memes);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./docs/labs/lab5/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_memes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/memes.js */ "./docs/labs/lab5/js/memes.js");

window.onload = function () {
  window.memes = new _js_memes_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map