function sortByAge() {
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.querySelectorAll("tr"));

    const sorted = rows.sort((a, b) => {
        const ageA = parseInt(a.children[1].innerText);
        const ageB = parseInt(b.children[1].innerText);
        return ageA - ageB; // stigende rekkefølge
    });

    // Legg inn radene på nytt
    table.innerHTML = "";
    sorted.forEach(row => table.appendChild(row));
}