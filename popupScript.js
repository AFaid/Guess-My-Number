'use strict';

const popupBtns = document.querySelectorAll('.popup-btn');
const popup = document.querySelector('.popup');
const blur = document.querySelector('.overlay');
const closePopupBtn = document.querySelector('.close-popup');

for (const btn of popupBtns) btn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);

function openPopup(e) {
  popup.classList.remove('hidden');
  blur.classList.remove('hidden');

  let message, header;
  if (e.srcElement.classList.contains('hint')) {
    header = 'Hint';
    message =
      'The game tells you if your guess is higher or lower than the secret number. Try a guess which eliminates as many numbers as possible each turn. (Divide by 2).';
  } else if (e.srcElement.classList.contains('help')) {
    header = 'Help';
    message =
      '1.You get a total of 10 tries to guess the secret number. 2.After each try you are told whether the secret number is greater than or less than the guess entered. 3.Your score is calculated using the formula (score = total number of tries - number of tries used)';
  }

  popup.querySelector('.popup-text').textContent = message;
  popup.querySelector('.popup-header').textContent = header;
}

function closePopup() {
  popup.classList.add('hidden');
  blur.classList.add('hidden');
}
