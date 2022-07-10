//Classes

import {HasFormatter} from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{

    public constructor(
        readonly recipient: string,
        private details: string,
        private amount: number,
    ) {}

    public format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
    
}
