console.log("Output");

let greeting;
greetign = {}; // Typo!
// console.log(greetign);

function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
// console.log(bark.animal);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// console.log(member.getFullName());

const user = {
  name: "ashish",
};

// console.log(user);
let number = 0;
// console.log(++number);
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
