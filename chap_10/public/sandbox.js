"use strict";
//let greet: Function;
//example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if ("add" === action) {
        return numOne + numTwo;
    }
    return numOne - numTwo;
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
const mario = { name: "mario", age: 40 };
logDetails(mario);
