function findSpecialPairs(argArr) {
  let resArr = [];

  argArr = argArr.map((num, idx) => [num, idx]);


  for (let idx = 0; idx < argArr.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < argArr.length; jdx++) {
      let currSub = [argArr[idx], argArr[jdx]];

      let [a, b] = currSub;

      if ((a[1] % 2 === 0 && a[0] < 5) && (b[1] % 2 === 1 && b[0] > 5)) {
        resArr.push([a[0], b[0]]);
      }

    }
  }

  return resArr;

}