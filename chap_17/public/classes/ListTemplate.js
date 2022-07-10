/*
    1. Register a list container (ul) in the constructor
    2. Create a render method to render a new 'li' to the container
        - Accepts arguments: invoice or payment, a heading, a postition
        - Create the html template (li, h4, p)
        - Add the 'li' template to the start/end of the list
*/
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        var _a;
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.innerText = heading;
        p.innerText = (_a = item === null || item === void 0 ? void 0 : item.format()) !== null && _a !== void 0 ? _a : "";
        li.append(h4);
        li.append(p);
        if ("start" === pos) {
            this.container.prepend(li);
        }
        else if ("end" === pos) {
            this.container.append(li);
        }
    }
}
