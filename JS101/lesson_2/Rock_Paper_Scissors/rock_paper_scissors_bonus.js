const { clear } = require('console');
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];

let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function calculateScore(userChoice, programChoice) {
  if (userChoice[0] === programChoice[0]) {
    return;
  } else if ((userChoice[0] === 'r' &&
  (programChoice[0] === 's' || programChoice[0] === 'l')) ||
  (userChoice[0] === 'p' &&
  (programChoice[0] === 'r' || programChoice[0] === 'l')) ||
  (userChoice[0] === 's' &&
  (programChoice[0] === 'p' || programChoice[0] === 'l' )) ||
  (userChoice[0] === 'l' &&
  (programChoice[0] === 'p' || programChoice[0] === 'S')) ||
  (userChoice[0] === 'S' &&
  (programChoice[0] === 's' || programChoice[0] === 'r'))) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
}


function displayScore() {
  prompt(`>> Your Score: ${playerScore}   Computer's Score: ${computerScore} <<\n`);
}


function displayRoundOutcome(userChoice, programChoice) {
  prompt(`You chose ${userChoice}, computer chose ${programChoice}`);

  if (userChoice[0] === programChoice[0]) {
    prompt("round is a tie");
  } else if ((userChoice[0] === 'r' &&
  (programChoice[0] === 's' || programChoice[0] === 'l')) ||
  (userChoice[0] === 'p' &&
  (programChoice[0] === 'r' || programChoice[0] === 'l')) ||
  (userChoice[0] === 's' &&
  (programChoice[0] === 'p' || programChoice[0] === 'l' )) ||
  (userChoice[0] === 'l' &&
  (programChoice[0] === 'p' || programChoice[0] === 'S')) ||
  (userChoice[0] === 'S' &&
  (programChoice[0] === 's' || programChoice[0] === 'r'))) {
    prompt('You win the round!');
  } else {
    prompt('computer wins the round!');
  }
}


function displayGrandWinner() {
  if (playerScore === 5) {
    prompt('^*^*CONGRATULATIONS - you are the Grand Winner!^*^*\n');
  } else if (computerScore === 5) {
    prompt('COMMISERATIONS - computer is the Grand Winner!\n');
  }
}

function resetScoreGrandWin() {
  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
  }
}


prompt('***Welcome to rock paper scissors lizard Spock!***\n');


//the below loop is the version from 4. of 'Things to consider' - my solution
//to remove the break statement was to set this loopVariable to a falsy value
let loopVariable = 'something';

while (loopVariable) {

  displayScore();

  prompt(`Choose one of the following - you may type just the first letter:\n${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();


  let letterChoices = [];

  for (let counter = 0; counter < VALID_CHOICES.length; counter++) {
    letterChoices.push(VALID_CHOICES[counter][0]);
  }


  while (!(VALID_CHOICES.includes(choice) || letterChoices.includes(choice))) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }


  if (choice.length === 1) {
    for (let counter2 = 0; counter2 < VALID_CHOICES.length; counter2++) {
      if (choice === VALID_CHOICES[counter2][0]) {
        choice = VALID_CHOICES[counter2];
        break;
      }
    }
  }


  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayRoundOutcome(choice, computerChoice);

  calculateScore(choice,computerChoice);

  displayScore();

  displayGrandWinner();

  resetScoreGrandWin();


  prompt('Do you want to play another round? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('please enter "yes" or "no".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') loopVariable = '';

  clear();

}
