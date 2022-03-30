"use strict";

const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};
console.log("Смена изображений в секции portfolio +25");
console.log("Перевод страницы на два языка +25");
console.log("Переключение светлой и тёмной темы +25");
console.log("Итого: 75");

function preloadImages(season) {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${season}/${i}.jpg`;
  }
}
preloadImages("winter");
preloadImages("spring");
preloadImages("summer");
preloadImages("autumn");


// Theme change
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

const rusLanguage = document.querySelector(".language__rus"),
  engLanguage = document.querySelector(".language__eng"),
  wordsTranslate = document.querySelectorAll("[data-i18]"),
  email = document.querySelector(".input__e-mail"),
  phone = document.querySelector(".input__phone"),
  textarea = document.querySelector(".input__textarea");


// Language change
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


// Burger menu
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const linksMenu = document.querySelectorAll(".menu__link");
for (let linkMenu of linksMenu) {
  linkMenu.onclick = function () {
    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    }
  };
}

// Portfolio section
const portfolioButtons = document.querySelectorAll(".portfolio__button");
const portfolioImage = document.querySelectorAll(".portfolio__item");

for (let portfolioButton of portfolioButtons) {
  portfolioButton.onclick = function () {
    const portfolioImageActive = document.querySelector(
      ".portfolio__button-active"
    );
    portfolioImageActive.classList.remove("portfolio__button-active");
    portfolioButton.classList.add("portfolio__button-active");

    for (let i = 1, j = 0; i <= 6, j < 6; i++, j++) {
      portfolioImage[
        j
      ].src = `assets/img/${portfolioButton.dataset.season}/${i}.jpg`;
    }
  };
}
