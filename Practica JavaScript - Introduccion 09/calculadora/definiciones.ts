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


