console.log("tekstanalyse:] ---(online...)")

class TekstAnalyse{

    #tekst
    #liste = [];
    constructor(){}

    set tekst(tekst){
        this.#tekst = tekst;
    }

    get liste(){
        this.#liste = this.#tekst.split(" ")
        console.log(`Liste: ${this.#liste}`);
        return this.#liste;
    }

    get antallOrd(){

    }

}

const analyse = new TekstAnalyse();
analyse.tekst = "Velkommen, ja velkommen til eksamen.";
analyse.liste;