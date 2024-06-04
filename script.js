let first;
let second;
let result = 0;
let operator;
let operationKeysPressedState = false;
let eqKey = false;
let size;

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
    displayContent("0");
});

let one = document.querySelector(".one");
one.addEventListener("click", () => {
    displayContent("1");
});

let two = document.querySelector(".two");
two.addEventListener("click", () => {
    displayContent("2");
});

let three = document.querySelector(".three");
three.addEventListener("click", () => {
    displayContent("3");
});

let four = document.querySelector(".four");
four.addEventListener("click", () => {
    displayContent("4");
});

let five = document.querySelector(".five");
five.addEventListener("click", () => {
    displayContent("5");
});

let six = document.querySelector(".six");
six.addEventListener("click", () => {
    displayContent("6");
});

let seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    displayContent("7");
});

let eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    displayContent("8");
});

let nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    displayContent("9");
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
    calculator(add);
});

let substraction = document.querySelector(".substracting");
substraction.addEventListener("click", () => {
    calculator(substract);
});

let multiplication = document.querySelector(".timesing");
multiplication.addEventListener("click", () => {
    calculator(multiply);
});

let partition = document.querySelector(".dividing");
partition.addEventListener("click", () => {
    calculator(divide);
});

let equal = document.querySelector(".equalizating");
equal.addEventListener("click", () => {
    second = display.textContent;
    second = +second;
    if (operator != undefined && eqKey === true) {
        result = operate(operator, first, second);
        if (!isOverflown(display)) {
            display.textContent = result.toString();
        } else {
            do {
                display.style.fontSize = "40px";
                size = display.style.fontSize.replace("px", "");
                size = size - 10;
                display.style.fontSize = `${size}px`;
            } while (isOverflown(display));
        }
    }
    eqKey = false;
    first = 0;
    second = 0;
});

let docu = document.querySelector("body");
docu.addEventListener("keydown", (e) => {
    if (e.code == "Digit1") {
        one.click();
    } else if (e.code == "Digit2") {
        two.click();
    } else if (e.code == "Digit3") {
        three.click();
    } else if (e.code == "Digit4") {
        four.click();
    } else if (e.code == "Digit5") {
        five.click();
    } else if (e.code == "Digit6") {
        six.click();
    } else if (e.code == "Digit7" && e.shiftKey === false) {
        seven.click();
    } else if (e.code == "Digit8") {
        eight.click();
    } else if (e.code == "Digit9") {
        nine.click();
    } else if (e.code == "Digit0") {
        naught.click();
    } else if (e.code == "BracketRight" && e.shiftKey === false) {
        addition.click();
    } else if (e.code == "Slash") {
        substraction.click();
    } else if (e.code === "BracketRight" && e.shiftKey === true) {
        multiplication.click();
    } else if (e.code === "Digit7" && e.shiftKey === true) {
        partition.click();
    } else if (e.code == "Enter") {
        equal.click();
    } else if (e.code == "Escape") {
        ac.click();
    } else if (e.code == "Period") {
        dot.click();
    } else if (e.code == "Backspace") {
        display.textContent = obfuscate();
    }
});

/*

let map = {};
const onkeydown = onkeyup = function(e){
    map[e.code] = e.type == 'keydown';
    if (map["RightShift"] && map["BracketRight"]) {
        console.log("Yes sir");
    }
}

*/

function obfuscate () {
    let content = display.textContent;
    content = content.slice(0, content.length - 1);
    return content;
}

function calculator (op) {
    if (eqKey === true) {
        second = display.textContent;
        second = +second;
        result = operate(operator, first, second);
        if (!isOverflown(display)) {
            display.textContent = result.toString();
        } else {
            do {
                display.style.fontSize = "40px";
                size = display.style.fontSize.replace("px", "");
                size = size - 10;
                display.style.fontSize = `${size}px`;
            } while (isOverflown(display));
        }
        eqKey = false;
        first = display.textContent;
        first = +first;
    }
    first = display.textContent;
    first = +first;
    operator = op;
    eqKey = true;
    operationKeysPressedState = true;
}

function displayContent (content) {
    if (!isOverflown(display)) {
        display.textContent = display.textContent + content;
        if (operationKeysPressedState) {
            display.textContent = "";
            display.textContent = display.textContent + content;
            operationKeysPressedState = false;
        }
    }
}

function isOverflown (element) {
    return element.scrollWidth > element.clientWidth;
}
