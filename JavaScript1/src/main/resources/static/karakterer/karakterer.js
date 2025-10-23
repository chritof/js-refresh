console.log("online...")

class Karakterer {
    #emnekode;
    #semester;
    #karakterListe = new Map();

    constructor(emnekode, semester) {
        this.#emnekode = emnekode
        this.#semester = semester;
    }

    addStudent(student) {
        if (typeof student !== "object" || student === null) return null;

        const { id, etternavn, fornavn, karakter } = student;

        const idRegex = /^\p{Letter}\d{3}$/u;
        if (typeof id !== "string" || !idRegex.test(id)) return null;
        if (this.#karakterListe.has(id)) return null;

        if (typeof fornavn !== "string" || typeof etternavn !== "string") return null;

        if (typeof karakter !== "string") return null;
        const k = karakter.toUpperCase();
        const gyldig = ["A","B","C","D","E","F"];
        if (!gyldig.includes(k) || k.length !== 1) return null;

        this.#karakterListe.set(id, { id, etternavn, fornavn, karakter: k });

        return { id, etternavn, fornavn, karakter: k };
    }

    getStatistikk() {
        const fordeling = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

        for (const student of this.#karakterListe.values()) {
            const k = student.karakter.toUpperCase();
            if (fordeling.hasOwnProperty(k)) {
                fordeling[k]++;
            }
        }

        return {
            emne: this.#emnekode,
            semester: this.#semester,
            karakterfordeling: fordeling
        };
    }
}

const karakterliste = new Karakterer("DAT108", "V2023");
karakterliste.addStudent({
    "id": "o123",
    "fornavn": "Ole",
    "etternavn": "Olsen",
    "karakter": "B"
});
karakterliste.addStudent({
    "id": "g324",
    "fornavn": "Gro",
    "etternavn": "Grosen",
    "karakter": "B"
});
const statistikk = karakterliste.getStatistikk();
console.log(JSON.stringify(statistikk, null, 4));