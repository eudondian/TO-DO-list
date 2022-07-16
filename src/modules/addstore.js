const todoInput = document.querySelector('.todo-input');
const todoMenu = document.querySelector('.todo-menu');

const AddStore = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach((todo) => {
    // Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoInput.value = '';
    // Create Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="uil uil-check-circle"></i>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);
    // Create trash button
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="uil uil-minus-circle"></i>';
    removeButton.classList.add('remove-button');
    todoDiv.appendChild(removeButton);
    // attach final Todo
    todoMenu.appendChild(todoDiv);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { AddStore };
