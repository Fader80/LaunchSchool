function reverseWords(argString) {
  let wordArray = argString.split(' ');

  for (let idx = 0; idx < wordArray.length; idx++) {
    let currElem = wordArray[idx];
    if (currElem.length > 4) {
      wordArray[idx] = currElem.split('').reverse().join('');
    }
  }
  return wordArray.join(' ');
}


//further exploration:

function reverseWordsFE(argString) {

  function reverser(word) {
    return word.split('').reverse().join('');
  }

  let wordArray = argString.split(' ').map(elem => elem.length > 4 ? reverser(elem) : elem);

  return wordArray.join(' ');
}