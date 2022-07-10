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

    let values: [string, string, number] = [
        toFrom.value, details.value, amount.valueAsNumber
    ];

    let doc: HasFormatter|undefined = undefined;
    if ("invoice" === type.value.toLowerCase()) {
        doc = new Invoice(...values);
    } else if ("payment" === type.value.toLowerCase()) {
        doc = new Payment(...values);
    } 

    list.render(doc, type.value, "end");
})

//Array
let arr = ["ryu", 25, true];
arr[0] = false;             //valid
arr[1] = "yoshi";           //valid
arr = [30, false, "yoshi"]; //valid

//Tuple
let tup: [string, number, boolean] = ["ryu", 25, true];
//tup[0] = false;   //invalid
tup[0] = "ken";     //valid
tup[1] = 30;

let student: [string, number];
//student = [123, "akuma"]  //invalid
student = ["chun-li", 123]; //valid