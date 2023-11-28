function createnavbar() {
    let header = document.querySelector("header"); 
    header.innerHTML = `
    <nav id="navbar">
    <div class="caja">
        <a href="index.html">
          <img class="logo"  src="assets/images/Logo brand.png" alt="">
        </a>
    </div>
    <div class="navlink">
        <ul class="texto">
            <a href="index.html">Home</a>
            <a href="#">Informacion</a>
            <a href="#">Contacto</a>
        </ul>
    </div>
    <div class="caja">
        <p id="nombreus"></p>
        <a href="login.html"><img id="iconousuario" src="assets/images/icons8-user-32.png" alt=""></a>
    </div>
</nav>  
    `;
     
}

createnavbar();