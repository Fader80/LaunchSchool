function invertLett(word) {
  if (word.length === 1) {
    return word;
  }

  word = word.slice(word.length - 1) + word.slice(1, word.length - 1)
 + word.slice(0, 1);
  return word;
}


function swap(argString) {
  let wordArr = argString.split(' ');


  for (let counter = 0; counter < wordArr.length; counter++) {
    wordArr[counter] = invertLett(wordArr[counter]);
  }

  return wordArr.join(' ');
}