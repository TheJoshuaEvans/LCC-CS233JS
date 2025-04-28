//? Joshua Evans - 2025-04-24
import TaskItem from './task-item.js';

const TASKS_KEY = 'tasks';

/**
 * Class representing a to-do list, the core functionality of the to-do list app
 */
class ToDoList {
  // ---- PROPERTIES ----
  _tasksHtml = '';

  /**
   * @private
   * The actual list of tasks
   */
  _tasks = [
    new TaskItem({description: 'Go to Dentist', isComplete: false}),
    new TaskItem({description: 'Do Gardening', isComplete: true}),
    new TaskItem({description: 'Renew Library Account', isComplete: false}),
  ];

  // ---- METHODS ----
  /**
   * @private
   * Internal helper method validates the index of a task in the task list
   *
   * @param {number} taskIndex The index of the task to validate
   * @returns True if the index is valid, false otherwise
   */
  _validateIndex = (taskIndex) => {
    if (taskIndex < 0 || taskIndex >= this._tasks.length) {
      console.error('Invalid task index:', taskIndex);
      return false;
    }
    return true;
  };

  /**
   * Add a new task to the task list. All the task values are taken from the "new task"
   * inputs
   */
  addTask = () => {
    const taskTextInput = document.getElementById('addTask');
    const taskText = taskTextInput?.value?.trim() ?? '';

    if (!taskText) {
      taskTextInput.classList.add('is-invalid');
    } else {
      taskTextInput.classList.remove('is-invalid');

      // Create a new task item
      const newTask = new TaskItem({description: taskText, isComplete: false});
      this._tasks.push(newTask);

      // Reload tasks and reset input field
      this.loadTasks();
      taskTextInput.value = '';
    }
  };

  /**
   * Apply event handlers to all the task list items. Should be called after tasks are
   * loaded
   */
  addEventHandlers = () => {
    const checkboxes = document.querySelectorAll('input[name="toggleTaskStatus"]');
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('change', () => {
        this.toggleTaskStatus(index);
      });
    });

    const deleteIcons = document.querySelectorAll('a[name="deleteTask"]');
    deleteIcons.forEach((deleteIcon, index) => {
      deleteIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        this.deleteTask(index);
      });
    });
  };

  /**
   * Load all the current tasks into the DOM within the task list. Will overwrite any
   * existing content in the task list when called
   */
  loadTasks = () => {
    this._tasksHtml = this._tasks.map(task => task.generateTaskHtml()).join('');

    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = this._tasksHtml;

    this.addEventHandlers();

    // Save the tasks to local storage
    localStorage.setItem(TASKS_KEY, JSON.stringify(this._tasks));
  };

  /**
   * Toggle the status of a task item between complete and incomplete
   *
   * @param  {number} taskIndex The index of the task to toggle the status of
   */
  toggleTaskStatus = (taskIndex) => {
    if (!this._validateIndex(taskIndex)) return;

    const task = this._tasks[taskIndex];
    task.isComplete = !task.isComplete;

    // Re-load tasks to reflect the updated status
    this.loadTasks();
  };

  /**
   *  Delete a task from the list
   *
   * @param  {number} taskIndex The index of the task to delete
   */
  deleteTask = (taskIndex) => {
    if (!this._validateIndex(taskIndex)) return;

    // Remove the task from the array
    this._tasks.splice(taskIndex, 1);

    // Re-load tasks to reflect the updated list
    this.loadTasks();
  };

  // ---- BUILT-INS ----
  constructor() {
    // Load tasks from local storage
    const existingTasks = localStorage.getItem(TASKS_KEY);
    if (existingTasks) {
      this._tasks = JSON.parse(existingTasks).map(taskData => new TaskItem(taskData));
    }

    this.loadTasks();

    // Add event listener for the "Add Task" button
    const addTaskButton = document.getElementById('addButton');
    addTaskButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      this.addTask();
    });
  }
}

export default ToDoList;
