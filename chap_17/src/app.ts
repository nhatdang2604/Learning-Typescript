"use strict";
import {Invoice} from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import {ListTemplate} from "./classes/ListTemplate.js";
import {HasFormatter} from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

//list template instance
const ul = document.getElementsByClassName("item-list")[0] as HTMLUListElement;
const list = new ListTemplate(ul);


form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter|undefined = undefined;
    if ("invoice" === type.value.toLowerCase()) {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else if ("payment" === type.value.toLowerCase()) {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    } 

    //console.log(doc?.format());
    list.render(doc, type.value, "end");
})