// eslint-disable-next-line import/extensions
import { AddStore } from './modules/addstore.js';
// eslint-disable-next-line import/extensions
import {
  addToLocalStorage,
  removeFromLocalStorage,
  // eslint-disable-next-line import/extensions
} from './modules/storesave.js';
import './styles/correct.css';

const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoMenu = document.querySelector('.todo-menu');
const filterTasks = document.querySelector('.filter-tasks');
const clearButton = document.querySelector('.clear-button');
const newTask = document.createElement('li');

document.addEventListener('DOMContentLoaded', AddStore);

filterTasks.addEventListener('click', (e) => {
  const tasks = document.querySelectorAll('.todo');
  tasks.forEach((task) => {
    // eslint-disable-next-line default-case
    switch (e.target.value) {
      case 'all':
        task.style.display = 'block';
        break;
      case 'completed':
        if (task.classList.contains('completed')) {
          task.style.display = 'block';
        } else {
          task.style.display = 'none';
        }
    }
  });
});

clearButton.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.todo');
  tasks.forEach((task) => {
    if (task.classList.contains('completed')) {
      task.style.display = 'none';
    }
  });
});

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

  // Button to Edit Tasks
  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.innerHTML = '<i class="uil uil-edit"></i>';
  todoDiv.appendChild(editButton);

  // Add todoDiv to todoMenu
  todoMenu.appendChild(todoDiv);
});

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

  if (task.classList[0] === 'edit-button') {
    // const todo = task.parentElement;

    addButton.innerHTML = '<i class="uil uil-save"></i>';
    todoInput.focus();
    todoInput.removeAttribute('readonly');
    addButton.addEventListener('click', () => {
      newTask.innerText = todoInput.value;
    });
  } else {
    // todoInput.setAttribute('readonly', 'readonly');
  }
});

// Save Tasks to Local Storage
addToLocalStorage();
