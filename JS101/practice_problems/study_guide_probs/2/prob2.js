function minimumSum(argArr) {
  if (argArr.length < 5) return null;
  let sumArr = [];

  for (let idx  = 0; idx < argArr.length - 4; idx++) {
    let currPortion = argArr.slice(idx, idx + 5);
    let sum = currPortion.reduce((acc, elem) => acc + elem);
    sumArr.push(sum);

  }

  sumArr.sort((a, b) => a - b);

  return sumArr[0];
}
