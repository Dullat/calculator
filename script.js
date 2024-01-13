const screen = document.querySelector('.screen');
const opKey = document.querySelectorAll('.op-key');
const numKey = document.querySelectorAll('.num-key');
const clearKey = document.querySelector('.clear-key');
const ansKey = document.querySelector('.ans-key');
const dotKey = document.querySelector('.dot-key');

let clearScreenNow = false;
let firstValue = '';
let lastValue = '';
let lastOp = '';

numKey.forEach(element => {
    element.addEventListener('click', () => appendNumber(element));
});

opKey.forEach(element => {
    element.addEventListener('click', () => setOperation(element));
})

clearKey.addEventListener('click', () => clearEveryThing());

ansKey.addEventListener('click', () => evaluate());

dotKey.addEventListener('click', () => addDot());

function appendNumber(value) {
    if (clearScreenNow === true) {
        clearScreen();
    }
    screen.textContent += value.textContent;
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
    if (screen.textContent.includes('.')) {
        return
    }

    screen.textContent += '.';
}

function setOperation(value) {
    clearScreenNow = true;
    if (lastOp === '') {
        firstValue = screen.textContent;
        lastOp = value.textContent;
        return;
    }
    evaluate();
    lastOp = value.textContent;
}

function evaluate() {
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