function updateTime() {
	let today = new Date();

	// Tallinn
	let tallinnTime = today.toLocaleTimeString('et-EE');
	document.querySelector('.tallinn').textContent = tallinnTime;

	// New York
	let newYorkTime = today.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
	document.querySelector('.new-york').textContent = newYorkTime.replace(' ', '');

	// Tokyo
	let tokyoTime = today.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' });
	document.querySelector('.tokyo').textContent = tokyoTime;

	let dateTln = today.toLocaleDateString('et-EE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	document.querySelector('.date-tallinn').textContent = dateTln;
    let dateNY = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	document.querySelector('.date-new-york').textContent = dateNY;
    let dateTok = today.toLocaleDateString('ja-JP', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	document.querySelector('.date-tokyo').textContent = dateTok;
}

//taustavärvi vahetamine (must/valge)
var divTallinn = document.getElementById("tallinn");
var divNY = document.getElementById("newyork");
var divTokyo = document.getElementById("tokyo");

divTallinn.addEventListener("click", function() {
divTallinn.classList.toggle("white-background");
divTallinn.classList.toggle("black-background");
});
divNY.addEventListener("click", function() {
divNY.classList.toggle("white-background");
divNY.classList.toggle("black-background");
});
divTokyo.addEventListener("click", function() {
divTokyo.classList.toggle("white-background");
divTokyo.classList.toggle("black-background");
});

//muusika pausile panemine ja uuesti mängima panemine
let audio = document.querySelector('audio');
window.addEventListener('keydown', pauseAudio);

function pauseAudio(e){
if(e.keyCode == 173){
    audio.pause();
}else if(e.keyCode == 171){
    audio.play();
}}

function changeFont() {
    var fonts = ['Arial', 'Helvetica', 'Verdana', 'Times New Roman', 'Georgia'];
    var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.body.style.fontFamily = randomFont; 
  }

//värvi muutmine
var clockColor1 = document.getElementById('time1');
var clockColor2 = document.getElementById('time2');
var clockColor3 = document.getElementById('time3');

function generateColor(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
     code += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${code}`
   }

clockColor1.addEventListener('mouseover', function(){
clockColor1.style.color = generateColor();
});
clockColor2.addEventListener('mouseover', function(){
clockColor2.style.color = generateColor();
});
clockColor3.addEventListener('mouseover', function(){
clockColor3.style.color = generateColor();
});

// hoveriga riigi näitamine
let hoverEST = document.getElementById('hover-est');
let hiddenEST = document.getElementById('hidden-est');
let hoverUSA = document.getElementById('hover-usa');
let hiddenUSA = document.getElementById('hidden-usa');
let hoverJPN = document.getElementById('hover-jpn');
let hiddenJPN = document.getElementById('hidden-jpn');

hoverEST.addEventListener('mouseover', function() {
    hiddenEST.style.display = 'block';
});
hoverUSA.addEventListener('mouseover', function() {
    hiddenUSA.style.display = 'block';
});
hoverJPN.addEventListener('mouseover', function() {
    hiddenJPN.style.display = 'block';
});

hoverEST.addEventListener('mouseleave', function() {
    hiddenEST.style.display = 'none';
});
hoverUSA.addEventListener('mouseleave', function() {
    hiddenUSA.style.display = 'none';
});
hoverJPN.addEventListener('mouseleave', function() {
    hiddenJPN.style.display = 'none';
});

setInterval(updateTime, 1000);
