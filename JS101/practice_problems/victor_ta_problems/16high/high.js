function pointsHelper(argWord) {
  let alphaStr = '*abcdefghijklmnopqrstuvwxyz';
  let points = 0;

  for (let idx = 0; idx < argWord.length; idx++) {
    let currChar = argWord[idx];
    points += alphaStr.indexOf(currChar);
  }
  return points;
}

function high(argStr) {
  let wordArr = argStr.split(' ');
  let highScore = 0;
  let highWord;

  for (let idx = 0; idx < wordArr.length; idx++) {
    let currWord = wordArr[idx];
    let currScore = pointsHelper(currWord);
    if (currScore > highScore) {
      highScore = currScore;
      highWord = currWord;
    }
  }

  return highWord;
}

// Test Cases
console.log(high("man i need a taxi up to ubud")); // "taxi"
console.log(high("what time are we climbing up the volcano")); //"volcano"
console.log(high("take me to semynak")); // "semynak"
console.log(high("aa b")); // "aa"
console.log(high("b aa")); // "b"
console.log(high("bb d")); // "bb"
console.log(high("d bb")); // "d"
console.log(high("aaa b")); // "aaa"
