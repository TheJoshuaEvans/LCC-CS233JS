/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/labs/lab4/bookmarker/src/classes/bookmark.js":
/*!***********************************************************!*\
  !*** ./docs/labs/lab4/bookmarker/src/classes/bookmark.js ***!
  \***********************************************************/
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
//? Joshua Evans - 2025-04-30
/**
 * A single bookmark managed by the bookmarker
 */
var Bookmark = /*#__PURE__*/_createClass(
/**
 * @param {Bookmark} props
 */
function Bookmark(props) {
  var _this = this;
  _classCallCheck(this, Bookmark);
  /**
   * Human-friendly description of the bookmark target
   * @type {string}
   */
  _defineProperty(this, "description", '');
  /**
   * Image URL to associate with the bookmark
   * @type {string}
   */
  _defineProperty(this, "image", '');
  /**
   * URL that the bookmark points to
   * @type {string}
   */
  _defineProperty(this, "link", '');
  /**
   * Title of the bookmark
   * @type {string}
   */
  _defineProperty(this, "title", '');
  /**
   * Generate and returns an HTML representation of the bookmark
   * @return {string}
   */
  _defineProperty(this, "generateHtml", function () {
    var html = /*html*/"\n      <a href=\"".concat(_this.link, "\" target=\"_blank\" class=\"bookmark\">\n        <div class=\"img\" style=\"background-image:url('").concat(_this.image, "')\">&nbsp;</div>\n        <div class=\"title\">\n          ").concat(_this.title, "\n          <br>\n          ").concat(_this.description, "\n        </div>\n        <div><i name=\"deleteBookmark\" class=\"bi-trash delete-icon\"></i></div>\n      </a>\n    ");
    return html;
  });
  this.description = props.description;
  this.link = props.link;
  this.title = props.title;

  // Do some special handling for the image property. If one isn't provided, set a default
  // using https://robohash.org/ :D
  this.image = props.image;
  if (!this.image) {
    this.image = "https://robohash.org/".concat(encodeURIComponent(this.title), ".png?size90x60&set=set3");
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookmark);

/***/ }),

/***/ "./docs/labs/lab4/bookmarker/src/classes/bookmarker.js":
/*!*************************************************************!*\
  !*** ./docs/labs/lab4/bookmarker/src/classes/bookmarker.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bookmark: () => (/* reexport safe */ _bookmark_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bookmark_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookmark.js */ "./docs/labs/lab4/bookmarker/src/classes/bookmark.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//? Joshua Evans - 2025-04-30


/**
 * List of bookmarks to use as default if none are found in localStorage
 */
var defaultBookmarks = [new _bookmark_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  title: 'Example Bookmark',
  description: 'This is an example bookmark.',
  link: 'https://google.com'
}), new _bookmark_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  title: 'Example Bookmark 1',
  description: 'This is another example bookmark.',
  link: 'https://thejoshuaevans.com'
})];
var Bookmarker = /*#__PURE__*/_createClass(function Bookmarker() {
  var _this = this;
  _classCallCheck(this, Bookmarker);
  //* -------- PROPERTIES -------- */
  /**
   * Array of bookmarks managed by the bookmarker
   * @type {Bookmark[]}
   */
  _defineProperty(this, "bookmarks", defaultBookmarks);
  //* -------- METHODS -------- */
  /**
   * Add event handlers to all the delete icons in the bookmarks list
   */
  _defineProperty(this, "addDeleteEventHandlers", function () {
    // Get all the delete icons and add event listeners to them
    var deleteIcons = Array.from(document.querySelectorAll('.delete-icon'));
    deleteIcons.forEach(function (icon, index) {
      icon.addEventListener('click', function (event) {
        event.preventDefault();
        _this.deleteBookmark(index);
      });
    });
  });
  /**
   * Generate and render all the bookmarks in the bookmarks list
   */
  _defineProperty(this, "fillBookmarks", function () {
    // Go ahead and save our bookmarks to local storage
    _this.saveBookmarks(_this.bookmarks);

    // Generate the HTML for each bookmark and add it to the bookmarks list wrapper
    var bookmarksListWrapper = document.getElementById('bookmarks-list');
    var bookmarksHtml = _this.bookmarks.map(function (bookmark) {
      return bookmark.generateHtml();
    }).join('');
    bookmarksListWrapper.innerHTML = bookmarksHtml;

    // Add event handlers to the delete icons
    _this.addDeleteEventHandlers();
  });
  /**
   * Delete a bookmark from the bookmarks list
   *
   * @param {number} index Index of the bookmark to delete
   */
  _defineProperty(this, "deleteBookmark", function (index) {
    console.log('deleteBookmark');
    if (index < 0 || index >= _this.bookmarks.length) {
      console.error('Invalid bookmark index:', index);
      return;
    }

    // Remove the bookmark from the array
    _this.bookmarks.splice(index, 1);

    // Re-render!
    _this.fillBookmarks();
  });
  /**
   * Save bookmarks to localStorage
   */
  _defineProperty(this, "saveBookmarks", function (bookmarksToSave) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksToSave));
  });
  /**
   * Attempt to load bookmarks from localStorage. Will return an empty array if none are found
   * @returns {Bookmark[]}
   */
  _defineProperty(this, "loadBookmarks", function () {
    var _localStorage$getItem;
    var storedBookmarks = (_localStorage$getItem = localStorage.getItem('bookmarks')) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : [];
    if (storedBookmarks.length) {
      var parsedBookmarks = JSON.parse(storedBookmarks);
      storedBookmarks = parsedBookmarks.map(function (bookmark) {
        return new _bookmark_js__WEBPACK_IMPORTED_MODULE_0__["default"](bookmark);
      });
    }
    return storedBookmarks;
  });
  //* -------- EVENT HANDLERS -------- */
  /**
   * Add a bookmark to the bookmarks list
   */
  _defineProperty(this, "addBookmark", function (event) {
    event.preventDefault();

    // Extract the form fields
    var _event$target = _slicedToArray(event.target, 2),
      urlInput = _event$target[0],
      descriptionInput = _event$target[1];
    var url = urlInput.value.trim();
    var description = descriptionInput.value.trim();
    var newBookmark = new _bookmark_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      title: url,
      description: description,
      link: url
    });
    _this.bookmarks.push(newBookmark);
    _this.fillBookmarks();

    // Clear input fields after adding the bookmark
    urlInput.value = '';
    descriptionInput.value = '';
  });
  // Attempt to get bookmarks from localStorage
  var _storedBookmarks = this.loadBookmarks();
  if (_storedBookmarks.length) {
    this.bookmarks = _storedBookmarks;
  }

  // Add the event listener for adding bookmarks
  var addBookmarkForm = document.getElementById('bookmark-form');
  addBookmarkForm.onsubmit = this.addBookmark;

  // Render all the bookmarks
  this.fillBookmarks();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookmarker);


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
/*!********************************************!*\
  !*** ./docs/labs/lab4/bookmarker/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_classes_bookmarker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/classes/bookmarker.js */ "./docs/labs/lab4/bookmarker/src/classes/bookmarker.js");
//? Joshua Evans - 2025-04-30

window.onload = function () {
  var bookmarker = new _src_classes_bookmarker_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  window.bookmarker = bookmarker;
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map