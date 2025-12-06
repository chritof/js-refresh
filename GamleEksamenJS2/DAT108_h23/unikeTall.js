console.log("Hello World");

class Talldata {
    #tallinput
// Legg til her eventuelle flere private felt
    //vi må ha en struktur som lagrer veridene, dette kan gjøres på flere
    //forskjellige måter. Mulig løsning er å lage en liste, og sjekke om
    //det tallet allerede er i listen, men dette krever litt ekstra tungvindt
    //kode. En bedre løsning kan være å lage et set. et set kan kun inneholde
    //ett identisk tall.
    #set = new Set();
    #antallspan;
    #sumspan;
    #sum = 0;
    constructor(root) {
        this.#tallinput =
            root.getElementsByTagName("input")[0];
        const bt =
            root.getElementsByTagName("button")[0];
        bt.addEventListener("click",
            (event) => { this.#lestall(event) }
        );
// Legg inn her mer kode hvis nødvendig
        this.#antallspan = root.querySelectorAll("span")[0];
        this.#sumspan = root.querySelectorAll("span")[1];

    }
    #lestall(event) {
// Legg inn kode her
        const nyttTall = Number (this.#tallinput.value);
        if(this.#set.has(nyttTall)) {
            this.#tallinput.setCustomValidity("Noe er feil");
            this.#tallinput.reportValidity();
            return;
        }else{
            this.#set.add(nyttTall);
            this.#antallspan.textContent = this.#set.size
            this.#sum = this.#sum + nyttTall;
            this.#sumspan.textContent = this.#sum;

            this.#tallinput.setCustomValidity("");
            this.#tallinput.reportValidity();
        }
    }
// Legg til eventuelle flere private metoder
}
const rootelement = document.getElementById("root");
new Talldata(rootelement);