'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When guess is true
  } else if (guess === secretNumber) {
    displayMessage('👌 Correct Number!');
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.guess').style.display = 'none';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.transition = 'all 1.5s ease';
    document.querySelector('body').style.background =
      'linear-gradient(to right, #56ab2f, #a8e063)';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.check').style.display = 'block';
  document.querySelector('.guess').style.display = 'block';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.transition = 'all 1.5s ease';
  document.querySelector('body').style.background =
    'linear-gradient(to right, #141e30, #243b55)';
  document.querySelector('.number').style.width = '15rem';
});
