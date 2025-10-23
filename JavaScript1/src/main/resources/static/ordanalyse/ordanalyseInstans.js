console.log("online2...")
import { Ordanalyse } from './ordanalyse.js';

const ordanalyse = new Ordanalyse();
const pTekstliste = document.createElement('p');
const pAntall = document.createElement('p');
const tekst = document.querySelector('[data-tekst]');

const analyseKnapp = document.querySelector('[data-analyser]');
const resultat = document.querySelector('[data-resultat]');

analyseKnapp.addEventListener('click', () => {

    ordanalyse.setTekst(tekst.value);
    pTekstliste.textContent = ordanalyse.getOrdliste().join(", ");
    pAntall.textContent = "Antall unike ord: " + ordanalyse.getAntallOrd();
    resultat.appendChild(pTekstliste);
    resultat.appendChild(pAntall);
})