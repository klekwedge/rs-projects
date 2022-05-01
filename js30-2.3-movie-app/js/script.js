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
  showData(data);
}

/*-------------------------------------------------------------*/
/*-----Functions-----------------------------------------------*/
/*-------------------------------------------------------------*/

const showData = function (data) {
  for (let i = 0; i < data.results.length; i++) {
    createMovieCard(data.results[i]);
  }
};

const templateMovie = document.querySelector("#card__movie").content;

const createMovieCard = function (newMovie) {
  const tempInstance = templateMovie.cloneNode(true);
  const movieItem = tempInstance.querySelector(".movie");

  const imageMovie = tempInstance.querySelector(".movie .movie__image");

  if (newMovie.poster_path !== null) {
    imageMovie.src = "https://image.tmdb.org/t/p/w1280" + newMovie.poster_path;
    imageMovie.alt = `${newMovie.original_title} image`;
  } else {
    imageMovie.src = "assets/img/Noimage.svg.png";
  }

  const titleMovie = tempInstance.querySelector(".movie__title");
  titleMovie.textContent = newMovie.title;

  const ratingMovie = tempInstance.querySelector(".movie__rating");

  ratingMovie.textContent = newMovie.vote_average;

  if (newMovie.vote_average >= 7) {
    ratingMovie.style.color = "#3BB33B";
  } else if (newMovie.vote_average >= 5) {
    ratingMovie.style.color = "#AAAAAA";
  } else {
    ratingMovie.style.color = "#FB0007";
  }

  movieItem.addEventListener("click", () => {
    document.body.classList.add("_lock");
    createMovieModal(newMovie);
  });

  movieList.appendChild(movieItem);
};

function createMovieModal(newMovie) {
  const templateModalMovie = document.querySelector("#modal__movie").content;
  const movieModalTemplate = templateModalMovie.cloneNode(true);

  const movieModalWrapper = movieModalTemplate.querySelector(".movie__overlay");
  movieModalWrapper.classList.add("movie__overlay");

  const movieModal = movieModalTemplate.querySelector(".movie__modal");
  movieModal.classList.add("movie__modal");

  const imageMovie = movieModalTemplate.querySelector(".movie__image");

  if (newMovie.poster_path !== null) {
    imageMovie.src = "https://image.tmdb.org/t/p/w1280" + newMovie.poster_path;
    imageMovie.alt = `${newMovie.original_title} image`;
  } else {
    imageMovie.src = "assets/img/Noimage.svg.png";
  }

  const titleMovie = movieModalTemplate.querySelector(".info__title");
  titleMovie.textContent = newMovie.title;

  const ratingMovie = movieModalTemplate.querySelector(".info__rating");

  ratingMovie.textContent = `Rating: ${newMovie.vote_average}`;

  if (newMovie.vote_average >= 7) {
    ratingMovie.style.color = "#3BB33B";
  } else if (newMovie.vote_average >= 5) {
    ratingMovie.style.color = "#AAAAAA";
  } else {
    ratingMovie.style.color = "#FB0007";
  }

  const ratingCountMovie = movieModalTemplate.querySelector(
    ".info__rating-count"
  );
  ratingCountMovie.textContent = "Rating count: " + newMovie.vote_count;

  const popularityMovie = movieModalTemplate.querySelector(".info__popularity");
  popularityMovie.textContent = "Popularity: " + newMovie.popularity;

  const releaseMovie = movieModalTemplate.querySelector(".info__release");
  releaseMovie.textContent = "Release: " + newMovie.release_date;

  const languageMovie = movieModalTemplate.querySelector(".info__language");
  languageMovie.textContent =
    "Original language: " + newMovie.original_language;

  const overviewMovie = movieModalTemplate.querySelector(".info__overview");
  overviewMovie.textContent = newMovie.overview;


  movieModalWrapper.style.display = "block";
  movieModalWrapper.addEventListener("click", () => {
    // movieModalWrapper.style.display = "none";
    movieList.removeChild(movieModalWrapper);
    document.body.classList.remove("_lock");
  });

  movieList.appendChild(movieModalWrapper);
}
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
