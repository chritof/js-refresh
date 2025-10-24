console.log("[calculator] online...");

class Calculator {
    constructor() {
        this.status = "idle";
        this.result = 0;
    }

    /**
     * Utfører en matematisk beregning
     * @param {String} operation - Matematisk operasjon: sum, produkt, min, max
     * @param {Array.<String>} numberList - Liste med input-verdier
     */
    calculate(operation, numberList) {
        const feilmeldinger = [
            "Ingen tall i tallisten",
            "Tallisten inneholder verdi(er) som ikke er tall",
            "Alle input-verdier ble prosessert"
        ];

        const gyldige = [];
        const ugyldige = [];

        // Sortér tall i gyldige og ugyldige
        for (const element of numberList) {
            const tall = Number(element);
            if (!Number.isNaN(tall)) gyldige.push(tall);
            else ugyldige.push(element); // behold teksten
        }

        // Hvis ingen gyldige tall
        if (gyldige.length === 0) {
            this.status = feilmeldinger[0];
            this.result = 0;
            return;
        }

        // Utfør valgt operasjon
        switch (operation) {
            case "sum":
                this.result = 0;
                for (const number of gyldige) {
                    this.result += number;
                }
                break;

            case "min":
                this.result = Math.min(...gyldige);
                break;

            case "max":
                this.result = Math.max(...gyldige);
                break;

            case "produkt":
                this.result = gyldige.reduce((acc, val) => acc * val, 1);
                break;

            default:
                this.result = "Feil operasjon";
        }

        // Sett status
        if (ugyldige.length > 0) {
            this.status = feilmeldinger[1];
        } else {
            this.status = feilmeldinger[2];
        }
    }
}

// Test
const calculator = new Calculator();
calculator.calculate("produkt", ["1", "2", "4", "2"]);
console.log(`Svaret er: ${calculator.result}`);
console.log(`Status for utregning: ${calculator.status}`);