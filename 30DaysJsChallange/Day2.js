// Operators
// for multi line comment use cmd + option + A (/*  */)
/* 
    Arithmatic Opeartions
   
    Task 1: Write a program to add two numbers and log the result to the console.
    Task 2: Write a program to subtract two numbers and log the result to the console.
    Task 3: Write a program to multiply two numbers and log the result to the console.
    Task 4: Write a program to divide two numbers and log the result to the console.
    Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console

*/

// Task 1

const addTwoNumber = (num1, num2) => {
  let result = num1 + num2;
  return { "Addition : ": result };
};

const num1 = 2;
const num2 = 3;
console.log(addTwoNumber(num1, num2));

// Task 2

const subtractTwoNumber = (num3, num4) => {
  let subResult = num4 - num3;
  return { "Subract : ": subResult };
};

const num3 = 2;
const num4 = 3;
console.log(subtractTwoNumber(num3, num4));

// Task 3

const multiplyTwoNumber = (num5, num6) => {
  let multiResult = num5 * num6;
  return { "Multiply : ": multiResult };
};

const num5 = 2;
const num6 = 3;
console.log(multiplyTwoNumber(num5, num6));

// Task 4

const divideTwoNumber = (num5, num6) => {
  let multiResult = num5 / num6;
  return { "Divide : ": multiResult };
};
console.log(divideTwoNumber(num5, num6));

// Task 5

const remainderFunc = (dividend, diviosr) => {
  if (diviosr === 0) return "Divisor can not be 0";
  let res = dividend % diviosr;
  return { "Remainder ": res };
};

console.log(remainderFunc(num1, num2));

/* 
    Activity 2: Assignment Operators
        Task 6: Use the operator to add a number to a variable and log the result to the console.
        Task 7: Use the operator to subtract a number from a variable and log the result to the console.
*/

// Task 6
const addOtherNumber = (num1, num2) => {
  return { "Using += Operator": (num1 += num2) };
};
console.log(addOtherNumber(num1, num2));

// Task 7
const subtractOtherNumber = (num1, num2) => {
  return { "Using -= Operator": (num1 -= num2) };
};
console.log(subtractOtherNumber(num1, num2));

/* 
    Activity 3: Comparison Operators
        Task 8: Write a program to compare two numbers using > and < and log the result to the console.
        Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
        Task 10: Write a program to compare two numbers using == and === and log the result to the console.
*/

// Task 8
const task8 = (num1, num2) => {
  if (num1 > num2) {
    return `Num1 : ${num1} is greater than : ${num2}`;
  } else {
    return `Num2 : ${num2} is greater than : ${num1}`;
  }
};

console.log(task8(num2, num1));

// Task 9
const task9 = (num1, num2) => {
  if (num1 >= num2) {
    return `Num1 : ${num1} is greater than equal: ${num2}`;
  } else if (num1 <= num2) {
    return `Num2 : ${num2} is lesser than equal : ${num1}`;
  }
};

console.log(task9(2, 3));

// Task 10
const task10 = (num1, num2) => {
  if (num1 === num2) {
    return "Both are equal";
  }
};

console.log(task10(3, 3));

/* 
    Activity 4: Logical Operators
        Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
        Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
        Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
*/

// Task 11
const task11 = (num1, num2) => {
  if (num1 === 3 && num2 === 4) {
    return "Both condition satisfies";
  } else {
    return "No condition satisfies";
  }
};

console.log(task11(3, 4));

// Task 12
const task12 = (num1, num2) => {
  if (num1 === 3 && num2 === 4) {
    return "Both condition satisfies";
  } else {
    return "No condition satisfies";
  }
};

console.log(task12(3, 4));

// Task 13
const task13 = (a, b) => {
  const result = a || b;
  console.log(`Result of a || b: ${result}`);
};

console.log(task13(0, 4));

// Task 14
const ternaryOperator = (num1) => {
  return num1 > 0 ? "Positive" : "Negative";
};

console.log(ternaryOperator(-4));
