let numeros:number;
numeros = 101;
console.log(numeros);
let arreglosNumeros: number[];
arreglosNumeros = [1,2,3,4,5,6];
let arreglosString: string[];
arreglosString = ['cadena','string','3'];
let decisiones:boolean;
decisiones = true;
let arreglosBooleanos: boolean[];
arreglosBooleanos = [true,false,true];
function info(a:number,b:string,c:boolean,d?:number):void{ //? Parameto opcional
    console.log(a+""+b+""+c+""+(d == undefined ? '-': d));
}
info(1,'2',false,10);
enum TiposUsuario{
    Administrador,
    Moderador,
    Invitado
}
type Usuario = {
    nombre:string, tipo:TiposUsuario, edad:boolean, readonly ipsecreta:string
}
type UsuarioRedes = Usuario & { //Extendiendo el tipo.
    ip:string
}
function usuarios(usuario:UsuarioRedes):void{
    console.log("Nombre: "+usuario.nombre+" Tipo: "+usuario.tipo+" Edad: "+usuario.edad+ " con la Ip: "+usuario.ip+" "+usuario.ipsecreta);
}
console.log(usuarios({nombre:'Martin',tipo:TiposUsuario.Invitado,edad:true, ip:'192.168.4.1', ipsecreta:'algo'}));


//Tipos que solo existen en TypeScript.
let tiempo:number = 76_000_000;
let animal:string = "Dinosaurio";
let extinto:boolean = true;
//Tipo any
let mivariable;
mivariable = "Cadena";
mivariable = 42;

//Arreglos
let animasles:string[] = ['Perro','Gato','Caballo'];
let numeros1:number[] = [1,2,3,4,5];
let atributos:boolean[] = [];
let numeros2:Array<number> = [];

// numeros1.map(x=> x.)

//Tuplas
let tupla:[number,string] = [1,'cadena'];
tupla.push(12); //No marca error
let tupla2:[number,string[]] =[1,['cadena','cadena2','cadena3']];

//Enums
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';

// enum Talla {Chica = 10,Mediana,Grande,Extragrande};
enum Talla {Chica = 's',Mediana = 'm',Grande = 'l',Extragrande = 'xl' };
const tallaGrande = Talla.Grande;
console.log("Talla"+tallaGrande);

//Ponemos const para ocultar el enum del JS.
const enum EstadoCargaPagina {SinIniciar,Cargando,Exito,Error}
//Solamente sale la asignacion del valor explicito en JS.
const estado = EstadoCargaPagina.Exito;

//Objeto
const objeto: {
    readonly id:number, 
    nombre:string
} = {id:1,nombre:''};
// objeto.id = 50;
objeto.nombre = 'PW';

//? opcional
const objeto2: {id:number,nombre?:string} = {id:1};
objeto2.nombre = 'PW';

const objeto3: {id:number, nombre:string, talla:Talla} = {id:1, nombre:'PW', talla:Talla.Mediana};

type Persona = {
    id:number,
    nombre:string,
    talla:Talla
}
const objeto4: Persona = {id:1, nombre:'PW', talla:Talla.Extragrande};

type Direccion = {
    numero:number,
    calle:string,
    pais:string
}
type Persona2 = {
    id:number,
    nombre:string,
    talla:Talla,
    domicilio: Direccion
 }
const objeto5:Persona2 = {id:1,nombre:'PW',talla:Talla.Chica,domicilio:{numero:1,calle:'Conocida',pais:'Mexico'}};

//Tipado de funciones
function func(){}

const fn1 = (y:number):number => {
    let x=2;
    if(x>5){
        return y;
    }
    return 4;
}

const fn2: () => number = () => {
    let x=2;
    if(x>5){
        return 2;
    }
    return 4;
}

const fn3: (a:number) => string = (edad:number) => {
    if(edad>=18)
    {
        return "Puedes Pasar.";
    }
    return "No Puedes Pasar.";
}

//Never: Se usa cuando necesitamos que la funcion lance un error.
function ErrorUsuario1():never{
    throw new Error('Error de Usuario.');
}
function ErrorUsuario2():never{
    throw new Error('Error de Usuario.');
}

