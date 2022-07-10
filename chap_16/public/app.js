"use strict";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
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
const form = document.querySelector(".new-item-form");
//inputs
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc = undefined;
    if ("invoice" === type.value.toLowerCase()) {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else if ("payment" === type.value.toLowerCase()) {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc === null || doc === void 0 ? void 0 : doc.format());
});
