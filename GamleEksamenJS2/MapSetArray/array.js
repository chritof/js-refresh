console.log("array...")

//hvordan man lager en array:
const tal = [1,2,3]
const navn = ["Ola", "Kari"];

//Legge til / fjerne
const arr = [1,2];
//legge til på slutten av arrayen:
arr.push(3);
//ta fra slutten
const siste = arr.pop();
//legge til foran:
arr.unshift(0);
//ta fra starten
const forste = arr.shift();

//Iterere, finne, filtrere
const tall = [1, 2, 3, 4, 5];
// forEach – bare gjør noe for hvert element
tall.forEach(t => console.log(t));
// map – lag et nytt array basert på det gamle
const doblet = tall.map(t => t * 2); // [2, 4, 6, 8, 10]
// filter – behold kun de som matcher en betingelse
const partall = tall.filter(t => t % 2 === 0); // [2, 4]
// find – finn første element som matcher
const førsteOver3 = tall.find(t => t > 3); // 4

//sortering:
//sortere tall:
const tall1 = [1, 4,8,4,2,3];
tall1.sort((a, b) => a - b);
//sortere tekst:
const navn = ["Åge", "Anders", "Øyvind"];
navn.sort((a, b) => a.localeCompare(b));
//sortere ojekter:
//på tall:
const varer = [
    { navn: "Brød", pris: 30 },
    { navn: "Melk", pris: 20 },
    { navn: "Kjøtt", pris: 100 }
];
varer.sort((a, b) => a.pris - b.pris);
//på tekst:
varer.sort((a, b) => a.navn.localeCompare(b.navn));



