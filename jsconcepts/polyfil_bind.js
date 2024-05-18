let name1 = {
  firstName: "Ashish",
  lastName: "Singh",
};

let printName = function (hometown, state) {
  console.log(this.firstName, this.lastName, hometown, state);
};

Function.prototype.mybind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.mybind(name1, "Bijnor");
printMyName2("Up");
