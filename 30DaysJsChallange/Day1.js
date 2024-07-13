// Varibale and Data types
/*
    Activity 1: Variable Declaration
    Task 1: Declare a variable using let, assign it a number, and log the value to the console.
    Task 2: Declare a variable using const, assign it a string, and log the value to the console
*/

//Task 1
let age = 24;
// console.log(age);

// Task 2
const name = "Ashish Kumar Singh";
// console.log(name);

//Activity 2: Constant Declaration
//sTask 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const isFanOn = true;
// console.log(isFanOn);

/*
Activity 3: Data Types
Task 4: Create variables of different data types (number, string, boolean, object, array) and log each varia
*/

let score = 20;
let userName = "Ashish Kumar SIngh";
let isUservalid = true;
let userDetail = {
  username: "Ashihs",
  currentage: 24,
};
let details = ["Ashish", 24, "PP"];

// console.log(typeof score);
// console.log(typeof userName);
// console.log(typeof isUservalid);
// console.log(typeof userDetail);
// console.log(typeof details);

/*
    Activity 4: Reassigning Variables
    Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values the console
*/

let notes = "dsa";
notes = "javascript";

// console.log(notes);

/*
    Activity 5: Understanding
    Task 6: Try reassigning a variable declared with const and observe the error.
*/

const note = "dsa";
note = "js";
console.log(note); // We can note reassign value to const variable
