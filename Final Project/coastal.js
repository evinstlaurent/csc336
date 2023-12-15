//typeWriter effect javascript for the main page. Code sourced from W3Schools at https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var txt = "We're Your Neighborhood Podiatrist!";
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("homeSubheader").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

//carousel javascript used on staff and home page
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carouselSlide');
    const prevButton = document.querySelector('.prevButton');
    const nextButton = document.querySelector('.nextButton');

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    showSlide(currentIndex);
});