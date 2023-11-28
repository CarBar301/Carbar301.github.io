document.addEventListener("DOMContentLoaded", function () {
    
    const redireccionRealizada = sessionStorage.getItem("redireccionRealizada");
  
    if (!redireccionRealizada && !usuarioHaIniciadoSesion()) {
      
      window.location.href = "login.html";
      sessionStorage.setItem("redireccionRealizada", "true");
    }
  });
  
  
  function usuarioHaIniciadoSesion() {
    
    return false;
  }
  