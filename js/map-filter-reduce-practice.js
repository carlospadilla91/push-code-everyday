"use strict"

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

//TODO: Create an array of the first letters of each fruit

const firstLetters = fruits.map((letter) => letter.charAt(0));

console.log(firstLetters);

//TODO: Create array of user objects based on the customers array of objects (each user object should just have name and age properties)

const nameAndAge = customers.map((customer) => {
    return {
        name: customer.name,
        age: customer.age
    }
})

console.log(nameAndAge);

//TODO: Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects

const civilServants = customers.filter(customer => {
    return customer.occupation === "Teacher" || customer.occupation === "Police Officer"
})

console.log(civilServants);

//TODO: Determine the average age of all the customers

const avgAge = customers.reduce((total, customer) => {
    return total + customer.age
}, 0)

console.log(avgAge / 2);

//TODO: Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
//{
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//     age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }

const makeSuperPet = petArr => {
    let petNames = "";
    let totalAge = 0;
    let firstLetterOfBreed = "";
    for (let i = 0; i < petArr.length; i += 1) {
        petNames += petArr[i].name;
        totalAge += petArr[i].age;
        firstLetterOfBreed += petArr[i].breed.charAt(0);
    }
    return {
        name: petNames,
        age: totalAge,
        breed: firstLetterOfBreed
    }
}
console.log(makeSuperPet(pets));