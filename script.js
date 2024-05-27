let first;
let second;
let result = 0;
let operator;
let operationKeysPressedState = false;
let eqKey = false;

function add (first, second) {
    return first + second;
}

function substract (first, second) {
    return first - second;
}

function multiply (first, second) {
    return first * second;
}

function divide (first, second) {
    if (second === 0) {
        return "Can't divide by zero";
    }
    return first / second;
}

function operate (operator, first, second) {
    result = operator (first, second);
    return result;
}

let display = document.querySelector(".displ");

let ac = document.querySelector(".ac");
ac.addEventListener("click", () => {
    display.textContent = "";
    operationKeysPressedState = false;
    eqKey = false;
    first = 0;
    second = 0;
});

// Number Keys

let naught = document.querySelector(".naught");
naught.addEventListener("click", () => {
    display.textContent = display.textContent + "0";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "0";
        operationKeysPressedState = false;
    }
});

let one = document.querySelector(".one");
one.addEventListener("click", () => {
    display.textContent = display.textContent + "1";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "1";
        operationKeysPressedState = false;
    }
});

let two = document.querySelector(".two");
two.addEventListener("click", () => {
    display.textContent = display.textContent + "2";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "2";
        operationKeysPressedState = false;
    }
});

let three = document.querySelector(".three");
three.addEventListener("click", () => {
    display.textContent = display.textContent + "3";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "3";
        operationKeysPressedState = false;
    }
});

let four = document.querySelector(".four");
four.addEventListener("click", () => {
    display.textContent = display.textContent + "4";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "4";
        operationKeysPressedState = false;
    }
});

let five = document.querySelector(".five");
five.addEventListener("click", () => {
    display.textContent = display.textContent + "5";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "5";
        operationKeysPressedState = false;
    }
});

let six = document.querySelector(".six");
six.addEventListener("click", () => {
    display.textContent = display.textContent + "6";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "6";
        operationKeysPressedState = false;
    }
});

let seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    display.textContent = display.textContent + "7";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "7";
        operationKeysPressedState = false;
    }
});

let eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    display.textContent = display.textContent + "8";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "8";
        operationKeysPressedState = false;
    }
});

let nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    display.textContent = display.textContent + "9";
    if (operationKeysPressedState) {
        display.textContent = "";
        display.textContent = display.textContent + "9";
        operationKeysPressedState = false;
    }
});

let dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
    const stop = display.textContent.includes(".");
    if (!stop) {
        display.textContent = display.textContent + ".";
    }
});

// Operation Keys

let addition = document.querySelector(".additioning");
addition.addEventListener("click", () => {
    if (eqKey === true) {
        second = display.textContent;
        second = +second;
        result = operate(operator, first, second);
        display.textContent = result.toString();
        eqKey = false;
        first = display.textContent;
        first = +first;
    }
    first = display.textContent;
    first = +first;
    operator = add;
    eqKey = true;
    operationKeysPressedState = true;
});

let substraction = document.querySelector(".substracting");
substraction.addEventListener("click", () => {
    if (eqKey === true) {
        second = display.textContent;
        second = +second;
        result = operate(operator, first, second);
        display.textContent = result.toString();
        eqKey = false;
        first = display.textContent;
        first = +first;
    }
    first = display.textContent;
    first = +first;
    operator = substract;
    eqKey = true;
    operationKeysPressedState = true;
});

let multiplication = document.querySelector(".timesing");
multiplication.addEventListener("click", () => {
    if (eqKey === true) {
        second = display.textContent;
        second = +second;
        result = operate(operator, first, second);
        display.textContent = result.toString();
        eqKey = false;
        first = display.textContent;
        first = +first;
    }
    first = display.textContent;
    first = +first;
    operator = multiply;
    eqKey = true;
    operationKeysPressedState = true;
});

let partition = document.querySelector(".dividing");
partition.addEventListener("click", () => {
    if (eqKey === true) {
        second = display.textContent;
        second = +second;
        result = operate(operator, first, second);
        display.textContent = result.toString();
        eqKey = false;
        first = display.textContent;
        first = +first;
    }
    first = display.textContent;
    first = +first;
    operator = divide;
    eqKey = true;
    operationKeysPressedState = true;
});

let equal = document.querySelector(".equalizating");
equal.addEventListener("click", () => {
    second = display.textContent;
    second = +second;
    if (operator != undefined && eqKey === true) {
        result = operate(operator, first, second);
        display.textContent = result.toString();
    }
    eqKey = false;
    first = 0;
    second = 0;
});

let docu = document.querySelector("body");
docu.addEventListener("keydown", (e) => {
    console.log(e.code);
    if (e.code == "Digit 1") {
        console.log("Digit One");
    }
});
