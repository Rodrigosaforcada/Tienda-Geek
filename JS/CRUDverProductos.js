//Lectura y creación de cada producto

const crearNuevoProducto = (imagen, nombre, precio) => {
    const producto = document.createElement("div");
    producto.classList.add("todos_los_productos--item");
    const contenido = `
        <img class="productos__item--imagen" src="${imagen}">
        <h5 class="productos__item--titulo_producto">${nombre}</h5>
        <p>${precio}</p>
        <a class="productos__item--vinculo" href="#">Ver Producto</a>
    `;
    producto.innerHTML = contenido;
    return producto;
};

const seccionProductos = document.querySelector(".todos_los_productos--contenedor");

const http = new XMLHttpRequest();

http.open('GET', "http://localhost:3000/productos");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach((productos) => {
        const nuevoProducto = crearNuevoProducto(productos.imagen, productos.nombre, productos.precio);
        seccionProductos.appendChild(nuevoProducto);
    });
};