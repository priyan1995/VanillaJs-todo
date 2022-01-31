const todoBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);



function addTodo(e){
    e.preventDefault();

    // todo div creation
    const todoDIv = document.createElement("div");
    todoDIv.classList.add("todo");

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
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

    // clear todo input value
    todoInput.value = "";
}


function deleteCheck(e){
    const item = e.target;

    if(item.classList[1] === "btn-danger"){
        const todo = item.parentElement;
        // animation
        todo.classList.add("fall-down");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
        
    }

    if(item.classList[1] === "btn-success"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}