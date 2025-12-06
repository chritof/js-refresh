

const tall = [10, 3, 5, 1];
tall.sort((a, b) => a - b);
console.log(tall); // [1, 3, 5, 10]




const navn = ["Charlotte", "Åse", "Anna"];
navn.sort((a, b) => a.localeCompare(b));
console.log(navn);
// ["Anna", "Charlotte", "Åse"]



const personer = [
    { navn: "Ola", alder: 30 },
    { navn: "Kari", alder: 20 }
];

personer.sort((a, b) => a.alder - b.alder);


const arr = [3, "ola", {navn: "kari"}, "anna", 10];


arr.sort((a, b) => {
    const typeA = typeof a;
    const typeB = typeof b;

    if (typeA !== typeB) {
        // sorter etter type i ønsket rekkefølge
        return typeA.localeCompare(typeB);
    }

    // Hvis begge er strings:
    if (typeA === "string") return a.localeCompare(b);

    // Hvis begge er tall:
    if (typeA === "number") return a - b;

    // Hvis objekter:
    return a.navn.localeCompare(b.navn);
});