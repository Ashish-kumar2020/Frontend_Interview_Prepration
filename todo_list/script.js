console.log("TODO LIST");

const userInputContainer = document.querySelector(".userInput-container");
const todoDisplayContainer = document.querySelector(".todo-display-container");
const inputTodo = document.querySelector(".inputTodo");
const addTodo = document.querySelector(".addTodo");
const todoLists = document.querySelector(".todoLists");

addTodo.addEventListener("click", createTodo);

function createTodo() {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  li.innerHTML = inputTodo.value;

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(deleteBtn);
  todoLists.appendChild(li);
}
