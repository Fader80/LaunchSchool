function closestNumbers(argArr) {
  let allPairs = [];

  for (let idx = 0; idx < argArr.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < argArr.length; jdx++) {
      let subArr = [argArr[idx], argArr[jdx]];
      allPairs.push(subArr);
    }
  }

  allPairs.sort((a, b) => Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]));
  return allPairs[0];

}
