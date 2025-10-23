console.log("online!...");

export class Ordanalyse {
    #tekstListe = new Map();

    constructor() {}

    setTekst(tekst) {
        //const ordListe = tekst.split(" ");
        this.#tekstListe.clear();
        const ordListe = (tekst.toLowerCase().match(/\p{L}+/gu) ?? []);

        for (const ord of ordListe) {
            if (!this.#tekstListe.has(ord)) {
                this.#tekstListe.set(ord, ord)
            }
        }
    }

    getAntallOrd(){
        console.log(this.#tekstListe.size);
        return this.#tekstListe.size;
    }

    getOrdliste(){
        console.log(Array.from(this.#tekstListe.keys()));
        return Array.from(this.#tekstListe.keys());

    }
}

const test = new Ordanalyse();
const t = "adad: d! d! d; awd d adawd adadadaw wdawd";
test.setTekst(t);
test.getAntallOrd();
test.getOrdliste();