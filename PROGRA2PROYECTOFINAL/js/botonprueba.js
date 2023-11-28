  function muestraprueba(params) {
   var prueba = document.getElementById("pruebaform");
   var botonmostrar = document.getElementById("boton-prueba");
    
    if (prueba.style.display ==="none" || prueba.style.display ==="") {
        prueba.style.display ="flex";
        botonmostrar.style.display="none";

        
    }
    
}