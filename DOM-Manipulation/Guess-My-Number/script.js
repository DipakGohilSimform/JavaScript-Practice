"use strict";
const msg = document.querySelector(".message");
const check = document.querySelector(".check");
const number = document.querySelector(".number");
const secretNumber = Math.floor(Math.random() * 20) + 1;
const score = document.querySelector(".score");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const body = document.querySelector("body");
let totalScore = 20;
let highScore = 0;

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    msg.textContent = "🚫 No Number";
  } else if (totalScore <= 1) {
    msg.textContent = "💀 You lost the game!";
    score.textContent = 0;
  } else if (guess === secretNumber) {
    msg.textContent = "🎉 Correct Answer";
    number.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    if (totalScore > highScore) {
      highScore = totalScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    msg.textContent = "📈 Too High";
    totalScore--;
    score.textContent = totalScore;
  } else if (guess < secretNumber) {
    msg.textContent = "📉 Too Low";
    totalScore--;
    score.textContent = totalScore;
  }
});

again.addEventListener("click", () => {
  number.textContent = "?";
  msg.textContent = "Start guessing...";
  score.textContent = 20;
  totalScore = 20;
  guess.value = "";
  body.style.backgroundColor = "#222";
});
