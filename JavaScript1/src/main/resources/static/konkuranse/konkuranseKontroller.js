console.log("[KonkuranseKontroller]: online....");

class KonkurranseKontroller {
    #liste = [];
    #navnelement;
    #tidelement;
    //for felt2:
    #plasseringElement;
    #spanNavn;
    #spanTid;
// Legg til her eventuelle flere private felt
    constructor(felt1ref,felt2ref) {
        this.#navnelement =
            felt1ref.querySelector("input[type='text']");
        this.#tidelement =
            felt1ref.querySelector("input[type='number']");
        const regbt = felt1ref.querySelector("button");
        regbt.addEventListener("click",
            () => { this.#regdeltager() }
        );

        //for felt 2:
        this.#plasseringElement = felt2ref.querySelector("input[type='number']")
        const plasBtn = felt2ref.querySelector("button");
        plasBtn.addEventListener("click", () => {this.#sokPlassering()})
        this.#spanNavn = felt2ref.querySelectorAll("span")[0];
        this.#spanTid = felt2ref.querySelectorAll("span")[1];


// Legg inn kode her for felt2
    }
    #regdeltager() {
// Legg inn kode her for å registrere deltager
        const navn = this.#navnelement.value;
        const tid = this.#tidelement.valueAsNumber;
        this.#liste.push({ navn, tid })
        this.#liste.sort((a, b) => a.tid - b.tid);
        console.log("Oppdatert liste:", this.#liste);
    }

    #sokPlassering() {
        const plassering = this.#plasseringElement.valueAsNumber;
        if (plassering <= 0 || plassering > this.#liste.length) {
            return null;
        }

        this.#spanNavn.textContent = this.#liste.at(plassering-1).navn;
        this.#spanTid.textContent = this.#liste.at(plassering-1).tid;



        console.log(this.#liste.at(plassering-1));
    }

// Legg til metod(er) for å kunne søke på deltager
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("resultat");
const test = new KonkurranseKontroller(felt1,felt2);
//console.log(test.regdeltager());