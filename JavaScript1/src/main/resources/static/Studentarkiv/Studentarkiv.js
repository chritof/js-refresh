console.log("online...")

class Studentarkiv {

    #arkiv = new Map();


    constructor(){

    }


    nystudent(student){

        if(typeof(student) !== "object" || student === null){return null}

        const {id, fornavn, etternavn, tlf} = student;

        if (!Number.isInteger(id)) {return null}
        if(typeof fornavn !== "string" || typeof etternavn !== "string"){return null}
        if(fornavn.trim() === "" || etternavn.trim() === ""){return null}

        if(tlf !== undefined && tlf !== null){
            if (!Array.isArray(tlf)) return null;
            for (const num of tlf) {
                if (typeof num !== "string") return null;
            }
        }

        if(this.#arkiv.has(id)){
            return false;
        }

        this.#arkiv.set(id, {id, fornavn, etternavn, tlf});
        return true;
    }

    hartelefon(id, telefonnummer){
        //først sjekke om parameterene er riktig
        if(!this.#arkiv.has(id)){return false}
        if(typeof(telefonnummer) !== "string"){return false}
        //finne studnet i arkivet med gitt id
        const student = this.#arkiv.get(id);
        //se om student har en liste met tlf:
        if(!Array.isArray(student.tlf)) return false;
        //hvis alt over er godkjent, kan vi se om student har gitt telefonnummer:
        if(student.tlf.includes(telefonnummer)){
            return true;
        }
    }

    nytelefon(id, nummer) {
        if (!Number.isInteger(id) || typeof nummer !== "string") {
            return null;
        }
        const student = this.#arkiv.get(id);
        if (!student) {
            return null;
        }
        if (!Array.isArray(student.tlf)) {
            student.tlf = [];
        }
        if (student.tlf.includes(nummer)) {
            return false;
        }
        student.tlf.push(nummer);
        this.#arkiv.set(id, student);
        return true;
    }

    eksporterdata() {
        let resultat = "";

        for (const student of this.#arkiv.values()) {
            const tlf = Array.isArray(student.tlf) ? student.tlf.join(";") : "";
            resultat += `${student.id};${student.etternavn};${student.fornavn}`;

            // bare legg til tlf hvis studenten har noen
            if (tlf !== "") {
                resultat += `;${tlf}`;
            }

            resultat += "\n"; // linjeskift mellom studenter
        }

        return resultat.trim(); // fjern siste linjeskift
    }
}

const arkiv = new Studentarkiv();
const ole = arkiv.nystudent({
    id: 101,
    etternavn: "Olsen",
    fornavn: "Ole",
    tlf: ["112 23 344", "323 22 323"]
});
const anne = arkiv.nystudent(
    { id:106,etternavn:"Annesen",fornavn: "Anne" }
);
const oletelefon = arkiv.hartelefon(101, "112 23 344");
const annetelefon = arkiv.hartelefon(106, "767 44 333");
const arkivdata = arkiv.eksporterdata();

console.log(arkivdata);