// Footer
let cad1 = `
    <div class="footer-container">
        <div class="footer-logo">
            <a href="#inicio" class="logofooter"><img src="../imagenes/logonavbar.webp" alt="logo"></a>
        </div>
        <div class="row">
            <div class="footer-col">
                <h3>Páginas</h3>
                <a href="#inicio">Inicio</a>
                <a href="#nosotros">Nosotros</a>
                <a href="#vehiculos">Vehículos</a>
                <a href="#contacto">Contacto</a>
            </div>
            <div class="footer-col">
                <h3>Horarios</h3>
                <span>Lunes - Viernes</span>
                <p>8:30hs - 12:30hs <br> 16:30hs - 20:30hs</p>
                <span>Sábados</span>
                <p>8:30hs - 12:30hs</p>
            </div>
            <div class="footer-col">
                <h3>Dirección</h3>
                <p>General Alvear - Mendoza</p>
                <p>Av. Libertador Norte 102</p>
                <p>Tel.: +54 9 2625 40-7443</p>
            </div>
            <div class="footer-col">
                <div class="redes">
                    <h3>Nuestras redes</h3>
                    <a href="https://www.facebook.com/dangelmotors" target="_blank"><i class="bx bxl-facebook"></i></a>
                    <a href="https://wa.me/c/5492625407443" target="_blank"><i class="bx bxl-whatsapp"></i></a>
                    <a href="https://www.instagram.com/dangelmotors/" target="_blank"><i class="bx bxl-instagram"></i></a>
                    <a href='mailto: dangelmotors@gmail.com' target="_blank"><i class="bx bxl-gmail"></i></a> 
                </div>
            </div>
        </div>
    </div>`

document.querySelector("footer").innerHTML = cad1

// Copyright
let cad2 = `
<p>&#169; DangelMotors Todos los Derechos Reservados.</p>`

document.querySelector(".copyright").innerHTML = cad2