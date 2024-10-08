// PollyFill for Filter Function

// Original Filter - arr.filter((num,i,arr) => {})

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const nums = [1, 2, 3, 4, 5, 6];
const greaterThanThree = nums.myFilter((num) => {
  return num > 3;
});
console.log(greaterThanThree);
