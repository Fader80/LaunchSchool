function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  if (array1.length !== array2.length) return false;

  for (let idx = 0; idx < array1.length; idx++) {
    let currElem = array1[idx];
    let currSquare = currElem * currElem;

    let currFreq = array1.filter(elem => elem === currElem).length;

    let squareFreq = array2.filter(elem => elem === currSquare).length;

    if (currFreq !== squareFreq) return false;

  }
  return true;
}