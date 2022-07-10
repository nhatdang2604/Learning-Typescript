"use strict";
const me = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
        return amount;
    }
};
let greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
//greetPerson({name: "shaun"}); //invalid
greetPerson(me);
console.log(me);
import { Invoice } from "./classes/Invoice.js";
let invoices = [];
invoices.push(new Invoice("mario", "work on the mario webiste", 250));
invoices.push(new Invoice("luigi", "work on the luigi webiste", 300));
for (const invoice of invoices) {
    console.log(invoice.client, invoice.format());
}
//console.log(invoices[0].#_client);        //invalid
const form = document.querySelector(".new-item-form");
//inputs
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
