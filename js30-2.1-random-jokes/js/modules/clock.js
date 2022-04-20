'use strict';

function clock() {
  const timeHours = document.querySelector(".date__hours div");
  const timeMinutes = document.querySelector(".date__minutes div");
  const timeSeconds = document.querySelector(".date__seconds div ");

  function getTime() {
    const date = new Date();
    return date;
  }

  function dateColon(date) {
    if(date < 10){
      return `0${date}`;
    }
    return date;
  }

  setInterval(() => {
    const newTime = getTime();
    timeHours.textContent = dateColon(newTime.getHours());
    timeMinutes.textContent = dateColon(newTime.getMinutes());
    timeSeconds.textContent = dateColon(newTime.getSeconds());
  
  }, 1000);
}

export default clock;
