class Vennkontroller {
    #navnefelt;
    #alderfelt;
    #tbody;
    #span;


// Fyll inn evt. flere felt
    constructor(felt1, felt2) {
// Kode for felt1, felt for å registrere venn
        this.#tbody = felt2.querySelector("tbody");
        this.#span = felt2.querySelector("span");
        this.#navnefelt = felt1.getElementsByTagName("input")[0];
        this.#alderfelt = felt1.getElementsByTagName("input")[1];
        felt1.querySelector("button").addEventListener(
            "click",
            () => { this.#registrervenn() }
        );
// Legg inn evt. mere kode her
        this.#span.textContent = new Date().getFullYear();
    }




    #registrervenn() {
        /* Legg inn kode her for å vise venn fra Skjermbilde 1 i listen
        som vises i Skjermbilde 2 */
        const navn = this.#navnefelt.value.trim();
        const alder = this.#alderfelt.valueAsNumber;

        if(!navn){
            alert("Skriv inn et gyldig navn!");
            this.#navnefelt.focus();
            return;
        }
        if (Number.isNaN(alder) || alder < 0 || alder > 110) {
            alert("Velg en gyldig alder!");
            this.#alderfelt.focus();
            return;
        }

        const tr = document.createElement("tr");

        const navnTd = document.createElement("td");
        navnTd.textContent = navn;
        const alderTd = document.createElement("td");
        alderTd.textContent = alder;

        tr.append(alderTd, navnTd);
        this.#tbody.appendChild(tr)

        const rader = Array.from(this.#tbody.querySelectorAll("tr"));
        rader.sort((a, b) =>{
            const alderA = Number(a.children[0].textContent);
            const alderB = Number(b.children[0].textContent);
            return alderA - alderB;
        })

        rader.forEach(row => this.#tbody.appendChild(row));
    }
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("visning");
new Vennkontroller(felt1, felt2);
