"use strict";

/*-------------------------------------------------------------*/
/*-----Variable declaration------------------------------------*/
/*-------------------------------------------------------------*/

const movieList = document.querySelector(".page__list");
const inputNameMovie = document.querySelector(".header__input");

const resetButton = document.querySelector(".header__reset");
const searchButton = document.querySelector(".header__search");
const homepageButton = document.querySelector(".header__image");




let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;
getData();
/*-------------------------------------------------------------*/
/*-----Async Function------------------------------------------*/
/*-------------------------------------------------------------*/

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);
}

/*-------------------------------------------------------------*/
/*-----Functions-----------------------------------------------*/
/*-------------------------------------------------------------*/

const showData = function (data) {
  for (let i = 0; i < data.results.length; i++) {
    newElement(data.results[i]);
  }
};

const templateMovie = document.querySelector("#card__movie").content;

const newElement = function (newMovie) {
  const tempInstance = templateMovie.cloneNode(true);
  const movieItem = tempInstance.querySelector(".movie");

  const imageMovie = tempInstance.querySelector(".movie .movie__image");
  const imageInfoMovie = tempInstance.querySelector(
    ".movie__detail .movie__image"
  );
  if (newMovie.poster_path !== null) {
    imageMovie.src = "https://image.tmdb.org/t/p/w1280" + newMovie.poster_path;
    imageMovie.alt = `${newMovie.original_title} image`;

    imageInfoMovie.src = imageMovie.src;
    imageInfoMovie.alt = imageMovie.alt;
  } else {
    imageMovie.src = "assets/photo/Noimage.svg.png";
    imageInfoMovie.src = imageMovie.src;
  }

  const titleMovie = tempInstance.querySelector(
    ".movie__content .movie__title"
  );
  titleMovie.textContent = newMovie.title;

  const titleInfoMovie = tempInstance.querySelector(
    ".movie__info .info__title"
  );
  titleInfoMovie.textContent = newMovie.title;

  const ratingMovie = tempInstance.querySelector(
    ".movie__content  .movie__rating"
  );
  const ratingInfoMovie = tempInstance.querySelector(
    ".movie__info  .info__rating"
  );

  ratingMovie.textContent = newMovie.vote_average;
  ratingInfoMovie.textContent = "Vote average: " + ratingMovie.textContent;

  if (newMovie.vote_average >= 7) {
    ratingMovie.style.color = "#3BB33B";
  } else if (newMovie.vote_average >= 5) {
    ratingMovie.style.color = "#AAAAAA";
  } else {
    ratingMovie.style.color = "#FB0007";
  }

  const ratingCountMovie = tempInstance.querySelector(".info__rating-count");
  ratingCountMovie.textContent = "Rating count: " + newMovie.vote_count;

  const popularityMovie = tempInstance.querySelector(".info__popularity");
  popularityMovie.textContent = "Popularity: " + newMovie.popularity;

  const releaseMovie = tempInstance.querySelector(".info__release");
  releaseMovie.textContent = "Release: " + newMovie.release_date;

  const languageMovie = tempInstance.querySelector(".info__language");
  languageMovie.textContent =
    "Original language: " + newMovie.original_language;

  const overviewMovie = tempInstance.querySelector(".info__overview");
  overviewMovie.textContent = newMovie.overview;

  const infoMovie = tempInstance.querySelector(".movie__detail");
  const mainmovie = tempInstance.querySelector(".movie__main");
  //const substrateStructure= tempInstance.querySelector(".movie__substrate");
  
  movieList.appendChild(movieItem);

  mainmovie.addEventListener("click", function () {
    infoMovie.style.top = `${movieItem.offsetTop}px`;
    infoMovie.style.display = "flex";
  });

  infoMovie.addEventListener("click", function () {
    infoMovie.style.display = "none";
  });

};

/*-------------------------------------------------------------*/
/*-----Event listeners-----------------------------------------*/
/*-------------------------------------------------------------*/

homepageButton.addEventListener("click", function () {
  inputNameMovie.value = "";
  url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;

  while (movieList.firstChild) {
    movieList.removeChild(movieList.lastChild);
  }

  getData();
});

resetButton.addEventListener("click", function () {
  inputNameMovie.value = "";
  url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;

  while (movieList.firstChild) {
    movieList.removeChild(movieList.lastChild);
  }

  getData();
});

inputNameMovie.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && inputNameMovie.value !== "") {
    url = `https://api.themoviedb.org/3/search/movie?query=${inputNameMovie.value}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;

    while (movieList.firstChild) {
      movieList.removeChild(movieList.lastChild);
    }
    getData();
  }
});

searchButton.addEventListener("click", function () {
  url = `https://api.themoviedb.org/3/search/movie?query=${inputNameMovie.value}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
  while (movieList.firstChild) {
    movieList.removeChild(movieList.lastChild);
  }

  if (inputNameMovie.value === "") {
    url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;
  }
  getData();
});

searchButton.addEventListener("click", function () {
  url = `https://api.themoviedb.org/3/search/movie?query=${inputNameMovie.value}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;
  while (movieList.firstChild) {
    movieList.removeChild(movieList.lastChild);
  }

  if (inputNameMovie.value === "") {
    url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;
  }
  getData();
});
