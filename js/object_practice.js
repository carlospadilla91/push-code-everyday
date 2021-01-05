"use strict"

// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once
// and also try defining empty objects and assign property values in separate statements using the dot notation.

var beverage1 = {
    brandName: "Coca-Cola",
    type: "Soda",
    volumeInLiters: .75,
    priceInCents: .99,
    expirationDate: "3/26/21",
    datesOfPreviousSips: ["January 10th", "January 21st", "February 4th", "February 13th"],
    isOpen: true
}

// console.log(beverage1);

var beverage2 = {};
beverage2.brandName = "Dr. Pepper";
beverage2.type = "Soda";
beverage2.volumeInLiters = .5;
beverage2.priceInCents = .75;
beverage2.expirationDate = "7/3/21";
beverage2.datesOfPreviousSips = ["January 13th", "January 27th", "February 9th", "February 19th"];
beverage2.isOpen = true;

// console.log(beverage2);

// -- Mini Exercise 2

var users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];
/*
  1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
  2. Change the names of all users to "John Doe"
  3. Increase the current age of all users by 1

 */
  // Can you accomplish each step using iteration?

// users.forEach(function(user){
//     console.log(user.givenName);
// });

console.log(users[0].givenName + ',' + users[1].givenName + ',' + users[2].givenName)

// -- Mini Exercise 3
// Create a dog object...
// The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     canBreed (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log “Woof!”
//     getOlder() - will increase age by 1
// disableBreeding() - will set canBreed to false
// vaccinate(nameOfVaccination) - takes in an argument for the name of the vaccination
// and adds a new shot with the current date to the shotRecords array









var dog = {
    breed: "Labrador",
    weightInPounds: 75,
    age: 3,
    color: "Black",
    canBreed: true,
    shotRecords: [
        {
            date: "1/21/2020",
            typeOfShot: "Rabies"
        }
    ],
    bark: function () {
        console.log("Woof!");
    },
    getOlder: function() {
        this.age += 1;
    },
    disableBreeding: function() {
        this.canBreed = false;
    },
    vaccinate: function(nameOfVaccination) {
        this.shotRecords.push({
            typeOfShot: nameOfVaccination,
            date: new Date()
        });
    }
};

dog.bark();
dog.getOlder();
console.log(dog.age);
dog.disableBreeding();
console.log(dog.canBreed);
dog.vaccinate("Bordatella");
console.log(dog.shotRecords);
