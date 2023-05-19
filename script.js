'use strict';

let createSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = createSecretNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess > 0 && guess < 21) {
    //When there is no input
    if (!guess) {
      displayMessage('! No Number :(');
      //document.querySelector('.message').textContent = '! No Number :(';
      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('Number Matched :)');
      //document.querySelector('.message').textContent = 'Number Matched :)';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '! Too High' : '! Too Low');
        //document.querySelector('.message').textContent =
        //guess > secretNumber ? '! Too High' : '! Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game');
        //document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }
  } else {
    displayMessage('Choose between 1 to 20 ');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
