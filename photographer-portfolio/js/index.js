"use strict";
import languageChange from "./modules/language";
import burgerMenu from "./modules/burger";
import themeChange from "./modules/theme";
import pagination from "./modules/pagination";

window.addEventListener("DOMContentLoaded", () => {
  burgerMenu();
  themeChange();
  languageChange();
  pagination();
});
