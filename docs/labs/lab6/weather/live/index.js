/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/labs/lab6/weather/src/classes/city.js":
/*!****************************************************!*\
  !*** ./docs/labs/lab6/weather/src/classes/city.js ***!
  \****************************************************/
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
//? Joshua Evans - 2025-05-17
var City = /*#__PURE__*/_createClass(
/**
 * @param {City} props
 */
function City(props) {
  _classCallCheck(this, City);
  /** @type {string} The zip code used to find the city */
  _defineProperty(this, "zip", '');
  /** @type {string} The name of the city */
  _defineProperty(this, "name", '');
  /** @type {number} The latitude of the city */
  _defineProperty(this, "lat", 0);
  /** @type {number} The longitude of the city */
  _defineProperty(this, "lon", 0);
  /** @type {string} The country code of the city */
  _defineProperty(this, "country", '');
  Object.assign(this, props);
});
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (City);

/***/ }),

/***/ "./docs/labs/lab6/weather/src/classes/forecast-day.js":
/*!************************************************************!*\
  !*** ./docs/labs/lab6/weather/src/classes/forecast-day.js ***!
  \************************************************************/
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
//? Joshua Evans - 2025-05-17
var ForecastDay = /*#__PURE__*/_createClass(/** @param {ForecastDay} props */
function ForecastDay(props) {
  _classCallCheck(this, ForecastDay);
  /** @type {Date} The date for this forecast */
  _defineProperty(this, "dt", void 0);
  /** @type {number} The average temperature */
  _defineProperty(this, "temp", void 0);
  /** @type {number} The minimum temperature */
  _defineProperty(this, "minTemp", void 0);
  /** @type {number} The maximum temperature */
  _defineProperty(this, "maxTemp", void 0);
  /** @type {number} The morning temperature */
  _defineProperty(this, "morningTemp", void 0);
  /** @type {number} The day temperature */
  _defineProperty(this, "dayTemp", void 0);
  /** @type {number} The evening temperature */
  _defineProperty(this, "eveningTemp", void 0);
  /** @type {number} The night temperature */
  _defineProperty(this, "nightTemp", void 0);
  /** @type {string} The weather description */
  _defineProperty(this, "description", void 0);
  /** @type {string} The weather icon */
  _defineProperty(this, "icon", void 0);
  /** @type {number} The atmospheric pressure */
  _defineProperty(this, "pressure", void 0);
  /** @type {number} The wind speed */
  _defineProperty(this, "wind", void 0);
  /** @type {number} The humidity */
  _defineProperty(this, "humidity", void 0);
  Object.assign(this, props);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForecastDay);

/***/ }),

/***/ "./docs/labs/lab6/weather/src/dates.js":
/*!*********************************************!*\
  !*** ./docs/labs/lab6/weather/src/dates.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDate: () => (/* binding */ getDate),
/* harmony export */   getMonth: () => (/* binding */ getMonth),
/* harmony export */   getWeekday: () => (/* binding */ getWeekday)
/* harmony export */ });
// Utility functions that manipulate JS dates

/**
 * Returns a JS date object based on a unix timestamp and the timezone offset
 *
 * @param {number} unixTimestamp Unix epoch timestamp in milliseconds
 * @param {number} timezoneOffset Timezone offset in seconds
 * @returns {Date} JS date object
 */
function getDate(unixTimestamp, timezoneOffset) {
  return new Date((unixTimestamp - timezoneOffset) * 1000);
}
;

/**
 * Returns a string that represents the day of the week based on a JS date object
 *
 * @param {Date} date Date object to convert into a string
 * @returns
 */
function getWeekday(date) {
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var weekday = date.getDay();
  return dayNames[weekday];
}
;

/**
 * Returns the month of the year based on a JS date object
 *
 * @param {Date} date Date object to get the month for
 * @returns
 */
function getMonth(date) {
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth();
  return monthNames[month];
}

/***/ }),

/***/ "./docs/labs/lab6/weather/src/weather-parsing.js":
/*!*******************************************************!*\
  !*** ./docs/labs/lab6/weather/src/weather-parsing.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseForecast)
/* harmony export */ });
/* harmony import */ var _classes_forecast_day_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/forecast-day.js */ "./docs/labs/lab6/weather/src/classes/forecast-day.js");

