const clock = document.getElementById("clock");
const date = document.getElementById("date");
const day = document.getElementById("day");
const timezone = document.getElementById("timezone");
const darkMode = document.getElementById("dark-mode");
const fontSize = document.getElementById("font-size");
const fontFamily = document.getElementById("font-family");
const opacity = document.getElementById("opacity");
const backgroundDiv = document.getElementById("background_area");
const containerDiv = document.getElementById("container");
const borderSetting = document.getElementById("border");
const audioBtn = document.getElementById("hideAudio");
const audio = document.getElementById("audioPlayer");
const settingsBtn = document.getElementById("hideSettings");
const settings = document.getElementById("settings");

// Initialize default settings
let clockTextColor = "white";

// Handle dark mode toggle
settingsBtn.addEventListener("change", () => {
if(settings.hidden == true){
  settings.hidden = false;
} else {
  settings.hidden = true;
}
});

// Handle dark mode toggle
darkMode.addEventListener("change", () => {
backgroundDiv.classList.toggle("background_area_dark-mode");
containerDiv.classList.toggle("container_dark-mode");
});

// Handle border toggle
borderSetting.addEventListener("change", () => {
if(containerDiv.classList.contains("container_dark-mode")){
  containerDiv.classList.toggle("border-toggle_dark");
} else {
containerDiv.classList.toggle("border-toggle_light");
}
});

// Handle audio toggle
audioBtn.addEventListener("change", () => {
if(audio.hidden == true){
  audio.hidden = false;
} else {
  audio.hidden = true;
}
});
  
// Handle font size change
fontSize.addEventListener("change", () => {
clock.style.fontSize = `${fontSize.value}px`;
date.style.fontSize = `${fontSize.value}px`;
day.style.fontSize = `${fontSize.value}px`;
});

// Handle opacity change
opacity.addEventListener("change", () => {
containerDiv.style.opacity = `${opacity.value}`;
});

// Handle font color change
clock.addEventListener("click", () => {
if (clockTextColor === "black") {
  clockTextColor = "white";
} else {
  clockTextColor = "black";
}
});

date.addEventListener("click", () => {
if (clockTextColor === "black") {
  clockTextColor = "white";
} else {
  clockTextColor = "black";
}
});

day.addEventListener("click", () => {
if (clockTextColor === "black") {
  clockTextColor = "white";
} else {
  clockTextColor = "black";
}
});

// Handle font family change
fontFamily.addEventListener("change", () => {
containerDiv.style.fontFamily = fontFamily.value;
});

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const dayOfWeek = now.getDay();
  const dayOfMonth = now.getDate();
  
  // Adjust for timezone
  if (timezone.value === "utc") {
    hours = hours - now.getTimezoneOffset() / 60;
  } else if (timezone.value === "est") {
    hours = hours - 5;
  } else if (timezone.value === "pst") {
    hours = hours - 8;
  }
  
  // Add leading zeros
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  // Update the clock
  clock.textContent = `${hours}:${minutes}:${seconds}`;
  // Update the date
  date.textContent = `${year}-${month}-${dayOfMonth}`;

  // Set the clock text color
  backgroundDiv.style.color = clockTextColor;

  // Update the day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day.textContent = daysOfWeek[dayOfWeek];

  // Set the font size
  clock.style.fontSize = `${fontSize.value}px`;
  date.style.fontSize = `${fontSize.value}px`;
  day.style.fontSize = `${fontSize.value}px`;

  // Set the clock font family
  backgroundDiv.style.fontFamily = fontFamily.value; 
}

// Update the clock every second
setInterval(updateTime, 500);

