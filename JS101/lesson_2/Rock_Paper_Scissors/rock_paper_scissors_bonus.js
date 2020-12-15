const { clear } = require('console');

const readline = require('readline-sync');

const WINNING_SCORE = 5;

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'Spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['Spock', 'paper'],
  Spock: ['rock', 'scissors']
};

let letterChoices = [];

for (let counter = 0; counter < VALID_CHOICES.length; counter++) {
  letterChoices.push(VALID_CHOICES[counter][0].toLowerCase()
  + VALID_CHOICES[counter][1].toLowerCase());
}


let playerScore = 0;
let computerScore = 0;


function prompt(message) {
  console.log(`=> ${message}`);
}

function programSelection() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return  VALID_CHOICES[randomIndex];
}

function playerWins(userChoice, programChoice) {
  return WINNING_COMBOS[userChoice].includes(programChoice);
}

function sameChoice(userChoice, programChoice) {
  return userChoice === programChoice;
}


function calculateScore(userChoice, programChoice) {
  if (sameChoice(userChoice, programChoice)) return;

  if (playerWins(userChoice, programChoice)) {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
}


function displayRoundOutcome(userChoice, programChoice) {
  prompt(`You chose ${userChoice}, computer chose ${programChoice}`);

  if (sameChoice(userChoice, programChoice)) {
    prompt("round is a tie");
  } else if (playerWins(userChoice, programChoice)) {
    prompt('You win the round!');
  } else {
    prompt('computer wins the round!');
  }
}

function displayScore() {
  prompt(`>> Your Score: ${playerScore}   Computer's Score: ${computerScore} <<\n`);
}


function displayGrandWinner() {
  if (playerScore === WINNING_SCORE) {
    prompt('^*^*CONGRATULATIONS - you are the Grand Winner!^*^*\n');
  } else if (computerScore === WINNING_SCORE) {
    prompt('COMMISERATIONS - computer is the Grand Winner :-(\n');
  }
}


function resetScoreGrandWin() {
  if (playerScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    playerScore = 0;
    computerScore = 0;
  }
}


prompt('***Welcome to rock paper scissors lizard Spock!***\n              > First player to 5 wins <\n');


//the below loop is the version from 4. of 'Things to consider' - my solution
//to remove the break statement was to set this loopVariable to a falsy value
let playGame = 'something';

while (playGame) {

  displayScore();

  prompt(`Choose one of the following - you may type just the first two letters:\n${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();


  while (!(VALID_CHOICES.includes(choice) || letterChoices.includes(choice))) {
    prompt("That's not a valid choice");
    choice = readline.question().toLowerCase();
  }


  if (choice.length === 2) {
    for (let counter2 = 0; counter2 < VALID_CHOICES.length; counter2++) {
      if (choice === VALID_CHOICES[counter2][0].toLowerCase()
        + VALID_CHOICES[counter2][1].toLowerCase()) {
        choice = VALID_CHOICES[counter2];
        break;
      }
    }
  }


  let computerChoice = programSelection();

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

  if (answer[0] !== 'y') playGame = '';

  clear();

}