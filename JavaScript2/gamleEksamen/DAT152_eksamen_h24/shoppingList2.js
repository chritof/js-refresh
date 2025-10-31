console.log("online2....")
const template = document.createElement("template");
template.innerHTML = `
  <table id="shoppinglist">
    <thead>
      <tr><th>Item</th><th>Amount</th><th>Deadline</th><th></th></tr>
    </thead>
    <tbody></tbody>
  </table>
`;

const itemrow = document.createElement("template");
itemrow.innerHTML = `
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td><button type="button">Remove</button></td>
  </tr>
`;


class ShoppingList2 extends HTMLElement {
    #callbacks = new Map();
    #shoppinglist;
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'closed' });
        const content = template.content.cloneNode(true);
        shadow.append(content);
        this.#shoppinglist = shadow
            .getElementById("shoppinglist").tBodies[0];
    }
    addremoveitemcallback(callback) {
        const callbackid = Symbol("additemcallback");
        this.#callbacks.set(callbackid, callback);
        return callbackid;
    }
    additem(item) {
        let row = this.#shoppinglist
            .querySelector(`tr[data-id="${item.id}"]`);
        if (row !== null) {
// Item is already listed in table
            return;
        }
        const content = itemrow.content.cloneNode(true);
        row = content.firstElementChild;
        row.dataset.id = item.id;
        row.dataset.time = item.deadline.getTime();
        row.cells[0].textContent = item.name;
        row.cells[1].textContent = item.amount;
        const bt = row.cells[3]
            .getElementsByTagName("button")[0];
        bt.addEventListener("click",
            () => { this.#onremove(item.id) }
        );
        const deadlineText = item.deadline.toLocaleDateString(
            navigator.language,
            { weekday: "long", dayPeriod: "long" }
        );
        row.cells[2].textContent = deadlineText;
        const index = Array.from(this.#shoppinglist.rows)
            .findIndex(
                (element) =>
                    element.dataset.time > row.dataset.time
            );
        const newrow = this.#shoppinglist.insertRow(index);
        newrow.replaceWith(row);
    }

    removeitem(id) {
        const row = this.#shoppinglist
            .querySelector(`tr[data-id="${id}"`);
        if (row !== null) {
            row.remove();
        }
    }
    #onremove(id) {
        this.#callbacks.forEach(callback => callback(id));
    }
}
customElements.define('shopping-list2', ShoppingList2);



//==||tester||==//
    const sl = document.getElementById('sl');

    // Legg til callback for "Remove"-knapper
    sl.addremoveitemcallback((id) => {
        console.log(`Item med id ${id} skal fjernes`);
        sl.removeitem(id);
    });
sl.addremoveitemcallback((id) => console.log("Fjernet id:", id));
sl.addremoveitemcallback((id) => alert("Du fjernet id " + id));

    // Legg til varer
    sl.additem({ id: 1, name: "Milk", amount: "5 litres", deadline: new Date(2024, 10, 29, 9, 0) });
    sl.additem({ id: 2, name: "Bananas", amount: "2 kg", deadline: new Date(2024, 10, 30, 12, 23) });
    sl.additem({ id: 3, name: "Bread", amount: "1 pcs", deadline: new Date(2024, 11, 2, 15, 0) });
