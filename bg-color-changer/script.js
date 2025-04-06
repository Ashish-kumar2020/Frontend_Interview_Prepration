console.log("Bg color changer");

const colors = ["red", "yellow", "black", "purple", "green", "blue", "orange"];

const colorContainer = document.querySelector(".colorContainer");

colors.forEach((color) => {
  const colorBtn = document.createElement("button");
  colorBtn.setAttribute("id", color);
  colorBtn.innerHTML = color;
  colorBtn.style.backgroundColor = color;
  colorBtn.style.marginRight = "20px";
  colorBtn.style.marginTop = "10px";
  colorBtn.style.cursor = "pointer";
  colorBtn.style.width = "60px";
  colorBtn.style.height = "30px";
  colorBtn.style.borderRadius = "20px";
  colorBtn.addEventListener("click", function () {
    changeBackgroundColor(color);
  });
  colorContainer.appendChild(colorBtn);
});

function changeBackgroundColor(color) {
  console.log(color);
  document.querySelector("body").style.backgroundColor = color;
}
