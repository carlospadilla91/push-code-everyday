"use strict"

var userNum;

function isValid(input) {
    var isOdd = input % 2 !== 0;
    var isNumeric = !isNaN(input);
    var inCorrectRange = input >= 1 && input <= 50;
    return isOdd && isNumeric && inCorrectRange
}

function getUserNum() {
    while(true) {
        userNum = prompt("Enter odd number between 1-50");
        if (isValid(userNum)) {
            break;
        }
        alert("INVALID NUMBER!")
    }
    return userNum;
}

function createOddNumberMessages(userNum) {
    console.log("Number to skip is: " + userNum);
    console.log("");
    for (var i = 1; i < 50; i += 1) {
        if (i === parseFloat(userNum)) {
            console.log("Yikes! Skipping number: " + userNum);
            continue;
        }
        if (i % 2 === 0) {
            continue;
        }
        console.log("Here is an odd number: " + i);
    }
}

userNum = getUserNum();
createOddNumberMessages(userNum);