console.log("online...");

class Vennkontroller {
    #navnefelt;
    #alderfelt;
    #venner = [];

    #tbody;
// Fyll inn evt. flere felt
    constructor(felt1, felt2) {
// Kode for felt1, felt for å registrere venn
        this.#navnefelt = felt1.getElementsByTagName("input")[0];
        this.#alderfelt = felt1.getElementsByTagName("input")[1];
        felt1.querySelector("button").addEventListener(
            "click",
            () => { this.#registrervenn() }
        );
        //felt2
        this.#tbody = felt2.querySelector("tbody");


// Legg inn evt. mere kode her
    }
    #registrervenn() {
        /* Legg inn kode her for å vise venn fra Skjermbilde 1 i listen
        som vises i Skjermbilde 2 */
        const navn = this.#navnefelt.value;
        const alder = this.#alderfelt.valueAsNumber;
        this.#venner.push({navn, alder});
        console.log(navn);
        this.#venner.sort((a, b) => a.alder - b.alder)
        this.#tbody.innerHTML = "";
        
        for(const person of this.#venner) {
            const tr = document.createElement("tr");
            const tdNavn = document.createElement("td");
            tdNavn.textContent = person.navn;
            const tdAlder = document.createElement("td");
            tdAlder.textContent = person.alder;
            tr.append(tdAlder, tdNavn);
            this.#tbody.append(tr);
        }

    }
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("visning");
new Vennkontroller(felt1, felt2);