/*
    1. Register a list container (ul) in the constructor
    2. Create a render method to render a new 'li' to the container
        - Accepts arguments: invoice or payment, a heading, a postition
        - Create the html template (li, h4, p)
        - Add the 'li' template to the start/end of the list
*/

import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {

    public constructor(private container: HTMLUListElement) {

    }

    render(item: HasFormatter, heading: string, pos: "start"|"end") {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");

        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);

        if ("start" === pos) {
            this.container.prepend(li);
        } else if ("end" === pos) {
            this.container.append(li);
        }
    }
}