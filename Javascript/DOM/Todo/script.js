console.log("Todo List");

//Add Todo

function addTodo() {
  const inputtodo = document.querySelector(".inputtodo");
  const inputValue = inputtodo.value;
  const parentUl = document.querySelector(".todolist");
  const li = document.createElement("li");
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit Todo";
  editBtn.addEventListener("click", editTodo);

  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", deleteTodo);
  deleteBtn.textContent = "Delete Todo";
  const todoNode = document.createTextNode(inputValue);
  li.appendChild(todoNode);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  parentUl.appendChild(li);
  inputtodo.value = "";
}

function editTodo(event) {
  console.log("Edit Todo", event);
  const edittodo = event.target.parentElement;
  console.log(edittodo.firstChild.textContent);

  const updatedTodo = prompt("Update your todo");
  console.log(updatedTodo);
  edittodo.firstChild.textContent = updatedTodo;
}
function deleteTodo(event) {
  console.log("Delete Todo", event);
  const deletetodo = event.target.parentElement;
  deletetodo.remove();
}
