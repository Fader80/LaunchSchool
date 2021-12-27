function sumOfSums(argArr) {
  let subsequences = [];
  let result = 0;

  for (let idx = 0; idx < argArr.length; idx++) {
    subsequences.push(argArr.slice(0, idx + 1));
  }

  subsequences.slice().forEach(subArr => {
    result += subArr.reduce((accum, curr) => accum + curr);
  });

  return result;

}
