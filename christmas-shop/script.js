const slider = document.querySelector('.main-slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;
const slidesCount = slider.children.length / 2;
const slideWidth = 300;

nextBtn.addEventListener('click', () => {
    if (currentSlide < slidesCount - 1) {
        currentSlide++;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
});