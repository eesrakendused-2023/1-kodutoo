// get elements
const clock = document.getElementById('clock');
const modeBtn = document.getElementById('mode-switch');
const name = document.getElementById('name');
const dateDisplay = document.getElementById('date');
const nameLink = document.getElementById('name-link');
const partyBtn = document.getElementById('party-btn');
const body = document.body;
const music = document.getElementById('music');

let isPlaying = false;

partyBtn.addEventListener('click', function() {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
    partyBtn.textContent = 'Party';
  } else {
    music.play();
    isPlaying = true;
    partyBtn.textContent = 'Stop Party';
  }
});

partyBtn.addEventListener('click', function() {
  body.classList.toggle('party-mode');
});


let clockSize = 10;

//name to repository link button
nameLink.addEventListener('mouseover', () => {
  nameLink.innerHTML = 'REPOSITOORIUM!';
});

nameLink.addEventListener('mouseout', () => {
  nameLink.innerHTML = 'Käti Jalakas';
});

nameLink.addEventListener('click', () => {
  window.location.href = 'https://github.com/jalakaskati/1-kodutoo';
});

// function to update clock
let is12HourFormat = false;

function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  if (is12HourFormat) {
    hours = (hours % 12) || 12; // convert to 12-hour format
  } else {
    hours = hours < 10 ? '0' + hours : hours; // convert to 24-hour format
  }
  
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  let time = hours + ':' + minutes + ':' + seconds;
  clock.innerText = time;
}

clock.addEventListener('click', function() {
  is12HourFormat = !is12HourFormat; // toggle 12-hour format
  digitalClock(); // update clock display
});


// function to update date
function displayDate() {
  let date = new Date();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate = date.toLocaleDateString(undefined, options);
  dateDisplay.innerText = formattedDate;
}

// function to switch between day and night modes
function switchMode() {
  let body = document.body;
  let isDarkMode = body.classList.contains("dark-mode");
  if (isDarkMode) {
    body.classList.remove("dark-mode");
    modeBtn.textContent = "Dark";
    modeBtn.style.backgroundColor = "#FFE4C4";
    modeBtn.style.color = "#2F4F4F";
  } else {
    body.classList.add("dark-mode");
    modeBtn.textContent = "Light";
    modeBtn.style.backgroundColor = "#2F4F4F";
    modeBtn.style.color = "#FFE4C4";
  }
}

// initialize clock and date
digitalClock();
displayDate();

// update clock every second
setInterval(digitalClock, 1000);

// update date once per minute
setInterval(displayDate, 60000);

// add event listener to mode switch button
modeBtn.addEventListener("click", switchMode);

// add event listener to document to change clock size using mouse scroll
document.addEventListener("wheel", function(event) {
  if (event.target === clock || clock.contains(event.target)) {
    event.preventDefault();
    let delta = event.deltaY || event.detail || event.wheelDelta;
    let currentSize = parseFloat(window.getComputedStyle(clock).fontSize);
    let newSize = currentSize + delta * 0.1;
    clock.style.fontSize = newSize + "px";
  }
});

