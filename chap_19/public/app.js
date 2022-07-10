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
    let doc = undefined;
    if ("invoice" === type.value.toLowerCase()) {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else if ("payment" === type.value.toLowerCase()) {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 0,
    type: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
const docTwo = {
    uid: 1,
    type: ResourceType.PERSON,
    data: { name: "yoshi" },
};
console.log(docOne);
console.log(docTwo);
