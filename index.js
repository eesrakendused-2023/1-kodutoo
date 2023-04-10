class HomeClock {
    constructor() {
      this.use12HourFormat = false;
      this.nightMode = false;
      this.size = 1;
    }
  
    set12HourFormat() {
      this.use12HourFormat = !this.use12HourFormat;
    }
  
    toggleNightMode() {
      this.nightMode = !this.nightMode;
    }
  
    increaseSize() {
      if (this.size < 5) {
        this.size += 0.25;
      }
    }
  
    decreaseSize() {
      if (this.size > 0.25) {
        this.size -= 0.25;
      }
    }
  
    getCurrentTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      let amOrPm = "";
      if (this.use12HourFormat) {
        amOrPm = hours >= 12 ? "pm" : "am";
        hours %= 12;
        hours = hours || 12;
      }
  
      hours = hours < 10 ? "0" + hours : hours;
      const minutesStr = minutes < 10 ? "0" + minutes : minutes;
      const secondsStr = seconds < 10 ? "0" + seconds : seconds;
  
      const timeString = `${hours}:${minutesStr}:${secondsStr} ${amOrPm}`;
  
      return timeString;
    }
  
    getCurrentDate() {
      const now = new Date();
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const dayName = days[now.getDay()];
      const dateNumber = now.getDate();
      const monthName = months[now.getMonth()];
      const year = now.getFullYear();
  
      const dateString = `${dayName}, ${dateNumber} ${monthName} ${year}`;
  
      return dateString;
    }
  }
  
  const homeClock = new HomeClock();
  
  function updateTime() {
    const timeContainer = document.getElementById("timeContainer");
    const currentTime = homeClock.getCurrentTime();
    timeContainer.textContent = currentTime;
  }
  
  function updateDate() {
    const dateContainer = document.getElementById("dateContainer");
    const currentDate = homeClock.getCurrentDate();
    dateContainer.textContent = currentDate;
  }
  
  function toggleNightMode() {
    homeClock.toggleNightMode();
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("nightMode");
  }
  
  function toggleFormat() {
    homeClock.set12HourFormat();
    updateTime();
  }
  
  function increaseSize() {
    homeClock.increaseSize();
    const clockContainer = document.getElementById("clockContainer");
    clockContainer.style.fontSize = `${homeClock.size}rem`;
  }
  
  function decreaseSize() {
    homeClock.decreaseSize();
    const clockContainer = document.getElementById("clockContainer");
    clockContainer.style.fontSize = `${homeClock.size}rem`;
  }
  
  window.onload = function () {
    const timeContainer = document.createElement("div");
    timeContainer.id = "timeContainer";
    document.getElementById("clockContainer").appendChild(timeContainer);
  
    const dateContainer = document.createElement("div");
    dateContainer.id = "dateContainer";
    document.getElementById("dateContainer").appendChild(dateContainer);
  
    const formatButton = document.createElement("button");
    formatButton.textContent = "Format";
    formatButton.onclick = toggleFormat;
    document.getElementById("buttonContainer").appendChild(formatButton);
  
    const nightModeButton = document.createElement("button");
    nightModeButton.textContent = "Night Mode"
    nightModeButton.onclick = toggleNightMode;
    document.getElementById("buttonContainer").appendChild(nightModeButton);
  }