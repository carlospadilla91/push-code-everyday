"use strict"

var welcome = alert("Welcome to my website!");
var userColor = prompt("What is your favorite color?");
alert("Great, " + userColor + " is my favorite color too!");

var littleMermaid = parseFloat(prompt("How many days do you want to rent Little Mermaid?"));
var brotherBear = parseFloat(prompt("How many days do you want to rent Brother Bear?"));
var hercules = parseFloat(prompt("How many days do you want to rent Hercules?"));
var pricePerDay = 3
var total = alert("Your total is: $" + ((littleMermaid + brotherBear + hercules) * pricePerDay)).toFixed(2);