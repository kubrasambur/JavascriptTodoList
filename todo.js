
let addButton = document.querySelector('#add');
addButton.addEventListener('click', todoHandler)

function todoHandler(e) {
    e.preventDefault();
    const TODO = document.querySelector("#score");
    console.log(TODO.value)
    if (TODO.value) {
        addItem(TODO.value);
        TODO.value = "";
    }
    else {
        alert("Lütfen bir todo giriniz");
    }
    //todo.innerHTML = todoList.value;
}
const todoList = document.querySelector('#list');


const addItem = (todo) => {
    let li = document.createElement("li");
    li.innerHTML = `${todo} `
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.className = "deleteButton"
    li.append(button);
    button.addEventListener("click", deleteHandler);

    todoList.append(li);
}

function deleteHandler(e) {
    e.preventDefault();
    console.log("first")
    todoList.removeChild(e.target.parentElement);
}