function getIndexOfMidnight(firstDate /*, timezoneOffset*/) {
  var dt = firstDate * 1000;
  var date = new Date(dt);
  //let utcHours = date.getUTCHours();
  //let localHours = utcHours + timezoneOffset;
  var localHours = date.getHours();
  var firstMidnightIndex = localHours > 2 ? Math.round((24 - localHours) / 3) : Math.abs(Math.round(localHours / 3));
  return firstMidnightIndex;
}
function findMinTemp(forecast, indexOfMidnight) {
  var min = forecast[indexOfMidnight].main.temp_min;
  for (var i = indexOfMidnight + 1; i < indexOfMidnight + 8; i++) if (forecast[i].main.temp_min < min) min = forecast[i].main.temp_min;
  return min;
}
function findMaxTemp(forecast, indexOfMidnight) {
  var max = forecast[indexOfMidnight].main.temp_max;
  for (var i = indexOfMidnight + 1; i < indexOfMidnight + 8; i++) if (forecast[i].main.temp_max > max) max = forecast[i].main.temp_max;
  return max;
}

/** @returns {ForecastDay[]} */
function parseForecast(forecast, timezoneOffset) {
  var simpleForecast = new Array();
  var MIDNIGHT = getIndexOfMidnight(forecast[0].dt, timezoneOffset);
  var NOON = 4;
  var SIXAM = 2;
  var SIXPM = 6;
  var NINEPM = 7;
  var MORNING = SIXAM;
  var DAY = NOON;
  var EVENING = SIXPM;
  var NIGHT = NINEPM;
  var PERDAY = 8;
  // const DAYS = 4;
  for (var i = MIDNIGHT; i < forecast.length - NINEPM; i += PERDAY) {
    var oneDay = new Object();
    //oneDay.dt = forecast[i + NOON].dt;
    oneDay.dt = new Date(forecast[i + NOON].dt * 1000);
    oneDay.temp = forecast[i + NOON].main.temp;
    oneDay.minTemp = findMinTemp(forecast, i);
    oneDay.maxTemp = findMaxTemp(forecast, i);
    oneDay.morningTemp = forecast[i + MORNING].main.temp;
    oneDay.dayTemp = forecast[i + DAY].main.temp;
    oneDay.eveningTemp = forecast[i + EVENING].main.temp;
    oneDay.nightTemp = forecast[i + NIGHT].main.temp;
    oneDay.description = forecast[i + NOON].weather[0].description;
    oneDay.icon = forecast[i + NOON].weather[0].icon;
    oneDay.pressure = forecast[i + NOON].main.pressure;
    oneDay.wind = forecast[i + NOON].wind.speed;
    oneDay.humidity = forecast[i + NOON].main.humidity;
    simpleForecast.push(new _classes_forecast_day_js__WEBPACK_IMPORTED_MODULE_0__["default"](oneDay));
  }
  return simpleForecast;
}

/***/ }),

/***/ "./docs/labs/lab6/weather/src/weather.js":
/*!***********************************************!*\
  !*** ./docs/labs/lab6/weather/src/weather.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_city_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/city.js */ "./docs/labs/lab6/weather/src/classes/city.js");
/* harmony import */ var _weather_parsing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-parsing.js */ "./docs/labs/lab6/weather/src/weather-parsing.js");
/* harmony import */ var _dates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dates.js */ "./docs/labs/lab6/weather/src/dates.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//? Joshua Evans - 2025-05-17
/**  @typedef {import('./classes/forecast-day.js')} ForecastDay*/





