function appendDigit(digit) {
    let display = document.querySelector(".display");
    let displayValue = display.textContent.trim();
    if (digit === "+" || digit === "-" || digit === "*" || digit === "/") {
        if (displayValue.includes('+')||displayValue.includes('-')||displayValue.includes('*')||displayValue.includes('/')) {
            return;
        }
    }
    if (displayValue === "0") {
        if (digit === ".") {
            display.textContent = "0.";
            return;
        }
        if (digit === "+") {
            return;
        }
        if (digit === "-") {
            return;
        }
        if (digit === "*") {
            return;
        }
        if (digit === "/") {
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
}

function backspace() {
    let display = document.querySelector(".display");
    let displayValue = display.textContent.trim();
    if (displayValue === "0") {
        return;
    } else if (displayValue === "1" || displayValue === "2" || displayValue === "3" || displayValue === "4" || displayValue === "5" || displayValue === "6" || displayValue === "7" || displayValue === "8" || displayValue === "9") {
        display.textContent = 0;
        return;
    }
    display.textContent = displayValue.slice(0, -1);
}

function percent() {
    let display = document.querySelector(".display");
    let displayValue = display.textContent.trim();
    if (displayValue.includes('+')||displayValue.includes('-')||displayValue.includes('*')||displayValue.includes('/')) {
        return;
    }
    display.textContent = displayValue / 100;
}

function calculate() {
    let display = document.querySelector(".display");
    let displayValue = display.textContent.trim().valueOf();

    if (displayValue.includes('+')) {
        let opIndex = displayValue.indexOf('+');
        let num1 = displayValue.slice(0,opIndex);
        let num2 = displayValue.slice(opIndex+1,displayValue.length);
        output = num1*1+num2*1;
        display.textContent = output;
        return;
    } else if (displayValue.includes('-')) {
        let opIndex = displayValue.indexOf('-');
        let num1 = displayValue.slice(0,opIndex);
        let num2 = displayValue.slice(opIndex+1,displayValue.length);
        output = num1*1-num2*1;
        display.textContent = output;
        return;
    } else if (displayValue.includes('*')) {
        let opIndex = displayValue.indexOf('*');
        let num1 = displayValue.slice(0,opIndex);
        let num2 = displayValue.slice(opIndex+1,displayValue.length);
        output = (num1*1)*(num2*1);
        display.textContent = output;
        return;
    } else if (displayValue.includes('/')) {
        let opIndex = displayValue.indexOf('/');
        let num1 = displayValue.slice(0,opIndex);
        let num2 = displayValue.slice(opIndex+1,displayValue.length);
        output = (num1*1)/(num2*1);
        display.textContent = output;
        return;
    }
}
