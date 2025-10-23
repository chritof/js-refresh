console.log("online.....")

class Talldata {
    #tallinput;
    #tallset = new Set();
    #sum = 0;
    #ulikeTall;
    #sumSpan;
    constructor(root) {
        this.#tallinput =
            root.getElementsByTagName("input")[0];
        const bt =
            root.getElementsByTagName("button")[0];
        bt.addEventListener("click",
            (event) => { this.#lestall(event) }
        );

        this.#ulikeTall = root.getElementsByTagName("span")[0];
        this.#sumSpan = root.getElementsByTagName("span")[1];

    }
    #lestall(event) {
        const n = this.#tallinput.valueAsNumber;

        if (Number.isNaN(n) || !Number.isInteger(n)) {
            this.#tallinput.setCustomValidity("Skriv inn et gyldig heltall.");
            this.#tallinput.reportValidity();
            return;
        }

        if (this.#tallset.has(n)) {
            this.#tallinput.setCustomValidity("Tallet er allerede registrert.");
            this.#tallinput.reportValidity();
            return;
        }

        this.#tallinput.setCustomValidity("");
        this.#tallinput.reportValidity();

        this.#tallset.add(n);
        this.#sum += n;

        this.#ulikeTall.textContent = String(this.#tallset.size);
        this.#sumSpan.textContent   = String(this.#sum);

        this.#tallinput.value = "";
        this.#tallinput.focus();
    }
    }
const rootelement = document.getElementById("root");
new Talldata(rootelement);