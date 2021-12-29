function displayHands() {
  let dealerHandRedacted = [dealerHand[0], ['?']];
  console.log(`Your hand is: ${playerHand}`);
  console.log(`Note, your hand's total is: ${playerTotal}`);

  console.log(`Dealer's hand is: ${dealerHandRedacted}`);
}