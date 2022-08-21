function stringFreq(argString) {
  let strArr = argString.split('');
  let uniqArr = [];

  strArr.forEach(letter => {
    if (!uniqArr.includes(letter)) {
      uniqArr.push(letter);
    }
  });

  let result = uniqArr.reduce((accum, elem) => {
    accum[elem] = strArr.filter(char => char === elem).length;
    return accum;
  }, {});

  return result;

}