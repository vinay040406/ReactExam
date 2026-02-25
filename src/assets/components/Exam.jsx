import React from "react";

const Exam = () => {
  // Variables examples
  let name = "vinay";
  const pi = 3.14;
  var sum = 3 + 8;

  //  Data-Types Examples
  const username = "vinay";
  let age = 20;
  let value = true;
  let bigInt = 5 + 50;
  let xyz = null;
  let val;
  let data = { name: "vinay", age: 20 };
  const arr = [1, 2, 3, 4, 5, 6];

  //   Object with name,age ,course ,isEnrolled

  let student = {
    name: "Vinay",
    age: 20,
    course: "Frontned Development",
    isEnrolled: true,
  };

  // adding one more key grade in student object
  student.grade = "A+";
  console.log(student);

  //   Find Duplicate Numbers in an Array and Count Them
  let numbers = [1, 2, 3, 2, 4, 5, 1, 3, 3];
  let duplicates = {};

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (duplicates[num]) {
      duplicates[num]++;
    } else {
      duplicates[num] = 1;
    }
  }
  console.log(duplicates);

  // 6
  function findFactorial(val) {
    let total = 1;
    for (let i = 1; i <= val; i++) {
      total *= i;
    }
    console.log(total);
  }
  findFactorial(5);

  return <div>Exam</div>;
};

export default Exam;
