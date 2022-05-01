"use strict";
import languageChange from "./modules/language.js";
import burgerMenu from "./modules/burger.js";
import themeChange from "./modules/theme.js";
import pagination from "./modules/pagination.js";
import isWebp from "./modules/webp.js";

window.addEventListener("DOMContentLoaded", () => {
  isWebp();
  burgerMenu();
  themeChange();
  languageChange();
  pagination();
});
