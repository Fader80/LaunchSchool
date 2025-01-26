function findTrianglePairs(argArr, argNum) {
  let resArr = [];

  for (let idx = 0; idx < argArr.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < argArr.length; jdx++) {
      let currSubArr = [argArr[idx], argArr[jdx], argNum];

      let [a, b, c] = currSubArr;

      if (a + b > c && a + c > b && b + c > a) {
        currSubArr.pop();
        resArr.push(currSubArr);
      }


    }
  }

  return resArr;
}