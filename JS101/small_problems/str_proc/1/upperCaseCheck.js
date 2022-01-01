function isUppercase(argStr) {

  let alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let flag = true;

  for (let idx = 0; idx < argStr.length; idx++) {
    let currElem = argStr[idx];
    let currUpper = currElem.toUpperCase();
    if (!alphabetUpper.includes(currUpper)) continue;
    if (alphabetUpper[alphabetUpper.indexOf(currUpper)] === currElem) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}