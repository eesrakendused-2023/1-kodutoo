let intervalId;
let alarmIntervalId;
let alarmTime;
const audio = new Audio('alarm-sound.mp3');
let timeFontSize = 10;

document.getElementById('bigger').addEventListener("click", textBigger);
document.getElementById('smaller').addEventListener("click", textSmaller);

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

  if (alarmTime && now >= alarmTime) {
    clearInterval(alarmIntervalId);
    audio.play(); 
    document.getElementById('set-alarm-btn').disabled = false;
  }
}

function startClock() {
  const timeZone = document.getElementById('timezone-select').value;
  clearInterval(intervalId);
  updateTime(timeZone);
  intervalId = setInterval(() => updateTime(timeZone), 1000);
}

function setAlarm() {
  const timezone = document.getElementById('timezone-select').value;
  const datetimeLocal = document.getElementById('alarm-time').value;
  if (datetimeLocal) {
    const datetimeUTC = new Date(datetimeLocal).toUTCString();
    alarmTime = new Date(datetimeUTC);
    alarmIntervalId = setInterval(() => updateTime(timezone), 1000);
    document.getElementById('set-alarm-btn').disabled = true;
  }
}

function cancelAlarm() {
  clearInterval(alarmIntervalId);
  alarmTime = null;
  audio.pause();
  audio.currentTime = 0;
  document.getElementById('set-alarm-btn').disabled = false;
}

const dayNightBtn = document.getElementById('day-night-btn');
dayNightBtn.addEventListener('click', () => {
  const body = document.querySelector('body');
  const colorPicker = document.getElementById('color-picker');
  if (body.classList.contains('night-mode')) {
    body.classList.remove('night-mode');
    dayNightBtn.textContent = 'Mine öörežiimi';
    body.style.backgroundColor = '#fff';
    body.style.color = '#000';
  } else {
    body.classList.add('night-mode');
    dayNightBtn.textContent = 'Mine päevarežiimi';
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
  }
});


const colorPicker = document.getElementById('color-picker');
const applyColorBtn = document.getElementById('apply-color-btn');
applyColorBtn.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = colorPicker.value;
});

const fontColorPicker = document.getElementById('font-color-picker');
const applyFontColorBtn = document.getElementById('apply-font-color-btn');
applyFontColorBtn.addEventListener('click', () => {
  const body = document.querySelector('body');
  const fontColor = fontColorPicker.value;
  body.style.color = fontColor;
});

function textBigger(){
  timeFontSize = timeFontSize + 0.1;
  document.getElementById('time').style.fontSize = timeFontSize + "em";
}

function textSmaller(){
  timeFontSize = timeFontSize - 0.1;
  document.getElementById('time').style.fontSize = timeFontSize + "em";
}




document.addEventListener('DOMContentLoaded', () => {
  const timezoneSelect = document.getElementById('timezone-select');
  timezoneSelect.addEventListener('change', startClock);

  const setAlarmBtn = document.getElementById('set-alarm-btn');
  setAlarmBtn.addEventListener('click', setAlarm);

  const cancelAlarmBtn = document.getElementById('cancel-alarm-btn');
  cancelAlarmBtn.addEventListener('click', cancelAlarm);

  startClock();

  audio.load();
});
