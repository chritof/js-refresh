console.log("online....")

const beskrivelse = document.getElementById("beskrivelse");
const inputFelt = beskrivelse.querySelector("input");
const beskrivelseKnapp = beskrivelse.querySelector("button");
const alleKalkuleringer = document.getElementById("kalkuleringer")

beskrivelseKnapp.addEventListener("click", antallUtregninger);


function antallUtregninger(){
    const inputVerdi = inputFelt.valueAsNumber
    alleKalkuleringer.innerHTML = "";

    for (let i = 0; i < inputVerdi; i++) {
        const nb = i + 1;
        const felt = rad(nb);
        alleKalkuleringer.appendChild(felt);
    }

}

function rad(nr) {
    const raden = document.createElement("div");
    const operations = document.createElement("div");
    let valgtOp = null;

    raden.id = `raden-${nr}`;

    const a = document.createElement("input");
    a.setAttribute("type", "number");
    a.type = "number";
    a.placeholder = ` Tall a (${nr}) `;
    a.id = `a-${nr}`;

    const b = document.createElement("input");
    b.type = "number";
    b.placeholder = ` Tall b (${nr}) `;
    b.id = `b-${nr}`;

    const resultat = document.createElement("div");
    resultat.textContent = "---";
    const operation = ["+", "−", "×", "÷"];
    operation.forEach(sym => {
        const opbtn = document.createElement("button");
        opbtn.textContent = sym;
        operations.appendChild(opbtn);

        opbtn.addEventListener("click", () => {
            valgtOp = sym;
        })

    })

    //må lage funksjosnalitet for erlik
    const erlik = document.createElement("button");
    erlik.textContent = "=";
    erlik.addEventListener("click", () => {
        const aVerdi = a.valueAsNumber;
        const bVerdi = b.valueAsNumber;

        let svar;
        switch (valgtOp) {
            case "+": svar = aVerdi + bVerdi;break;
            case "−": svar = aVerdi - bVerdi;break;
            case "×": svar = aVerdi * bVerdi;break;
            case "÷": svar = aVerdi / bVerdi;break;
            default: svar = "Feil op";
        }

        resultat.textContent = svar;
    })



    raden.append(a, operations, b, erlik, resultat);
    return raden;
}