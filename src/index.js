// eslint-disable-next-line import/extensions
import { AddStore } from './modules/addstore.js';
import {
  addToLocalStorage,
  removeFromLocalStorage,
  // eslint-disable-next-line import/extensions
} from './modules/storesave.js';

const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoMenu = document.querySelector('.todo-menu');
const filterOption = document.querySelector('.filter-todo');

// eslint-disable-next-line no-use-before-define
filterOption.addEventListener('click', filterTodo);

document.addEventListener('DOMContentLoaded', AddStore);

// Function to Add Tasks
addButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create New li
  const newTask = document.createElement('li');
  newTask.innerText = todoInput.value;

  newTask.classList.add('todo-item');

  // Add the new li to todoDiv
  todoDiv.appendChild(newTask);
  addToLocalStorage(todoInput.value);

  // Clear Todo Input after adding Tasks
  todoInput.value = '';

  // Button to handle completed Tasks
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="uil uil-check-circle"></i>';
  completedButton.classList.add('completed-button');
  todoDiv.appendChild(completedButton);

  // Button to Remove Tasks
  const removeButton = document.createElement('button');
  removeButton.innerHTML = '<i class="uil uil-minus-circle"></i>';
  removeButton.classList.add('remove-button');

  // Add Remove button to Todo Div
  todoDiv.appendChild(removeButton);

  // Add todoDiv to todoMenu
  todoMenu.appendChild(todoDiv);
});

function filterTodo(e) {
  const todos = todoMenu.children[0];
  todos.forEach((todo) => {
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
    }
  });
}

// Delete Tasks
todoMenu.addEventListener('click', (e) => {
  const task = e.target;

  if (task.classList[0] === 'remove-button') {
    const todo = task.parentElement;
    removeFromLocalStorage(todo);
    todo.remove();
  }

  if (task.classList[0] === 'completed-button') {
    const todo = task.parentElement;
    todo.classList.toggle('completed');
  }
});

// Save Tasks to Local Storage
addToLocalStorage();
