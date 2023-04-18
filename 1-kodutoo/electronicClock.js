
let d, hours, minutes, seconds;
let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');
let dateContainer = document.getElementById('date');
let dayContainer = document.getElementById('day');
let months = ["January", "February", "March", "April","May","June", "July","August","September","October","November", "December"];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let timeFontSize = 3;
document.getElementById('bigger').addEventListener("click", textBigger);
document.getElementById('smaller').addEventListener("click", textSmaller);
window.addEventListener('keydown',textSize);


function textSize(e){
     if(e.keyCode == 109){
          textSmaller();
     }else if (e.keyCode == 107){
          textBigger();
      }
 }
function textBigger(e){
    console.log("text bigger");
    timeFontSize = timeFontSize + 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
}

function textSmaller(){
    timeFontSize = timeFontSize - 0.1;
    document.getElementById('time').style.fontSize = timeFontSize + "em";
}

function changeColorLight() {

    document.getElementById("time").style.color = "rgb(233, 152, 233)";
    
}

function changeColorDark() {

    document.getElementById("time").style.color = "rgb(240, 24, 96)";
    
}

function changeColorBlack(){

    document.getElementById("time").style.color = "rgb(14,13,13)";
}

function changeColorLight2() {

    document.getElementById("day").style.color = "rgb(233, 152, 233)";
    
}

function changeColorDark2() {

    document.getElementById("day").style.color = "rgb(240, 24, 96)";
    
}

function changeColorBlack2(){

    document.getElementById("day").style.color = "rgb(14,13,13)";
}

function upDateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    if(hours<10){
        hours = "0"+hours;
    }
    if(minutes<10){
        minutes = "0"+ minutes;
    }
    if(seconds<10){
        seconds = "0"+ seconds;
    }
    hoursContainer.innerHTML = hours;
    minutesContainer.innerHTML = ":" + minutes;
    secondsContainer.innerHTML = ":" + seconds;

}

function upDateDate(){
    d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();

    

    if(date<10){
        date = "0"+ date;
    }
    /*if(month < 10){
        month = "0"+ month;
    }*/

    console.log(date, month, year);

    document.querySelector(".js-2").innerHTML = String.fromCodePoint(0x1F497)
    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = months[month] +" "+ date + document.querySelector(".js-2").innerHTML + year;
   
}




upDateClock();
upDateDate();

setInterval(upDateClock, 1000);