let d, hours, minutes, seconds;
let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let dayContainer = document.getElementById('day');
let dateContainer = document.getElementById('date');
let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
let monthsEn = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "decemeber"]
let daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let timeFontSize = 3;

document.getElementById('bigger').addEventListener("click", textBigger);
document.getElementById('shorter').addEventListener("click", textSmaller);

window.addEventListener('keydown', textSize);

function textSize(e){
    if(e.keyCode == 109){
        textSmaller();
    } else if(e.keyCode == 107) {
        textBigger();
    }
}

function textBigger(){
    timeFontSize = timeFontSize + 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
}

function textSmaller(){
    timeFontSize = timeFontSize - 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
}

const languageSelect = document.getElementById("language-select");

function upDateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    hoursContainer.innerHTML = hours;
    minutesContainer.innerHTML = ":" + minutes;
    secondsContainer.innerHTML = ":" + seconds;

    const language = languageSelect.value;
    if(language === "en") {
        const monthEn = monthsEn[d.getMonth()];
        const dayEn = daysEn[d.getDay()];
        dateContainer.innerHTML = d.getDate() +  ". " + monthEn + " " + d.getFullYear();
        dayContainer.innerHTML = dayEn;
    } else {
        const month = months[d.getMonth()];
        const day = days[d.getDay()];
        dateContainer.innerHTML = d.getDate() + ". " + month + " " + d.getFullYear();
        dayContainer.innerHTML = day;
    }
}


function upDateDate(){
    d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();

    console.log(date, month, year);
    console.log(day);

    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = date + "." + months[month] + " " + year;
}

const container = document.getElementById('container');
const clock = document.querySelector('.time');
const date = document.querySelector('.date');
const day = document.querySelector('.day');
 

time.addEventListener('click', () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  time.style.background = color;
});

const backgrounds = ['background.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg'];
let currentBackground = 0;

container.addEventListener('click', () => {
  currentBackground = (currentBackground + 1) % backgrounds.length;
  container.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
});

const fontFamilySelect = document.getElementById("font-family");

fontFamilySelect.addEventListener("change", () => {
    container.style.fontFamily = fontFamilySelect.value;
});

const musicPlayer = document.getElementById("music-player");
const playPauseButton = document.getElementById("play-pause-button");
const seekBar = document.getElementById("seek-bar");

function togglePlayPause() {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playPauseButton.classList.remove("play-button");
    playPauseButton.classList.add("pause-button");
  } else {
    musicPlayer.pause();
    playPauseButton.classList.remove("pause-button");
    playPauseButton.classList.add("play-button");
  }
}

function updateSeekBar() {
  const percentPlayed = (musicPlayer.currentTime / musicPlayer.duration) * 100;
  seekBar.value = percentPlayed;
}

playPauseButton.addEventListener("click", togglePlayPause);
musicPlayer.addEventListener("timeupdate", updateSeekBar);

upDateClock();
upDateDate();

setInterval(upDateClock, 1000);

