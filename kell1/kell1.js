let clockElement = document.getElementById("clock");
let originalColor = clockElement.style.color;
let is24HourFormat = false;
let timeFontSize = 6;
let backgrounds = [
    "konn.jpg",
    "loodus.jpg",
    "WallpaperDog-5510441.jpg"
  ];
  let currentBackgroundIndex = 0;

var audio = document.getElementById("bg-music");

function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    if (is24HourFormat) {
        hours = hours < 10 ? "0" + hours : hours;
      } else {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
      }
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[date.getDay()];
    var year = date.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[date.getMonth()];
    var dayOfMonth = date.getDate();
    var fullDate = day + ", " + month + " " + dayOfMonth + ", " + year;
    clockElement.innerText = time;
    document.getElementById('bigger').addEventListener("click", function(){
        timeFontSize = timeFontSize + 0.01;
        document.getElementById('clock').style.fontSize = timeFontSize + "em";
        });
    document.getElementById('smaller').addEventListener("click", function(){
        timeFontSize = timeFontSize - 0.01;
        document.getElementById('clock').style.fontSize = timeFontSize + "em";
        });  
    document.getElementById("clock").innerText = time;
    document.getElementById("date").innerText = fullDate;
    setTimeout(showTime, 1000);

  }

  function changeColor() {
    if (clockElement.classList.contains("purple")) {
      clockElement.classList.remove("purple");
      clockElement.style.color = originalColor;
    } else {
      clockElement.classList.add("purple");
      clockElement.style.color = "purple";
    }
  }

  function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = "url('" + backgrounds[currentBackgroundIndex] + "')";
  }

  function toggleClockFormat() {
    is24HourFormat = !is24HourFormat;
  }
  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }

 

  
  