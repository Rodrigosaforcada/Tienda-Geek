import { clientServices } from "../servicio/client-service.js";

const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();
    console.log(evento);

    const inputDatos = {
        ImagenProducto: "",
        nombreProducto: "",
        precioProducto: "",
        descripcionProducto: ""
    };

    if(document.querySelector(".imagen_arrastre--previsualizacion")) {
        
        const regExImagenBase64 = /data:image.{1,}"/; 

        let datosImagen = document.querySelector(".imagen_arrastre--previsualizacion").style.backgroundImage.match(regExImagenBase64);
        
        for(let i = 0; i < datosImagen[0].length; i++) {
            inputDatos.ImagenProducto += datosImagen[0][i];
        }
        console.log(inputDatos.ImagenProducto);
        
        let coincidencias = inputDatos.ImagenProducto;
    
        let cantidadCaracteres = 0; 
        
        for(let i = 0; i < coincidencias.length - 1; i++) {
            cantidadCaracteres += 1;
        }

        console.log('cantidad de caracteres en Imagen en base64 enviada: ' + cantidadCaracteres);
    } else {
        evento.path[0].nextElementSibling.style.display = "block";
        evento.path[0].nextElementSibling.innerText = "No se ha seleccionado ninguna foto para el producto.";
        return ;
    }

    const inputNombreProducto = document.querySelector('[data-nombre-producto]').value;

    const inputPrecioProducto = document.querySelector('[data-precio-producto]').value;

    const inputDescripcionProducto = document.querySelector('[data-descripcion-producto]').value;

    const regExDescripcionProducto = new RegExp('([a-zñ0-9]|\\s){1,150}', 'gi');
    console.log(regExDescripcionProducto.test(inputDescripcionProducto));

    let coincidencias = inputDescripcionProducto.match(regExDescripcionProducto);
    
    let cantidadCaracteres = 0; 
    
    coincidencias.forEach(coincidencia => {
        cantidadCaracteres += coincidencia.length;
    });

    console.log('cantidad de caracteres en Descripcion del Producto: ' + cantidadCaracteres);
    console.log(inputDescripcionProducto.match(regExDescripcionProducto));

    inputDatos.nombreProducto = inputNombreProducto;
    inputDatos.precioProducto = inputPrecioProducto + "$";
    inputDatos.descripcionProducto = inputDescripcionProducto;

    evento.path[0].nextElementSibling.style.display = "block";
    evento.path[0].nextElementSibling.innerText = "Producto agregado con éxito.";

    console.log(inputDatos.ImagenProducto);
    console.log(inputDatos.nombreProducto);
    console.log(inputDatos.precioProducto);
    console.log(inputDatos.descripcionProducto);

    let resultado = "";

    clientServices
        .listaProductos()
        .then((respuesta) => {
            resultado = respuesta[0]['productos'].push({
                nombre: inputDatos.nombreProducto, 
                id: uuid.v4(), 
                precio: inputDatos.precioProducto, 
                imagen: inputDatos.ImagenProducto, 
                descripcion: inputDatos.descripcionProducto
            });
            console.log(respuesta[0]);
            clientServices.prepararAPI(respuesta[0]['id']);
            clientServices.crearProducto(respuesta[0])
                .then((respuesta) =>
                    window.location.href = "ver_todo_productos.html"
                );
        })
        .catch((err) => console.log(err));

    
});