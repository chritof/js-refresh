console.log("Map...")

const m = new Map();

m.set("navn", "Christoffer");
m.set("alder", 20);

console.log(m.get("navn")); // "Christoffer"
console.log(m.has("alder")); // true
console.log(m.size);        // 2

m.delete("alder");
m.clear();                  // fjerner alt


const bruker1 = { id: 1 };
const bruker2 = { id: 2 };

const poeng = new Map();
poeng.set(bruker1, 100);
poeng.set(bruker2, 150);

console.log(poeng.get(bruker1)); // 100

const m = new Map([
    ["navn", "Ola"],
    ["alder", 30],
]);

// entries (default)
for (const [key, value] of m) {
    console.log(key, value);
}

// bare keys
for (const key of m.keys()) {
    console.log("key:", key);
}

// bare values
for (const value of m.values()) {
    console.log("value:", value);
}