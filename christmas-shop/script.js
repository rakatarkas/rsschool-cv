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

const daysElement = document.querySelector('#number-days');
const hoursElement = document.querySelector('#number-hours');
const minutesElement = document.querySelector('#number-minutes');
const secondsElement = document.querySelector('#number-seconds');

const targetDate = new Date('December 31, 2024 00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime(); 
    const timeDifference = targetDate - now; 

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    if (timeDifference < 0) {
        clearInterval(timerInterval); 
        daysElement.textContent = 0;
        hoursElement.textContent = 0;
        minutesElement.textContent = 0;
        secondsElement.textContent = 0;

        document.querySelector('.caption-6').textContent = 'Merry Christmas!';
    }
}
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
