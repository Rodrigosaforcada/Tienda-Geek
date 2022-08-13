//Fetch API
const listaProductos = () => 
    fetch("http://localhost:3000/productos").then( respuesta => respuesta.json());

const crearProducto = (imagen, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({id: uuid.v4(), imagen, nombre, precio, descripcion})
    });
};

const eliminarProducto = (id) => {
    console.log("Se elimina el producto con el id: ");
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    });
};

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => 
        respuesta.json()
    );
};

export const clientServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleCliente,
};