console.log("online...");

const felt1 = document.getElementById("felt1");
const button1 = felt1.querySelector("#button1");
const kalkuleringer = felt1.querySelector("#kalkuleringer");

button1.addEventListener("click", antallUtregninger);

function antallUtregninger() {
    const input = felt1.querySelector("#input");
    const antall = input.valueAsNumber;

    if (Number.isNaN(antall) || antall <= 0) {
        kalkuleringer.innerHTML = "<p>Skriv inn et gyldig antall (min. 1).</p>";
        return;
    }

    kalkuleringer.innerHTML = "";
    for (let i = 0; i < antall; i++) {
        const rad = lagRad(i + 1);
        kalkuleringer.appendChild(rad);
    }
    }

function lagRad(nr) {
    const row = document.createElement("div");
    row.className = "calc-row";

    // Input A og B
    const a = document.createElement("input");
    a.type = "number";
    a.placeholder = `Tall A (${nr})`;
    a.className = "kalkInput";
    a.id = `a-${nr}`;

    const b = document.createElement("input");
    b.type = "number";
    b.placeholder = `Tall B (${nr})`;
    b.className = "kalkInput";
    b.id = `b-${nr}`;

    // Operator-knapper
    const ops = document.createElement("div");
    ops.className = "ops";
    const operators = ["+", "−", "×", "÷"];
    let valgtOp = null;

    operators.forEach(sym => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "op-btn";
        btn.textContent = sym;
        btn.addEventListener("click", () => {
            // uten denne vil knappen være aktiv for alltid etter du først har klikket på den!
            [...ops.children].forEach(el => el.classList.remove("active"));
            btn.classList.add("active");
            valgtOp = sym;
        });
        ops.appendChild(btn);
    });

    // "=" knapp
    const eq = document.createElement("button");
    eq.type = "button";
    eq.className = "eq-btn";
    eq.textContent = "=";

    // Resultat
    const res = document.createElement("div");
    res.className = "resultat";
    res.textContent = "—";

    eq.addEventListener("click", () => {
        const va = a.valueAsNumber;
        const vb = b.valueAsNumber;

        if (Number.isNaN(va) || Number.isNaN(vb)) {
            res.textContent = "Ugyldig tall";
            return;
        }
        if (!valgtOp) {
            res.textContent = "Velg operator";
            return;
        }

        let out;
        switch (valgtOp) {
            case "+": out = va + vb; break;
            case "−": out = va - vb; break;
            case "×": out = va * vb; break;
            case "÷":
                if (vb === 0) { res.textContent = "Deling på 0"; return; }
                out = va / vb;
                break;
            default: out = "Feil op";
        }

        res.textContent = Number.isFinite(out) ? formatNumber(out) : "Ugyldig";
    });

    row.append(a, b, ops, eq, res);
    return row;
}

function formatNumber(n) {
    // Vis heltall uten desimaler, ellers maks 4 desimaler
    if (Number.isInteger(n)) return String(n);
    return n.toFixed(4).replace(/\.?0+$/, ""); // trim trailing zeros
}