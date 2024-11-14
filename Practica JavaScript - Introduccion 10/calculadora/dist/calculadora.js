"use strict";
const calculadora = (a, b, operacion) => {
    if (operacion == "suma") {
        return a + b;
    }
    if (operacion == "resta") {
        return a - b;
    }
    if (operacion == "multiplica") {
        return a * b;
    }
    if (operacion == "divide") {
        if (b == 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    }
    throw new Error("Operacion no permitida");
};
console.log(calculadora(1, 3, 'suma'));
console.log(calculadora(1, 3, 'resta'));
console.log(calculadora(1, 3, 'multiplica'));
console.log(calculadora(1, 3, 'divide'));
console.log(calculadora(1, 0, 'divide'));
