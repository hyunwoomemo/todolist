const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const allDelete = document.querySelector("#all-delete");
const toDoLength = document.querySelector("#todo-length");
const addFunction = document.querySelector(".addfunction");
const header = document.querySelector("#header");
const doneList = document.querySelector("#done-list");

const seconds = 1;
const minute = seconds * 60;
const hour = minute * 60;
const day = hour * 24;

function handleAllDelete() {
    toDoList.remove();
    localStorage.removeItem("todos");
    location.reload();
}
allDelete.addEventListener("click", handleAllDelete)

let toDos = [];
let dones = [];

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDoInput.value = "";
    toDos.push(newToDoObj);
    dones.push(newToDoObj);
    paintToDo(newToDoObj);
/*     paintDone(newToDoObj); */
    saveToDos();
/*     saveDones(); */
    addFunction.classList.remove("hidden");
    toDoLength.innerText = `${toDos.length}`;
    toDoLength.classList.add("todo-lengthstyle");
    header.appendChild(greeting);
    greeting.classList.add("greetingmove");
}


function moveDeleteBtn(event) {
    const li = event.target.parentElement;
    li.classList.add("parent");
};
function leaveDeleteBtn(event) {
    const parent = event.target.parentElement;
    parent.classList.remove("parent");
};

function handleDoneBtn() {
    li.classList.add("nottodo");
}

function paintToDo(newToDo) {
    const date = document.createElement("p");
    const dateText = new Date(newToDo.id);
    const dateMonth = String(dateText.getMonth()+1).padStart(2,"0");
    const dateDate = String(dateText.getDate()).padStart(2,"0");
    const dateHours = String(dateText.getHours()).padStart(2,"0");
    const dateMinutes = String(dateText.getMinutes()).padStart(2,"0");
    date.innerText = `${dateMonth}월 ${dateDate}일 ${dateHours}:${dateMinutes}`;
    const li = document.createElement("li");
    li.classList.add("fadein");
    li.classList.add("todo");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const done = document.createElement("button");
/*     done.innerText = "✅" */
    const button = document.createElement("button");
    button.innerText = "❌";
    const p = document.createElement("p");
    p.innerText = elapsed();
    function elapsed(){
        const today = new Date();
        const elapsedTime = Math.trunc((today.getTime()-li.id) / 1000);
        let elapsedText ="";
        if (elapsedTime < seconds) {
            elapsedText = "방금 전";
        } else if (elapsedTime < minute) {
            elapsedText = elapsedTime + "초 전";
        } else if (elapsedTime < hour) {
            elapsedText = Math.trunc(elapsedTime / minute) + "분 전";
        } else if (elapsedTime < day) {
            elapsedText = Math.trunc(elapsedTime / hour) + "시간 전";
        } else if (elapsedTime < (day * 15)) {
            elapsedText = Math.trunc(elapsedTime / day) + "일 전";
        };
    p.innerText = `${elapsedText}`;
    }
    elapsed();
    setInterval(elapsed,1000);
    button.addEventListener("click", deleteToDo);
    button.addEventListener("mousemove", moveDeleteBtn);
    button.addEventListener("mouseleave", leaveDeleteBtn);


    done.addEventListener("click", handleDoneBtn)
    li.appendChild(date);
    li.appendChild(button);
    li.appendChild(done);
    li.appendChild(span);
    li.appendChild(p);
    toDoList.appendChild(li); 
    date.classList.add("li-date");
    button.classList.add("li-btn");
    done.classList.add("li-done");
    span.classList.add("li-span");
    p.classList.add("li-p");
    function handleDoneBtn() {
        dones.push(newToDo);
        paintDone(newToDo);
        saveDones();
    }
}



function paintDone(newToDo) {
    const date = document.createElement("p");
    const dateText = new Date(newToDo.id);
    date.innerText = `${dateText.getMonth()+1}월 ${dateText.getDate()}일 ${dateText.getHours()}:${dateText.getMinutes()}`;
    const li = document.createElement("li");
    li.classList.add("fadein");
    li.classList.add("todo");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
/*     const done = document.createElement("button");
    done.innerText = "✅" */
    const button = document.createElement("button");
    button.innerText = "❌";
    const p = document.createElement("p");
    p.innerText = elapsed();
    function elapsed(){
        const today = new Date();
        const elapsedTime = Math.trunc((today.getTime()-li.id) / 1000);
        let elapsedText ="";
        if (elapsedTime < seconds) {
            elapsedText = "방금 전";
        } else if (elapsedTime < minute) {
            elapsedText = elapsedTime + "초 전";
        } else if (elapsedTime < hour) {
            elapsedText = Math.trunc(elapsedTime / minute) + "분 전";
        } else if (elapsedTime < day) {
            elapsedText = Math.trunc(elapsedTime / hour) + "시간 전";
        } else if (elapsedTime < (day * 15)) {
            elapsedText = Math.trunc(elapsedTime / day) + "일 전";
        };
    p.innerText = `${elapsedText}`;
    }
    elapsed();
    setInterval(elapsed,1000);
    button.addEventListener("click", deleteToDo);
    button.addEventListener("mousemove", moveDeleteBtn);
    button.addEventListener("mouseleave", leaveDeleteBtn);
    li.appendChild(date);
    li.appendChild(button);
    li.appendChild(span);
    li.appendChild(p);
    date.classList.add("li-date");
    button.classList.add("li-btn");
    span.classList.add("li-span");
    p.classList.add("li-p");
}

function deleteToDo(event) {
    console.dir(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    toDoLength.innerText = `${toDos.length}`;
    toDoLength.classList.add("todo-lengthstyle");
}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function saveDones() {
    localStorage.setItem("dones", JSON.stringify(dones));
}



const savedToDos = localStorage.getItem("todos");

if( savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo);
    addFunction.classList.remove("hidden");
    toDoLength.innerText = `${toDos.length}`;
    toDoLength.classList.add("todo-lengthstyle");
};
toDoForm.addEventListener("submit", handleToDoSubmit);


