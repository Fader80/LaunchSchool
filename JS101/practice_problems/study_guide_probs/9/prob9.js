function countSubstrings(mainStr, secStr) {
  const SEC_LENGTH = secStr.length;
  const FIRST_LETT = secStr[0];
  let counter = 0;

  for (let idx = 0; idx < mainStr.length; idx++) {
    let currLett = mainStr[idx];

    if (currLett === FIRST_LETT) {
      let currPortion = mainStr.slice(idx, idx + SEC_LENGTH);
      if (currPortion === secStr) {
        counter++;
        idx += SEC_LENGTH - 1;
      }

    }
  }

  return counter;
}
