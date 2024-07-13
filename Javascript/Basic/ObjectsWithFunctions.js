// Rest and spread operator
function calculateSum(val1, val2, ...num) {
  return num;
}

console.log(calculateSum(200, 300, 400, 500, 700));

const user = {
  name: "Ashish Kumar SIngh",
  age: 199,
};

function getUserDetail(anyObj) {
  console.log(`userName is ${anyObj.name} and the age is ${anyObj.age}`);
}

console.log(user);
