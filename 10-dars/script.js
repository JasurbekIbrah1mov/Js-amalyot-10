//btns
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnhold = document.querySelector(".btn--hold");

//dice img
const diceImg = document.querySelector(".dice");
diceImg.style.display = "none";

//variables
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

let playGame = true;
btnRoll.addEventListener("click", () => {
  if (playGame) {
    diceImg.style.display = "block";

    const randam = Math.floor(Math.random() * 6 + 1);
    diceImg.src = `dice-${randam}.png`;

    if (randam !== 1) {
      currentScore += randam;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //swich the player
      switchPlayer();
    }
  }
});

btnhold.addEventListener("click", () => {
  if (playGame) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playGame = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      diceImg.style.display = "none";
    } else {
      //swich the player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playGame = true;
  document.getElementById(`current--0`).textContent = currentScore;
  document.getElementById(`current--1`).textContent = currentScore;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--active");
  document.querySelector(`.player--0`).classList.remove("player--active");
});
