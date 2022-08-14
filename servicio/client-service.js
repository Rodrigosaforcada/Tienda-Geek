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

const actualizarProducto = (id, imagen, nombre, precio, descripcion) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ imagen, nombre, precio, descripcion }),
    })
    .then((respuesta) => console.log(respuesta))
    .catch((err) => console.log(err));
};

export const clientServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleCliente,
    actualizarProducto,
};