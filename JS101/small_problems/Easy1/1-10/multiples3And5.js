function multiSum(targetInteger) {
  let factors = [3, 5];

  let multiples = [];

  let uniqueMultiples = [];

  factors.forEach(function(factor) {
    for (let current = factor; current <= targetInteger; current += factor) {
      multiples.push(current);
    }
  });

  multiples.forEach(function(elem) {
    if (uniqueMultiples.indexOf(elem) === -1) {
      uniqueMultiples.push(elem);
    }
  });

  return uniqueMultiples.reduce((accum, curr) => accum + curr);

}