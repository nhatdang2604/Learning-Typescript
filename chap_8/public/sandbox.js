"use strict";
let greet;
//greet = "hello";  //invalid
greet = () => {
    console.log("Hello world");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "20");
const minus = (a, b) => a - b;
let result = minus(10, 7);
console.log(result);
