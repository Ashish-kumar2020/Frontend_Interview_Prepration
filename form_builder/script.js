console.log("Form Builder");

const formSelectionContainer = document.querySelector(
  ".form-selection-container"
);
const submitBtn = document.querySelector(".submitBtn");
const formDisplayContainer = document.querySelector(".form-display-container");

const inputTypes = [
  { value: "text", text: "Text" },
  { value: "password", text: "Password" },
  { value: "email", text: "Email" },
  { value: "telephone", text: "Telephone" },
  { value: "url", text: "URL" },
  { value: "search", text: "Search" },
  { value: "number", text: "Number" },
];

const formData = {};

function createInputSelector(selectorName) {
  // Prevent duplicate input fields
  if (document.getElementById(selectorName)) return;

  const inputElParent = document.createElement("div");
  inputElParent.id = selectorName;
  inputElParent.style.marginBottom = "15px";
  const inputEle = document.createElement("input");
  const label = document.createElement("label");

  inputEle.type = selectorName;
  inputEle.placeholder = `Enter your ${
    selectorName.charAt(0).toUpperCase() + selectorName.slice(1)
  }`;

  label.textContent = selectorName;
  label.setAttribute("for", selectorName);

  inputEle.addEventListener("input", (event) => {
    formData[selectorName] = event.target.value;
  });

  inputElParent.append(label, inputEle);
  formSelectionContainer.appendChild(inputElParent);
}

function selectInputType() {
  // Prevent duplicate headings
  if (!document.querySelector(".field-heading")) {
    const h3 = document.createElement("h3");
    h3.innerText = "Select Field Type";
    h3.classList.add("field-heading");
    formSelectionContainer.appendChild(h3);
  }

  // Prevent duplicate dropdown
  if (document.getElementById("field-selector")) return;

  const select = document.createElement("select");
  select.id = "field-selector";

  inputTypes.forEach((type) => {
    const option = document.createElement("option");
    option.textContent = type.text;
    option.value = type.value;
    select.appendChild(option);
  });

  select.addEventListener("change", (event) => {
    createInputSelector(event.target.value);
  });

  formSelectionContainer.appendChild(select);
}

submitBtn.addEventListener("click", () => {
  console.log(formData);

  // Clear previous display data
  formDisplayContainer.innerHTML = "<h2>Form Preview</h2>";

  Object.entries(formData).forEach(([key, value]) => {
    const displayDiv = document.createElement("div");
    displayDiv.style.padding = "10px";
    displayDiv.style.background = "#f4f4f4";
    displayDiv.style.margin = "10px 0";
    displayDiv.style.borderRadius = "8px";

    const displayKey = document.createElement("h3");
    displayKey.style.color = "#007bff";
    displayKey.textContent = key;

    const displayValue = document.createElement("p");
    displayValue.textContent = value;

    displayDiv.append(displayKey, displayValue);
    formDisplayContainer.appendChild(displayDiv);
  });
});

selectInputType();
