const createFooter = () => {
  let footer = document.querySelector("footer");
  footer.innerHTML = `
    <section class="footer bg-image">
        <div class="container">
          <div class="row mb-3">
            <div class="foot-img col-lg py-3">
              <a href="index.html"
                ><img class="logo" src="assets/images/Logo brand.png" alt="logo-img"
              /></a>
              <p>
                "Donde el tiempo y la tecnología, se fusionan"
              </p>
            </div>
            <div class="col-lg col-md py-3">
              <h5>Encuentranos</h5>
              <div class="footer-link">
                <iconify-icon icon="mdi:map-marker"></iconify-icon>
                <p>Zona 10, local 23, Edificio "Las Flores"</p>
              </div>

              <div class="footer-link">
                <iconify-icon icon="basil:phone-solid"></iconify-icon>
                <p>(+502)5468-9745 / (+502)7854-9865</p>
              </div>

              <div class="footer-link">
                <iconify-icon
                  icon="material-symbols:mail-rounded"
                ></iconify-icon>
                <p>Nexuscorp@gmail.com</p>
              </div>
              <div class="footer-link">
                <iconify-icon icon="mdi:clock"></iconify-icon>
                <p>9:00am - 6:00pm , Lun a Vie</p>
              </div>
            </div>
            <div class="col-lg py-3">
              <h5>Novedades</h5>
              <p>
                Recibe novedades de <b>nuevos cursos y ofertas especiales</b>
              </p>
              <form action="#" method="post">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingresa tu correo"
                />
                <button type="submit" class="btn btn-success btn-block mt-2">
                  Enviar
                </button>
              </form>
            </div>
            <hr />
            <p class="text-center" id="copyright">
              Copyright © 2023 <br />
              Todos los derechos reservados. By
              <a target="_blank" rel="nofollow noopener" href="#">Nexus</a>
            </p>
          </div>
        </div>
      </section>`;
};

createFooter();
