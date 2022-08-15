import { clientServices } from "../servicio/client-service.js";

//const contenedor = document.querySelector(".ver_producto");

const mostrarInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if( id === null) {
        window.location.href = "error.html";
    }

    const imagen = document.querySelector(".ver_producto--imagen");

    const nombre = document.querySelector(".ver_producto--titulo");
    const precio = document.querySelector(".ver_producto--precio");
    const descripcion = document.querySelector(".ver_producto--descripcion");

    console.log(imagen);
    console.log(nombre);
    console.log(precio);
    console.log(descripcion);

    clientServices.detalleCliente(id).then((perfil) => {
        imagen.style.backgroundImage = `url('${ perfil.imagen }')`;
        imagen.style.backgroundRepeat = 'no-repeat';
        imagen.style.backgroundSize = 'contain';
        nombre.innerText = perfil.nombre;
        precio.innerText = perfil.precio;
        descripcion.innerText = perfil.descripcion;
    });
}

mostrarInformacion();