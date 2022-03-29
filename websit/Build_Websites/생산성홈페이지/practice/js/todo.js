const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("ul#todo-list");
const todoBtn = toDoList.button;
const toDoinput = toDoForm.querySelector("input")
const TODO_KEY = "thingsToDo"
let ToDoArray = []
// function addToDoList (event) { 강의 듣기 전에 짠거 ㅋㅋ
//     event.preventDefault();
//     const toDos = document.createElement("li");
//     const newTodo = toDoinput.value;
//     toDos.innerText = newTodo;
//     toDoList.appendChild(toDos);
//     const X_button = document.createElement("button");
    
//     X_button.innerText = "✖";
//     X_button.type = "button";
    
//     toDos.appendChild(X_button);
//     ToDoListValue.push(newTodo);
//     const listNum = ToDoListValue.length;
//     X_button.id = `${listNum}`;
//     localStorage.setItem(TODO_KEY,ToDoListValue);
//     toDoinput.value = "";
// }

// function removeToDoList (event) {
//     event.path[1].remove(); 
// }

function saveToDo () {
    localStorage.setItem(TODO_KEY,JSON.stringify(ToDoArray));
    // ARRAY 형태로 저장할 수 없으니 일단 STR 형식으로 바꾸고,,
}

function appendToDo (newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText =newTodo.text+" ";
    const removeBtn = document.createElement("button")
    removeBtn.innerText = "✖";
    li.appendChild(span); //todo 삭제 기능 추가를 위해 span 추가
    li.appendChild(removeBtn);
    toDoList.append(li);

}


function handleToDoSubmit (event) {  // 왜 add 기능과 handle 기능으로 나눌까?
    event.preventDefault();
    const newTodo = toDoinput.value;
    toDoinput.value = "" // 위의 변수는 이미 저장되므로 상관 x
    const newTodoObj = {
        text : newTodo,
        id: Date.now(),
    };
    ToDoArray.push(newTodoObj); // local storage에는 str 형태만 가능.. array 자체를 저장시킬 수 없다
    appendToDo(newTodoObj);
    saveToDo(newTodo);  
}


function removeToDoList (event) {
    if (event.path[0].innerText=="✖") { // btn을 클릭하는게 아니라 list 영역을 만져도 지워지길래, 
        const li = event.target.parentNode;
        console.log(li);
        li.remove();
        ToDoArray = ToDoArray.filter((toDo) => toDo.id !== parseInt(li.id));
        saveToDo();
    }
}


// function sayHello() {
//     console.log("hello")
// }

toDoList.addEventListener("click",removeToDoList)
toDoForm.addEventListener("submit",handleToDoSubmit);

const saveToDos = localStorage.getItem(TODO_KEY);

if (saveToDos !== null) {
    const parsedToDos = JSON.parse(saveToDos);
    ToDoArray = parsedToDos;
    parsedToDos.forEach(appendToDo);

    // 함수로 넘겨줄 때 event 처럼 item값도 같이 넘겨짐
    // shortcut -> foreach((item) => console.log("hello",item))
    // arrow function!
}


