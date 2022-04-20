"use strict";
import clock from "./modules/clock";

window.addEventListener("DOMContentLoaded", () => {

  clock();
  const quoteStatement = document.querySelector(".quote__statement");
  const quoteAuthor = document.querySelector(".quote__author");
  const quoteButton = document.querySelector(".quote__button");

  async function getData() {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();

    showData(data);
    quoteButton.addEventListener("click", () => {
      showData(data);
    });
  }

  const showData = function (data) {
    const num = Math.floor(Math.random() * data.length);
    quoteStatement.textContent = data[num].text;
    quoteAuthor.textContent = data[num].author;
  };

  getData();
});
