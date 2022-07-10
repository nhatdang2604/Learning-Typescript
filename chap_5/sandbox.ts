"use strict";

//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = "luigi";  //invalid
age = 30;
isLoggedIn = true;

//arrays
//let ninjas: string[];     //does not init with empty array of string
let ninjas: string[] = [];  //init array of strings with empty array
//ninjas = [10, 23];            //invalid
//ninjas = ["yoshi", "ryu"];    //valid
ninjas.push("shaun");

//union types
let mixed: (string|number)[] = [];
mixed.push("hello");    //valid
mixed.push(20);         //valid
//mixed.push(true);     //invalid
console.log(mixed);

let uid: string|number;
uid = "123";    //valid
uid = 123;      //valid
//uid = true;   //invalid

//objects
let ninjaOne: Object;
ninjaOne = {name: "yoshi", age: 30};    //valid
//ninjaOne = {testament: true};         //valid
//ninjaOne = [];                        //valid (because array is an object)
//ninjaOne = "123"                      //invalid

let ninjaTwo: {
    name: string,
    age: number,
}

ninjaTwo = {name: "mario", age: 20} //valid
//ninjaTwo = {name: "luigi"}        //invalid