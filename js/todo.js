const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList =document.querySelector("#todo-list");

const TODOS_KEY="todos";
let toDos =[];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
};

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter ( toDo => toDo.id !== parseInt(li.id) );
    saveTodos();
  };


function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    const btn = document.createElement("button");
    const img = document.createElement("img");
    

    const trashImg ="trash.png";
    // btn.innerText="✂️"
    // 버튼 대신 이미지로 대체함
    img.src=`./todo/${trashImg}`;
    
    img.addEventListener("click",deleteTodo);
    li.appendChild(span);
    // li.appendChild(btn);
    li.appendChild(img);
    todoList.appendChild(li);
};


function handleTodo(event){
    event.preventDefault(); 
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj ={
        text:newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
};

todoForm.addEventListener("submit",handleTodo);



const insideTodos = localStorage.getItem(TODOS_KEY);

if(insideTodos !== null){
    const parsedTodos = JSON.parse(insideTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}