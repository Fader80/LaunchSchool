function capitaliseHelper(argWord) {
  let splitWord = argWord.split('');
  let capitalisedWord  = splitWord.slice();

  for (let idx = 3; idx < splitWord.length; idx += 4) {
    capitalisedWord[idx] = capitalisedWord[idx].toUpperCase();
  }
  return capitalisedWord.join('');
}

function toWeirdCase(argStr) {
  let wordArr = argStr.split(' ');
  let processedWordArr = [];

  for (let idx = 0; idx < wordArr.length; idx++) {
    let currWord = wordArr[idx];
    if (idx % 2 === 0) {
      processedWordArr.push(currWord);
    } else {
      if (currWord.length < 4) {
        processedWordArr.push(currWord);
      } else {
        processedWordArr.push(capitaliseHelper(currWord));
      }
    }
  }

  return processedWordArr.join(' ');

}
