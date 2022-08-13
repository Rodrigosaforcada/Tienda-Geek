import { clientServices } from "../servicio/client-service.js";

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const imagen = document.querySelector(".seccion_agregar_producto--input_imagen");

    document.querySelector(".seccion_agregar_producto--span_imagen").remove();

    let previsualizacionImagen = imagen;
    previsualizacionImagen = document.createElement("div");
    previsualizacionImagen.classList.add("imagen_arrastre--previsualizacion");
    imagen.appendChild(previsualizacionImagen);

    const nombre = document.querySelector("#nombre_producto");
    const precio = document.querySelector("#precio_producto");
    const descripcion = document.querySelector("#descripcion_producto");

    console.log(imagen);
    console.log(nombre);
    console.log(precio);
    console.log(descripcion);

    clientServices.detalleCliente(id).then((perfil) => {
        previsualizacionImagen.style.backgroundImage = `url('${ perfil.imagen }')`;

        previsualizacionImagen.style.backgroundImage = previsualizacionImagen.style.backgroundImage.replace('"")', '');

        previsualizacionImagen.style.backgroundRepeat = 'no-repeat';
        previsualizacionImagen.style.backgroundSize = 'contain';
        nombre.value = perfil.nombre;
        precio.value = perfil.precio;
        descripcion.value = perfil.descripcion;
    });
}

obtenerInformacion();