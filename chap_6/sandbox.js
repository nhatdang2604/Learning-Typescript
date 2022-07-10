"use strict";
// let age: any;    //valid
// age = 25;        //valid
var age = 25; //valid
age = "25"; //valid
age = true; //valid
console.log(age);
//age.push(12);           //invalid
age = [12, 14, "14"]; //valid
console.log(age);
var mixed = []; //valid
mixed.push(5); //valid
mixed.push("5"); //valid
mixed.push(false); //valid
console.log(mixed);
var ninja; //valid
ninja = { name: "yoshi", age: 25 }; //valid
console.log(ninja);
ninja = { name: 1234, age: 25 }; //valid
console.log(ninja);
