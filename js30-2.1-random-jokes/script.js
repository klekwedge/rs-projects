"use strict";

const quoteStatement = document.querySelector(".quote__statement");
const quoteAuthor = document.querySelector(".quote__author");

getQuoteDay();
async function getQuoteDay() {
  const res = await fetch("https://favqs.com/api/qotd");
  const data = await res.json();
  showQuoteDay(data);
}

const showQuoteDay = function (data) {
  console.log(data.quote);
  quoteStatement.textContent = data.quote.body;
  quoteAuthor.textContent = data.quote.author;
};

// async function getData() {
//   const res = await fetch("https://type.fit/api/quotes");
//   const data = await res.json();
//   console.log(data);
//   showData(data);
// }

// getData();

// const showData = function (data) {
//   const num = Math.floor(Math.random() * data.length);
//   createQuote(data.num);
// };

// const createQuote = function (newQote) {};
