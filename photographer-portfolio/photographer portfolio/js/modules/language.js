"use strict";
import i18Obj from "./translate";

function languageChange() {
  const rusLanguage = document.querySelector(".language__rus"),
    engLanguage = document.querySelector(".language__eng"),
    wordsTranslate = document.querySelectorAll("[data-i18]"),
    email = document.querySelector(".input__e-mail"),
    phone = document.querySelector(".input__phone"),
    textarea = document.querySelector(".input__textarea");

  rusLanguage.onclick = function () {
    email.placeholder = "Электронная почта";
    phone.placeholder = "Телефон";
    textarea.placeholder = "Сообщенние";
    wordsTranslate.forEach(function (item) {
      item.textContent = i18Obj.ru[item.dataset.i18];
    });
    rusLanguage.classList.toggle("language__active");
    engLanguage.classList.remove("language__active");
  };

  engLanguage.onclick = function () {
    email.placeholder = "E-mail";
    phone.placeholder = "Phone";
    textarea.placeholder = "Message";
    wordsTranslate.forEach(function (item, i, wordsTranslate) {
      item.textContent = i18Obj.en[item.dataset.i18];
    });
    rusLanguage.classList.remove("language__active");
    engLanguage.classList.toggle("language__active");
  };
}

export default languageChange;
