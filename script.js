let timerDuration = 25 * 60; // minutes * seconds
let timer;
let isRunning = false;

const timerDisplay = document.getElementById('timer-numeric');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function updateDisplay() {
    const minutes = Math.floor(timerDuration / 60);
    const seconds = timerDuration % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    updateTimerColor();
}

function updateTimerColor() { 
    if (timerDuration > 10 * 60) {
        timerDisplay.style.color = '#3f51b5'; // indigo 
    } else if (timerDuration > 5 * 60) {
        timerDisplay.style.color = '#ffa000'; // amber
    } else {
        timerDisplay.style.color = '#d32f2f'; // red
    }
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (timerDuration > 0) {
            timerDuration--;
            updateDisplay();
        } else {
            clearInterval(timer);
            blinkTimer(); // blink when time is up
            isRunning = false; // restart allowed
        }
    }, 1000);
}

function blinkTimer() {
    timerDisplay.classList.add('blink'); // enable blinking
}

function resetTimer() {
    clearInterval(timer);
    timerDuration = 25 * 60;
    isRunning = false;
    timerDisplay.classList.remove('blink'); // remove blinking effect
    updateDisplay(); // reset display
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
