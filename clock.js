const clockContainer = document.querySelector('.clock-container');
const clockSizeSlider = document.getElementById('clock-size-slider');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const amPmSpan = document.getElementById('am-pm');
const dateSpan = document.querySelector('.clock-date');
const darkModeBtn = document.getElementById('dark-mode-btn');
const darkModeMinusBtn = document.getElementById('dark-mode-minus-btn');
const darkModePlusBtn = document.getElementById('dark-mode-plus-btn');
const dateSizeUpBtn = document.querySelector('#date-size-up');
const dateSizeDownBtn = document.querySelector('#date-size-down');
const backgroundColorInput = document.querySelector('#background-color');
const dateToggleCheckbox = document.querySelector('#date-toggle-checkbox');
var checker = document.querySelector('#date-toggle-checkbox');

let darkModeBtnSize = 1;
let clockTextSize = 10;
let dateTextSize = 88;
let backgroundColorUpdate;

darkModeMinusBtn.addEventListener('click', function() {
if (darkModeBtnSize > 1) {
    darkModeBtnSize--;
    darkModeBtn.style.fontSize = `${darkModeBtnSize}rem`;
}
});

darkModePlusBtn.addEventListener('click', function() {
if (darkModeBtnSize < 3) {
    darkModeBtnSize++;
    darkModeBtn.style.fontSize = `${darkModeBtnSize}rem`;
}
});

clockSizeSlider.addEventListener('input', function() {
const newSize = clockSizeSlider.value;
clockTextSize = newSize;
updateClock();
});

darkModeBtn.addEventListener('click', function() {
document.body.classList.toggle('dark-mode');
darkModeBtn.classList.toggle('dark-mode-btn');
});
    
dateSizeUpBtn.addEventListener('click', () => {
dateTextSize += 4;
updateClock();
});
      
dateSizeDownBtn.addEventListener('click', () => {
if (dateTextSize > 2) {
    dateTextSize -= 4;
    updateClock();
}
});

backgroundColorInput.addEventListener('input', () => {
let backgroundColorInputValue = backgroundColorInput.value;
backgroundColorUpdate = backgroundColorInputValue;
updateClock();
});

dateToggleCheckbox.addEventListener('change', () => {
updateClock();
});

checker.onchange = function() {
if(this.checked){
    dateSizeUpBtn.style.visibility = 'hidden';
    dateSizeDownBtn.style.visibility = 'hidden';
} else {
    dateSizeUpBtn.style.visibility = 'visible';
    dateSizeDownBtn.style.visibility = 'visible';
}
}

function updateClock() {
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
const amPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
const day = now.toLocaleDateString('en-US', { weekday: 'long' });
const month = now.toLocaleDateString('en-US', { month: 'long' });
const date = now.getDate();
const year = now.getFullYear();

hoursSpan.textContent = hours.toString().padStart(2, '0');
minutesSpan.textContent = minutes.toString().padStart(2, '0');
amPmSpan.textContent = amPm;
if (dateToggleCheckbox.checked) {
    dateSpan.style.display = 'none';
} else {
dateSpan.style.display = 'inline';
dateSpan.textContent = `${day}, ${month} ${date}, ${year}`;
dateSpan.style.fontSize = `${dateTextSize}px`;
}
clockContainer.style.fontSize = `${clockTextSize}rem`;
document.body.style.backgroundColor = backgroundColorUpdate;
}

updateClock();
setInterval(updateClock, 1000);

