function displayResult(calcFunc) {

  switch(calcFunc()) {
    case 'player' : {
      console.log('You won the round!');
      break;
    }
    case 'dealer' : {
      console.log('Dealer won the round');
      break;
    }
    default : {
      console.log('Round was a tie');
      break;
    }
  }
}