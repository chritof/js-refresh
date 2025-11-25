console.log("Vennekontroller online...");

class Vennkontroller {
  #navnefelt;
  #alderfelt;

  #tbody;
  // Fyll inn evt. flere felt
  constructor(felt1, felt2) {
    // Kode for felt1, felt for å registrere venn
    this.#navnefelt = felt1.getElementsByTagName("input")[0];
    this.#alderfelt = felt1.getElementsByTagName("input")[1];
    felt1.querySelector("button").addEventListener("click", () => {
      this.#registrervenn();
    });
    // Legg inn evt. mere kode her
    this.#tbody = felt2.querySelector("tbody");
  }
  #registrervenn() {
    /* Legg inn kode her for å vise venn fra Skjermbilde 1 i listen
som vises i Skjermbilde 2 */
    console.log("kliket!");
    const navn = this.#navnefelt.value.trim();
    const alder = Number(this.#alderfelt.value);

    if (navn !== "" && alder > 0 && alder < 111) {
      const row = document.createElement("tr");

      const navnTd = document.createElement("td");
      navnTd.textContent = navn;

      const alderTd = document.createElement("td");
      alderTd.textContent = alder;

      row.appendChild(alderTd);
      row.appendChild(navnTd);
      this.#tbody.appendChild(row);

      const rader = Array.from(this.#tbody.querySelectorAll("tr"));

      rader.sort((a, b) => {
        const alderA = Number(a.children[0].textContent);
        const alderB = Number(b.children[0].textContent);
        return alderA - alderB;
      });

      this.#tbody.innerHTML = "";
      rader.forEach((rad) => this.#tbody.appendChild(rad));

      this.#navnefelt.value = "";
      this.#alderfelt.value = "";
    } else {
      console.log("Ugyldig navn eller alder");
    }
  }
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("visning");
new Vennkontroller(felt1, felt2);
