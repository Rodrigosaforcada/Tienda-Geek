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
        
        const regExImagenBase64 = /data:image.{1,}=/; 

        inputDatos.ImagenProducto = document.querySelector(".imagen_arrastre--previsualizacion").style.backgroundImage.match(regExImagenBase64);
        //console.log(inputDatos.ImagenProducto[0]);
        
        let coincidencias = inputDatos.ImagenProducto;
    
        let cantidadCaracteres = 0; 
        
        coincidencias.forEach(coincidencia => {
            cantidadCaracteres += coincidencia.length;
        });
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
    inputDatos.precioProducto = inputPrecioProducto;
    inputDatos.descripcionProducto = inputDescripcionProducto;

    evento.path[0].nextElementSibling.style.display = "block";
    evento.path[0].nextElementSibling.innerText = "Producto agregado con éxito.";

    console.log(inputDatos.ImagenProducto);
    console.log(inputDatos.nombreProducto);
    console.log(inputDatos.precioProducto);
    console.log(inputDatos.descripcionProducto);
});