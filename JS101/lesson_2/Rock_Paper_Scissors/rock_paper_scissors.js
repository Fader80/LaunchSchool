const { clear } = require('console');
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];


function prompt(message) {
  console.log(`=> ${message}`);
}


function displayOutcome(userChoice, programChoice) {
  prompt(`You chose ${userChoice}, computer chose ${programChoice}`);

  if ((userChoice === 'rock' && programChoice === 'scissors') ||
      (userChoice === 'paper' && programChoice === 'rock') ||
      (userChoice === 'scissors' && programChoice === 'paper')) {
    prompt('You win!');
  } else if ((userChoice === 'rock' && programChoice === 'paper') ||
             (userChoice === 'paper' && programChoice === 'scissors') ||
             (userChoice === 'scissors' && programChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("it's a tie!");
  }
}

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