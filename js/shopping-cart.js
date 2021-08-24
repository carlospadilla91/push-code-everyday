"use strict"

let cartCount = document.getElementsByClassName("total-count");
let addToCartBtn = document.getElementsByClassName("add-to-cart");

const listener = () => {
    console.log("here")
}

// addToCartBtn.addEventListener('click', listener());
$(addToCartBtn).click(function (){
    let count = 0;
    // count++
    $('.total-count').html(function (i, val){return val * 1+1});
});