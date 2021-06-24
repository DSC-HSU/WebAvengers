let todo = {
    title: "Your todo",
    description: ""
}

// 

// [Add] ToDoContainer
let addToDoTitle = document.getElementById("addToToTitle");
let addToDoButton = document.getElementById("addToDoButton");

// [View] ToDoContainer
let viewToDoContainer = document.getElementById("viewToDoContainer")



function getToDoData() {
    let todoData = {
        title: addToDoTitle.value,
    }
    return todoData;
}

function saveToDo(toDoData) {
    islocalStorageExist();
    let oldToDoList = JSON.parse(localStorage.getItem("toDoList"));
    // [{},{}]
    oldToDoList.push(toDoData)
    let newToDoList = oldToDoList
    localStorage.setItem("toDoList", JSON.stringify(newToDoList))
}

function renderToDo() {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    for (let index = 0; index < toDoList.length; index++) {
        // Div tag with class = toDoView
        let toDoView = document.createElement("div")
        toDoView.className = "toDoView"
        //----

        // h3 tag
        let todoTitle = document.createElement("h3")
        todoTitle.innerText = toDoList[index].title;
        //

        // button
        let removeToDoButton = document.createElement('button');
        //
        // Get Data from JSON
        removeToDoButton.innerHTML = "X"
        removeToDoButton.onclick = function () {
            removeToDo(index)
        }

        // Add toDoTitle and removeButton to ToDoView
        toDoView.appendChild(todoTitle);
        toDoView.appendChild(removeToDoButton)

        // Atach toDo to viewToDoContainer

        viewToDoContainer.appendChild(toDoView)
    }
}

function removeToDo(index) {
    console.log(index)
    let oldToDoList = JSON.parse(localStorage.getItem("toDoList"));
    oldToDoList.splice(index, 1)
    let newToDoList = oldToDoList
    console.log(newToDoList)
    localStorage.setItem("toDoList", JSON.stringify(newToDoList))
    clearToDo();
    renderToDo();
}

function clearToDo() {
    while (viewToDoContainer.firstChild) {
        let child = viewToDoContainer.firstChild;
        viewToDoContainer.removeChild(child)
    }
}

function islocalStorageExist() {
    if (localStorage.getItem("toDoList") == null) {
        localStorage.setItem("toDoList", JSON.stringify([]))
    }
}
islocalStorageExist()
renderToDo();


addToDoButton.onclick = function () {
    saveToDo(getToDoData())
    clearToDo();
    renderToDo();
}
