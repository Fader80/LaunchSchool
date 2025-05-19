function whatIsDifferent(argArr) {
  for (let idx = 0; idx < argArr.length; idx++) {
    let currElem = argArr[idx];

    let filtArr = argArr.filter(elem => elem === currElem);

    if (filtArr.length === 1) return currElem;
  }
}