/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/labs/lab6/bookmarker/src/classes/bookmark.js":
/*!***********************************************************!*\
  !*** ./docs/labs/lab6/bookmarker/src/classes/bookmark.js ***!
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

/***/ "./docs/labs/lab6/bookmarker/src/classes/bookmarker.js":
/*!*************************************************************!*\
  !*** ./docs/labs/lab6/bookmarker/src/classes/bookmarker.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bookmark: () => (/* reexport safe */ _bookmark_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bookmark_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookmark.js */ "./docs/labs/lab6/bookmarker/src/classes/bookmark.js");
/* harmony import */ var _link_preview_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-preview-data.js */ "./docs/labs/lab6/bookmarker/src/classes/link-preview-data.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
  /**
   * Retrieve link preview data
   *
   * @param {string} url The URL to get the info of
   * @returns {Promise<LinkPreviewData>}
   */
  _defineProperty(this, "getLinkPreviewData", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      var linkPreviewData, linkPreviewUrl, linkPreviewResult;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            linkPreviewUrl = "https://api.linkpreview.net/?q=".concat(url);
            _context.next = 4;
            return fetch(linkPreviewUrl, {
              headers: {
                'X-Linkpreview-Api-Key': '1c49bff26b57c0a59149dc0c7a0d7bb2'
              }
            });
          case 4:
            linkPreviewResult = _context.sent;
            _context.t0 = _link_preview_data_js__WEBPACK_IMPORTED_MODULE_1__["default"];
            _context.next = 8;
            return linkPreviewResult.json();
          case 8:
            _context.t1 = _context.sent;
            linkPreviewData = new _context.t0(_context.t1);
            if (!(linkPreviewResult.status >= 400)) {
              _context.next = 15;
              break;
            }
            // Check for known errors
            console.log(linkPreviewData.description);
            if (!(linkPreviewData.description === 'Invalid response status code (0)')) {
              _context.next = 14;
              break;
            }
            throw new Error('Invalid URL, or website not found. Please check the URL');
          case 14:
            throw new Error(linkPreviewData.description);
          case 15:
            ;
            _context.next = 22;
            break;
          case 18:
            _context.prev = 18;
            _context.t2 = _context["catch"](0);
            alert("Error fetching link preview data: ".concat(_context.t2.message, ". Please try again."));
            return _context.abrupt("return", null);
          case 22:
            return _context.abrupt("return", linkPreviewData);
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 18]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  //* -------- EVENT HANDLERS -------- */
  /**
   * Add a bookmark to the bookmarks list
   */
  _defineProperty(this, "addBookmark", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var _event$target, urlInput, url, addBookmarkButton, linkPreviewData, newBookmark;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();

            // Extract the form fields
            _event$target = _slicedToArray(event.target, 1), urlInput = _event$target[0];
            url = urlInput.value.trim(); // Make the bookmark button a loading icon while we get the link preview data
            addBookmarkButton = document.getElementById('add-bookmark-button');
            addBookmarkButton.innerHTML = '<span class="loader"></span>';
            _context2.next = 7;
            return _this.getLinkPreviewData(url);
          case 7:
            linkPreviewData = _context2.sent;
            addBookmarkButton.innerHTML = 'Add';
            // We are done doing AJAX stuff
            newBookmark = new _bookmark_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
              title: linkPreviewData.title,
              description: linkPreviewData.description,
              image: linkPreviewData.image,
              link: linkPreviewData.url
            });
            _this.bookmarks.push(newBookmark);
            _this.fillBookmarks();

            // Clear input fields after adding the bookmark
            urlInput.value = '';
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
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


/***/ }),

/***/ "./docs/labs/lab6/bookmarker/src/classes/link-preview-data.js":
/*!********************************************************************!*\
  !*** ./docs/labs/lab6/bookmarker/src/classes/link-preview-data.js ***!
  \********************************************************************/
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
var LinkPreviewData = /*#__PURE__*/_createClass(
/**
 * @param {LinkPreviewData} props
 */
function LinkPreviewData(props) {
  _classCallCheck(this, LinkPreviewData);
  /**
   * @type {string}
   * A human friendly description of the website the link points to
   */
  _defineProperty(this, "description", '');
  /**
   * @type {string}
   * The URL of the image that represents the website
   */
  _defineProperty(this, "image", '');
  /**
   * @type {string}
   * The title of the website
   */
  _defineProperty(this, "title", '');
  /**
   * @type {string}
   * The URL of the website
   */
  _defineProperty(this, "url", '');
  Object.assign(this, props);
});
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkPreviewData);

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
  !*** ./docs/labs/lab6/bookmarker/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_classes_bookmarker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/classes/bookmarker.js */ "./docs/labs/lab6/bookmarker/src/classes/bookmarker.js");
//? Joshua Evans - 2025-04-30

window.onload = function () {
  var bookmarker = new _src_classes_bookmarker_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  window.bookmarker = bookmarker;
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map