while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted()) break;

  playerTotal += calculateCardTotal(cardGenerator()); // see calculateTotal.js, this function has been built
}


if (busted()) {
  playerBust = true;
  // probably end the game? or ask the user to play again?
} else {
  console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here

  currentTotal = dealerTotal;
}

