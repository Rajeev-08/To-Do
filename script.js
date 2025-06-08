let todoList = [];

window.onload=function(){
  const savedtodo=localStorage.getItem('todolist');
  if (savedtodo){
    todoList=JSON.parse(savedtodo);
  }
  display();
};

display();

function saveTodo(){
  localStorage.setItem("todolist",JSON.stringify(todoList));
}

function addTodo() {
  let inputElement = document.querySelector(".input");
  let dateEle = document.querySelector(".date");
  if (inputElement.value === "") {
    alert("enter Valid todo");
    return;
  } else if (dateEle.value === "") {
    alert("enter a valid date");
    return;
  }
  let item = inputElement.value;
  let dueDate = dateEle.value;
  todoList.push({ item, dueDate });
  saveTodo();
  inputElement.value = "";
  dateEle.value = "";
  display();
}

function display() {
  let containerEle = document.querySelector(".container");

  let html = "";
  for (let i = 0; i < todoList.length; i++) {
    html += `<div class="item">
      <div>${todoList[i].item}</div>
      <div>${todoList[i].dueDate}</div>
      <div><button class="delete" onclick="  
        todoList.splice(${i},1);
        saveTodo(); 
        display(); ">
        Delete
      </button></div>
    </div>`;
  }
  containerEle.innerHTML = html;
}
