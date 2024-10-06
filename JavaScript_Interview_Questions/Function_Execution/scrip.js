function outer() {
  function inner() {
    console.log(a);
  }
  var a = 100;
  return inner;
}

outer()();
