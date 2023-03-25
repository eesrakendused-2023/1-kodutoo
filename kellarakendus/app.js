
const timeZoneSelect = document.getElementById('time-zone');


let timeZoneOffset = 0;


timeZoneSelect.addEventListener('change', function(event) {
  timeZoneOffset = parseInt(event.target.value);
});


function updateTime() {
  const now = new Date();

  
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hours = now.getHours() + timeZoneOffset;


  const timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

  document.getElementById("time").textContent = timeString;

  const date = now.getDate();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const month = now.toLocaleDateString('en-US', { month: 'long' });
  const year = now.getFullYear();

  document.querySelector('.date').textContent = `${day}, ${month} ${date}, ${year}`;

}

setInterval(updateTime, 1000);


const clock = document.querySelector('.watch-face');

clock.addEventListener('click', () => {
  clock.classList.toggle('clicked');
});

const backgroundImage = new Image();
backgroundImage.src = 'images/516817-dark-space-4k.jpg';
backgroundImage.onload = function() {
  document.body.style.backgroundImage = `url(${backgroundImage.src})`;
}

const bgSelect = document.getElementById('background-image');
const body = document.body;

bgSelect.addEventListener('change', function(event) {
  const bgValue = event.target.value;
  body.style.backgroundImage = `url(${bgValue})`;
});

const frame = document.getElementById('frame');

frame.addEventListener('click', function() {
  frame.classList.toggle('active');
});



const backgroundselector = document.getElementById('background-selector', 'time-zone-selector');

backgroundselector.addEventListener('click', function() {
  backgroundselector.classList.toggle('active');
});

const timezoneselector = document.getElementById('time-zone-selector');

timezoneselector.addEventListener('click', function() {
  timezoneselector.classList.toggle('active');
});

const wcselector = document.getElementById('world-clock-selector');

wcselector.addEventListener('click', function() {
  wcselector.classList.toggle('active');
});

const wcselector2 = document.getElementById('world-clock-selector2');

wcselector2.addEventListener('click', function() {
  wcselector2.classList.toggle('active');
});

const wcselector3 = document.getElementById('world-clock-selector3');

wcselector3.addEventListener('click', function() {
  wcselector3.classList.toggle('active');
});



function updateWorldClock() {
  const now = new Date();

  const newYorkCity = document.getElementById('new-york-city').value;
  const newYorkTime = now.toLocaleString('en-GB', { timeZone: newYorkCity, hour: 'numeric', minute: 'numeric', second: 'numeric' });
  document.getElementById('new-york-time').textContent = newYorkTime;
  document.querySelector('#new-york-city > option:checked').parentNode.previousSibling = document.querySelector('#new-york-city > option:checked');

  const londonCity = document.getElementById('london-city').value;
  const londonTime = now.toLocaleString('en-GB', { timeZone: londonCity, hour: 'numeric', minute: 'numeric', second: 'numeric' });
  document.getElementById('london-time').textContent = londonTime;
  document.querySelector('#london-city > option:checked').parentNode.previousSibling = document.querySelector('#london-city > option:checked');

  const tokyoCity = document.getElementById('tokyo-city').value;
  const tokyoTime = now.toLocaleString('ja-JP', { timeZone: tokyoCity, hour: 'numeric', minute: 'numeric', second: 'numeric' });
  document.getElementById('tokyo-time').textContent = tokyoTime;
  document.querySelector('#tokyo-city > option:checked').parentNode.previousSibling = document.querySelector('#tokyo-city > option:checked');
}


setInterval(updateWorldClock, 1000);

document.getElementById('new-york-city').addEventListener('change', function() {
  updateWorldClock();
  wccontainer.querySelector('.world-clock-location').innerHTML = document.querySelector('#new-york-city > option:checked').textContent;
});
document.getElementById('london-city').addEventListener('change', function() {
  updateWorldClock();
  wccontainer.querySelectorAll('.world-clock-location')[1].innerHTML = document.querySelector('#london-city > option:checked').textContent;
});
document.getElementById('tokyo-city').addEventListener('change', function() {
  updateWorldClock();
  wccontainer.querySelectorAll('.world-clock-location')[2].innerHTML = document.querySelector('#tokyo-city > option:checked').textContent;
});

const wccontainer = document.getElementById('wccontainer');


wccontainer.addEventListener('click', function() {
  wccontainer.classList.toggle('active');
});