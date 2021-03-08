function letterFreq(argStr) {
  let targObj = {};
  let uniqueLettArr = [];

  let strArr = argStr.split('');

  for (let counter = 0; counter < strArr.length; counter++) {
    let currElem = strArr[counter];
    if (uniqueLettArr.indexOf(currElem) === -1 && currElem !== ' ') {
      uniqueLettArr.push(currElem);
    }
  }

  for (let counter = 0; counter < uniqueLettArr.length; counter++) {
    let currElem = uniqueLettArr[counter];
    targObj[currElem] = strArr.filter(elem => elem === currElem).length;
  }

  return targObj;

}