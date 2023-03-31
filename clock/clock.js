const clock = document.getElementById("clock");
const time = document.getElementById("time");
const date = document.getElementById("date");
const rotateBtn = document.getElementById("rotateBtn");
const body = document.querySelector("body");

let isDaytime = true;

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  let amPm = "";

  if (hours >= 12) {
    amPm = "PM";
    isDaytime = false;
  } else {
    amPm = "AM";
    isDaytime = true;
  }

  const hourIn12HourFormat = hours >= 13 ? hours - 12 : hours;

  time.innerHTML = `${hourIn12HourFormat}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  date.innerHTML = `${day}/${month}/${year} ${amPm}`;

  if (minutes === 0) {
    const xPosition = Math.floor(Math.random() * 50);
    const yPosition = Math.floor(Math.random() * 50);

    time.style.marginTop = `${xPosition}%`;
    time.style.marginLeft = `${yPosition}%`;
  }

  if (hours >= 18 || hours < 6) {
    body.classList.add("bg-night");
  } else {
    body.classList.remove("bg-night");
  }
}

function changeClockFont() {
  const fonts = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Verdana",
  ];
  const randomIndex = Math.floor(Math.random() * fonts.length);
  const randomFont = fonts[randomIndex];

  clock.style.fontFamily = randomFont;
}

function jumpClock() {
  time.style.transform += "translateY(-50px)";
  setTimeout(() => {
    time.style.transform += "translateY(50px)";
  }, 500);
}

function toggleBgColor() {
  body.classList.toggle("bg-white");
}

function rotateClock() {
  clock.style.transform += "rotate(45deg)";
}

updateTime();
setInterval(updateTime, 1000);

clock.addEventListener("click", changeClockFont);
time.addEventListener("mousedown", () => {
  const xPosition = Math.floor(Math.random() * 50);
  const yPosition = Math.floor(Math.random() * 50);

  time.style.marginTop = `${xPosition}%`;
  time.style.marginLeft = `${yPosition}%`;
});
body.addEventListener("click", toggleBgColor);
rotateBtn.addEventListener("click", rotateClock);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jumpClock();
  }
});

window.addEventListener('resize', () => {
  const timeHeight = time.offsetHeight;
  const windowHeight = window.innerHeight;
  date.style.top = `${windowHeight - timeHeight - 20}px`;
});

window.dispatchEvent(new Event('resize'));

const repositoryBtn = document.getElementById("repositoryBtn");

repositoryBtn.addEventListener("click", () => {
  window.location.href = "http://www.tlu.ee/~xd/clock/";
});

