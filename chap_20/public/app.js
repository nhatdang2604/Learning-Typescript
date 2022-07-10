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
    let values = [
        toFrom.value, details.value, amount.valueAsNumber
    ];
    let doc = undefined;
    if ("invoice" === type.value.toLowerCase()) {
        doc = new Invoice(...values);
    }
    else if ("payment" === type.value.toLowerCase()) {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
//Array
let arr = ["ryu", 25, true];
arr[0] = false; //valid
arr[1] = "yoshi"; //valid
arr = [30, false, "yoshi"]; //valid
//Tuple
let tup = ["ryu", 25, true];
//tup[0] = false;   //invalid
tup[0] = "ken"; //valid
tup[1] = 30;
let student;
//student = [123, "akuma"]  //invalid
student = ["chun-li", 123]; //valid
