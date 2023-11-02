//function for displaying the answers to the faq questions
function dropdownQuestion(answer, type, questionNum) {
    let questionNumHTML = document.getElementById("FAQAnswer"+type+questionNum).innerHTML;

    if (questionNumHTML != "") {
        document.getElementById("FAQAnswer"+type+questionNum).innerHTML = "";
        return;
    }

    questionNumHTML = `<div>${answer}</div>`;

    document.getElementById("FAQAnswer"+type+questionNum).innerHTML = questionNumHTML;
}



//carousel javascript: 
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

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