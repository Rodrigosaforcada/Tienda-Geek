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

    clientServices.detalleCliente().then(respuesta => respuesta[0]['productos'].forEach((producto) => {
        
        if(producto.id == id) {
            previsualizacionImagen.style.backgroundImage = `url('${ producto.imagen }')`;
    
            previsualizacionImagen.style.backgroundImage = previsualizacionImagen.style.backgroundImage.replace('"")', '');
    
            previsualizacionImagen.style.backgroundRepeat = 'no-repeat';
            previsualizacionImagen.style.backgroundSize = 'contain';
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        }
    }));
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

    clientServices
    .listaProductos()
    .then((data) => {
        data[0]['productos'].forEach((producto) => {
            console.log('error1');
            if(producto.id == id) {
                producto.nombre = nombre;
                producto.precio = precio;
                producto.imagen = imagen;
                producto.descripcion = descripcion; 
            }
        });
        console.log('error2');
        clientServices.prepararAPI(data[0]['id']);
        clientServices.crearProducto(data[0])
            .then((respuesta) =>
                window.location.href = "ver_todo_productos.html"
            );
    })
    .catch((error) => alert('Ocurrió un error'));
});