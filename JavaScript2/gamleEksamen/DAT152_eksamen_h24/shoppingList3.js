/*
hvordan løse denne oppgave?:
1.  Det første man må gjøre er å lese HELE oppgaven, inkludert deloppgavene (a,b,...,n). Få en fullstendig oversikt
    over hva oppgaven vil fram til. Vi skal lage en js klasse "shoppingList" som skal vise items i en tabell på
    nettsiden, i tilegg skal klassen kunne legge til og slette items. måten klassen seltter items på er ved å
    få en funksjon i et callback.
2.  neste steget er å lage "grunn elementet" som vi har fått som template.
 */




console.log("onlasdine...")
const template = document.createElement("template");
template.innerHTML = `
<table id="shoppinglist">
<thead>
<tr><th>Item</th><th>Amount</th><th>Deadline</th><th>Actions</th></tr>
</thead>
<tbody></tbody>
</table>`;

const itemrow = document.createElement("template");
itemrow.innerHTML = `
<tr>
<td></td>
<td></td>
<td></td>
<td><button type="button">Remove</button></td>
</tr>`;

class ShoppingList extends HTMLElement {
// Add the necessary private fields
    #shoppinglist;
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'closed' });
        const content = template.content.cloneNode(true);
        shadow.append(content);
// More code, if necessary
        this.#shoppinglist = shadow.querySelector("tbody");

    }
    addremoveitemcallback(callback) {
// More code
    }
    additem(item) {
// More code
        const content = itemrow.content.cloneNode(true);
        const row = content.firstElementChild;
        row.cells[0].textContent = item.name;
        row.cells[1].textContent = item.amount;
        row.cells[2].textContent = item.deadline;

        const btn = row.querySelector("button");
        btn.addEventListener("click", () => {
            this.removeitem(item.id);
        })
    }
    removeitem(id) {
// More code
    }
// More code, if necessary
}
customElements.define('shopping-list3', ShoppingList);