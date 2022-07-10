"use strict";
import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// let invoices: Invoice[] = [];
// invoices.push(new Invoice("mario", "work on the mario webiste", 250));
// invoices.push(new Invoice("luigi", "work on the luigi webiste", 300));

// for (const invoice of invoices) {
//     console.log(invoice.client, invoice.format());
// }

//console.log(invoices[0].#_client);        //invalid

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter|undefined = undefined;
    if ("invoice" === type.value.toLowerCase()) {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else if ("payment" === type.value.toLowerCase()) {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    } 

    console.log(doc?.format());
})