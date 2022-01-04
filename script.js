'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const highscoreDisplay = document.querySelector('.highscore');
const scoreDisplay = document.querySelector('.score');
const messageDisplay = document.querySelector('.message');

let currentScore = 10;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 100) + 1;

checkBtn.addEventListener('click', checkGuess);
againBtn.addEventListener('click', restartGame);

function checkGuess() {
  if (Number(guess.value) === secretNumber) correctGuess();
  else if (Number(guess.value) !== 0 && currentScore > 1) wrongGuess();
  else gameLost();
}

function correctGuess() {
  if (currentScore > highscore) {
    highscore = currentScore;
    highscoreDisplay.textContent = currentScore;
  }

  number.textContent = secretNumber;
  body.style.backgroundColor = '#60b347';
  displayMessage('🎉 Correct Number!');
}

function wrongGuess() {
  currentScore -= 1;
  scoreDisplay.textContent = currentScore;

  Number(guess.value) > secretNumber
    ? displayMessage('📈 Too high!')
    : displayMessage('📉 Too low!');
}

function restartGame() {
  currentScore = 10;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  number.textContent = '?';
  scoreDisplay.textContent = currentScore;
  body.style.backgroundColor = '#222';
  guess.value = '';
  displayMessage('Start guessing...');
}

function gameLost() {
  body.style.backgroundColor = '#ff5050';
  number.textContent = secretNumber;
  scoreDisplay.textContent = '0';
  displayMessage('💥 You lost the game!');
}

function displayMessage(message) {
  messageDisplay.textContent = message;
}
