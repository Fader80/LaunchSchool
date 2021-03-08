function makeFlagArr(alphabetChars, argString) {
  let flagArr = [];
  for (let counter = 0; counter < argString.length; counter += 1 ) {
    if (!alphabetChars.includes(argString[counter])) {
      flagArr[counter] = ' ';
    } else {
      flagArr[counter] = argString[counter];
    }
  }
  return flagArr;
}

function makeFilteredFlagArr(flagArr) {
  let filteredFlagArr = [];
  for (let counter2 = 0; counter2 < flagArr.length; counter2 += 1) {
    if (flagArr[counter2] === ' ') {
      if (flagArr[counter2 + 1] !== ' ') {
        filteredFlagArr.push(flagArr[counter2]);
      }
    } else {
      filteredFlagArr.push(flagArr[counter2]);
    }
  }
  return filteredFlagArr;
}

function cleanUp(argString) {
  let alphabetChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];

  let flagArr = makeFlagArr(alphabetChars, argString);
  let filteredFlagArr = makeFilteredFlagArr(flagArr);

  return filteredFlagArr.join('');

}

