function clock() {
  function getTime() {
    const date = new Date();
    return date;
  }

  function dateColon(date) {
    if (date < 10) {
      return `0${date}`;
    }
    return date;
  }

  setInterval(() => {
    const newTime = getTime();

    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const hourStep = document.querySelector('#hh');
    const minuteStep = document.querySelector('#mm');
    const secondStep = document.querySelector('#ss');

    const hourDot = document.querySelector('.hour_dot');
    const minDot = document.querySelector('.min_dot');
    const secDot = document.querySelector('.sec_dot');

    const h = dateColon(newTime.getHours());
    const m = dateColon(newTime.getMinutes());
    const s = dateColon(newTime.getSeconds());

    hours.innerHTML = `${h}<br><span>Часы</span>`;
    minutes.innerHTML = `${m}<br><span>Минуты</span>`;
    seconds.innerHTML = `${s}<br><span>Секунды</span>`;

    hourStep.style.strokeDashoffset = 585.2 - (585.2 * h) / 24;
    minuteStep.style.strokeDashoffset = 585.2 - (585.2 * m) / 60;
    secondStep.style.strokeDashoffset = 585.2 - (585.2 * s) / 60;

    hourDot.style.transform = `rotate(${h * 15}deg)`;
    minDot.style.transform = `rotate(${m * 6}deg)`;
    secDot.style.transform = `rotate(${s * 6}deg)`;
  }, 1000);
}

export default clock;
