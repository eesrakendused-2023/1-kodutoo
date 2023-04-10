class Time {
  constructor() {
    this.nightMode = false;
    this.format12 = true;
    this.size = 1;
    this.date = new Date();
  }

  toggleNightMode() {
    this.nightMode = !this.nightMode;
    this.saveToLocalStorage();
  }

  toggleFormat12() {
    this.format12 = !this.format12;
    this.saveToLocalStorage();
  }

  increaseSize() {
    this.size += 0.25;
    this.saveToLocalStorage();
  }

  decreaseSize() {
    if (this.size > 0.25) {
      this.size -= 0.25;
      this.saveToLocalStorage();
    }
  }

    saveToLocalStorage() {
      localStorage.setItem('time', JSON.stringify({
        nightMode: this.nightMode,
        format12: this.format12,
        size: this.size,
      }));
  }

  loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('time'));

    if (data) {
      this.nightMode = data.nightMode;
      this.format12 = data.format12;
      this.size = data.size;
    }
  }

  getTime() {
    let hours = this.date.getHours();
    let minutes = this.date.getMinutes();
    let seconds = this.date.getSeconds();
    let ampm = '';

    if (this.format12) {
      ampm = (hours >= 12) ? 'PM' : 'AM';
      hours = (hours % 12) || 12;
    }

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  getDate() {
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = this.date.getDate();
    const month = monthName[this.date.getMonth()];
    const year = this.date.getFullYear();
    const dayOfWeek = dayName[this.date.getDay()];

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  }
}

const clockDiv = document.getElementById('clock-section');
const dateDiv = document.getElementById('date-section');
const formatBtn = document.getElementById('format-btn');
const nightModeBtn = document.getElementById('nightmode-btn');
const biggerButton = document.getElementById('bigger-btn');
const smallerButton = document.getElementById('smaller-btn');
const time = new Time();
time.loadFromLocalStorage();

// Set the initial time and date values
clockDiv.innerText = time.getTime();
dateDiv.innerText = time.getDate();


function updateTimeAndDate() {
  clockDiv.innerText = time.getTime();
  dateDiv.innerText = time.getDate();
  clockDiv.style.fontSize = `${time.size}rem`;
}


setInterval(() => {
  time.date = new Date();
  updateTimeAndDate();
}, 100);

// Event listener for format button
formatBtn.addEventListener('click', () => {
  time.toggleFormat12();
  clockDiv.innerText = time.getTime();
});

// Event listener for nightmode button
nightModeBtn.addEventListener('click', () => {
  time.toggleNightMode();
  document.body.classList.toggle('night-mode');
});

biggerButton.addEventListener('click', function() {
  time.increaseSize();
});

smallerButton.addEventListener('click', function() {
  time.decreaseSize();
});
