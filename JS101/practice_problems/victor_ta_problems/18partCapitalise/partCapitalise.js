
function capHelper(argWord) {
  return argWord[0].toUpperCase() + argWord.slice(1);
}

function partialCapitalise(argStr) {
  let excluded = ["the", "a", "an", "and", "but", "for", "at", "by", "from"];

  let resArr = [];

  let wordArr = argStr.split(' ');

  resArr.push(capHelper(wordArr[0]));

  for (let idx = 1; idx < wordArr.length; idx++) {
    let currWord = wordArr[idx];
    if (excluded.includes(currWord)) {
      resArr.push(currWord);
    } else {
      resArr.push(capHelper(currWord));
    }
  }

  return resArr.join(' ');


}

partialCapitalise("the quick brown fox jumps over the lazy dog");

//console.log(capHelper('pussycat'))