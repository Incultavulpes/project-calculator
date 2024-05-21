let first;
let second;
let result = 0;
let operator;
let operationKeysPressedState = false;

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
    return first / second;
}

function operate (operator, first, second) {
    result = operator (first, second);
    return result;
}

let display = document.querySelector(".displ");

let ac = document.querySelector(".ac");
ac.addEventListener("click", () => display.textContent = "");

let naught = document.querySelector(".naught");
naught.addEventListener("click", () => display.textContent = display.textContent + "0");

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
dot.addEventListener("click", () => display.textContent = display.textContent + ".");

let addition = document.querySelector(".additioning");
addition.addEventListener("click", () => {
    first = display.textContent;
    first = +first;
    operator = add;
    console.log("Hey dude");
    operationKeysPressedState = true;
});

let equal = document.querySelector(".equalizating");
equal.addEventListener("click", () => {
    second = display.textContent;
    second = +second;
    result = operate(operator, first, second);
    display.textContent = result.toString();
});

/* Lo que vamos a añadir en las próximas sesiones de programación y cómo hacerlo:
        1.- El CSS no está realmente acabado, tenemos que modificar el cursor tipo de texto y evitar que el subrayado del texto ocurra.
        2.- La lógica real de la calculadora es sencilla, vemos ahora una especie de diagrama explicando qué es lo que ocurre
                2.1.- Vamos poniendo un valor en el display, en cuanto pulsamos una tecla de operación se almacena el contenido en la primera variable.
                2.2.- Se borra por completo el display al pulsar la tecla de operación.
                2.3.- Seguimos poniendo valores en el display, en cuanto pulsemos la tecla ifual se almacena el contenido en la segunda variable.
                2.4.- Acto seguido se opera con los valores operator, first y second y obtenemos el resultado que lo almacenaremos en el display.
        3.- Mantener los nombres legibles y programar un código que sea completamente un código que se auto explique y además que sea precioso.
        4.- Recordemos pasar los valores de first y second a typeof number siempre.
*/