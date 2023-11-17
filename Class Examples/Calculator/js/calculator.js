var memory = 0;
var operator = "";

function appendDigit(digit) {
    let display = document.querySelector(".display");
    let displayValue = display.textContent.trim();
    if (displayValue === "0") {
        if (digit === ".") {
            display.textContent = "0."
            return;
        }
        display.textContent = digit;
    } else {
        if (digit === "." && displayValue.includes('.')) {
            return;
        }
        display.textContent = displayValue + digit;
    }
}

function clearDisplay() {
    let display = document.querySelector(".display");
    display.textContent = "0";
    memory = 0;
    operator = '';
}

function invert() {
    let display = document.querySelector(".display");
    let displayValue = display.textContent.trim();
    display.textContent = displayValue * -1;
}

function percent() {
    let display = document.querySelector(".display");
    let displayValue = display.textContent.trim();
    display.textContent = displayValue / 100;
}

function operation(op) {
    let result = 0
    let display = document.querySelector(".display");
    let displayValue = display.textContent.trim();

    if (operator === "") {
        memory = displayValue;
        operator = op;
        return;
    } else if (operator === "+") {
        result = (memory * 1) + displayValue;
        display.textContent = result;
        memory = result;
        operator = op;
        return;
    } else if (operator === "-") {

    } else if (operator === "*") {

    } else if (operator === "/") {

    }
    memory = displayValue;
    operator = op;
}
