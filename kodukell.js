const clock = document.querySelector('.clock');
const resizeButton = document.querySelector('#resize-button');

function updateClock(){
    const currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    currentHours = (currentHours < 10 ? "0" : "") + currentHours + ":";
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes + ":";
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    const timeOfDay = (currentHours < 12) ? "AM" : "PM";

    document.querySelector(".hours").innerHTML = currentHours ;
    document.querySelector(".minutes").innerHTML = currentMinutes;
    document.querySelector(".seconds").innerHTML = currentSeconds;
}

function upDateDate(){
    const months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli"]
    const days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
    const d = new Date();
    const dateContainer = document.querySelector(".date-container");
    const dayContainer = document.querySelector(".day-container");
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let day = d.getDay();

    if(date < 10){
        date = "0" + date;
    }
    
    dayContainer.innerHTML = days[day];
    dateContainer.innerHTML = date + ". " + months[month] + " " + year;
}

updateClock()
upDateDate();

setInterval(updateClock, 1000);

resizeButton.addEventListener('click', function(){
    clock.classList.toggle('small');
});