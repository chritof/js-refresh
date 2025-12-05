console.log("KonkurranseKontroller starter...");

class KonkurranseKontroller2 {
    #liste = [];
    #navnelement;
    #tidelement;
// Legg til her eventuelle flere private felt
    constructor(felt1ref,felt2ref) {
        this.#navnelement = felt1ref.querySelector("input[type='text']");
        this.#tidelement = felt1ref.querySelector("input[type='number']");
        const regbt = felt1ref.querySelector("button");
        regbt.addEventListener("click",
            () => { this.#regdeltager() }
        );
// Legg inn kode her for felt2
    }
    #regdeltager() {
// Legg inn kode her for å registrere deltager
        const navn = this.#navnelement.value;
        const tid = Number (this.#tidelement.value);

        const person = {
            "navn": navn,
            "tid": tid,
        }
        this.#liste.push(person);

    }
// Legg til metod(er) for å kunne søke på deltager
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("resultat");
new KonkurranseKontroller2(felt1,felt2);