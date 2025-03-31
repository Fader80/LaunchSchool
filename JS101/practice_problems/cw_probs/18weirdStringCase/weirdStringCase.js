function wordHelper(word) {
  let resultStr = '';

  for (let idx = 0; idx < word.length; idx++) {
    let currLett = word[idx];

    if (idx % 2 === 0) {
      resultStr += currLett.toUpperCase();
    } else {
      resultStr += currLett.toLowerCase();
    }
  }

  return resultStr;
}


function toWeirdCase(string) {
  let wordArr = string.split(' ');
  wordArr = wordArr.map(word => wordHelper(word));
  return wordArr.join(' ');
}