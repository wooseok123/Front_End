const toDoForm = document.querySelector("#todo-form");
const toDoList = toDoForm.querySelector("ul");
const toDoinput = toDoForm.querySelector("input")
const TODO_KEY = "thingsToDo"
const ToDoListValue = []
function addToDoList (event) {
    console.log(event)
    event.preventDefault();
    const toDos = document.createElement("li");
    toDos.innerText = toDoinput.value;
    toDoList.appendChild(toDos)
    const X_button = document.createElement("button");
    X_button.innerText = "✖";
    X_button.type = "button";
    toDos.appendChild(X_button);
    ToDoListValue.push(toDoinput.value);
    localStorage.setItem(TODO_KEY,ToDoListValue);
    toDoinput.value="";

}

function removeToDoList (event) {
    console.log(event);
}



const savedToDos = localStorage.getItem(TODO_KEY);


toDoList.addEventListener("click",removeToDoList);
toDoForm.addEventListener("submit",addToDoList);

