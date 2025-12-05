console.log("Set...")

//lage et set:
const ss = new Set([1, 2, 3, 3, 2]);
console.log(ss); // Set { 1, 2, 3 } – duplikater fjernes

const s = new Set();

s.add(1);        // Set { 1 }
s.add(2);        // Set { 1, 2 }
s.add(2);        // fortsatt { 1, 2 } – ingen duplikater

console.log(s.has(2)); // true
console.log(s.has(3)); // false

s.delete(1);     // Set { 2 }
s.clear();       // Set {} – tomt

const sss = new Set([1, 2, 3]);
for (const value of sss) {
    console.log(value);
}
// Konvertere til array
const arr = [...sss]; // [1, 2, 3]

//typisk bruksområde: fjerne duplikater i en array:
const arrr = [1, 2, 2, 3, 3, 3];
const unik = [...new Set(arrr)]; // [1, 2, 3]

//Et annet eksempel: Sjekke om noe er “sett før” (for eksempel besøkte brukere, besøkte noder i en graf, osv.)
const besøkt = new Set();

function besøk(id) {
    if (besøkt.has(id)) {
        console.log("Allerede besøkt");
        return;
    }
    besøkt.add(id);
    console.log("Første gang vi besøker", id);
}
