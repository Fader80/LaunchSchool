const { clear } = require('console');
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];


function prompt(message) {
  console.log(`=> ${message}`);
}

function displayOutcome(userChoice, programChoice) {
  prompt(`You chose ${userChoice}, computer chose ${programChoice}`);

  if (userChoice[0] === programChoice[0]) {
    prompt("it's a tie!");
  } else if ((userChoice[0] === 'rock' &&
  (programChoice[0] === 'scissors' || programChoice[0] === 'lizard')) ||
  (userChoice[0] === 'paper' &&
  (programChoice[0] === 'rock' || programChoice[0] === 'lizard')) ||
  (userChoice[0] === 'scissors' &&
  (programChoice[0] === 'paper' || programChoice[0] === 'lizard' )) ||
  (userChoice[0] === 'lizard' &&
  (programChoice[0] === 'paper' || programChoice[0] === 'spock')) ||
  (userChoice[0] === 'spock' &&
  (programChoice[0] === 'scissors' || programChoice[0] === 'rock'))) {
    prompt('You win!');
  } else {
    prompt('computer wins!');
  }
}


//the below loop is the version from 4. of 'Things to consider' - my solution
//to remove the break statement was to set this loopVariable to a falsy value
let loopVariable = 'something';

while (loopVariable) {
  prompt(`choose one - if you want, you can type just the first letter: ${VALID_CHOICES.join(', ')}`);
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
