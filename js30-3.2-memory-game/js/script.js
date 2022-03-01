const cards = document.querySelectorAll(".memory-card");
const score = document.querySelectorAll(".endgame__score");
const moves = document.querySelector(".moves");
const endGame = document.querySelector(".endgame");
const resetGame = document.querySelector(".endgame__reset");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moveCounter = 0;
let progressCounter = 0;

let arrBuff = Array(9);
localStorage.setItem("array", JSON.stringify(arrBuff));

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 20);
    card.style.order = randomPos;
  });
})();

function flipCard() {
  if (lockBoard) {
    return;
  }

  if (this === firstCard) {
    return;
  }

  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkForMatch();
  }
}

function checkForMatch() {
  moveCounter++;
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  firstCard.style.background = "#86eb9e";
  secondCard.style.background = "#86eb9e";

  resetBoard();
  progressCounter++;
  if (progressCounter === 10) {
    endGame.style.display = "block";
    cards.forEach((card) => {
      card.classList.remove("flip");
    });

    arrBuff.pop;
    arrBuff.unshift(moveCounter);
    localStorage.setItem("array", JSON.stringify(arrBuff));

    let arrScore = localStorage.getItem("array");
    arrScore = JSON.parse(arrScore);
    for(let i = 0; i < arrScore.length; i++){
      score[i].textContent = arrScore[i];
    }
  }
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
  moves.textContent = `Your moves: ${moveCounter}`;
}

resetGame.addEventListener("click", function () {
  endGame.style.display = "none";

  moveCounter = 0;
  moves.textContent = `Your moves: ${moveCounter}`;
  progressCounter = 0;

  cards.forEach((card) => {
    card.style.background = "linear-gradient(45deg, #fff1eb, #ace0f9)";
    card.addEventListener("click", flipCard);
    let randomPos = Math.floor(Math.random() * 20);
    card.style.order = randomPos;
  });
});

cards.forEach((card) => card.addEventListener("click", flipCard));
