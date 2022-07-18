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
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoInput.value = '';

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="uil uil-check-circle"></i>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="uil uil-minus-circle"></i>';
    removeButton.classList.add('remove-button');
    todoDiv.appendChild(removeButton);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="uil uil-edit"></i>';
    editButton.classList.add('edit-button');
    todoDiv.appendChild(editButton);

    // attach final Todo
    todoMenu.appendChild(todoDiv);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { AddStore };
