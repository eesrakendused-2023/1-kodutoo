const clockContainer = document.getElementById("clock-container");
const time = document.getElementById("time");
const date = document.getElementById("date");
const langButton = document.getElementById("lang-button");

let lang = "ENG";
let size = 100;

const daysENG = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const daysEST = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  time.textContent = `${hours}:${minutes}:${seconds}`;

  const day = now.getDay();
  const dayString = lang === "ENG" ? daysENG[day] : daysEST[day];
  const dayNum = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  date.textContent = `${dayString}, ${dayNum}.${month}.${year}`;

  const isNight = hours >= 18 || hours < 6;
  document.body.style.backgroundColor = isNight ? "black" : "white";
  time.style.color = isNight ? "white" : "black";
  date.style.color = isNight ? "white" : "black";
}

setInterval(updateClock, 1000);

langButton.addEventListener("click", () => {
  lang = lang === "ENG" ? "EST" : "ENG";
  updateClock();
});

time.addEventListener("click", () => {
  time.style.color = getRandomColor();
});

date.addEventListener("click", () => {
  date.style.color = getRandomColor();
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("keydown", (event) => {
  const step = 10;
  const key = event.key;

  if (key === "ArrowUp") {
    clockContainer.style.top = (parseFloat(clockContainer.style.top || 0) - step) + "px";
  } else if (key === "ArrowDown") {
    clockContainer.style.top = (parseFloat(clockContainer.style.top || 0) + step) + "px";
  } else if (key === "ArrowLeft") {
    clockContainer.style.left = (parseFloat(clockContainer.style.left || 0) - step) + "px";
  } else if (key === "ArrowRight") {
    clockContainer.style.left = (parseFloat(clockContainer.style.left || 0) + step) + "px";
  } else if (key === "+") {
    size += 10;
    updateSize();
  } else if (key === "-") {
    size -= 10;
    updateSize();
  }
});

function updateSize() {
  time.style.fontSize = (5 * size / 100) + "vw";
  date.style.fontSize = (2 * size / 100) + "vw";
  langButton.style.fontSize = (1 * size / 100) + "rem";
}

updateClock();
