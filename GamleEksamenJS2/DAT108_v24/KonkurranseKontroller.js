console.log("KonkurranseKontroller] online:::..");

class KonkurranseKontroller {
  #liste = [];
  #navnelement;
  #tidelement;
  #spanNavn;
  #spanTid;
  #plasseringElement;

  // Legg til her eventuelle flere private felt
  constructor(felt1ref, felt2ref) {
    this.#navnelement = felt1ref.querySelector("input[type='text']");
    this.#tidelement = felt1ref.querySelector("input[type='number']");
    const regbt = felt1ref.querySelector("button");
    regbt.addEventListener("click", () => {
      this.#regdeltager();
    });
    // Legg inn kode her for felt2
    this.#spanNavn = felt2ref.getElementsByTagName("span")[0];
    this.#spanTid = felt2ref.getElementsByTagName("span")[1];
    this.#plasseringElement = felt2ref.querySelector("input[type='number']");
    const plasseringbt = felt2ref.querySelector("button");
    plasseringbt.addEventListener("click", () => {
      this.#hentdeltager();
    });
  }
  #regdeltager() {
    // Legg inn kode her for å registrere deltager
    const navnVerdi = this.#navnelement.value;
    const tidVerdi = Number(this.#tidelement.value);
    if (navnVerdi != "" && tidVerdi != 0) {
      const deltager = {
        navn: navnVerdi,
        tidelement: tidVerdi,
      };
      this.#liste.push(deltager);
    }
    this.#sorter();
    this.#liste.forEach((d) => console.log(d));
  }
  // Legg til metod(er) for å kunne søke på deltager
  #sorter() {
    this.#liste.sort((a, b) => {
      return a.tidelement - b.tidelement;
    });
  }

  #hentdeltager() {
    const index = Number(this.#plasseringElement.value - 1);
    console.log(this.#liste.at(index));
    const deltager = this.#liste.at(index);
    if (!deltager) {
      this.#spanNavn.textContent = "Ugyldig plassering";
      this.#spanTid.textContent = "";
      return;
    }
    this.#spanNavn.textContent = deltager.navn;
    this.#spanTid.textContent = deltager.tidelement;
  }
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("resultat");
new KonkurranseKontroller(felt1, felt2);
