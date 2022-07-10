"use strict";

//Classes
class Invoice {

    //1st way
    // readonly client: string;
    // private details: string;
    // private amount: number;

    // public constructor(client: string, details: string, amount: number) {
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount;
    // }

    //2nd way
    public constructor(
        readonly client: string,
        private details: string,
        private amount: number,
    ) {}

    public format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

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