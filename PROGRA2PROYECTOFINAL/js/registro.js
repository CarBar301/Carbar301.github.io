var formularioregistro = document.getElementById("registroform");


formularioregistro.addEventListener('submit',function (event){
   event.preventDefault();
    alert("se ha registrado correctamente!");
    window.location.href="login.html";
    



});