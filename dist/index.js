// /******/ (() => { // webpackBootstrap
// var __webpack_exports__ = {};
// const todoInput = document.querySelector('.todo-input')
// const addButton = document.querySelector('.add-button')
// const todoMenu = document.querySelector('.todo-menu')

// // document.addEventListener("DOMContentLoaded", getTodos);

// // Add Tasks
// addButton.addEventListener('click', function addTask(e){
//     e.preventDefault()

//     // Todo Div
//     const todoDiv = document.createElement('div')
//     todoDiv.classList.add('todo')

//     // li
//     const newTask = document.createElement('li')
//     newTask.innerText = todoInput.value

//     newTask.classList.add('todo-item')

//     // Add li in the Todo Div
//     todoDiv.appendChild(newTask)
//     saveLocalTodos(todoInput.value)

//     // Clear Todo Input on adding
//     todoInput.value = ''


//     // Remove Button
//     const removeButton = document.createElement('button')
//     removeButton.innerHTML = '<i class="uil uil-minus-circle"></i>'
//     removeButton.classList.add('remove-button')

//     // Add Remove button to Todo Div
//     todoDiv.appendChild(removeButton)  

//     // Add to List
//     todoMenu.appendChild(todoDiv)
    

    
// })

// // Remove Tasks
// todoMenu.addEventListener('click', function deleteTask(e){
//     const task = e.target

//     // Remove Todo
//     if(task.classList[0] === 'remove-button'){
//      const todo = task.parentElement
//      removeLocalTodos(todo)
//         todo.remove()
//     }   
// })


// function saveLocalTodos(todo){
//     // If tasks already exist in the Local Storage

//     let todos;
//     if(localStorage.getItem('todos') === null){
//       todos = []
//     }else{
//       todos = JSON.parse(localStorage.getItem('todos'))
//     }
//     todos.push(todo)
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }


//   // Retrieve Tasks from Local Storage

//   // function getTodos(){
//   //   let todos;

//   //   if(localStorage.getItem('todos') === null){
//   //     todos = []
//   //   }else{
//   //     todos = JSON.parse(localStorage.getItem('todos'))
//   //   }

//   //   todos.forEach(function(todo){
//   //  // Todo Div
//   //       const todoDiv = document.createElement('div')
//   //       todoDiv.classList.add('todo')

//   //       // li
//   //       const newTask = document.createElement('li')
//   //       newTask.innerText = todo
//   //       newTask.classList.add('todo-item')

//   //       // Add li in the Todo Div
//   //       todoDiv.appendChild(newTask)
//   //       todoInput.value = ''
        
    


//   //   // Delete Button
//   //   const removeButton = document.createElement('button')
//   //   removeButton.innerHTML = '<i class="uil uil-minus-circle"></i>'
//   //   removeButton.classList.add('remove-button')

//   //   // Add Delete button to Todo Div
//   //   todoDiv.appendChild(removeButton)  

//   //   // Add to List
//   //   todoMenu.appendChild(todoDiv)

    
//   //   })
//   // }

 

//   // Local Storage

//   function saveLocalTodos(todo){
//     // If tasks already exist in the Local Storage

//     let todos;
//     if(localStorage.getItem('todos') === null){
//       todos = []
//     }else{
//       todos = JSON.parse(localStorage.getItem('todos'))
//     }
//     todos.push(todo)
//     localStorage.setItem('todos', JSON.stringify(todos))
//   }


//   // Retrieve Tasks from Local Storage

//   // function getTodos(){
//   //   let todos;

//   //   if(localStorage.getItem('todos') === null){
//   //     todos = []
//   //   }else{
//   //     todos = JSON.parse(localStorage.getItem('todos'))
//   //   }

//   //   todos.forEach(function(todo){
//   //      // Todo Div
//   //   const todoDiv = document.createElement('div')
//   //   todoDiv.classList.add('todo')

//   //   // li
//   //   const newTodo = document.createElement('li')
//   //   newTodo.innerText = todo
//   //   newTodo.classList.add('todo-item')

//   //   // Add li in the Todo Div
//   //   todoDiv.appendChild(newTodo)

    

//   //   // Completed Button
//   //   const completedButton = document.createElement('button')
//   //   completedButton.innerHTML = '<i class="uil uil-check-circle"></i>'
//   //   completedButton.classList.add('completed-button')

//   //   // Add completed button to Todo Div
//   //   todoDiv.appendChild(completedButton)

//   //   // Delete Button
//   //   const removeButton = document.createElement('button')
//   //   removeButton.innerHTML = '<i class="uil uil-minus-circle"></i>'
//   //   removeButton.classList.add('remove-button')

//   //   // Add Delete button to Todo Div
//   //   todoDiv.appendChild(removeButton)  

//   //   // Add to List
//   //   todoMenu.appendChild(todoDiv)
//   //   })
//   // }

//   // // Delete Tasks from Local Storage
//   // function removeLocalTodos(todo){
//   //   let todos;

//   //   if(localStorage.getItem('todos') === null){
//   //     todos = []
//   //   }else{
//   //     todos = JSON.parse(localStorage.getItem('todos'))
//   //   }

//   //   const todoIndex = todo.children[0].innerText
//   //   todos.splice(todos.indexOf(todoIndex), 1)

//   //   localStorage.setItem('todos', JSON.stringify(todos))
//   // }



  

// /******/ })()
// ;