function letterPercentages(argStr) {
  return argStr.split('').reduce((accum, elem) => {
    if (typeof elem !== 'string') {
      accum[neither] += ((1 / argStr.length) * 100)
    }

  }, {lowercase: 0, uppercase: 0, neither: 0});
}