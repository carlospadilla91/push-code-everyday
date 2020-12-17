"use strict"

var welcome = alert("Welcome to Taqueria Padilla!");
var dineInOrTakeout = prompt("Dine in or Takeout?").toLowerCase();

(if(dineInOrTakeout === 'dine in') {
        alert("Welcome!");
        var sizeOfParty = prompt('How many in your party?');
    } else if (dineInOrTakeout === 'takeout') {
        var orderName = prompt("What is the name on the order?");
        console.log(orderName);
    } else {
        alert("Thank you for coming by!");
    }

    if(sizeOfParty <= 4) {
        alert("Your table is ready now.")
    } else {
        alert("It will be a 10 min wait.")
    })();