console.log("Bg color changer");

const colors = ["red", "yellow", "black", "purple", "green", "blue", "orange"];

const colorContainer = document.querySelector(".colorContainer");

function createColorButton(color) {
  const colorBtn = document.createElement("button");
  colorBtn.id = color;
  colorBtn.textContent = color;
  Object.assign(colorBtn.style, {
    backgroundColor: color,
    marginRight: "10px",
    marginTop: "10px",
    cursor: "pointer",
    width: "60px",
    height: "30px",
    borderRadius: "20px",
    border: "none",
    fontWeight: "bold",
    textTransform: "capitalize",
    cursor: "pointer",
  });

  if (color === "yellow") {
    colorBtn.style.color = "black";
  } else {
    colorBtn.style.color = "fff";
  }

  colorBtn.addEventListener("click", () => changeBackgroundColor(color));
  return colorBtn;
}

colors.forEach((color) => colorContainer.appendChild(createColorButton(color)));

function changeBackgroundColor(color) {
  console.log(color);
  document.body.style.backgroundColor = color;
}
