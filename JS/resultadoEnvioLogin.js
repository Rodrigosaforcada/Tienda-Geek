import { validarEmail } from "./validarEmail.js";

const botonEntrar = document.querySelector('#boton_entrar');

botonEntrar.addEventListener('click', (evento) => {

    console.log(evento);

    evento.path[0].nextElementSibling.innerText = "";

    const datosAdministradores = [
        {
            eMail: "guillermo650@gmail.com",
            contrasena: "frodo780"
        },
        {
            eMail: "sebastian340@gmail.com",
            contrasena: "amanecer905"
        }];

    let eMailInvalido = false;

    const inputEmail = evento.path[1].childNodes[3].value;

    if(!validarEmail(inputEmail)) {
        eMailInvalido = true;
        evento.path[0].nextElementSibling.innerText += 
        " E-mail debe tener por lo menos 3 caracteresantes del '@', 'gmail' o 'yahoo' despues de este finalizado con ''.com y no tener espacios.";
    }

    const inputContrasena = evento.path[1].childNodes[5].value;

    if(!eMailInvalido) {

        for(let i = 0; i <= datosAdministradores.length - 1; i++) {
            console.log(datosAdministradores[i]);
            
            if(inputEmail == datosAdministradores[i].eMail) {
                console.log(inputEmail);
                if(inputContrasena == datosAdministradores[i].contrasena) {
                    console.log(inputContrasena);
                    evento.path[0].nextElementSibling.innerText = "Bienvenido administrador.";
                    alert('Bienvenido administrador');
                } else {
                    evento.path[0].nextElementSibling.innerText = "Contraseña inválida.";
                }
                break;
            } else if(i == datosAdministradores.length - 1) {
                evento.path[0].nextElementSibling.innerText = "Correo no encontrado";
            }
        }
    } else {
        evento.path[0].nextElementSibling.innerText = "Correo inválido";
    }
});