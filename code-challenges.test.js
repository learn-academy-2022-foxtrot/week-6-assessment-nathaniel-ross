// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test");
// const { describe } = require("yargs");
// const { it } = require("node:test");
// const { describe } = require("yargs");
// go away yargs

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("nameUpcaser", () => {
  it("returns an array with a sentence about each person with their name capitalized.", () => {

    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]

    expect(nameUpcaser(people)).toEqual(
      ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
      );

  })
})

// Good Fail: ReferenceError: nameUpcaser is not defined

// b) Create the function that makes the test pass.
// create function nameUpcaser accessing array
// iterate array with .map and .split to seperate first and last name
// use charAt(0) to access first letter of array and toUpperCase to capitilize first letter
// use .join to rejoin into string and use string interpolation to connect it all into a sentence
// don't forget the space and the period (like I did for half an hour 🤦‍♂️), to make sure the sentence is exactly matching the expected outcome

const nameUpcaser = (arr) => {
  return arr.map(arr => arr.name.split (" ")
  .map(name => name.charAt(0).toUpperCase() + name.slice(1))
  .join(" ") + ` is ${arr.occupation}.`)
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainderThree", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];

    expect(remainderThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
    expect(remainderThree(hodgepodge2)).toEqual([ 2, 1, -1 ]);

  })
})
// Good Fail: ReferenceError: remainderThree is not defined

// b) Create the function that makes the test pass.
// create function remainderThree to take in the array that'll return only then numbers and the remainders of the numbers divided by three
// use .filter to return only the numbers, which we can designate by using typeof
// use .map to return a new array and utilize modulo % 3 to divide the numbers by 3


const remainderThree = (arr) => {
  return arr.filter((num) => typeof num === "number").map((num) => num % 3);
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("arrayCuber", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

    const cubeAndSum1 = [2, 3, 4];
    const cubeAndSum2 = [0, 5, 10];

    expect(arrayCuber(cubeAndSum1)).toEqual(99);
    expect(arrayCuber(cubeAndSum2)).toEqual(1125)
  })
})
// Good Fail: ReferenceError: arrayCuber is not defined

// b) Create the function that makes the test pass.
// create function arrayCuber to pass in arr
// use .map on the array, and use ** 3 which cubes all the values
// array now has cubed values, use .reduce to add the sums together to return one value

const arrayCuber = (arr) => {
  return arr.map((num) => num ** 3).reduce((partialSum, num) => partialSum + num, 0)
}