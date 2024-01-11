const numKey = document.querySelectorAll('.num-key');
const screen = document.querySelector('.screen');
const clr = document.querySelector('.clear-key');
const ansKey = document.querySelector('.ans-key');
const numKeyArray = Array.from(numKey);
console.log(numKeyArray);

let clear = false;

numKeyArray.forEach(element => {
    element.addEventListener("click", () => {
        if (clear === true) {
            screen.innerHTML = "";
            clear = false;
        }
        screen.innerHTML += element.innerHTML;
        console.log(v1, v2, op, ans);
    })
});

function add(a, b) {
    let temp = a + b;
    return temp;
    a = 0;
    b = 0;
}

function sub(a, b) {
    let temp = a - b;
    return temp;
}

function mul(a, b) {
    let temp = a * b;
    return temp;
}

function div(a, b) {
    let temp;
    if (v2 !== 0) {
        temp = a / b;
    } else {
        alert("are u serious?");
    }
    return temp;
}

let v1 = undefined;
let v2 = undefined;
let op = "";
let ans = undefined;
function exec(operation) {
    const inputValue = parseInt(screen.innerHTML, 10);
    if (isNaN(inputValue)) {
        clearEverything();
        return;
    }

    if (v1 === undefined) {
        v1 = parseInt(screen.innerHTML, 10);
        op = operation;
        console.log(v1);
        screen.innerHTML = "";
    } else if (v1 !== undefined && op !== "") {
        v2 = parseInt(screen.innerHTML, 10);
        switch (op) {
            case `+`:
                ans = add(v1, v2);
                break;

            case `-`:
                ans = sub(v1, v2);
                break;

            case `*`:
                ans = mul(v1, v2);
                break;

            case `/`:
                ans = div(v1, v2);
                break;

            default:
                break;
        }
        if (operation !== `=`) {
            op = operation;
        } else if (operation === `=`) {
            v2 = undefined;
            op = "";
            console.log("hi");
        }
        screen.innerHTML = `${ans}`;
        v1 = ans;
        clear = true;
    } else if (v1 !== undefined && op === "") {
        op = operation;
        screen.innerHTML = "";
    }
}

ansKey.addEventListener("click", () => {

})

function clearEveryThing() {
    screen.innerHTML = "";
    v1 = undefined;
    v2 = undefined;
    op = "";
    ans = undefined;
}

clr.addEventListener("click", () => {
    clearEveryThing();
})