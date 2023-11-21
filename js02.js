let timeInSeconds = 300;
let timerInterval;
let isMouseMoving = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimer() {
    document.getElementById('timer').innerText = formatTime(timeInSeconds);
    if (timeInSeconds > 0 && !isMouseMoving) {
        timeInSeconds--;
    } else if (timeInSeconds === 0) {
        document.getElementById('audio-bg').pause();
        window.location.href = 'сайт03.html';
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById('audio-bg').play();
}

function resetTimer() {
    clearInterval(timerInterval);
    timeInSeconds = 300;
    updateTimer();
    if (!isMouseMoving) {
        startTimer();
    }
}

document.addEventListener('mousemove', function() {
    isMouseMoving = true;
    resetTimer();
});

document.addEventListener('mouseup', function() {
    isMouseMoving = false;
    resetTimer();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F8') {
        resetTimer();
        window.location.href = 'сайт03.html';
    }
});

startTimer();