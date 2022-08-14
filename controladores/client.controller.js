import { clientServices } from "../servicio/client-service.js";

//Lectura y creación de cada producto

const crearNuevoProducto = (id, imagen, nombre, precio) => {
    const producto = document.createElement("div");
    producto.classList.add("todos_los_productos--item");
    const contenido = `
        <img class="productos__item--imagen" src="${imagen}">
        <h5 class="productos__item--titulo_producto">${nombre}</h5>
        <p>${precio}</p>
        <a class="productos__item--vinculo" id="${id}" href="#">Ver Producto</a>
        <a class="productos__item--editar" id="${id}" href="editar_producto.html?id=${id}">Editar</a>
        <a class="productos__item--eliminar" id="${id}" href="#">Eliminar</a>
    `;
    producto.innerHTML = contenido;
    const botonEliminar = producto.querySelector('.productos__item--eliminar');
    botonEliminar.addEventListener("click", () => {
        const id = botonEliminar.id;
        clientServices
            .eliminarProducto(id)
            .then((respuesta) => {
                console.log(respuesta);
            })
            .catch((err) => alert("Ocurrió un error"));
    });

    return producto;
};

const seccionProductos = document.querySelector(".todos_los_productos--contenedor");



clientServices
.listaProductos()
    .then((data) => {
    data.forEach((producto) => {
        const nuevoProducto = crearNuevoProducto(producto.id, producto.imagen, producto.nombre, producto.precio);
        seccionProductos.appendChild(nuevoProducto);
    });
    })
    .catch((error) => alert('Ocurrió un error'));