console.log("TODO LIST");

const userInputContainer = document.querySelector(".userInput-container");
const todoDisplayContainer = document.querySelector(".todo-display-container");
const inputTodo = document.querySelector(".inputTodo");
const addTodo = document.querySelector(".addTodo");
const todoLists = document.querySelector(".todoLists");

addTodo.addEventListener("click", createTodo);

function createTodo() {
  if (inputTodo.value.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  editBtn.innerText = "Edit";
  deleteBtn.id = inputTodo.value;
  editBtn.id = inputTodo.value;
  li.innerHTML = inputTodo.value;

  //   Delete Functionality
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  //   edit Functionality

  editBtn.addEventListener("click", () => {
    editTodo(li);
  });
  inputTodo.value = "";
  li.append(deleteBtn, editBtn);

  todoLists.appendChild(li);
}

function editTodo(li) {
  const currentText = li.firstChild.textContent;
  console.log(currentText);
  const deleteBtn = li.querySelector("button:nth-of-type(1)");
  const editBtn = li.querySelector("button:nth-of-type(2)");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  const inputEle = document.createElement("input");
  inputEle.type = "text";
  inputEle.value = currentText;

  li.innerHTML = "";
  li.appendChild(inputEle);
  li.appendChild(saveBtn);
  saveBtn.addEventListener("click", () => {
    if (inputEle.value.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    li.innerHTML = inputEle.value;
    li.append(deleteBtn, editBtn);
  });
}
