function countLetters(argStr) {
  let charArr = argStr.split('');
  charArr = charArr.filter(lett => /[A-Za-z]/.test(lett) && lett.toLowerCase() === lett);

  let resObj = {};

  for (let idx = 0; idx < charArr.length; idx++) {
    let currLett = charArr[idx];
    if (resObj.hasOwnProperty(currLett)) {
      resObj[currLett] += 1;
    } else {
      resObj[currLett] = 1;
    }
  }

  return resObj;
}
