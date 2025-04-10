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
  deleteBtn.classList.add("delete-btn");
  editBtn.classList.add("edit-btn");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  buttonContainer.append(editBtn, deleteBtn);

  li.textContent = inputTodo.value;
  li.append(buttonContainer);
  todoLists.appendChild(li);

  deleteBtn.addEventListener("click", () => li.remove());
  editBtn.addEventListener("click", () => editTodo(li, buttonContainer));

  inputTodo.value = "";
}

function editTodo(li, buttonContainer) {
  const currentText = li.firstChild.textContent;

  const inputEle = document.createElement("input");
  inputEle.type = "text";
  inputEle.value = currentText;
  inputEle.classList.add("inputTodo");

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.classList.add("save-btn");

  li.innerHTML = "";
  li.appendChild(inputEle);
  li.appendChild(saveBtn);

  saveBtn.addEventListener("click", () => {
    if (inputEle.value.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    li.textContent = inputEle.value;
    li.append(buttonContainer);
  });
}
