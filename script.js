let fontSize = 3;

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
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeBackgroundColor() {
  let color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
  document.body.style.backgroundColor = color;
}
function toggleButtons() {
  const buttonContainer = document.querySelector('.button-container');
  console.log("siiin")
  if (buttonContainer.style.display === 'none') {
    buttonContainer.style.display = 'flex';
  } else {
    buttonContainer.style.display = 'none';
  }
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById('increase-btn').addEventListener('click', () => {
  fontSize += 0.5;
  updateTime();
});

document.getElementById('decrease-btn').addEventListener('click', () => {
  fontSize -= 0.5;
  updateTime();
});
document.getElementById('color-btn').addEventListener('click', () => {
  document.getElementById('time').style.color = randomColor();
  document.getElementById('date').style.color = randomColor();
});
document.getElementById('bg-color').addEventListener('click', () => {
  changeBackgroundColor();
});
document.getElementById('myCheck').addEventListener('click', () => {
  toggleButtons();
});