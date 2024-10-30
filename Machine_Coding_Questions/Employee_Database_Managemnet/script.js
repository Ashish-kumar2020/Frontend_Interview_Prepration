console.log("Employee database Management");

(async function () {
  const data = await fetch("./data.json");
  const res = await data.json();

  let employee = res;
  let selectedEmployeeId = employee[0].id;
  let selectedEmployee = employee[0];
  let employeeNameList = document.getElementById("employeeNameList");
  let singleEmployeedetails = document.getElementById("singleEmployeedetails");

  let addNewEmployee = document.getElementById("addNewEmployee");
  const addEmployeeForm = document.querySelector(".addEmployee_create");

  //   Render All the employeess
  const renderEmployee = () => {
    employeeNameList.innerHTML = "";
    employee.forEach((emp) => {
      const employess = document.createElement("span");
      employess.classList.add("emplyeeName");
      if (parseInt(selectedEmployeeId, 10) === emp.id) {
        employess.classList.add("selected");
        selectedEmployee = emp;
      }
      employess.setAttribute("id", emp.id);
      employess.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;

      employeeNameList.append(employess);
    });
  };

  // Select an employee
  employeeNameList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployee();
      displayDetailsSingleEmployee();
      console.log(selectedEmployee);
    }
  });

  // Dispaly Selected Employee Details
  const displayDetailsSingleEmployee = () => {
    singleEmployeedetails.innerHTML = `
    <img src="${selectedEmployee.imageUrl}"/>
    <span class="singleemplyeeName">
        ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
        </span>
        <span class="singleemplyeeName">${selectedEmployee.address}</span>
        <span class="singleemplyeeName">${selectedEmployee.email}</span>
        <span class="singleemplyeeName">Mobile - ${selectedEmployee.contactNumber}</span>
        <span class="singleemplyeeName"> DOB - ${selectedEmployee.dob}</span>
        <button id="editBtn">Edit</button>
        `;
    document.getElementById("editBtn").addEventListener("click", editDetails);
  };

  // Edit details
  const editDetails = () => {
    singleEmployeedetails.innerHTML = `
      <img src="${selectedEmployee.imageUrl}" alt="Employee Image"/>
      <input type="text" value="${selectedEmployee.firstName}" id="editFirstName"/>
      <input type="text" value="${selectedEmployee.lastName}" id="editLastName"/>
      <input type="text" value="${selectedEmployee.address}" id="editAddress"/>
      <input type="email" value="${selectedEmployee.email}" id="editEmail"/>
      <input type="number" value="${selectedEmployee.contactNumber}" id="editContactNumber"/>
      <input type="date" value="${selectedEmployee.dob}" id="editDOB"/>
      <button id="saveBtn" onClick="saveDetails()">Save</button>
      <button id="cancelBtn" onClick="displayDetailsSingleEmployee()">Cancel</button>
    `;
    document.getElementById("saveBtn").addEventListener("click", saveDetails);
    document
      .getElementById("cancelBtn")
      .addEventListener("click", displayDetailsSingleEmployee);
  };

  const saveDetails = () => {
    console.log("save details");
    selectedEmployee.firstName = document.getElementById("editFirstName").value;
    selectedEmployee.lastName = document.getElementById("editLastName").value;
    selectedEmployee.address = document.getElementById("editAddress").value;
    selectedEmployee.email = document.getElementById("editEmail").value;
    selectedEmployee.contactNumber =
      document.getElementById("editContactNumber").value;
    selectedEmployee.dob = document.getElementById("editDOB").value;
    displayDetailsSingleEmployee();
    renderEmployee();
  };
  // Add New Emplyee

  addNewEmployee.addEventListener("click", () => {
    console.log("New Employee Added");
    addEmployeeForm.style.display = "block";
  });

  addEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(addEmployeeForm);
    let values = [...formData.entries()];
    let empData = {};
    console.log("Values", values);
    values.forEach((val) => {
      empData[val[0]] = val[1];
    });
    empData.id = employee[employee.length - 1].id + 1;
    empData.age =
      new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10);
    empData.imageUrl =
      empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";
    console.log(empData);
    employee.push(empData);
    renderEmployee();
    addEmployeeForm.reset();
    addEmployeeForm.style.display = "none";
  });

  renderEmployee();
  if (selectedEmployee) displayDetailsSingleEmployee();
})();
