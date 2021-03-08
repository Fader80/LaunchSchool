function multiplicativeAverage(argArr) {

  let multipliedNums = argArr.reduce((accum, elem) => accum * elem);

  let average = multipliedNums / argArr.length;
  return average.toFixed(3);

}