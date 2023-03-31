const clock = document.querySelector('.clock');
const resizeButton = document.querySelector('#resize-button');
const colorButton = document.querySelector('#color-button');
const formatButton = document.querySelector('#format-button');
let isFormatButtonActive = false; 
const authorButton = document.querySelector('#author-button');
const authorDiv = document.querySelector('.author');
const backColorButton = document.getElementById('backColor-button');
const dateButton = document.getElementById('date-button');

function updateClock(){
    const currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    currentHours = (currentHours < 10 ? "0" : "") + currentHours + ":";
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes + ":";
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    document.querySelector(".hours").innerHTML = currentHours ;
    document.querySelector(".minutes").innerHTML = currentMinutes;
    document.querySelector(".seconds").innerHTML = currentSeconds;
}

function upDateDate(){
    const dateContainer = document.querySelector(".date-container");
    const months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli"]
    const days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
    const d = new Date();
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

colorButton.addEventListener('click', function(){
    clock.classList.toggle('black');
});

formatButton.addEventListener('click', function(event){
    event.preventDefault();

    if (isFormatButtonActive) { // if button is already active, deactivate it
        const currentTime = new Date();
        document.querySelector(".hours").innerHTML = currentTime.getHours() + ":";
        document.querySelector(".minutes").innerHTML = currentTime.getMinutes() + ":";
        document.querySelector(".seconds").innerHTML = currentTime.getSeconds();
        isFormatButtonActive = false;
      } else { // if button is not active, activate it
        const currentTime = new Date();
        let currentHours = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();
        let currentSeconds = currentTime.getSeconds();

        let timeOfDay = "AM";
        let formattedHours = currentHours;

        if(currentHours > 12){
            formattedHours = currentHours - 12;
            timeOfDay = "PM";
        }

        if(formattedHours === 0){
            formattedHours = 12;
        }

        formattedHours = (formattedHours < 10 ? "0" : "") + formattedHours + ":";
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes + ":";
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds + " " + timeOfDay;

        document.querySelector(".hours").innerHTML = formattedHours;
        document.querySelector(".seconds").innerHTML = currentSeconds;
        document.querySelector(".minutes").innerHTML = currentMinutes;
        isFormatButtonActive = true;
    }
});

authorButton.addEventListener('click', function() {
    authorDiv.textContent = 'Anu Sarapuu';
});

backColorButton.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
});

dateButton.addEventListener('click', function(){
    const dateContainer = document.querySelector(".date-container");
    const d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    if(date < 10){
        date = "0" + date;
    }
    if(month < 10){
        month = "0" + month;
    }
    dateContainer.innerHTML = date + "." + month + "." + year;
});