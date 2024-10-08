// Map

const nums = [1, 2, 3, 4, 5];
const multiplyByThree = nums.map((num) => {
  return num * 3;
});

// console.log(multiplyByThree);

// Filter

const greaterThanTwo = nums.filter((num) => {
  return num > 2;
});

// console.log(greaterThanTwo);

// Reduce

const sumOfEle = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log("Sum : ", sumOfEle);

// Output based questions

const students = [
  { name: "Ashish", age: 24, marks: 98 },
  { name: "Singh", age: 34, marks: 67 },
  { name: "Kumar", age: 44, marks: 57 },
  { name: "Abcd", age: 54, marks: 47 },
];

// return names with capital letters
const namesCapital = students.map((stu) => {
  return stu.name.toUpperCase();
});

// console.log(namesCapital);

// Return the student names who scores more than 60 marks

const scoreMoreThan60 = students.filter((stu) => {
  return stu.marks > 60;
});

// console.log(scoreMoreThan60);

// Retun the sum of marks of all the students
const sumOfMarks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

// console.log(sumOfMarks);

// Return only names of students who scored more that 60 marks
const studentNames = students
  .filter((stu) => {
    return stu.marks > 60;
  })
  .map((stuName) => {
    return stuName.name;
  });

// console.log(studentNames);

//

const stuDetails = students
  .map((stuDet) => {
    if (stuDet.marks < 60) {
      stuDet.marks += 20;
    }
    return stuDet;
  })
  .filter((stuDet) => {
    return stuDet.marks > 60;
  })
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(stuDetails);
