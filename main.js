const todoBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener('click',addTodo);


function addTodo(e){
    e.preventDefault();

    // todo div creation
    const todoDIv = document.createElement("div");
    todoDIv.classList.add("todo");

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = "test";
    newTodo.classList.add("todo-item");
    todoDIv.appendChild(newTodo);

    // create Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Done";
    completeBtn.classList.add("btn","btn-success");
    todoDIv.appendChild(completeBtn);

    // create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("btn","btn-danger");
    todoDIv.appendChild(deleteBtn);

    // append to list
    todoList.appendChild(todoDIv);
}