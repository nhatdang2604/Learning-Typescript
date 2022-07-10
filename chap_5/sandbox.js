"use strict";
//explicit types
var character;
var age;
var isLoggedIn;
//age = "luigi";  //invalid
age = 30;
isLoggedIn = true;
//arrays
//let ninjas: string[];     //does not init with empty array of string
var ninjas = []; //init array of strings with empty array
//ninjas = [10, 23];            //invalid
//ninjas = ["yoshi", "ryu"];    //valid
ninjas.push("shaun");
//union types
var mixed = [];
mixed.push("hello"); //valid
mixed.push(20); //valid
//mixed.push(true);     //invalid
console.log(mixed);
