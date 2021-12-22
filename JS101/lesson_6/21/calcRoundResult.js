function calcResultOfRound() {
  let result;

  if (playerBust || (dealerTotal > playerTotal)) {
    result = 'dealer';
  } else if (dealerBust || (playerTotal > dealerTotal)) {
    result = 'player';
  } else {
    result = 'tie';
  }

  return result;

}