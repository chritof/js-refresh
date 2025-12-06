console.log("KonkurranseKontroller starter...");

class KonkurranseKontroller2 {
    #liste = [];
    #navnelement;
    #tidelement;
    #finnplassering;
    #knappelement;
    #spannavn;
    #spantid;
// Legg til her eventuelle flere private felt
    constructor(felt1ref,felt2ref) {
        this.#navnelement = felt1ref.querySelector("input[type='text']");
        this.#tidelement = felt1ref.querySelector("input[type='number']");
        const regbt = felt1ref.querySelector("button");
        regbt.addEventListener("click",
            () => { this.#regdeltager() }
        );
// Legg inn kode her for felt2
        this.#finnplassering = felt2ref.querySelector("input")
        this.#knappelement = felt2ref.querySelector("button").addEventListener("click", () => this.#finndeltager());
        this.#spannavn = felt2ref.querySelectorAll("span")[0];
        this.#spantid = felt2ref.querySelectorAll("span")[1];
    }
    #regdeltager() {
// Legg inn kode her for å registrere deltager
        const navn = this.#navnelement.value;
        const tid = Number (this.#tidelement.value);

        //vi må validere. hva skal være gyldig input?
        //gyldig input kan Skal være
            //for navn:
                //den skal ikke være tom
                //den MÅ være at typen string (kan ikke inneholde tall)
            //for tid:
                //dem skal ikke være tom
                //den skal kun inneholde integer

        if(navn === "" || isNaN(tid)){
            return;
        }


        const person = {
            "navn": navn,
            "tid": tid,
        }
        this.#liste.push(person);
        console.log(person);

        this.#liste.sort((a, b) => a.tid - b.tid);
    }

    #finndeltager() {
        const plassering = Number (this.#finnplassering.value) - 1;
        const deltager = this.#liste[plassering];
        this.#spannavn.textContent = deltager.navn;
        this.#spantid.textContent = deltager.tid;


    }


// Legg til metod(er) for å kunne søke på deltager
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("resultat");
new KonkurranseKontroller2(felt1,felt2);