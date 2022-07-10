"use strict";
const anchor = document.querySelector("a");
// if(anchor) {
//     console.log(anchor.href);
// }
console.log(anchor.href);
//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
//inputs
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
