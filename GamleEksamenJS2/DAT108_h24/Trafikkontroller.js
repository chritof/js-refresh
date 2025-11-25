console.log("Trafikkontroller: [online]... >");

class Trafikkontroller {
  #nedregrense;
  #ovregrense;
  #tbodyelement;
  #billiste = [];
  #Bilnummer;
  #tidspunkt;
  constructor(felt1, felt2) {
    // Pek på inputfeltene og koble klikk-hendelser
    this.#Bilnummer = felt1.getElementsByTagName("input")[0];
    this.#tidspunkt = felt1.getElementsByTagName("input")[1];
    felt1.querySelector("button").addEventListener("click", () => {
      this.#registrerpasseringer();
    });

    // Legg inn kode for felt 1, felt for å registrere bilpassering
    // Legg inn kode for å vise dagens dato i felt1 sitt <legend>
    // Kode for felt2, felt for å liste bilpasseringer
    this.#nedregrense = felt2.getElementsByTagName("input")[0];
    this.#ovregrense = felt2.getElementsByTagName("input")[1];
    this.#tbodyelement = felt2.getElementsByTagName("tbody")[0];
    felt2.querySelector("button").addEventListener("click", () => {
      this.#vispasseringer();
    });
  }

  // Sorterer lista etter tid i minutter
  #sorter() {
    this.#billiste.sort((a, b) => {
      return a.tidtall - b.tidtall;
    });
  }

  #vispasseringer() {
    // Tøm tabellen før ny visning og sorter registeret
    this.#tbodyelement.innerHTML = "";
    this.#sorter();

    // Hent grenser, default fra midnatt til 23:59
    const nedreStr = this.#nedregrense.value || "00:00";
    const [tN, mN] = nedreStr.split(":");
    const totN = Number(tN) * 60 + Number(mN);

    const ovreStr = this.#ovregrense.value || "23:59";
    const [tO, mO] = ovreStr.split(":");
    const totO = Number(tO) * 60 + Number(mO);

    // Filtrer og tegn rader i tabellen
    this.#billiste.forEach((bil) => {
      if (bil.tidtall >= totN && bil.tidtall <= totO) {
        const row = document.createElement("tr");
        const bilnummerTd = document.createElement("td");
        bilnummerTd.textContent = bil.bilnummer;
        const tidspunktTd = document.createElement("td");
        tidspunktTd.textContent = bil.tidspunkt;
        row.append(bilnummerTd, tidspunktTd);
        this.#tbodyelement.appendChild(row);
      }
    });
  }

  // Legg til metode for å registrere en bilpassering
  // Legg til eventuelle hjelpemetoder
  #registrerpasseringer() {
    // Pakk ut felt, gjør klokkeslett til total minutter
    const bilnummer = this.#Bilnummer.value;
    const tidspunkt = this.#tidspunkt.value;
    const [timerStr, minutterStr] = tidspunkt.split(":");
    const timer = Number(timerStr);
    const minutter = Number(minutterStr);
    const tidspunktVerdi = timer * 60 + minutter;

    const bil = {
      bilnummer: bilnummer,
      tidtall: tidspunktVerdi,
      tidspunkt: tidspunkt,
    };

    this.#billiste.push(bil);
    this.#billiste.forEach((bil) => console.log(bil));
    this.#Bilnummer.value = "";
    this.#tidspunkt.value = "";
  }
}
const felt1 = document.getElementById("registrering");
const felt2 = document.getElementById("resultat");
new Trafikkontroller(felt1, felt2);
