const timerOutput = document.getElementById('timer-output');
const startBtn = document.getElementById('start-timer-btn');
const stopBtn = document.getElementById('stop-timer-btn');
let countdown;

function startTimer() {
    const hours = parseInt(document.getElementById('hours-input').value) || 0;
    const minutes = parseInt(document.getElementById('minutes-input').value) || 0;
    const seconds = parseInt(document.getElementById('seconds-input').value) || 0;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    return;
  }

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  let remainingSeconds = totalSeconds;

  function tick() {
    const hoursLeft = Math.floor(remainingSeconds / 3600).toString().padStart(2, '0');
    const minutesLeft = Math.floor((remainingSeconds % 3600) / 60).toString().padStart(2, '0');
    const secondsLeft = (remainingSeconds % 60).toString().padStart(2, '0');
    timerOutput.innerHTML = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
  
    remainingSeconds--;
    if (remainingSeconds < 0) {
      clearInterval(countdown);
      timerOutput.innerHTML = '00:00:00';
      alert('Timer has reached zero');
    }
  }

  tick();
  countdown = setInterval(tick, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  timerOutput.innerHTML = '00:00:00';
}


startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
