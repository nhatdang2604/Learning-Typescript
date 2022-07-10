"use strict";
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