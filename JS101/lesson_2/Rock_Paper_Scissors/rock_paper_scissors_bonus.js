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
    prompt('You win!');
  } else {
    prompt('computer wins!');
  }
}

prompt('***Welcome to rock paper scissors lizard Spock!***\n');


//the below loop is the version from 4. of 'Things to consider' - my solution
//to remove the break statement was to set this loopVariable to a falsy value
let loopVariable = 'something';

while (loopVariable) {
  prompt(`choose one - you can type just the first letter if you want:\n${VALID_CHOICES.join(', ')}`);
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

