document.write("<h1>Hola</h1>");
console.log("Consola");
// console.error("Esto es un error");

/* Comentarios
multiples lineas*/
//Variables
// <----- Tipo - Tipado Debil
let x;
console.log(typeof(x));
let esPW = false;
console.log(typeof(esPW));
if(esPW) {
    console.log("Estamos en Clase");
} else {
    console.log("No Estamos en Clase");
}
let numero = -2324.2324243;
console.log(numero);

let cadena = "Una cadena 'comillas'";
console.log(cadena);
let cadena2 = 'otra cadena "al reves"';
console.log(cadena2);
// Interpolacion de variables.
let cadena3 = `Otra cadena
puedo tener renglones
y variables ${numero}`;
console.log(cadena3);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1);
let usuario = {nombre:"Martin",[id1]:123};
console.log(usuario.nombre+" "+usuario[id1]);

let variablenula = null;
console.log(variablenula);

const PI = 3.1416;
console.log(PI);
// PI = 1232

let arreglo = [];
console.log(arreglo);
arreglo = [1,2,3];
console.log(arreglo);
arreglo.push(4);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);
arreglo.unshift(10);
console.log(arreglo);

let objeto = {nombre:"Martin", edad:47};
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

alert("Alerta en pantalla");
let edad = prompt("Dame la edad",0);
console.log(edad);