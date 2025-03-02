
/* Script for about us slider */

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.about-us-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.about-us-slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initial display
showSlide(currentSlide);


/* End */