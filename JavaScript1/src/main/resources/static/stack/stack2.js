const root = document.getElementById('root');

const pushBtn = root.querySelector('#push');
const popBtn  = root.querySelector('#pop');
const input   = root.querySelector('#input');
const output  = root.querySelector('#output');

const stack = [];

pushBtn.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) {
        output.textContent = 'Skriv noe først!';
        return;
    }
    stack.push(value);
    input.value = '';
    output.textContent = `Pushet: "${value}" (lengde: ${stack.length})`;
});

popBtn.addEventListener('click', () => {
    if (stack.length === 0) {
        output.textContent = 'Stabelen er tom!';
        return;
    }
    const popped = stack.pop();
    output.textContent = `Pop: "${popped}" (gjenstår: ${stack.length})`;
});