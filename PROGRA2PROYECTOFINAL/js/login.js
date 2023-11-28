 var formulariologin = document.getElementById("login");


 formulariologin.addEventListener('submit',function (event){
    event.preventDefault();

    var correo = document.getElementById("correo").value;
    var password = document.getElementById("contra").value;
    if( password  === '2023' && correo ==='alumno'){
      alert("Se ha iniciado correctamente!");
      window.location.href="index.html";

    } 
    else{
      alert("Usuario o contraseña son incorrectos!");
      
    }



 });