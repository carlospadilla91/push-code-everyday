"use strict"

function showMultiplicationTable(num) {
    for(var i = 1; i <=10; i++) {
        console.log(num + ' x ' + i + ' = ' + (num * i));
    }

}
showMultiplicationTable(7);
showMultiplicationTable(3);


for(var i = 1; i <= 10; i++) {
    var random = Math.floor(Math.random() * (200 - 20) + 20);
    if(random % 2 === 0) {
        console.log(random + ' is even.');
    } else {
        random + ' is odd.'
    }
}

for(var x = 100; x >= 5; x -= 5) {
    console.log(x);
}