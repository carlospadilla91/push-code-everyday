"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(str) {
    if(str === "blue") {
        return "blue is the color of the sky";
    } else if(str === "red") {
        return "Strawberries are red";
    } else if(str === "cyan") {
        return "I don't know anything about cyan";
    } else {
        return "I don't like " + str + " but you do you.";
    }
}

console.log(analyzeColor('red'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('purple'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch(str) {
    switch(str) {
        case "blue":
            return "blue is the color of the sky.";
        case "red":
            return "Strawberries are red.";
        case "cyan":
            return "I don't know anything about cyan.";
        default:
            return "I don't like " + str + " but you do you.";
    }
}

console.log(analyzeColorSwitch('blue'));
console.log(analyzeColorSwitch('red'));
console.log(analyzeColorSwitch('cyan'));
console.log(analyzeColorSwitch('purple'));
console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Enter your favorite color");
console.log(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, totalAmount) {
    switch(luckyNum) {
        case 0:
            return totalAmount;
        case 1:
            return totalAmount - (totalAmount * .1);
        case 2:
            return totalAmount - (totalAmount * .25);
        case 3:
            return totalAmount - (totalAmount * .35);
        case 4:
            return totalAmount - (totalAmount * .5);
        case 5:
            return "It's all free!"
    }
}

console.log(calculateTotal(0, 100), 100);
console.log(calculateTotal(4, 100), 50);
console.log(calculateTotal(2, 100), 75);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var userBillTotal = prompt("What is your bill total?");
// var userLuckyNum = alert("Your lucky number is: " + luckyNumber);
// alert("Your price before the discount was $" + userBillTotal);
// alert("Your price after discount is $" + calculateTotal(luckyNumber, userBillTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var enterNum = confirm("Would you like to enter a number?");
// var userNum = parseInt(prompt("Enter a number"));
// var evenOrOdd = alert((userNum % 2 === 0) ? "Your number is even": "Your number is odd");
// var numPlusHundred = alert("Your number plus 100 is: " + (userNum + 100));
// var numIsPosOrNeg = alert((userNum > 0) ? "Your number is positive": "Your number is negative");

function isNumeric(input) {
    return !isNaN(input);
}

console.log(isNumeric(3));

function numIsEven(num) {
    return (num % 2 === 0) ? num + " is even." : num + " is odd.";
}

function addHundred(num) {
    return num + " + 100 is = " + (num + 100);
}

function numIsPositive(num) {
    return (num > 0) ? num + " is positive." : num + " is negative.";
}

if(enterNum === true) {
    var number = parseFloat(prompt("Enter a number"));
    if(isNumeric(number)) {
        alert(numIsEven(number));
        alert(addHundred(number));
        alert(numIsPositive(number));
    } else {
        alert("Input is not a number!");
    }
}

// Write a function named greaterNum that:
//     takes 2 arguments, both numbers.
//     returns whichever number is the greater (higher) number.
//     Call that function 2 times with different number pairs, and log the output to make sure it works (
//     e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}

// Write a function named assignGrade that:
//     takes 1 argument, a number score.
//     returns a grade for the score, either "A", "B", "C", "D", or "F".

function assignGrade(num) {
    if(num === 90) {
        return "A";
} else if (num === 80) {
        return "B";
    } else if(num === 70) {
        return "C";
    } else if (num === 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(assignGrade(40));
console.log(assignGrade(80));

// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1,
// otherwise return "Bye" + name.
//
//     Examples
// sayHelloBye("alon", 1) ➞ "Hello Alon"
//
// sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
//
// sayHelloBye("jose", 0) ➞ "Bye Jose"

function sayHelloBye(name, num) {
    if(num === 1) {
        return "Hello " + name;
    }
    if(num === 0) {
        return "Bye " + name;
    }
}

console.log(sayHelloBye('carlos', 1));
console.log(sayHelloBye('sarah', 0));