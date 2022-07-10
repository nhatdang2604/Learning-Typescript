"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Invoice__client, _Invoice__details, _Invoice__amount;
//Classes
class Invoice {
    constructor(client, details, amount) {
        _Invoice__client.set(this, void 0);
        _Invoice__details.set(this, void 0);
        _Invoice__amount.set(this, void 0);
        __classPrivateFieldSet(this, _Invoice__client, client, "f");
        __classPrivateFieldSet(this, _Invoice__details, details, "f");
        __classPrivateFieldSet(this, _Invoice__amount, amount, "f");
    }
    format() {
        return `${__classPrivateFieldGet(this, _Invoice__client, "f")} owes $${__classPrivateFieldGet(this, _Invoice__amount, "f")} for ${__classPrivateFieldGet(this, _Invoice__details, "f")}`;
    }
}
_Invoice__client = new WeakMap(), _Invoice__details = new WeakMap(), _Invoice__amount = new WeakMap();
let invoices = [];
invoices.push(new Invoice("mario", "work on the mario webiste", 250));
invoices.push(new Invoice("luigi", "work on the luigi webiste", 300));
for (const invoice of invoices) {
    console.log(invoice);
}
//console.log(invoices[0].#_client);        //invalid
const form = document.querySelector(".new-item-form");
//inputs
const type = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
