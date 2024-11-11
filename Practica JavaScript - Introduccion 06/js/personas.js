const url = 'https://randomuser.me/api/';
let boton = document.querySelector("button");
let foto = document.querySelector("#foto");
let nombre = document.querySelector("#nombre");
let direccion = document.querySelector("#direccion");
let telefono = document.querySelector("#telefono");

const obtenerPersona = () =>{
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        // console.log(respuesta);
        respuesta.results.forEach(persona => {
            nombre.textContent = persona.name.first + "" + persona.name.last;
            foto.setAttribute("src",persona.picture.large);
            direccion.textContent = persona.location.street.name+", "+persona.location.street.number;
            telefono.textContent = persona.phone;
        })
    })
}

boton.addEventListener("click",() => {
    obtenerPersona();
})

obtenerPersona();
