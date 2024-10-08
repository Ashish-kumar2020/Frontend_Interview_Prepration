//  Sum using curring
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(sum(2)(3)(4));

// evalute by passing operator Name and values

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation == "addition") return a + b;
      else if (operation == "multiply") return a * b;
      else if (operation == "divide") return a / b;
      else if (operation == "substract") return a - b;
      else return "Invalid operation";
    };
  };
}

// console.log(evaluate("addition")(2)(3));
// console.log(evaluate("multiply")(2)(3));
// console.log(evaluate("dummy")(2)(3));

// Infinite Currying
function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

// console.log(sum(1)(2)(3)(4)());

// Create a Currying function which can convert normal function to Currying function

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}

const add = (a, b, c, d) => a + b + c + d;
const totalSum = curry(add);
console.log(totalSum(1)(2)(3)(4));
