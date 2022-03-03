'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Helyes szám!';
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 10;
document.querySelector('.highscore').textContent = 10;
document.querySelector('.guess').value = 11;
console.log(document.querySelector('.guess').value);
*/

// ------------------------------
// PROJECT CODE START
// ------------------------------

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

// *20 = a random number from 0 to 19 this is why we need the +1
let number = Math.trunc(Math.random() * 20) + 1;
let points = 10;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // all retrived data from inputs come as strings
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  //When no input
  if (!guess) {
    displayMessage('⛔️ Helytelen szám vagy nincs szám!');
  }

  //When the input is ouside of scope
  if (!guess || guess > 20 || guess < 0) {
    displayMessage('⛔️ Helytelen szám vagy nincs szám!');

    //When player wins
  } else if (number === guess) {
    displayMessage('Helyes szám. 🎉 ✅ NYERTÉL! 🐿 🌰');
    displayNumber(number);
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Highscore
    if (points > highscore) {
      highscore = points;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess != number) {
    if (points > 1) {
      displayMessage(
        guess > number ? 'Kevesebb mogyorom van ⬇' : 'Több mogyorom van ⬆'
      );
      points--;
      document.querySelector('.score').textContent = points;
    } else {
      displayMessage('❌ Nem találtad ki!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#d53939';
      displayNumber(number);
    }
  }

  // When guess is to low
  //   else if (number > guess) {
  //     if (points > 1) {
  //       document.querySelector('.message').textContent = 'Több mogyorom van ⬆';
  //       points--;
  //       document.querySelector('.score').textContent = points;
  //     } else {
  //       document.querySelector('.message').textContent = '❌ Nem találtad ki!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#d53939';
  //       document.querySelector('.number').textContent = number;
  //     }

  //When guess is to high
  //   } else if (number < guess) {
  //     if (points > 1) {
  //       document.querySelector('.message').textContent =
  //         'Kevesebb mogyorom van ⬇';
  //       points--;
  //       document.querySelector('.score').textContent = points;
  //     } else {
  //       document.querySelector('.message').textContent = '❌ Nem találtad ki!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#d53939';
  //       document.querySelector('.number').textContent = number;
  //     }
  //   }
});

//play again (reset) button on click listener
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  points = 10;
  //   console.log(number, points);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = points;
  document.querySelector('.guess').value = '';
  displayNumber('🥜');
  displayMessage('Indulhat a találás ...');
});

//empty the input field when click inside
document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});
