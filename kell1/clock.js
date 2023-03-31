let d, hours, minutes, seconds;
let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let dateContainer = document.getElementById('date');
let dayContainer = document.getElementById('day');
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
let timeFontSize = 3;

document.getElementById('bigger').addEventListener("click", function(){
    timeFontSize = timeFontSize + 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
});
document.getElementById('smaller').addEventListener("click", function(){
    timeFontSize = timeFontSize - 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
});
function updateclock(){
    d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if(hours < 10){
        hours = "0"+ hours;
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

function updatedate(){
    d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();
    if(date < 10){
        date = "0"+ date;
    }
    

    console.log(date, month, year)
    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = date + ". " + months[month] + " " + year;
}

function moveClock(e) {
  e = e || window.event;

  // Move the clock based on the arrow key pressed
  switch (e.keyCode) {
    case 37: // left arrow
      clockElement.style.left = (parseInt(clockElement.style.left) - 10) + 'px';
      break;
    case 38: // up arrow
      clockElement.style.top = (parseInt(clockElement.style.top) - 10) + 'px';
      break;
    case 39: // right arrow
      clockElement.style.left = (parseInt(clockElement.style.left) + 10) + 'px';
      break;
    case 40: // down arrow
      clockElement.style.top = (parseInt(clockElement.style.top) + 10) + 'px';
      break;
  }
}

updateclock();
updatedate();

setInterval(updateclock, 1000);