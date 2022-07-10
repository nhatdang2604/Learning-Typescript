"use strict";

//interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "shaun",
    age: 30,
    speak(text: string): void {
        console.log(text);
    },

    spend(amount: number): number {
        console.log(`I spend ${amount}`);
        return amount;
    }

};

let greetPerson = (person: IsPerson): void => {
    console.log(`Hello ${person.name}`);
}

//greetPerson({name: "shaun"}); //invalid
greetPerson(me);
console.log(me);

import {Invoice} from "./classes/Invoice.js";

let invoices: Invoice[] = [];
invoices.push(new Invoice("mario", "work on the mario webiste", 250));
invoices.push(new Invoice("luigi", "work on the luigi webiste", 300));

for (const invoice of invoices) {
    console.log(invoice.client, invoice.format());
}

//console.log(invoices[0].#_client);        //invalid

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    )
})