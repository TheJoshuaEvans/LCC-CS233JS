//? Joshua Evans - 2025-04-24
import ToDoList from './src/classes/todo-list.js';

window.onload = () => {
  const toDo = new ToDoList();
  window.toDo = toDo;
};
