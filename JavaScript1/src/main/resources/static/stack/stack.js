console.log("online...");

const input = document.getElementById("input");
const pushBtn = document.getElementById("pushBtn");
const popBtn = document.getElementById("popBtn");
const output = document.getElementById("output");

// selve stabelen (array)
const stack = [];

// legg til tekst i stabelen (push)
pushBtn.addEventListener("click", () => {
    const tekst = input.value.trim();
    if (tekst === "") {
        output.textContent = "Skriv noe først!";
        return;
    }
    stack.push(tekst);
    input.value = ""; // tøm inputfeltet
    output.textContent = `Lagt til "${tekst}" (lengde: ${stack.length})`;
    console.log("Stack nå:", stack);
});

// fjern siste element fra stabelen (pop)
popBtn.addEventListener("click", () => {
    if (stack.length === 0) {
        output.textContent = "Stabelen er tom!";
        return;
    }
    const topp = stack.pop();
    output.textContent = `Fjernet "${topp}" (gjenstår: ${stack.length})`;
    console.log("Stack nå:", stack);
});