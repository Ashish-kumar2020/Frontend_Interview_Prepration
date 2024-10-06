{
  // block scope
  let a = 10;
}
// console.log(a); // this will give error
function abc() {
  // function scope
  //   console.log(a);
}
let a = 20;
// Global scope
{
  console.log(a);
}
