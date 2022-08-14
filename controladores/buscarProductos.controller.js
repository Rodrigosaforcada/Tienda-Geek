import { clientServices } from "../servicio/client-service.js";

const inputBusqueda = document.querySelector(".barra_de_busqueda__ingresar_solicitud");

let contador = 0;

const realizarBusqueda = (nombreBuscado, nombreExistente) => {
    let comprobarEquivalencia = false;
    for(let i = 0; i < nombreBuscado.length; i++) {
        if(nombreBuscado[i] == nombreExistente[i]) {
            comprobarEquivalencia = true;
        } else {
            comprobarEquivalencia = false;
            break;
        }
    }
    if(comprobarEquivalencia) {
        contador++;
        console.log(nombreExistente);
    }
}

inputBusqueda.addEventListener('keyup', (evento) => {

    const busquedaSolicitada = document.querySelector(".barra_de_busqueda__ingresar_solicitud").value;

    clientServices
    .listaProductos()
        .then((data) => {
        data.forEach((producto) => {
            realizarBusqueda(busquedaSolicitada + "", producto.nombre);
        });
        console.log("Numero de resutados: " + contador);
        console.log("Solicitud buscada: " + busquedaSolicitada);
        contador = 0;
        })
        .catch((error) => alert('Fallo al intentar conectarse con los datos'));
});

