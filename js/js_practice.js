"use strict"

// 1. Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
    return arr[0];
}

// 2. Create a function that takes voltage and current and returns the calculated power.

// Examples
// circuitPower(230, 10) ➞ 2300
//
// circuitPower(110, 3) ➞ 330
//
// circuitPower(480, 20) ➞ 9600

function circuitPower(voltage, current) {
    return voltage * current;
}

// 3. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// Examples
// nextEdge(8, 10) ➞ 17
//
// nextEdge(5, 7) ➞ 11
//
// nextEdge(9, 2) ➞ 10

function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
}

// 4. Write a function that converts hours into seconds.

// Examples
// howManySeconds(2) ➞ 7200
//
// howManySeconds(10) ➞ 36000
//
// howManySeconds(24) ➞ 86400

function howManySeconds(hours) {
    return hours * 60 * 60;
}

// 5. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1
//
// remainder(3, 4) ➞ 3
//
// remainder(-9, 45) ➞ -9
//
// remainder(5, 5) ➞ 0

function remainder(x, y) {
    return x % y;
}

// 6. Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// printArray(1) ➞ [1]
//
// printArray(3) ➞ [1, 2, 3]
//
// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

function printArray(number) {
    var newArray = [];

    for(var i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

// 7. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples
// addition(0) ➞ 1
//
// addition(9) ➞ 10
//
// addition(-3) ➞ -2

function addition(num) {
    return num + 1;
}

// 8. Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300
//
// convert(3) ➞ 180
//
// convert(2) ➞ 120

function convert(minutes) {
    return minutes * 60;
}

// 9. Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
//
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
//
// giveMeSomething("something") ➞ "something something"

function giveMeSomething(a) {
    return 'something ' + a;
}

// 10. Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false
//
// lessThanOrEqualToZero(0) ➞ true
//
// lessThanOrEqualToZero(-2) ➞ true

function lessThanOrEqualToZero(num) {
    return num <= 0;
}



