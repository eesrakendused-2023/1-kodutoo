let fontSize = 3;
//Update clock every second
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = timeString;

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const month = now.toLocaleString('default', { month: 'long' });
  const dayOfMonth = now.getDate().toString().padStart(2, '0');
  const year = now.getFullYear();
  const dateString = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  document.getElementById('date').textContent = dateString;

  document.getElementById('time').style.fontSize = `${fontSize}rem`;
  document.getElementById('date').style.fontSize = `${fontSize}rem`;
}
updateTime();
setInterval(updateTime, 1000);

//Text random color
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//Background random color
function changeBackgroundColor() {
  let color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
  document.body.style.backgroundColor = color;
}

//Toggle buttons
function toggleButtons() {
  const buttonContainer = document.querySelector('.button-container');
  console.log("siiin")
  if (buttonContainer.style.display === 'none') {
    buttonContainer.style.display = 'flex';
  } else {
    buttonContainer.style.display = 'none';
  }
}


//Increase text size
document.getElementById('increase-btn').addEventListener('click', () => {
  fontSize += 0.5;
  updateTime();
});
//Decrease text size
document.getElementById('decrease-btn').addEventListener('click', () => {
  fontSize -= 0.5;
  updateTime();
});

//Callout random color
document.getElementById('color-btn').addEventListener('click', () => {
  document.getElementById('time').style.color = randomColor();
  document.getElementById('date').style.color = randomColor();
});

//Callout random background color
document.getElementById('bg-color').addEventListener('click', () => {
  changeBackgroundColor();
});

//Callout toggle button 
document.getElementById('myCheck').addEventListener('click', () => {
  toggleButtons();
});

//Move around with arrow keys
const timeElement = document.getElementById('container');
let x = 0;
let y = 0;

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (key === 'arrowup') {
    y -= 5;
  } else if (key === 'arrowdown') {
    y += 5;
  } else if (key === 'arrowleft') {
    x -= 5;
  } else if (key === 'arrowright') {
    x += 5;
  }
  timeElement.style.transform = `translate(${x}px, ${y}px)`;
});