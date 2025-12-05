console.log("Vennekontroller2");

class Vennkontroller {
    #navnefelt;
    #alderfelt;
    #tabell;
    #tbody;
    #span;
    #dato;
// Fyll inn evt. flere felt
    constructor(felt1, felt2) {
// Kode for felt1, felt for å registrere venn
        this.#navnefelt = felt1.getElementsByTagName("input")[0];
        this.#alderfelt = felt1.getElementsByTagName("input")[1];
        felt1.querySelector("button").addEventListener(
            "click",
            () => { this.#registrervenn() }
        );
// Legg inn evt. mere kode her
        this.#tabell = felt2.querySelector("tbody")
        this.#tbody = felt2.querySelector("tbody");
        this.#span = felt2.querySelector("span");
        this.#dato = new Date().getFullYear();
        this.#span.textContent = this.#dato;

    }
    #registrervenn() {
        /* Legg inn kode her for å vise venn fra Skjermbilde 1 i listen
        som vises i Skjermbilde 2 */
        const row = document.createElement("tr");
        const navnData = document.createElement("td")
        const alderData = document.createElement("td");
        const navn = this.#navnefelt.value;
        const alder = Number(this.#alderfelt.value);

        navnData.innerHTML = navn;
        alderData.innerHTML = alder;

        row.appendChild(alderData);
        row.appendChild(navnData);
        this.#tbody.appendChild(row);
        this.#sorter();

    }

    #sorter() {
        const rows = Array.from(this.#tbody.querySelectorAll("tr"));

        rows.sort((a, b) => {
            const alderA = a.children[1].innerText;
            const alderB = b.children[1].innerText;
            return alderA.localeCompare(alderB);
        });

        this.#tbody.innerHTML = "";
        rows.forEach(r => this.#tbody.appendChild(r));
    }


}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("visning");
new Vennkontroller(felt1, felt2);
