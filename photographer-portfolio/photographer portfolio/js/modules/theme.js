"use strict";

function themeChange() {
  const sheet = document.querySelector(".sheet");
  const themeButton = document.querySelector(".menu__theme-button");
  const body = document.querySelector("body");
  const themeImage = document.querySelector(".theme-button-image");

  themeButton.onclick = function () {
    sheet.classList.toggle("light-theme");
    sheet.classList.toggle("dark-theme");
    if (body.classList.contains("light-theme")) {
      themeImage.src = "assets/svg/carbon_sun.svg";
    } else {
      themeImage.src = "assets/svg/carbon_moon.svg";
    }
  };


}

export default themeChange;