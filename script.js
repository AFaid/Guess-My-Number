'use strict';

let score = 10;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 100) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess === secretNumber) correctGuess();
  else if (guess !== 0 && score > 1) wrongGuess(guess);
  else gameLost();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});

function correctGuess() {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }

  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  displayMessage('🎉 Correct Number!');
}

function wrongGuess(guess) {
  score -= 1;
  document.querySelector('.score').textContent = score;

  guess > secretNumber
    ? displayMessage('📈 Too high!')
    : displayMessage('📉 Too low!');
}

function gameLost() {
  document.querySelector('body').style.backgroundColor = '#ff5050';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = '0';
  displayMessage('💥 You lost the game!');
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
