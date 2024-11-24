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

// Select the elements where the countdown numbers will be displayed
const daysElement = document.querySelector('#number-days');
const hoursElement = document.querySelector('#number-hours');
const minutesElement = document.querySelector('#number-minutes');
const secondsElement = document.querySelector('#number-seconds');

// Set the target date for Christmas
const targetDate = new Date('December 25, 2024 00:00:00').getTime();

// Function to update the countdown timer
function updateTimer() {
    const now = new Date().getTime(); // Get the current time
    const timeDifference = targetDate - now; // Calculate the difference in milliseconds

    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the values in the corresponding elements
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

    // If the countdown is finished
    if (timeDifference < 0) {
        clearInterval(timerInterval); // Stop the interval
        daysElement.textContent = 0;
        hoursElement.textContent = 0;
        minutesElement.textContent = 0;
        secondsElement.textContent = 0;

        // Optionally display a message when the countdown is over
        document.querySelector('.caption-6').textContent = 'Merry Christmas!';
    }
}

// Call the updateTimer function every second
const timerInterval = setInterval(updateTimer, 1000);

// Initialize the timer immediately
updateTimer();
