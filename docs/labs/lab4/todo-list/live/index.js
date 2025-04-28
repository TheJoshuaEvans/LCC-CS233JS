/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/labs/lab4/todo-list/src/classes/task-item.js":
/*!***********************************************************!*\
  !*** ./docs/labs/lab4/todo-list/src/classes/task-item.js ***!
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
//? Joshua Evans - 2025-04-24
/**
 * Class representing a single task item
 */
var TaskItem = /*#__PURE__*/_createClass(
/**
 * @param {TaskItem} props
 */
function TaskItem(props) {
  var _this = this;
  _classCallCheck(this, TaskItem);
  /**
   * Generate the HTML for the task item
   *
   * @returns {string} The HTML for the task item
   */
  _defineProperty(this, "generateTaskHtml", function () {
    return /*html*/"\n      <li class=\"list-group-item checkbox\">\n        <div class=\"row\">\n          <div class=\"col-sm-1 pt-2 checkbox\">\n            <label><input name=\"toggleTaskStatus\" type=\"checkbox\" value=\"\"\n            class=\"\" ".concat(_this.isComplete ? 'checked' : '', "\n            /></label>\n          </div>\n          <div class=\"col-sm-10 task-text ").concat(_this.isComplete ? 'complete' : '', "\">\n            ").concat(_this.description, "\n          </div>\n          <div class=\"col-sm-1 pt-2 delete-icon-area\">\n            <a name=\"deleteTask\"class=\"\" href=\"\">\n                <i class=\"bi-trash delete-icon\"></i>\n            </a>\n          </div>\n        </div>\n      </li>\n    ");
  });
  /**
   * The description of the task
   * @type {string}
   */
  this.description = props.description;

  /**
   * If the task has been completed
   * @type {boolean}
   */
  this.isComplete = props.isComplete;
});
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskItem);

/***/ }),

/***/ "./docs/labs/lab4/todo-list/src/classes/todo-list.js":
/*!***********************************************************!*\
  !*** ./docs/labs/lab4/todo-list/src/classes/todo-list.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-item.js */ "./docs/labs/lab4/todo-list/src/classes/task-item.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//? Joshua Evans - 2025-04-24

var TASKS_KEY = 'tasks';

/**
 * Class representing a to-do list, the core functionality of the to-do list app
 */
var ToDoList = /*#__PURE__*/_createClass(
// ---- BUILT-INS ----
function ToDoList() {
  var _this = this;
  _classCallCheck(this, ToDoList);
  // ---- PROPERTIES ----
  _defineProperty(this, "_tasksHtml", '');
  /**
   * @private
   * The actual list of tasks
   */
  _defineProperty(this, "_tasks", [new _task_item_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    description: 'Go to Dentist',
    isComplete: false
  }), new _task_item_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    description: 'Do Gardening',
    isComplete: true
  }), new _task_item_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    description: 'Renew Library Account',
    isComplete: false
  })]);
  // ---- METHODS ----
  /**
   * @private
   * Internal helper method validates the index of a task in the task list
   *
   * @param {number} taskIndex The index of the task to validate
   * @returns True if the index is valid, false otherwise
   */
  _defineProperty(this, "_validateIndex", function (taskIndex) {
    if (taskIndex < 0 || taskIndex >= _this._tasks.length) {
      console.error('Invalid task index:', taskIndex);
      return false;
    }
    return true;
  });
  /**
   * Add a new task to the task list. All the task values are taken from the "new task"
   * inputs
   */
  _defineProperty(this, "addTask", function () {
    var _taskTextInput$value$, _taskTextInput$value;
    var taskTextInput = document.getElementById('addTask');
    var taskText = (_taskTextInput$value$ = taskTextInput === null || taskTextInput === void 0 || (_taskTextInput$value = taskTextInput.value) === null || _taskTextInput$value === void 0 ? void 0 : _taskTextInput$value.trim()) !== null && _taskTextInput$value$ !== void 0 ? _taskTextInput$value$ : '';
    if (!taskText) {
      taskTextInput.classList.add('is-invalid');
    } else {
      taskTextInput.classList.remove('is-invalid');

      // Create a new task item
      var newTask = new _task_item_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        description: taskText,
        isComplete: false
      });
      _this._tasks.push(newTask);

      // Reload tasks and reset input field
      _this.loadTasks();
      taskTextInput.value = '';
    }
  });
  /**
   * Apply event handlers to all the task list items. Should be called after tasks are
   * loaded
   */
  _defineProperty(this, "addEventHandlers", function () {
    var checkboxes = document.querySelectorAll('input[name="toggleTaskStatus"]');
    checkboxes.forEach(function (checkbox, index) {
      checkbox.addEventListener('change', function () {
        _this.toggleTaskStatus(index);
      });
    });
    var deleteIcons = document.querySelectorAll('a[name="deleteTask"]');
    deleteIcons.forEach(function (deleteIcon, index) {
      deleteIcon.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        _this.deleteTask(index);
      });
    });
  });
  /**
   * Load all the current tasks into the DOM within the task list. Will overwrite any
   * existing content in the task list when called
   */
  _defineProperty(this, "loadTasks", function () {
    _this._tasksHtml = _this._tasks.map(function (task) {
      return task.generateTaskHtml();
    }).join('');
    var taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = _this._tasksHtml;
    _this.addEventHandlers();

    // Save the tasks to local storage
    localStorage.setItem(TASKS_KEY, JSON.stringify(_this._tasks));
  });
  /**
   * Toggle the status of a task item between complete and incomplete
   *
   * @param  {number} taskIndex The index of the task to toggle the status of
   */
  _defineProperty(this, "toggleTaskStatus", function (taskIndex) {
    if (!_this._validateIndex(taskIndex)) return;
    var task = _this._tasks[taskIndex];
    task.isComplete = !task.isComplete;

    // Re-load tasks to reflect the updated status
    _this.loadTasks();
  });
  /**
   *  Delete a task from the list
   *
   * @param  {number} taskIndex The index of the task to delete
   */
  _defineProperty(this, "deleteTask", function (taskIndex) {
    if (!_this._validateIndex(taskIndex)) return;

    // Remove the task from the array
    _this._tasks.splice(taskIndex, 1);

    // Re-load tasks to reflect the updated list
    _this.loadTasks();
  });
  // Load tasks from local storage
  var existingTasks = localStorage.getItem(TASKS_KEY);
  if (existingTasks) {
    this._tasks = JSON.parse(existingTasks).map(function (taskData) {
      return new _task_item_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskData);
    });
  }
  this.loadTasks();

  // Add event listener for the "Add Task" button
  var addTaskButton = document.getElementById('addButton');
  addTaskButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    _this.addTask();
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

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
/*!*******************************************!*\
  !*** ./docs/labs/lab4/todo-list/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_classes_todo_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/classes/todo-list.js */ "./docs/labs/lab4/todo-list/src/classes/todo-list.js");
//? Joshua Evans - 2025-04-24

window.onload = function () {
  var toDo = new _src_classes_todo_list_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  window.toDo = toDo;
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map