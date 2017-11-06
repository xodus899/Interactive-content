'use strict';

let playerOne = document.querySelector("#player-one");
let playerTwo = document.querySelector("#player-two");
let resetScore = document.querySelector("#reset-score");
let playerOneDisplay = document.querySelector("#player-one-score");
let playerTwoDisplay = document.querySelector("#player-two-score");
let scoreInput = document.querySelector("#score");
let playingScore = document.querySelector("#playing-score");

let playerOneScore = 0;
let playerTwoScore = 0;
let gameOver = false;
let winningScore = 5;


playerOne.addEventListener("click", () => {
  if(!gameOver) {
    playerOneScore++;
    if (playerOneScore === winningScore) {
      playerOneDisplay.classList.add("winner");
      gameOver = true;
    }
    playerOneDisplay.textContent = playerOneScore;
  }

});

playerTwo.addEventListener("click", () => {
  if(!gameOver){
    playerTwoScore++;
    if (playerTwoScore === winningScore) {
      playerTwoDisplay.classList.add("winner");
      gameOver = true;
    }
  playerTwoDisplay.textContent = playerTwoScore;
  }
});

resetScore.addEventListener("click", () => {
  reset();
});

scoreInput.addEventListener("change", () => {
  playingScore.textContent = scoreInput.value;
  winningScore = Number(scoreInput.value);
  reset();
})


function reset() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneDisplay.textContent = 0;
  playerTwoDisplay.textContent = 0;
  playerOneDisplay.classList.remove("winner");
  playerTwoDisplay.classList.remove("winner");
  gameOver = false;
}
