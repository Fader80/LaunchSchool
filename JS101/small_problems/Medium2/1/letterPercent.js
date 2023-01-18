function letterPercentages(argStr) {
  let resultObj =  argStr.split('').reduce((accum, elem) => {
    if (/[^A-z]/.test(elem)) {
      accum['neither'] += ((1 / argStr.length) * 100);
    } else if (elem.toUpperCase() === elem) {
      accum['uppercase'] += ((1 / argStr.length) * 100);
    } else {
      accum['lowercase'] += ((1 / argStr.length) * 100);
    }
    return accum;

  }, {lowercase: 0, uppercase: 0, neither: 0});

  for (let prop in resultObj) {
    resultObj[prop] = resultObj[prop].toFixed(2);
  }

  return resultObj;
}