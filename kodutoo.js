let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time = d.getTime();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let fontSize = 50;
let lang = "EST";

let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let secondsContainer = document.getElementById('seconds');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');

if(lang == "EST"){
    monthContainer.innerHTML = months[month];
    dayContainer.innerHTML = days[day];
}

if(lang == "ENG"){

}

document.getElementById('year').innerHTML = year;
dateContainer.innerHTML = date;
updateClock();

window.setInterval(updateClock, 1000);
document.getElementById('smaller').addEventListener("click", function(){
    fontSize --;
    document.getElementById('container').style.fontSize = fontSize + "px";
});
document.getElementById('bigger').addEventListener("click", function(){
    fontSize ++;
    document.getElementById('container').style.fontSize = fontSize + "px";
});
document.getElementById('change bgcolor').addEventListener("click", function(){
    document.getElementById('main').style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});
document.getElementById('change text color').addEventListener("click", function(){
    document.getElementById('container').style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

function updateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(hours < 10){
        hours = "0" + hours;
    }

    secondsContainer.innerHTML = ":" + seconds;
    minutesContainer.innerHTML = ":" + minutes;
    hoursContainer.innerHTML = hours;
}

// Get current hour
const currentHour = new Date().getHours();

// Set background color and clock display depending on the time
if (currentHour >= 6 && currentHour < 18) {
  // Daytime, set background color to light blue and clock display to black
  document.body.style.backgroundColor = "#E0FFFF";
  document.getElementById("clock").style.color = "black";
} else {
  // Nighttime, set background color to dark blue and clock display to white
  document.body.style.backgroundColor = "#FFE4C4";
  document.getElementById("clock").style.color = "white";
}

// Display the current time in 12-hour format
function displayTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  minutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if minutes < 10
  const timeString = hours + ":" + minutes + " " + amOrPm;
  document.getElementById("clock").innerText = timeString;
}

// Update the clock every second
setInterval(displayTime, 1000);

const nightModeBtn = document.querySelector('#night-mode');

nightModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
});

