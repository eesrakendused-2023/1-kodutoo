class Time {
  constructor() {
    this.nightMode = false;
    this.format12 = true;
    this.size = 1;
    this.date = new Date();
  }

  toggleNightMode() {
    this.nightMode = !this.nightMode;
  }

  toggleFormat12() {
    this.format12 = !this.format12;
  }

  increaseSize() {
    this.size += 0.25;
  }

  decreaseSize() {
    if (this.size > 0.25) {
      this.size -= 0.25;
    }
  }

  getTime() {
    let hours = this.date.getHours();
    let minutes = this.date.getMinutes();
    let seconds = this.date.getSeconds();
    let ampm = '';

    if (this.format12) {
      ampm = (hours >= 12) ? 'PM' : 'AM';
      hours = (hours % 12) || 12;
    }

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  }

  getDate() {
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = this.date.getDate();
    const month = monthName[this.date.getMonth()];
    const year = this.date.getFullYear();
    const dayOfWeek = dayName[this.date.getDay()];

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  }
}
