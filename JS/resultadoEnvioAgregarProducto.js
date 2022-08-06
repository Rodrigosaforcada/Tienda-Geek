const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();
    console.log(evento);

    const inputDatos = {
        nombreProducto: "",
        precioProducto: "",
        descripcionProducto: ""
    };

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

    console.log(inputDatos.nombreProducto);
    console.log(inputDatos.precioProducto);
    console.log(inputDatos.descripcionProducto);
});