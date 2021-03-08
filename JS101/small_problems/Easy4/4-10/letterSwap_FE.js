function swapFE(argString) {
  let wordArr = argString.split(' ');

  wordArr = wordArr.map(function(word) {
    return  word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
  });


  return wordArr.join(' ');
}