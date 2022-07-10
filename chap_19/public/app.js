"use strict";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
//inputs
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
//list template instance
const ul = document.getElementsByClassName("item-list")[0];
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc = undefined;
    if ("invoice" === type.value.toLowerCase()) {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else if ("payment" === type.value.toLowerCase()) {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//Generic
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
//let docTwo = addUID("hello"); //invalid
console.log(docOne.name);
console.log(docOne.age);
const docThree = {
    uid: 0,
    name: "person",
    data: "shaun",
};
const docFour = {
    uid: 1,
    name: "shoppingList",
    data: [
        "bread",
        "milk",
        "toilet roll",
    ],
};
console.log(docThree, docFour);
