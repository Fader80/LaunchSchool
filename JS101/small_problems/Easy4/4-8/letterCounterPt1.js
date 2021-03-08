function wordSizes(argStr) {
  let resObj = {};

  if (!argStr) {
    return resObj;
  }

  let wordArr = argStr.split(' ');

  let wordLengths = wordArr.map(word => word.length);
  wordLengths.sort((a, b) => a - b);

  for (let counter = 0; counter < wordLengths.length; counter++) {
    let currElem = wordLengths[counter];
    resObj[currElem] = wordArr.filter(word => word.length === currElem).length;
  }

  return resObj;

}