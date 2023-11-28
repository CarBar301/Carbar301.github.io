

var formulario = document.getElementById("pruebahistoria");

formulario.addEventListener('submit',function (event){
    event.preventDefault();
    var nota = validarRespuestas();
    Desactivacheckbox('p1');
    Desactivacheckbox('p2');
    Desactivacheckbox('p3');
    Desactivacheckbox('p4');
    Desactivacheckbox('p5');

    var botonenviar = document.getElementById("boton-enviar");
    botonenviar.disabled = true;

    const calificacion = document.getElementById("nota");
    calificacion.innerHTML = nota+"%";
    muestravolver();
});


function validarRespuestas() {
    const respuestasCorrectas = {
        p1: 'a',
        p2: 'b',
        p3: 'b',
        p4: 'c',
        p5: 'b'
        
    };

    const respuestasUsuario = {
        p1: obtenerRespuesta('p1'),
        p2: obtenerRespuesta('p2'),
        p3: obtenerRespuesta('p3'),
        p4: obtenerRespuesta('p4'),
        p5: obtenerRespuesta('p5')
       
    };

    var calificacion = 0;
   
    for (const pregunta in respuestasCorrectas) {
        if (respuestasUsuario[pregunta] !== respuestasCorrectas[pregunta]) {
            calificacion = calificacion;
        }else{
            calificacion = calificacion + 20;
        }
    }
    return calificacion;
   
}


function Desactivacheckbox(nombrePregunta) {
    const opciones = document.getElementsByName(nombrePregunta);
    for (const opcion of opciones) {
        opcion.disabled=true;
    }
    
    return null;
}


function muestravolver(params) {
    var volver = document.getElementById("volverintentar");
    volver.style.display="block";
    
}



function obtenerRespuesta(nombrePregunta) {
    const opciones = document.getElementsByName(nombrePregunta);
    for (const opcion of opciones) {
        if (opcion.checked) {
            return opcion.value;
        }
    }
    
    return null;
}