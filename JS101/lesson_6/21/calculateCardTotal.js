//this is my solution, it differs from LS's solution

let playerTotal = 0;

function parseNonAceValueFromCard(argValue) {
  let convertedArg = Number(argValue);

  if (convertedArg) {
    return convertedArg;
  } else {
    return 10;
  }
}


function parseAceValueFromCard() {
  playerTotal += 11;

  if (playerTotal > 21) {
    return 1;
  } else {
    return 11;
  }
}


function calculateCardTotal(card) {
  let cardValue = card[1];
  let parsedCardValue;

  if (cardValue !== 'Ace') {
    parsedCardValue = parseNonAceValueFromCard(cardValue);
  } else {
    parsedCardValue = parseAceValueFromCard();
  }

  return parsedCardValue;

}