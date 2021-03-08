function findDup(argArr) {

  for (let counter = 0; counter < argArr.length; counter++) {
    let currElem = argArr[counter];
    if (argArr.indexOf(currElem) !== argArr.lastIndexOf(currElem)) {
      return currElem;
    }
  }
}