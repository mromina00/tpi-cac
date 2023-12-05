//Consumo API Cotización del Dolar
fetch('https://api.bluelytics.com.ar/v2/latest') 
    .then(response => response.json()) 
    .then(data => {
        console.log(data)

        cad4 = 
        `<div class="container">
            <h2>Cotización Dolar Hoy</h2>
            <div class = "tarjetas">
                <div class="contenedor-dolar">
                    <img class="container-logo" src="../imagenes/logo-bluelytics.webp" alt="Bluelytics">
                    <div class="container-data">
                        <h3>Dolar Oficial</h3>
                        <div class="data-valores">
                            <p>${data.oficial.value_buy}<span>Compra</span></p>
                            <p>${data.oficial.value_sell}<span>Venta</span></p>
                        </div>
                    </div>
                    <div class="container-fecha">
                        <span>Última actualización: ${data.last_update}</span>
                    </div>
                </div>
                <div class="contenedor-dolar">
                    <img class="container-logo" src="../imagenes/logo-bluelytics.webp" alt="Bluelytics">
                    <div class="container-data">
                        <h3>Dolar Blue</h3>
                        <div class="data-valores">
                            <p>${data.blue.value_buy}<span>Compra</span></p>
                            <p>${data.blue.value_sell}<span>Venta</span></p>
                        </div>
                    </div>
                    <div class="container-fecha">
                        <span>Última actualización: ${data.last_update}</span>
                    </div>
                </div>
            </div>
        </div>`
        

        document.querySelector(".dolar").innerHTML = cad4;

    });