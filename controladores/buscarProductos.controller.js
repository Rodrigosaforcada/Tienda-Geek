import { clientServices } from "../servicio/client-service.js";

const inputBusqueda = document.querySelector(".barra_de_busqueda__ingresar_solicitud");

const resultadosBusqueda = document.querySelector(".barra_de_busqueda__ingresar_solicitud--resultados");

let contador = 0;

const realizarBusqueda = (nombreBuscado, nombreExistente, idNombreExistente) => {
    let comprobarEquivalencia = false;
    const regExLetras = /[a-zñA-ZÑ]/;
    
    for(let i = 0; i < nombreBuscado.length; i++) {
        if(regExLetras.test(nombreBuscado)) {
            if(nombreBuscado[i].toUpperCase() == nombreExistente[i] || 
            nombreBuscado[i].toLowerCase() == nombreExistente[i]) {
                comprobarEquivalencia = true;
            } else {
                comprobarEquivalencia = false;
                break;
            }
        } else {
            if(nombreBuscado[i] == nombreExistente[i]) {
                comprobarEquivalencia = true;
            } else {
                comprobarEquivalencia = false;
                break;
            }
        }
        
    }
    if(comprobarEquivalencia) {
        contador++;
        console.log(nombreExistente);

        const productoEncontrado = document.createElement("div");
        productoEncontrado.classList.add("barra_de_busqueda__ingresar_solicitud--item");
        productoEncontrado.innerText = nombreExistente;
        productoEncontrado.id = idNombreExistente;
        resultadosBusqueda.appendChild(productoEncontrado);

        productoEncontrado.addEventListener('click', (evento) => {
            let identificador = `?id=${productoEncontrado.id}`;
            let redireccionamiento = "ver_un_producto.html" + identificador;
            window.location.href = redireccionamiento;
        });
    }
}

inputBusqueda.addEventListener('keyup', (evento) => {

    const busquedaSolicitada = document.querySelector(".barra_de_busqueda__ingresar_solicitud").value;

    const anterioresResultados = document.querySelector(".barra_de_busqueda__ingresar_solicitud--resultados").childNodes;
        
        console.log(anterioresResultados);
        console.log("Total de productos encontrados: " + anterioresResultados.length);

        for(let i = anterioresResultados.length - 1; i >= 0; i--) {
            anterioresResultados[i].remove();
        }

    clientServices
    .listaProductos()
        .then((data) => {
        data[0]['productos'].forEach((producto) => {
            realizarBusqueda(busquedaSolicitada + "", producto.nombre, producto.id);


        });
        console.log("Numero de resutados: " + contador);
        console.log("Solicitud buscada: " + busquedaSolicitada);
        contador = 0;
        })
        .catch((error) => alert('Fallo al intentar conectarse con los datos'));
});