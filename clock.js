let d, hours, minutes, seconds;
let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let dateContainer = document.getElementById('date');
let dayContainer = document.getElementById('day');
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let timeFontSize = 3;
let showDateDay = true;
document.getElementById('bigger').addEventListener("click", textBigger);
document.getElementById('small').addEventListener("click", textSmaller);
window.addEventListener('keydown', textSize);
document.getElementById('hide').addEventListener('click', toggleDateDay);

function toggleDateDay() {
    showDateDay = !showDateDay;
    if (showDateDay) {
      dateContainer.style.display = "block";
      dayContainer.style.display = "block";
    } else {
      dateContainer.style.display = "none";
      dayContainer.style.display = "none";
    }
}

// get references to the clock, date, and day elements
const clockEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const dayEl = document.getElementById('day');

// add event listener to the font randomizer button
document.getElementById('font-randomizer').addEventListener('click', () => {
  // generate random font family
  const fonts = ['Arial', 'Times New Roman', 'Helvetica', 'Comic Sans MS', 'Courier New', 'Verdana', 'Impact'];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  
  // set random font family to clock, date, and day elements
  clockEl.style.fontFamily = randomFont;
  dateEl.style.fontFamily = randomFont;
  dayEl.style.fontFamily = randomFont;
});


const resetColorsBtn = document.getElementById('reset');
resetColorsBtn.addEventListener('click', function() {
  document.body.style.backgroundColor = 'white';
  document.getElementById('time').style.color = 'black';
  document.getElementById('date').style.color = 'black';
  document.getElementById('day').style.color = 'black';
});

document.getElementById('date').addEventListener('click', function() {
    // generate random color
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // set clock color to random color
    document.getElementById('date').style.color = randomColor;
    // set date and day color to random color
    document.getElementById('date').style.color = randomColor;
});

document.getElementById('day').addEventListener('click', function() {
    // generate random color
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // set clock color to random color
    document.getElementById('day').style.color = randomColor;
    // set date and day color to random color
    document.getElementById('day').style.color = randomColor;
});

// get references to the menu and controls elements
const menuBtn = document.getElementById('menu');
const controlsDiv = document.getElementById('controls');

// add event listener to menu button
menuBtn.addEventListener('click', () => {
  // toggle visibility of controls div
  if (controlsDiv.style.visibility === 'hidden') {
    controlsDiv.style.visibility = 'visible';
  } else {
    controlsDiv.style.visibility = 'hidden';
  }
});

document.addEventListener('click', function(event) {
    // check if clicked element is the clock element
    if (event.target.id !== 'hours' && event.target.id !== 'minutes' && event.target.id !== 'seconds' 
    && event.target.id !== 'bigger' && event.target.id !== 'small' && event.target.id !== 'menu' 
    && event.target.id !== 'bars' && event.target.id !== 'reset' && event.target.id !== 'date'
    && event.target.id !== 'day' && event.target.id !== 'font-randomizer' && event.target.id !== 'hide'){
        // generate random color
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // set background color to random color
        document.body.style.backgroundColor = randomColor;
    }
});

function textSize(e){
    if(e.keyCode == 72){ // "H" key
        // toggle display style of day and date containers
        if(dayContainer.style.display === 'none'){
            dayContainer.style.display = 'block';
            dateContainer.style.display = 'block';
        } else {
            dayContainer.style.display = 'none';
            dateContainer.style.display = 'none';
        }
    } else if(e.keyCode == 189){ // "-" key
        textSmaller();
    } else if(e.keyCode == 187){ // "+" key
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

function upDateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    if(hours < 10){
        hours = "0" + hours;
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
    // add event listener for clicks on clock
    document.getElementById('time').addEventListener('click', function() {
        // generate random color
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        // set clock color to random color
        document.getElementById('time').style.color = randomColor;
    });
}

function upDateDate(){
    d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();

    if(date < 10){
        date = "0" + date;
    }
    /*if(month < 10){
        month = "0" + month;
    }*/

    /*console.log(day);
    console.log(date, month, year);*/

    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = date + ". " + months[month] + " " + year;
}

upDateClock();
upDateDate();

setInterval(upDateClock, 1000)