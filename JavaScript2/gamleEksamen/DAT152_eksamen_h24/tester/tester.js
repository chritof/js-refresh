console.log("tester...");
const knapp = document.createElement("template")
knapp.innerHTML = `<button>test</button>`;

class Tester extends HTMLElement {

    #callbacks = new Map();
    #callbackid;
    #shadow;
    #knapp;
    constructor() {
        super();
        this.#shadow = this.attachShadow({mode: 'closed'});
        const content = knapp.content.cloneNode(true);
        this.#shadow.append(content);
        this.#knapp = this.#shadow.querySelector("button");
        this.#knapp.addEventListener("click", () => {
            this.#allCallbacks();
        })
    }

    addCallback(callback) {
        this.#callbackid = Symbol("callback");
        this.#callbacks.set(this.#callbackid, callback);
        return this.#callbackid;
    }

    #allCallbacks() {
        this.#callbacks.forEach(callback => callback());
    }

    deletetCallback(callbackid){
        if (this.#callbacks.has(callbackid)) {
            this.#callbacks.delete(callbackid);
        }
    }
}
customElements.define('test-er', Tester);

const sl = document.getElementById('2');
const testerMessage = sl.addCallback(() => {
    console.log('tester');
})
const loremMessage = sl.addCallback(() => {
    console.log('lorem ipsum');
})

//dette vil slette callback basert på iden som blir laget med symbol i addCallback metoden
//sl.deletetCallback(loremMessage);


