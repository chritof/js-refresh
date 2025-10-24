console.log("tekstanalyse:] ---(online...)")

class TekstAnalyse{

    #tekst
    #liste = [];
    constructor(){}


    set tekst(tekst){
        this.#tekst = tekst;
    }

    get liste(){
        return this.#liste;
    }
}