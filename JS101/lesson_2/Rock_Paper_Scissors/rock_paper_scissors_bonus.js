const { clear } = require('console');
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


function prompt(message) {
  console.log(`=> ${message}`);
}

function displayOutcome(userChoice, programChoice) {
  prompt(`You chose ${userChoice}, computer chose ${programChoice}`);

  if (userChoice === programChoice) {
    prompt("it's a tie!");
  } else if ((userChoice === 'rock' &&
  (programChoice === 'scissors' || programChoice === 'lizard')) ||
  (userChoice === 'paper' &&
  (programChoice === 'rock' || programChoice === 'lizard')) ||
  (userChoice === 'scissors' &&
  (programChoice === 'paper' || programChoice === 'lizard' )) ||
  (userChoice === 'lizard' &&
  (programChoice === 'paper' || programChoice === 'spock')) ||
  (userChoice === 'spock' &&
  (programChoice === 'scissors' || programChoice === 'rock'))) {
    prompt('You win!');
  } else {
    prompt('computer wins!');
  }
}


//below is original attempt at main function, started to run into too many lines
/*function displayOutcome(userChoice, programChoice) {
  prompt(`You chose ${userChoice}, computer chose ${programChoice}`);

  if ((userChoice === 'rock' && programChoice === 'scissors') ||
      (userChoice === 'rock' && programChoice === 'lizard') ||
      (userChoice === 'paper' && programChoice === 'rock') ||
      (userChoice === 'paper' && programChoice === 'spock')
      (userChoice === 'scissors' && programChoice === 'paper') ||
      (userChoice === 'scissors' && programChoice === 'lizard') ||
      (userChoice === 'lizard' && programChoice === 'paper') ||
      (userChoice === 'lizard' && programChoice === 'spock') ||
      (userChoice === 'spock' && programChoice === 'scissors') ||
      (userChoice === 'spock' && programChoice === 'rock')) {
    prompt('You win!');
  } else if ((userChoice === 'rock' && programChoice === 'paper') ||
             (userChoice === 'paper' && programChoice === 'scissors') ||
             (userChoice === 'scissors' && programChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("it's a tie!");
  }
} */

//the below loop is the version from 4. of 'Things to consider'
//my solution to remove the break statement was to set this to a falsy value
let loopVariable = 'something';

while (loopVariable) {
  prompt(`choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];


  displayOutcome(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('please enter "yes" or "no".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') loopVariable = '';

  clear();

}

// for separate winner/loser/tie functions, could they slot into a higher-order function?
// make them return 0 if condition is not met 

// the other option I saw was to have an object with entries as (arrays?) of winning combinations
