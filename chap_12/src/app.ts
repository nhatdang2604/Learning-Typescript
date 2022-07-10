"use strict";

//Classes
class Invoice {
    #_client: string;
    #_details: string;
    #_amount: number;

    constructor(client: string, details: string, amount: number) {
        this.#_client = client;
        this.#_details = details;
        this.#_amount = amount;
    }

    format() {
        return `${this.#_client} owes $${this.#_amount} for ${this.#_details}`;
    }
}

let invoices: Invoice[] = [];
invoices.push(new Invoice("mario", "work on the mario webiste", 250));
invoices.push(new Invoice("luigi", "work on the luigi webiste", 300));

for (const invoice of invoices) {
    console.log(invoice);
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

