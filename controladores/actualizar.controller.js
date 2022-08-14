import { clientServices } from "../servicio/client-service.js";

const formulario = document.getElementById('formulario');

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if( id === null) {
        window.location.href = "error.html";
    }

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

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    const previsualizacionImagen = document.querySelector(".imagen_arrastre--previsualizacion");
    
    let datosImagen = previsualizacionImagen.style.backgroundImage.replace('background-image: url("', '');
    datosImagen = datosImagen.replace('"); background-repeat: no-repeat; background-size: contain;', '');
    datosImagen = datosImagen.replace('url("', '');
    datosImagen = datosImagen.replace('")', '');
    
    const imagen = datosImagen;
    const nombre = document.querySelector("#nombre_producto").value;
    const precio = document.querySelector("#precio_producto").value + "$";
    const descripcion = document.querySelector("#descripcion_producto").value;

    console.log(imagen);
    console.log(nombre);
    console.log(precio);
    console.log(descripcion);

    clientServices.actualizarProducto(id, imagen, nombre, precio, descripcion).then(() => {
        window.location.href = "ver_todo_productos.html";
    });
});