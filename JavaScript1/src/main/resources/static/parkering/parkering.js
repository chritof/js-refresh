console.log("[:parkering..online...]");

class Parking {
    #capacity;
    #rates;
    #active = new Map();

    constructor(capacity, rates) {
        this.#capacity = capacity;
        this.#rates = rates; // f.eks. { electric: 5, normal: 30 }
    }

    addCar(regno, taxgroup) {
        if (this.#active.size >= this.#capacity) return null;
        if (!(taxgroup in this.#rates)) return null;
        if (this.#active.has(regno)) return null;

        const entry = {
            regno,
            taxgroup,
            arrival: Date.now()
        };

        this.#active.set(regno, entry);
        return entry;
    }

    removeCar(regno) {
        const entry = this.#active.get(regno);
        if (!entry) return null;

        this.#active.delete(regno);

        const departure = Date.now();
        const parkedMs = departure - entry.arrival;

        const minutes = parkedMs / 1000 / 60;
        let cost = 0;

        if (minutes > 10) {
            const intervals = Math.ceil(minutes / 15);
            const rate = this.#rates[entry.taxgroup];
            cost = intervals * rate;
        }

        return {
            regno: entry.regno,
            taxgroup: entry.taxgroup,
            arrival: entry.arrival,
            departure,
            cost
        };
    }
}

const carpark = new Parking(50, { electric: 5, normal: 30 });
const arrival = carpark.addCar("EK12345", "electric");
console.log(arrival);

setTimeout(() => {
    const departure = carpark.removeCar("EK12345");
    console.log(departure);
}, 20000);