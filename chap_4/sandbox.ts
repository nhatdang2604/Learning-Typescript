"use strict";

//arrays
let names = [
    "luigi",
    "mario",
    "yoshi",
]

names.push("toad");     //valid
//names.push(12);       //invalid

let numbers = [10, 20, 30, 40];

numbers.push(25);       //valid
//numbers.push("shaun");//invalid

let mixed = ["ken", 4, "chun-li", 8, 9];

mixed.push("ryu");  //valid
mixed.push(10);     //valid
//mixed.push(true)  //invalid

//objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};

ninja.name = "ryu";     //valid
//ninja.name = 12;      //invalid
//ninja.skills = ["flight", "fighting"]   //invalid
ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40,                //Comment an existed field => invalid       
    //skills: ["flight"],   //invalid
}
