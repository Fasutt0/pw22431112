import express from 'express';
// Creamos la aplicacion a traves del paquete express
// y llamamos a su constructor.
const app = express();
// Todo lo que regresa al usuario es tipo JSON.
app.use(express.json());
// Puerto para escuchar la peticion del frontend.
const PUERTO = 3001;

app.get('/hola',(_req,res) =>{
    let fecha = new Date().toLocaleDateString();
    res.send('Mundo con la fecha'+fecha+" Con Typescript");
});

//Encendemos el servidor y lo ponemos en escucha.
app.listen(PUERTO,() =>{
    console.log(`Servidor en ejecucion y escuchando en el puerto ${PUERTO}`);
})



