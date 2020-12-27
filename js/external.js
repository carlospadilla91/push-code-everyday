"use strict"

var welcome = alert("Welcome to my website!");
var userColor = prompt("What is your favorite color?");
alert("Great, " + userColor + " is my favorite color too!");

var littleMermaid = parseFloat(prompt("How many days do you want to rent Little Mermaid?"));
var brotherBear = parseFloat(prompt("How many days do you want to rent Brother Bear?"));
var hercules = parseFloat(prompt("How many days do you want to rent Hercules?"));
var pricePerDay = 3
var total = alert("Your total is: $" + ((littleMermaid + brotherBear + hercules) * pricePerDay));

var googlePay = parseInt(prompt("How much does Google pay per hour?"));
var amazonPay = parseInt(prompt("How much does Amazon pay per hour?"));
var facebookPay = parseInt(prompt("How much does Facebook pay per hour?"));
var googleHoursWorked = parseInt(prompt("How many hours did you work at Google?"));
var amazonHoursWorked = parseInt(prompt("How many hours did you work at Amazon?"));
var facebookHoursWorked = parseInt(prompt("How many hours did you work at Facebook?"));
var googleTotalPay = googlePay * googleHoursWorked;
var amazonTotalPay = amazonPay * amazonHoursWorked;
var facebookTotalPay = facebookPay * facebookHoursWorked;
var totalPay = googleTotalPay + amazonTotalPay + facebookTotalPay;

alert("You made a total of $" + totalPay + " this week working at all three companies!");