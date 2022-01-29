const todoBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener('click',addTodo);


function addTodo(e){
    e.preventDefault();
    console.log("todo-added");   
}