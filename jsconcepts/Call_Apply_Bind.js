// Call: This uses the concept of function bowering

let name1 = {
  firstName: "Ashish",
  lastName: "Singh",
};

let printFullName = function (hometown, district, state) {
  console.log(this.firstName, this.lastName, hometown, district, state);
};

printFullName.call(name1, "Nehtaur", "Bijnor", "UP");

// Apply: the main difference between call and apply is of how we are passing the argumnets

let name2 = {
  firstName: "Singh",
  lastName: "Kumar",
};

printFullName.apply(name2, ["Dhampur", "Bijnor", "Uttar Pradesh"]);

// Bind : It is also same as the call method, the differnce is instead of directly calling the function, the bind methods bind the object with the function and returns a copy of that method

let printName = printFullName.bind(name1, "Rugri", "Bijnor", "UP");

printName();
