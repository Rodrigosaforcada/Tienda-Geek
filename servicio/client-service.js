//Fetch API
const listaProductos = () => 
    fetch("https://62fa820dffd7197707ee1b77.mockapi.io/db").then( respuesta => respuesta.json());

    const crearProducto = (productoCreado) => {
    return fetch("https://62fa820dffd7197707ee1b77.mockapi.io/db", {
        method: "POST",
        headers: {
                "Content-type": "application/json"
        },
        body: JSON.stringify(productoCreado)
    }
    ).then( respuesta => respuesta.json());
};

const prepararAPI = (id) => {
    return fetch(`https://62fa820dffd7197707ee1b77.mockapi.io/db/${id}`, {
        method: "DELETE",
    });
};

const detalleCliente = () => 
    fetch("https://62fa820dffd7197707ee1b77.mockapi.io/db").then( respuesta => respuesta.json());

const actualizarProducto = (id, imagen, nombre, precio, descripcion) => {
    return fetch(`https://62fa820dffd7197707ee1b77.mockapi.io/db/productos/${id}`, {
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
    prepararAPI,
    detalleCliente,
    actualizarProducto,
};