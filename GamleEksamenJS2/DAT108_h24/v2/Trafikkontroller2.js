console.log("Trafikkontroller...")

class Trafikkontroller2 {
    #nedregrense;
    #ovregrense;
    #tbodyelement;
    #billiste = [];

    //for felt 1:
    #regnr;
    #tidspunkt;
    #span;
    constructor(felt1, felt2) {
// Legg inn kode for felt 1, felt for å registrere bilpassering
        this.#span = felt1.querySelector("span");
        const dato = new Date();
        const norskDato = dato.toLocaleDateString("nb-NO", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        this.#span.textContent = norskDato;

        this.#regnr = felt1.querySelector("#bilnummer");
        this.#tidspunkt = document.getElementById("tidspunkt");
        felt1.querySelector("button").addEventListener("click", () => {
            console.log("Trafikkontroller...")
            this.#registrerpasseringer();
        })
// Legg inn kode for å vise dagens dato i felt1 sitt <legend>
// Kode for felt2, felt for å liste bilpasseringer
        this.#nedregrense = felt2.getElementsByTagName("input")[0];
        this.#ovregrense = felt2.getElementsByTagName("input")[1];
        this.#tbodyelement = felt2.getElementsByTagName("tbody")[0];
        felt2.querySelector("button").addEventListener(
            "click",
            () => { this.#vispasseringer() }
        );
    }

    #vispasseringer() {
// Legg inn kode her for å liste bilpasseringer
        const [nedreTimestr, nedreMinuttstr] = this.#nedregrense.value.split(":");
        const nedreTime = parseInt(nedreTimestr);
        const nedreMinutt = parseInt(nedreMinuttstr);
        const nedreTidtall = nedreTime * 60 + nedreMinutt;

        const [ovreTimestr, ovreMinuttstr] = this.#ovregrense.value.split(":");
        const ovreTime = parseInt(ovreTimestr);
        const ovreMinutt = parseInt(ovreMinuttstr);
        const ovreTidtall = ovreTime * 60 + ovreMinutt;

        this.#billiste.forEach((element) => {
            if(element.tidtall >= nedreTidtall && element.tidtall <= ovreTidtall) {
                console.log(element);
                const row = document.createElement("tr");
                const tdreg = document.createElement("td");
                tdreg.innerHTML = element.regnr;
                const tdtidspunkt = document.createElement("td");
                tdtidspunkt.innerHTML = element.tidspunkt;
                row.appendChild(tdreg);
                row.appendChild(tdtidspunkt);
                this.#tbodyelement.appendChild(row);
            }
        })
    }
// Legg til metode for å registrere en bilpassering
    #registrerpasseringer() {
        const regnr = this.#regnr.value;
        const tidsstreng = this.#tidspunkt.value;

        const [timestr, minuttstr] = tidsstreng.split(":");
        const time = parseInt(timestr);
        const minutt = parseInt(minuttstr);

        const tidtall = time * 60 + minutt

        const passering = {
            "regnr": regnr,
            "tidtall": tidtall,
            "tidspunkt": tidsstreng,
        }

        this.#billiste.push(passering);

        this.#billiste.forEach(element => {
            console.log(element);
        })
    }
// Legg til eventuelle hjelpemetoder
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("resultat");
new Trafikkontroller2(felt1,felt2);