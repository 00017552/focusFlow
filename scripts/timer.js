let timer;
let totalTimeInSeconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('time');
const timerInput = document.getElementById('timerInput');

function start() {
    if (isRunning) return;

    isRunning = true;
    const minutes = parseInt(timerInput.value);
    totalTimeInSeconds = minutes * 60; // Convert minutes to seconds

    timer = setInterval(updateTimer, 1000);
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function refresh() {
    clearInterval(timer);
    isRunning = false;

    totalTimeInSeconds = 0;
    timerDisplay.textContent = formatTime(totalTimeInSeconds);
}

function updateTimer() {
    if (totalTimeInSeconds <= 0) {
        clearInterval(timer);
        isRunning = false;
        return;
    }

    totalTimeInSeconds--;
    timerDisplay.textContent = formatTime(totalTimeInSeconds);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}
