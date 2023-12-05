//Javascript Slider Image
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");
const contents = document.querySelectorAll(".content");

let currentIndex = 0; //Indice inicial
const intervalTime = 5000 // Intervalo de tiempo en milisegundos para el cambio automático
let autoSlider; //Variable para almacenar el intervalo

var sliderNav = function(manual){
    //Quita la clase .active de todos los botones
    btns.forEach((btn) => {
        btn.classList.remove("active")
    })

    //Quita la clase .active para todas las imágenes
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })

    //Quita la clase .active de todos los textos
    contents.forEach((content) => {
        content.classList.remove("active")
    })

    //Agrega la clase .active a todo lo anterior
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
};

//Función para el cambio automático de fondo
function autoSlide(){
    currentIndex++;
    if (currentIndex === btns.length){
        currentIndex = 0;
    }
    sliderNav(currentIndex);
}

//Configura el intervalo para el cambio automático
autoSlider = setInterval(autoSlide, intervalTime);

//Detiene el intervalo cuando el cursor pasa sobre los botones
btns.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        clearInterval(autoSlider);
    });

    //Reanuda el intervalo cuando el cursor sale de los botones
    btn.addEventListener("mouseleave", () => {
        autoSlider = setInterval(autoSlide, intervalTime);
    });
});

//Cambio manual de fondo con los botones
btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})
