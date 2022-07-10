//Classes

import {HasFormatter} from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter{

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
