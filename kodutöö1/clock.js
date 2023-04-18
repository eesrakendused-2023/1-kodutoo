let d, hours, minutes, seconds;
let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let dateContainer = document.getElementById('date');
let dayContainer = document.getElementById('day');
let months = ["Jaanuar", "Veebruar", "Märts"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let timeFontSize = 3;

// Add event listener to change background color
document.addEventListener('click', function() {
  document.body.style.backgroundColor = 'pink';
});

document.getElementById('bigger').addEventListener("click", textBigger);
document.getElementById('smaller').addEventListener("click", textSmaller);
window.addEventListener('keydown', textSize);

// Add event listener to change timezone
document.getElementById('time').addEventListener('click', function() {
  updateClock('Asia/Shanghai');
});

function textSize(e){
    console.log(e.keyCode);
    if(e.keyCode == 109){
        textSmaller();
    } else if(e.keyCode == 107){
        textBigger();
    }
}

function textBigger(){
    console.log('text bigger')
    timeFontSize = timeFontSize + 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
}

function textSmaller(){
    timeFontSize = timeFontSize - 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
}

function upDateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    hoursContainer.innerHTML = hours;
    minutesContainer.innerHTML = ":" + minutes;
    secondsContainer.innerHTML = ":" + seconds;
}

function upDateDate(){
    d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();

    if(date < 10){
        date = "0" + date;
    }
    /*if(month < 10){
        month = "0" + month;
    }*/

    console.log(day)
    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = date + ". " + months[month] + " " + year;
}

function updateClock(timezone) {
  // Set the timezone
  let options = {timeZone: timezone};
  let now = new Date().toLocaleString('en-US', options);

  // Update the clock
  let parts = now.split(', ');
  let time = parts[1].split(':');
  hoursContainer.innerHTML = time[0];
  minutesContainer.innerHTML = ':' + time[1];
  secondsContainer.innerHTML = ':' + time[2];
  dayContainer.innerHTML = parts[0];
}

// add event listener for background color change
let container = document.getElementById('container');

container.addEventListener('click', function(event) {
  if (event.target === container) {
    changeBackgroundColor();
  }
});

function changeBackgroundColor() {
  let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  container.style.backgroundColor = randomColor;
}




upDateClock();
upDateDate();

setInterval(upDateClock, 1000);



// Define variables for the stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;
let stopwatchDisplay = document.getElementById('stopwatch-display');

// Define functions for the stopwatch buttons
function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
  updateStopwatchDisplay();
}

// Define function to update the stopwatch display
function updateStopwatchDisplay() {
  let hoursString = stopwatchHours.toString().padStart(2, '0');
  let minutesString = stopwatchMinutes.toString().padStart(2, '0');
  let secondsString = stopwatchSeconds.toString().padStart(2, '0');
  stopwatchDisplay.innerHTML = `${hoursString}:${minutesString}:${secondsString}`;
}

// Define function to update the stopwatch time
function updateStopwatch() {
  stopwatchSeconds++;
  if (stopwatchSeconds >= 60) {
    stopwatchSeconds = 0;
    stopwatchMinutes++;
    if (stopwatchMinutes >= 60) {
      stopwatchMinutes = 0;
      stopwatchHours++;
    }
  }
  updateStopwatchDisplay();
}

// Add event listeners to the stopwatch buttons
document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);

function startCountdown(seconds, message) {
  let countdownInterval = setInterval(function() {
    seconds--;
    if (seconds === 0) {
      clearInterval(countdownInterval);
      alert(message);
    }
    let countdownDisplay = document.getElementById('countdown-display');
    countdownDisplay.innerHTML = seconds;
  }, 1000);
}

document.getElementById('start-countdown').addEventListener('click', function() {
  let countdownTime = document.getElementById('countdown-time').value;
  let countdownMessage = document.getElementById('countdown-message').value;
  startCountdown(countdownTime, countdownMessage);
});
