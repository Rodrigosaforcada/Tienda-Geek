const inputImagenContenedor = document.querySelector('.seccion_agregar_producto--input_imagen');

//El administrador hace click y elije un archivo desde el buscador de archivos
inputImagenContenedor.addEventListener('click', evento => {
    document.querySelector(".seccion_agregar_producto--soltar_imagen").click();
});

const inputImagen = document.querySelector(".seccion_agregar_producto--soltar_imagen");

inputImagen.addEventListener('change', evento => {
    actualizarContenedorImagen(inputImagenContenedor, inputImagen.files[0]);
});

//Evento de sujetar un archivo arrastrado sobre el contenedor de la imagen a cargar
inputImagenContenedor.addEventListener('dragover', evento => {
    evento.preventDefault();
    inputImagenContenedor.classList.add("imagen_arrastre--sobre_encuadre");
});

["dragleave", "dragend"].forEach(type => {
    inputImagenContenedor.addEventListener(type, evento => {
        inputImagenContenedor.classList.remove('imagen_arrastre--sobre_encuadre');
    })
});

inputImagenContenedor.addEventListener('drop', evento => {
    evento.preventDefault();
    console.log(evento.dataTransfer.files);

    actualizarContenedorImagen(
        inputImagenContenedor, 
        evento.dataTransfer.files[0]);

    inputImagenContenedor.classList.remove("imagen_arrastre--sobre_encuadre");
});

function actualizarContenedorImagen(inputImagenContenedor, file) {
    console.log(inputImagenContenedor);
    console.log(file);

    let previsualizacionImagen = inputImagenContenedor.querySelector('imagen_arrastre--previsualizacion');
    
    //Al colocarse una imagen se elimina el mensaje aclarativo o la etiqueta span en este caso
    if(document.querySelector(".seccion_agregar_producto--span_imagen")) {
        document.querySelector(".seccion_agregar_producto--span_imagen").remove();
    }

    //Como al principio no habrá ninguna imagen, se creará una provisonalmente
    if(!previsualizacionImagen) {
        previsualizacionImagen = document.createElement("div");
        previsualizacionImagen.classList.add("imagen_arrastre--previsualizacion");
        inputImagenContenedor.appendChild(previsualizacionImagen);
    }

    previsualizacionImagen.dataset.label = file.name;

    //Corroborar si el archivo arrastrado es una imagen
    if(file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            previsualizacionImagen.style.backgroundImage = `url('${ reader.result }')`;

            //console.log(reader.result);

            let coincidencias = [reader.result + ""];
    
            let cantidadCaracteres = 0; 
            
            coincidencias.forEach(coincidencia => {
                cantidadCaracteres += coincidencia.length;
            });
            console.log('cantidad de caracteres en Imagen en base64 provisoria: ' + cantidadCaracteres);

            previsualizacionImagen.style.backgroundRepeat = 'no-repeat';
            previsualizacionImagen.style.backgroundSize = 'contain';
        };
    } else {
        previsualizacionImagen.style.backgroundImage = null;
    }
}