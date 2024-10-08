// Creating the Pollyfill for Reduce function

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]; // this[i] is written in case user fails to give initial value
  }
  return accumulator;
};

const nums = [1, 2, 3, 4, 5];
const sum = nums.myReduce((acc, curr) => {
  return acc + curr;
});

console.log(sum);
