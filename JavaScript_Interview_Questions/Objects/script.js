console.log("Objects");

const user = {
  name: "Ashish Kumar Singh",
  age: 24,
  "working professional": true,
  level: 19,
  health: 89,
};

// delete user.age;
// console.log(user);

// Ques - 1

const func = (function (a) {
  delete a;
  return a;
})(5);

// console.log(func);

// Ques 2 - Accessing  "working professional": true, property
// delete user["working professional"];
// console.log(user["working professional"]);

// How to add dynamic values

const property = "firstName";
const name = "Ashish";
const userDetails = {
  [property]: name,
};

// console.log(userDetails.firstName);
// Iterate through keys and value
for (key in userDetails) {
  console.log("Key - ", key, " && ", "Value - ", userDetails[key]);
}

// If we have two keys with same name the key which was added at last will be considered
const data = {
  a: "one",
  b: "two",
  a: "three",
};
// console.log(data); // b:two,a:three

// Create a function which multiples all the numeric values of the object by 2
const info = {
  a: 200,
  b: 300,
  c: "Hello",
};

function myltiplyByTwo(info) {
  for (let key in info) {
    if (typeof info[key] == "number") {
      info[key] *= 2;
    }
  }
  return info;
}

// console.log(myltiplyByTwo(info));

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 234;
a[c] = 456;

// console.log(a[b]); // output - 456
// if we log a then it will print [object object]

// JSON.stringfy vs JSON.parse

const userData = {
  firstName: "Ashish Kumar Singh",
  age: 24,
};

const obj = JSON.stringify(userData);
localStorage.setItem("details", obj);

// console.log(JSON.parse(localStorage.getItem("details")));

const user1 = {
  name: "Ashish Kumar Singh",
  age: 24,
  "working professional": true,
  level: 19,
  health: 89,
};

// console.log(JSON.stringify(user1, ["age", "health"])); // this will stringify only age and health

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

// console.log(shape.diameter());
// console.log(shape.perimeter());

const user2 = {
  name: "Ashish Kumar Singh",
  age: 24,
  "working professional": true,
  level: 19,
  health: 89,
  fulldetails: {
    first: "Ashish",
    last: "Singh",
    other: {
      place: "Noida",
    },
  },
};

// To destructure nested objects
const {
  fulldetails: {
    other: { place },
  },
} = user2;

// console.log(place);

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });
// Both the above logs returns false because js compares object by reference not by value
