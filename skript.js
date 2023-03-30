function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var weekdays = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
    var months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
    var clock = document.getElementById("clock");
    var timeString = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    var dateString = day + ". " + months[month - 1] + " " + year + ", " + weekdays[now.getDay()];
    clock.innerHTML = timeString + "<br>" + dateString;
}
  
var fontSize = 48;
var clock = document.getElementById("clock");
document.getElementById("plus-button").addEventListener("click", function() {
    fontSize += 4;
    clock.style.fontSize = fontSize + "px";
});

document.getElementById("minus-button").addEventListener("click", function() {
    if (fontSize > 12) {
        fontSize -= 4;
        clock.style.fontSize = fontSize + "px";
    }
});

var clock = document.getElementById("clock");
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var colorIndex = 0;

function changeColor() {
    clock.style.transition = "color 1s ease-in-out";
    clock.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);
updateTime();
setInterval(updateTime, 1000);

var buttons = document.querySelectorAll("color-button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var color = this.getAttribute("data-color");
        clock.style.background = color;
    });
}
