const todoBtn = document.querySelector(".todo-button");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const filterDropdown = document.querySelector(".filter-todo");

todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterDropdown.addEventListener('click', filterTodo);


function addTodo(e) {
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
    completeBtn.classList.add("btn", "btn-success");
    todoDIv.appendChild(completeBtn);

    // create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("btn", "btn-danger");
    todoDIv.appendChild(deleteBtn);

    // append to list
    todoList.appendChild(todoDIv);

    // clear todo input value
    todoInput.value = "";
}


function deleteCheck(e) {
    const item = e.target;

    if (item.classList[1] === "btn-danger") {
        const todo = item.parentElement;
        // animation
        todo.classList.add("fall-down");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });

    }

    if (item.classList[1] === "btn-success") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                console.log("all");
                todo.style.display = "flex";
                break;
            case "completed":
                console.log("Completed");
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                console.log("Uncompleted");
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }

        }
    })
}