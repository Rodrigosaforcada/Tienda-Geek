export function validarMensaje(Mensaje) {
    const regExMensaje = new RegExp('([a-zñ0-9]|\\s){1,120}', 'gi');
    console.log(regExMensaje.test(Mensaje));

    let coincidencias = Mensaje.match(regExMensaje);
    
    let cantidadCaracteres = 0; 
    
    coincidencias.forEach(coincidencia => {
        cantidadCaracteres += coincidencia.length;
    });

    console.log('cantidad de caracteres en Mensaje: ' + cantidadCaracteres);

    if(cantidadCaracteres > 120) {
        return false;
    }

    return Mensaje.match(regExMensaje);
}