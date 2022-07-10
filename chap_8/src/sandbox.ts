"use strict";

let greet: Function;

//greet = "hello";  //invalid

greet = () => {
    console.log("Hello world");
};

const add = (a: number, b:number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, "20");

const minus = (a: number, b: number): number => a - b;
let result = minus(10, 7);
console.log(result);