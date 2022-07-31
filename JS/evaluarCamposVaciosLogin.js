const botonEntrar = document.querySelector('#boton_entrar');
const campoCorreoElectronico = document.querySelector('#correo_electronico');
const campoContrasena = document.querySelector('#contrasena');

let correoVacio = true;
let contrasenaVacio = true;

function habilitarBotonEntrar() {
    if(!correoVacio && !contrasenaVacio) {
        botonEntrar.disabled = false;
    } else {
        botonEntrar.disabled = true;
    }
}

campoCorreoElectronico.addEventListener('focusout', (evento) => {
    console.log(evento);
    if(evento.target.value == "") {
        correoVacio = true;
    } else {
        correoVacio = false;
        habilitarBotonEntrar();
    }
});

campoContrasena.addEventListener('focusout', (evento) => {
    console.log(evento);
    if(evento.target.value == "") {
        contrasenaVacio = true;
    } else {
        contrasenaVacio = false;
        habilitarBotonEntrar();
    }
});