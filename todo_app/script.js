console.log("Todo Web App");

document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.querySelector("#todoinput");
  const addTodoBtn = document.querySelector(".addTodoBtn");
  const todoList = document.querySelector(".todoList");

  addTodoBtn.addEventListener("click", function (e) {
    const userInput = todoInput.value;
    console.log(userInput);

    const list = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    deleteBtn.innerHTML = "Delete";
    editBtn.innerHTML = "Edit ";
    list.innerHTML = userInput;
    list.append(deleteBtn);
    list.append(editBtn);
    todoList.appendChild(list);
    todoInput.value = "";
  });
});
