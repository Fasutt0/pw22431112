"use strict";
let numeros;
numeros = 101;
console.log(numeros);
let arreglosNumeros;
arreglosNumeros = [1, 2, 3, 4, 5, 6];
let arreglosString;
arreglosString = ['cadena', 'string', '3'];
let decisiones;
decisiones = true;
let arreglosBooleanos;
arreglosBooleanos = [true, false, true];
function info(a, b, c, d) {
    console.log(a + "" + b + "" + c + "" + (d == undefined ? '-' : d));
}
info(1, '2', false, 10);
var TiposUsuario;
(function (TiposUsuario) {
    TiposUsuario[TiposUsuario["Administrador"] = 0] = "Administrador";
    TiposUsuario[TiposUsuario["Moderador"] = 1] = "Moderador";
    TiposUsuario[TiposUsuario["Invitado"] = 2] = "Invitado";
})(TiposUsuario || (TiposUsuario = {}));
function usuarios(usuario) {
    console.log("Nombre: " + usuario.nombre + " Tipo: " + usuario.tipo + " Edad: " + usuario.edad + " con la Ip: " + usuario.ip + " " + usuario.ipsecreta);
}
console.log(usuarios({ nombre: 'Martin', tipo: TiposUsuario.Invitado, edad: true, ip: '192.168.4.1', ipsecreta: 'algo' }));
let tiempo = 76000000;
let animal = "Dinosaurio";
let extinto = true;
let mivariable;
mivariable = "Cadena";
mivariable = 42;
