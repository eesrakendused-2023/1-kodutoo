let intervalId;
let alarmIntervalId;
let alarmTime;
const audio = new Audio('alarm-sound.mp3');

function updateTime(timeZone) {
  const now = new Date();
  const options = {
    hour12: false,
    timeZone: timeZone,
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  let hours = now.toLocaleTimeString('en-US', { hour12: false, timeZone: timeZone }).split(':')[0];
  hours = hours === '24' ? '00' : hours;
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const time = hours + ':' + minutes + ':' + seconds;
  const date = now.toLocaleDateString('et-EE', options).replace(/\./g, '/');
  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;

  // Check if alarm time has been reached
  if (alarmTime && now >= alarmTime) {
    clearInterval(alarmIntervalId);
    audio.play(); // play alarm sound
    document.getElementById('set-alarm-btn').disabled = false;
  }
}

function startClock() {
  const timeZone = document.getElementById('timezone-select').value;
  clearInterval(intervalId); // clear existing interval
  updateTime(timeZone);
  intervalId = setInterval(() => updateTime(timeZone), 1000);
}

function setAlarm() {
  const timezone = document.getElementById('timezone-select').value;
  const datetimeLocal = document.getElementById('alarm-time').value;
  if (datetimeLocal) {
    // Convert local datetime to UTC
    const datetimeUTC = new Date(datetimeLocal).toUTCString();
    alarmTime = new Date(datetimeUTC);
    alarmIntervalId = setInterval(() => updateTime(timezone), 1000);
    document.getElementById('set-alarm-btn').disabled = true;
  }
}

function cancelAlarm() {
  clearInterval(alarmIntervalId);
  alarmTime = null;
  audio.pause(); // stop alarm sound
  audio.currentTime = 0; // reset audio to beginning
  document.getElementById('set-alarm-btn').disabled = false;
}

const dayNightBtn = document.getElementById('day-night-btn');
dayNightBtn.addEventListener('click', () => {
  const body = document.querySelector('body');
  if (body.classList.contains('night-mode')) {
    body.classList.remove('night-mode');
    dayNightBtn.textContent = 'Mine öörežiimi';
  } else {
    body.classList.add('night-mode');
    dayNightBtn.textContent = 'Mine päevarežiimi';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const timezoneSelect = document.getElementById('timezone-select');
  timezoneSelect.addEventListener('change', startClock);

  const setAlarmBtn = document.getElementById('set-alarm-btn');
  setAlarmBtn.addEventListener('click', setAlarm);

  const cancelAlarmBtn = document.getElementById('cancel-alarm-btn');
  cancelAlarmBtn.addEventListener('click', cancelAlarm);

  // Start clock with default timezone
  startClock();

  // Preload audio file
  audio.load();
});
