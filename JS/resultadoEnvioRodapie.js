import { validarNombre } from "./validarNombre.js";
import { validarMensaje } from "./validarMensaje.js";

const botonEnviar = document.querySelector("#rodapie_enviar_datos");

botonEnviar.addEventListener('click', (evento) => {

    console.log(evento);

    //El label con un mensaje de error siempre empieza en blanco, hasta que se detecte uno
    evento.path[1].lastElementChild.innerText = "";

    const inputDatos = {
        nombre: "",
        eMail: "",
        asunto: "",
        mensaje: ""
    };

    let nombreValido = false;
    let mensajeValido = false;

    const inputNombre = evento.path[1].childNodes[3].lastElementChild.value;

    if(!validarNombre(inputNombre)) {
        nombreValido = true;
        evento.path[1].lastElementChild.innerText += 
        " Nombre debe tener la primera letra en mayúscula, el resto en minúscula, sin espacios y un máximo de 40 caracteres.";
    }

    const inputMensaje = evento.path[1].childNodes[5].lastElementChild.value;

    if(!validarMensaje(inputMensaje)) {
        mensajeValido = true;
        evento.path[1].lastElementChild.innerText += 
        " Mensaje no debe superar los 120 caracteres.";
    }

    if(!nombreValido && !mensajeValido) {
        inputDatos.nombre = inputNombre;
        inputDatos.mensaje = inputMensaje;
        evento.path[1].lastElementChild.innerText = "Datos enviados con éxito";
    }

    console.log(inputDatos.nombre);
    console.log(inputDatos.mensaje);
});