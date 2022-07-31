const botonEnviar = document.querySelector('#rodapie_enviar_datos');
const campoNombre = document.querySelector('#rodapie_input_nombre');
const campoMensaje = document.querySelector('#rodapie_input_mensaje');

let nombreVacio = true;
let mensajeVacio = true;

function habilitarBotonEnviar() {
    if(!nombreVacio && !mensajeVacio) {
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true;
    }
}

campoNombre.addEventListener('focusout', (evento) => {
    console.log(evento);
    if(evento.target.value == "") {
        nombreVacio = true;
    } else {
        nombreVacio = false;
        habilitarBotonEnviar();
    }
});

campoMensaje.addEventListener('focusout', (evento) => {
    console.log(evento);
    if(evento.target.value == "") {
        mensajeVacio = true;
    } else {
        mensajeVacio = false;
        habilitarBotonEnviar();
    }
});