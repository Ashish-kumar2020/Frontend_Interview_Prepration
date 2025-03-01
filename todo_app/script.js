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

    // Delete Todo
    deleteBtn.addEventListener("click", function () {
      list.remove();
    });

    // Edit Todo
    editBtn.addEventListener("click", function () {
      const editBox = document.createElement("input");
      editBox.type = "input";
      editBox.value = list.childNodes[0].textContent;
      const saveBtn = document.createElement("button");
      saveBtn.innerHTML = "Save";

      list.innerHTML = "";
      list.append(editBox);
      list.append(saveBtn);

      saveBtn.addEventListener("click", function () {
        list.textContent = editBox.value;
        list.append(deleteBtn);
        list.append(editBtn);
        todoInput.value = "";
      });
    });
    todoInput.value = "";
  });
});