// sample OpenWeatherMap weather api call
//https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=43.9698&lon=-123.2006&appid=e366707bc2ea3e949fb1c0a16ce76d59
// sample OpenWeatherMap geolocation api call
// http://api.openweathermap.org/geo/1.0/zip?zip=97405,US&appid=e366707bc2ea3e949fb1c0a16ce76d59
var Weather = /*#__PURE__*/function () {
  //* ========================== BUILT-INS ==========================
  function Weather() {
    var _this = this;
    _classCallCheck(this, Weather);
    //* ========================== UI Elements ==========================
    /**
     * @type {HTMLFormElement}
     * The form element for the zipcode input
     */
    _defineProperty(this, "$zipCodeForm", void 0);
    /**
     * @type {HTMLInputElement}
     * The input element for the zipcode
     */
    _defineProperty(this, "$zipCodeInput", void 0);
    /**
     * @type {HTMLDivElement}
     * The div element that displays the weather list
     */
    _defineProperty(this, "$weatherList", void 0);
    /**
     * @type {HTMLDivElement}
     * The div element that displays the current day weather details
     */
    _defineProperty(this, "$currentDay", void 0);
    //* ========================== PROPERTIES ==========================
    /**
     * The current state of the Weather app
     */
    _defineProperty(this, "state", {
      /** The zip code data is being retrieved for */
      zipcode: '',
      /** @type {City} The city data retrieved from the OpenWeatherMap API */
      city: {},
      /** @type {ForecastDay[]} The actual forecast */
      forecast: [],
      /** @type {ForecastDay[]} The date the forecast is for */
      selectedDate: null,
      /** Offset to use for the current timezone */
      timezoneOffset: 0
    });
    /**
     * API key for the OpenWeatherMap API
     *! THIS IS EXTREMELY BAD PRACTICE
     */
    _defineProperty(this, "apiKey", 'appid=15362bcec3bacdade23a563757ba2102');
    //* ========================== METHODS ==========================
    /**
     * Fetches city geolocation data from the OpenWeatherMap API
     * @param {string} zipcode The zipcode to fetch city geolocation data for
     */
    _defineProperty(this, "getCityData", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(zipcode) {
        var url, response, responseData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(_this.geoUrl, "zip=").concat(zipcode, ",US");
              _context.next = 3;
              return fetch(url);
            case 3:
              response = _context.sent;
              if (response.ok) {
                _context.next = 6;
                break;
              }
              throw new Error("Error fetching location data: ".concat(response.statusText));
            case 6:
              _context.next = 8;
              return response.json();
            case 8:
              responseData = _context.sent;
              return _context.abrupt("return", new _classes_city_js__WEBPACK_IMPORTED_MODULE_0__["default"](responseData));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    /**
     * Fetches weather data for a particular city
     *
     * @param {City} city The city to get weather data for
     */
    _defineProperty(this, "getWeatherData", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(city) {
        var url, response, responseData;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              url = "".concat(_this.weatherUrl, "lat=").concat(city.lat, "&lon=").concat(city.lon);
              _context2.next = 3;
              return fetch(url);
            case 3:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 6;
                break;
              }
              throw new Error("Error fetching weather data: ".concat(response.statusText));
            case 6:
              _context2.next = 8;
              return response.json();
            case 8:
              responseData = _context2.sent;
              return _context2.abrupt("return", responseData);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    /**
     * Render the current day's weather details
     *
     * @param {ForecastDay} forecastDay
     * @returns {string} HTML string for the current day's weather details
     */
    _defineProperty(this, "renderCurrentDay", function (forecastDay) {
      var date = forecastDay.dt;
      var weekDay = (0,_dates_js__WEBPACK_IMPORTED_MODULE_2__.getWeekday)(date);
      return /*html*/"\n      <div class=\"current-day\">\n        <h1 class=\"day-header\">".concat(weekDay, " in ").concat(_this.state.city.name, "</h1>\n        <div class=\"weather\">\n        <p>\n            <img src=\"http://openweathermap.org/img/w/").concat(forecastDay.icon, ".png\" alt=\"").concat(forecastDay.description, "\">\n            ").concat(forecastDay.description, "\n        </p>\n      </div>\n      <div class=\"details flex-parent\">\n        <div class=\"temperature-breakdown\">\n          <p>Morning Temperature: ").concat(forecastDay.morningTemp, "\xB0F</p>\n          <p>Day Temperature: ").concat(forecastDay.dayTemp, "\xB0F</p>\n          <p>Evening Temperature: ").concat(forecastDay.eveningTemp, "\xB0F</p>\n          <p>Night Temperature: ").concat(forecastDay.nightTemp, "\xB0F</p>\n        </div>\n        <div class=\"misc-details\">\n          <p>Atmospheric Pressure: ").concat(forecastDay.pressure, " hPa</p>\n          <p>Humidity: ").concat(forecastDay.humidity, "%</p>\n          <p>Wind Speed: ").concat(forecastDay.wind, " mph</p>\n        </div>\n      </div>\n    ");
    });
    /**
     * Render a single weather list item
     *
     * @param {ForecastDay} forecastDay A single forecast day to render
     * @param {number} index Index of the forecast day in the list
     */
    _defineProperty(this, "renderWeatherListItem", function (forecastDay, index) {
      var date = forecastDay.dt;
      var weekDay = (0,_dates_js__WEBPACK_IMPORTED_MODULE_2__.getWeekday)(date);
      var month = (0,_dates_js__WEBPACK_IMPORTED_MODULE_2__.getMonth)(date);
      return /*html*/"\n      <div class=\"weather-list-item col\" data-index=\"".concat(index, "\">\n        <h2>").concat(month, " ").concat(date.getDate(), "</h2>\n        <h3>").concat(weekDay, "</h3>\n        <h3>").concat(forecastDay.minTemp, "\xB0F | ").concat(forecastDay.maxTemp, "\xB0F</h3>\n      </div>\n    ");
    });
    /**
     * Render the entire weather list
     *
     * @param {ForecastDay[]} forecast The forecast data to render
     */
    _defineProperty(this, "renderWeatherList", function (forecast) {
      var weatherListHtml = forecast.map(function (forecastDay, index) {
        return _this.renderWeatherListItem(forecastDay, index);
      }).join('');
      return weatherListHtml;
    });
    //* ========================== EVENT HANDLERS ==========================
    /**
     * Handle clicking a weather list item
     *
     * @param {Event} event
     */
    _defineProperty(this, "onClickWeatherListItem", function (event) {
      var target = event.target.closest('.weather-list-item');
      var dataIndex = target.getAttribute('data-index');
      var forecastDayHtml = _this.renderCurrentDay(_this.state.forecast[dataIndex]);
      _this.$currentDay.innerHTML = forecastDayHtml;
    });
    /**
     * Handle submitting the zipcode input form
     *
     * @param {Event} event
     */
    _defineProperty(this, "onFormSubmit", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {
        var zipCode, cityData, weatherData, forecast, weatherListHtml, weatherListItemElements;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              _context3.prev = 1;
              // Get and store geolocation data
              zipCode = _this.$zipCodeInput.value;
              _context3.next = 5;
              return _this.getCityData(zipCode);
            case 5:
              cityData = _context3.sent;
              _this.state.zipcode = zipCode;
              _this.state.city = cityData;

              // Get and store weather data
              _context3.next = 10;
              return _this.getWeatherData(cityData);
            case 10:
              weatherData = _context3.sent;
              _this.state.timezoneOffset = weatherData.city.timezone;
              forecast = (0,_weather_parsing_js__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData.list, _this.state.timezoneOffset);
              _this.state.forecast = forecast;
              _this.state.selectedDate = forecast[0].dt;

              // Render the weather list
              weatherListHtml = _this.renderWeatherList(forecast);
              _this.$weatherList.innerHTML = weatherListHtml;
              weatherListItemElements = Array.from(_this.$weatherList.querySelectorAll('.weather-list-item'));
              weatherListItemElements.forEach(function (item) {
                item.addEventListener('click', _this.onClickWeatherListItem);
              });
              _context3.next = 26;
              break;
            case 21:
              _context3.prev = 21;
              _context3.t0 = _context3["catch"](1);
              console.error(_context3.t0);
              alert(_context3.t0.message);
              return _context3.abrupt("return");
            case 26:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 21]]);
      }));
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    this.$zipCodeForm = document.querySelector('#zipForm');
    this.$zipCodeInput = document.querySelector('#zipcode');
    this.$weatherList = document.querySelector('#weatherList');
    this.$currentDay = document.querySelector('#currentDay');
    this.$zipCodeForm.addEventListener('submit', this.onFormSubmit);
  }
  return _createClass(Weather, [{
    key: "weatherUrl",
    get:
    /**
     * URL for the OpenWeatherMap API to get weather data
     */
    function get() {
      return "https://api.openweathermap.org/data/2.5/forecast?units=imperial&".concat(this.apiKey, "&");
    }

    /**
     * URL for the OpenWeatherMap API to get geolocation data
     */
  }, {
    key: "geoUrl",
    get: function get() {
      return "http://api.openweathermap.org/geo/1.0/zip?".concat(this.apiKey, "&");
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Weather);

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
/*!*****************************************!*\
  !*** ./docs/labs/lab6/weather/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/weather.js */ "./docs/labs/lab6/weather/src/weather.js");
//? Joshua Evans - 2025-05-17

window.onload = function () {
  var weather = new _src_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  window.weather = weather;
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map