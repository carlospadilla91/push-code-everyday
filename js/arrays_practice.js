"use strict"

// Define a function named allIndexesOf that takes in two arguments.
// The first argument should be the array to search and the second argument should be the value you want to search for.
// If the item does not exist in the provided array, return an empty array.
//
//     Given:
//
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

function allIndexesOf(array, value) {
    return array.lastIndexOf(value);
}

console.log(allIndexesOf(fruits, "apple")); //should return the array [0, 3]
console.log(allIndexesOf(fruits, "guava")); //should return the array []
console.log(allIndexesOf(fruits, "pineapple")); //should return [4]

// Define a function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value you wish to remove

// Given:

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

function removeAll(array, value) {

}

removeAll(bugs, "ant") //should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
removeAll(bugs, "mosquito") //should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
removeAll(bugs, "roach") //should return the original array b/c "roach" has no occurrances.

//TODO: Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//
// Example input: ["fred", true, 5, 3] Example output: [3, 5]

const filterNumbers = arr => {
    const newArr = [];
    let numbersOnly = val => {
        if (typeof (val) === 'number') return val;
    }

    let numArr = arr.filter(numbersOnly);
    // console.log(numArr);
    let sortArr = numArr.sort();
    // console.log(sortArr);
    newArr.push(sortArr);
    return newArr;
}

console.log(filterNumbers(['carlos', 4, 'sarah', 7]));
console.log(filterNumbers(['maggie', 3, 'piper', 8]));
console.log(filterNumbers(['carlos', 5, 'sarah', 9]));