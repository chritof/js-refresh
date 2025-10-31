// === HTML-templates gitt i oppgaven ===
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

// === Løsning: Web Component ===
class ShoppingList extends HTMLElement {
    // private felter
    #items = [];
    #callbacks = [];
    #tbody;

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "closed" });
        const content = template.content.cloneNode(true);
        shadow.append(content);

        // referanse til <tbody>
        // NB: shadow er lukket, men vi er fortsatt i konstruktøren
        this.#tbody = shadow.querySelector("tbody");
    }

    // Registrer en callback som trigges når bruker klikker "Remove".
    // Callback kalles med (id) for det aktuelle elementet.
    addremoveitemcallback(callback) {
        this.#callbacks.push(callback);
        // kan returnere index som identifikator (valgfritt iht. oppgaven)
        return this.#callbacks.length - 1;
    }

    // Legg til et item og oppdater visningen (sortert på deadline stigende)
    additem(item) {
        // forventer formatet fra oppgaven: { id, name, amount, deadline: Date }
        this.#items.push(item);
        this.#sortItems();
        this.#render();
    }

    // Fjern et item med gitt id fra visningen (og intern liste) og oppdater
    removeitem(id) {
        const before = this.#items.length;
        this.#items = this.#items.filter((it) => it.id !== id);
        if (this.#items.length !== before) {
            this.#render();
        }
    }

    // --- Hjelpemetoder ---
    #sortItems() {
        this.#items.sort((a, b) => a.deadline - b.deadline);
    }

    #render() {
        // tøm tbody
        this.#tbody.textContent = "";

        for (const it of this.#items) {
            const rowFrag = itemrow.content.cloneNode(true);
            const tr = rowFrag.querySelector("tr");
            const tds = tr.querySelectorAll("td");

            // Fyll celler
            tds[0].textContent = it.name;
            tds[1].textContent = it.amount;

            // Tekst for deadline iht. oppgaven (weekday + dayPeriod)
            const deadlineText = it.deadline.toLocaleDateString(
                navigator.language,
                { weekday: "long", dayPeriod: "long" }
            );
            tds[2].textContent = deadlineText;

            // Koble "Remove"-knappen til alle registrerte callbacks
            const btn = tds[3].querySelector("button");
            btn.addEventListener("click", () => {
                // komponenten fjerner ikke selv — klientkode kaller removeitem(id)
                for (const cb of this.#callbacks) {
                    try { cb(it.id); } catch (_) { /* svelg feil i callbacks */ }
                }
            });

            this.#tbody.appendChild(rowFrag);
        }
    }
}

customElements.define("shopping-list", ShoppingList);