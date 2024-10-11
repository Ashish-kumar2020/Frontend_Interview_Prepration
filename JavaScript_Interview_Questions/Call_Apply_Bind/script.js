console.log("Call Apply Bind");

// Call && Apply

let obj = {
  name: "Ashish",
};

function getName(age, profession) {
  console.log("Hello " + this.name + age + profession);
}

// console.log(getName.call(obj, 24));

// Apply

getName.apply(obj, [24, "Frontend developer"]);
