function wordCap(argStr) {
  let targStr = '';

  for (let idx = 0; idx < argStr.length; idx++) {
    let prevElem = argStr[idx -1];
    let currElem = argStr[idx];
    if (!prevElem || /\s/.test(prevElem)) {
      targStr += currElem.toUpperCase();
    } else targStr += currElem;
  }
  return targStr;
}