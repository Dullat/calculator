const screen = document.querySelector('.screen-value');
const opKey = document.querySelectorAll('.op-key');
const numKey = document.querySelectorAll('.num-key');
const clearKey = document.querySelector('.clear-key');
const ansKey = document.querySelector('.ans-key');
const dotKey = document.querySelector('.dot-key');
const opScreen = document.querySelector('.screen-op');

let clearScreenNow = false;
let firstValue = '';
let lastValue = '';
let lastOp = '';
let addDotNow = false;
let clrDotScreen = true;

window.addEventListener('keydown', addKeys);

numKey.forEach(element => {
    element.addEventListener('click', () => appendNumber(element.textContent));
});

opKey.forEach(element => {
    element.addEventListener('click', () => setOperation(element.textContent));
})

clearKey.addEventListener('click', () => clearEveryThing());

ansKey.addEventListener('click', () => evaluate());

dotKey.addEventListener('click', () => addDot());

function appendNumber(value) {
    if (clearScreenNow === true && clrDotScreen === true) {
        clearScreen();
        clrDotScreen = false;
    }
    screen.textContent += value;
    clearScreenNow = false;
}

function clearScreen() {
    screen.textContent = '';
}

function clearEveryThing() {
    clearScreenNow = false;
    firstValue = '';
    lastValue = '';
    lastOp = '';
    screen.textContent = '';
}

function addDot() {
    if (addDotNow === true) {
        clearScreen();
        screen.textContent += '.';
        addDotNow = false;
        clrDotScreen = false;
        return;
    }

    if (screen.textContent.includes('.')) {
        return
    }

    screen.textContent += '.';
}

function setOperation(value) {
    opScreen.textContent = value;
    clearScreenNow = true;
    if (lastOp === '') {
        firstValue = screen.textContent;
        lastOp = value;

        addDotNow = true;
        clrDotScreen = true;
        console.log(addDotNow);
        return;
    }
    evaluate();
    lastOp = value;
    addDotNow = true;
    clrDotScreen = true;
    console.log(addDotNow);
}

function evaluate() {
    if (lastOp === '') {
        return
    }

    if (firstValue !== '') {
        lastValue = screen.textContent;
        screen.textContent = process(lastOp, firstValue, lastValue);
        lastOp = '';
    }

    firstValue = screen.textContent;
    lastValue = '';
    console.log(firstValue, "\n", lastValue, "clrd");
}

function process(op, a, b) {
    console.log(op, a, b);
    a = Number(a);
    b = Number(b);
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (a === 0 && b === 0) {
                alert(" 0 / 0 = ERROR")
                return '';
            }
            return a / b;
        default:
            break;
    }
}

function backSpace() {
    screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    console.log("kkkkk");
}

// keyboard



function addKeys(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === 'Enter' || e.key === '=') evaluate();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') setOperation(e.key);
    if (e.key === 'c') clearEveryThing();
    if (e.key === '.') addDot();
    if (e.key === 'Backspace') backSpace();
}