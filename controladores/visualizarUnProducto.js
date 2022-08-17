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

    clientServices.detalleCliente().then((data) => {
        data[0]['productos'].forEach((producto) => {
            if(producto.id == id) {
                imagen.style.backgroundImage = `url('${ producto.imagen }')`;

                imagen.style.backgroundImage = imagen.style.backgroundImage.replace('"")', '');

                imagen.style.backgroundRepeat = 'no-repeat';
                imagen.style.backgroundSize = 'contain';
                nombre.innerText = producto.nombre;
                precio.innerText = producto.precio;
                descripcion.innerText = producto.descripcion;
            }
        });
    });
}

mostrarInformacion();