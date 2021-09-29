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

// 11. Create a function that takes two numbers as arguments and return their sum.

// Examples
// addition(3, 2) ➞ 5
//
// addition(-3, -6) ➞ -9
//
// addition(7, 3) ➞ 10

function addition(a, b) {
    return a + b;
}

// 12. Make a function using the && operator.

// Examples
// and(true, false) ➞ false
//
// and(true, true) ➞ true
//
// and(false, true) ➞ false
//
// and(false, false) ➞ false

function and(a, b) {
    return a && b;
}

// 13. Create a function that returns true when num1 is equal to num2; otherwise return false.

// Examples
// isSameNum(4, 8) ➞ false
//
// isSameNum(2, 2) ➞  true
//
// isSameNum(2, "2") ➞ false

function isSameNum(num1, num2) {
    return num1 === num2;
}

// 14. Create a function that returns true if a string is empty and false otherwise.

// Examples
// isEmpty("") ➞ true
//
// isEmpty(" ") ➞ false
//
// isEmpty("a") ➞ false

function isEmpty(s) {
    return s === "";
}

// 15. Write a function that takes the base and height of a triangle and return its area.

// Examples
// triArea(3, 2) ➞ 3
//
// triArea(7, 4) ➞ 14
//
// triArea(10, 10) ➞ 50
// The area of a triangle is: (base * height) / 2

function triArea(base, height) {
    return (base * height) / 2;
}

// 16. Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNumber(0, 10));

// 17. Write a function called first(input) that returns the first character in the provided string.

function first(input) {
    return input.charAt(0);
}

console.log(first("Carlos"));
console.log(first("Sarah"));

// 18. Write a function called last(input) that returns the last character of a string

function last(input) {
    return input.slice(-1);
}

console.log(last("Carlos"));
console.log(last("Sarah"));

const isOdd = x => x % 2 === 1;
// console.log(isOdd(1))
// console.log(isOdd(2))

const isEven = x => x % 2 === 0;
// console.log(isEven(1))
// console.log(isEven(2))

const isVowel = input => {
    const vowelList = 'AEIOUaeiou';
    return vowelList.includes(input);
}
// console.log(isVowel('a'))
// console.log(isVowel('E'))
// console.log(isVowel('d'))

const hasLowerCase = string => {
    return string.toUpperCase() !== string;
}
// console.log(hasLowerCase("Carlos"))
// console.log(hasLowerCase("CARLOS"))

//
// TODO: Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).

const hasWordEnglish = str => {
    const word = "english";
    return (str.toLowerCase().includes(word));
}

// console.log(hasWordEnglish("carlosenglishpadilla"));
// console.log(hasWordEnglish("hello"));
// console.log(hasWordEnglish("carlosENGLIshpadilla"));

//
// TODO: Given an array of integers, write a function that returns an array of 2 integers. The first integer will be the count of the positive integers, and the second integer will be the sum of the negative integers. If the input is empty or null, return an empty array.

// const intArr = arr => {
    // if (arr)
// }

// TODO: print symmetric triangle

// const triangle = h => {
//     for (let i = 1; i <= h; i++) {
//         let row = '';
//
//         for (let j = 1; j <= i; j++) {
//             row += '_ ';
//         }
//
//         console.log(row + '*' + row);
//     }
// }
//
// triangle(5);

const symmetricTriangle = num => {
    for (let i = 1; i <= num; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            row += '_ '
        }

        console.log(row + '*' + row)
    }
}

symmetricTriangle(10);

// function practice from W3 resource  https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

//TODO: 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

const numReverse = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(numReverse(32243));

//TODO: 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

const checkPalindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');

// function needs to check for sad paths ******

console.log(checkPalindrome('Madam'));  // returns true
console.log(checkPalindrome('sarah'));  // returns false
console.log(checkPalindrome('Nurses run')); // returns false


//TODO: 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

const allCombinations = str => {
    let combinations = [];
    for (let i = 0; i < str.length; i += 1) {

        for (let j = i + 1; j < str.length + 1; j += 1) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}

console.log(allCombinations("dog"));
console.log(allCombinations("carlos"));

//TODO: 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

const sortedString = str => str.split('').sort().join('');

console.log(sortedString('carlos'));
console.log(sortedString('sarah'));

//TODO: 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

const capitalizeFirstLetter = str => {
    let arr = str.split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(' ');
}

console.log(capitalizeFirstLetter('my twin babies are 10 weeks old'));

//TODO: 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

const longestString = str => {
    let arr = str.split(' ');
    let longest = 0;
    let word = null;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
            word = arr[i];
        }
    }
    return word;
}

console.log(longestString('carlos got a haircut today'));

//TODO: 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const vowelCount = str => {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i< str.length; i += 1) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

console.log(vowelCount('carlos'))
console.log(vowelCount('shhh'))

//TODO: 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

const isPrime = num => {
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

console.log(isPrime(37))
console.log(isPrime(4));

let obj1 = {
    name: 'carlos',
    age: 30,
    gender: 'male'
}

for (let property in obj1) {
    console.log(property + ': ' + obj1[property]);
}


//TODO: 9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const inputType = input => typeof input;

console.log(inputType({obj1}));
console.log(inputType(5));
console.log(inputType('carlos'));
console.log(inputType(5 > 7));


//TODO: 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

const matrix = input => {
    let i;
    let j;

    for (i = 0; i < input; i += 1) {

        for (j = 0; j < input; j += 1) {

            if (i === j) {
                console.log('1');
            } else {
                console.log('0');
            }
        }
        console.log('----------');
    }
}

matrix(4);

//TODO: 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

const secondLowestSecondHighest = arr => {

}

// palindrome challenge; should return true or false if string input is the same reverse

const palindrome = (str) => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(palindrome('racecar'));
console.log(palindrome('carlos'));

// fizzbuzz challenge

const fizzbuzz = () => {
    for (let i = 1; i <= 100; i ++) {

        if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if(i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

console.log(fizzbuzz());

// anagram challenge write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation

const anagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;

    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

console.log(anagram('finder', 'friend'));
console.log(anagram('hi', 'hello'));
console.log(anagram('hi', 'bi'));
console.log(anagram('leg', 'gel'));

// find vowels challenge

const countVowels = (str) => {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count ++;
        }
    }
    return count;
}

console.log(countVowels('carlos'));
console.log(countVowels('bbb'));