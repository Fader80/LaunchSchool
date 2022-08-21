function wordToDigit(argStr) {

  const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];


  let wordArr = argStr.split(' ');

  for (let idx = 0; idx < wordArr.length; idx++) {
    wordArr[idx] = swapHelper(wordArr[idx], NUM_WORDS);
  }

  return wordArr.join(' ');


}


function swapHelper(word, numWordArr) { // helper function

  let fullStopFlag = false;


  if (/\W/.test(word)) {
    fullStopFlag = true;
    word = word.slice(0, word.length - 1);
  }


  if (numWordArr.includes(word)) {
    return fullStopFlag ? String(numWordArr.indexOf(word)) + '.' : String(numWordArr.indexOf(word));
  } else {
    return fullStopFlag ? word + '.' : word;
  }

}


