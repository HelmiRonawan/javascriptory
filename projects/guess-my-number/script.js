'use strict';
// initial state
let secretNumber = randomNum(20);
let score = 20;
let highScore = 0;

// function display and change to avoid DRY code
function randomNum(num){
    return Math.trunc(Math.random() * num) + 1;
}
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
}
const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}
const changeBgColor = function(color){
    document.querySelector('body').style.backgroundColor = color;
}
const changeNumWidth = function(width){
    document.querySelector('.number').style.width = width;
}

// the game logic
// event button 'check' clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  
  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Corect Number!');
    displayNumber(secretNumber);

    changeBgColor('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if(guess !== secretNumber){
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!': '📉Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
      document.querySelector('.check').disabled = true
    }
  }
    
});

// event button 'again' clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNum(20);

  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
  changeBgColor('#222');
  changeNumWidth('15rem');
});
