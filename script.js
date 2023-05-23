function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDate();
  var day = today.getDay();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  document.getElementById('date').innerHTML = days[day] + ", " + d;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

var clock = document.getElementById("clock");
var name = document.getElementById("name");
var fontSize = document.getElementById("fontSize");
var fontFamily = document.getElementById("fontFamily");
var color = document.getElementById("color");

fontSize.addEventListener("input", function() {
  clock.style.fontSize = this.value + "px";
  name.style.fontSize = this.value / 2 + "px";
});

fontFamily.addEventListener("change", function() {
  clock.style.fontFamily = this.value;
  name.style.fontFamily = this.value;
});

color.addEventListener("input", function() {
  clock.style.color = this.value;
  name.style.color = this.value;
});