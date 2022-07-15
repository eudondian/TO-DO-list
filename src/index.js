// eslint-disable-next-line no-unused-vars
const tasks = [
  {
    description: 'center a div',
    completed: true,
    index: 1,
  },
  {
    description: 'build a submit button',
    completed: true,
    index: 2,
  },
  {
    description: 'build a form',
    completed: false,
    index: 3,
  },
];

// eslint-disable-next-line no-unused-vars
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('#todo-list');
const clearButtonDiv = document.querySelector('.clear-button');

const addTodo = (e) => {
  e.preventDefault();

  // deleteCompleted Button
  const trashButton = document.createElement('button');

  trashButton.innerHTML = '<small>Clear All Completed</small>';
  trashButton.classList.add('trash-btn');
  clearButtonDiv.appendChild(trashButton);

  // Populate the List
  // eslint-disable-next-line no-undef
  todoList.appendChild(todoDiv);
};

todoButton.addEventListener('click', addTodo);
