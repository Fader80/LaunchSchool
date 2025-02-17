function sumPairs(argArr,targNum) {
  let resArr = undefined;
  argArr = argArr.map((elem, idx) => [elem, idx]);

  for (let idx = 0; idx < argArr.length -1; idx++) {
    for (let jdx = idx + 1; jdx < argArr.length; jdx++) {
      let currPair = [argArr[idx], argArr[jdx]];
      let [a, b] = currPair;
      if (a[0] + b[0] === targNum) {
        if (resArr === undefined) {
          resArr = currPair;
        } else {
          if (b[1] < resArr[1][1]) {
            resArr = currPair;
          }
        }
      }
    }
  }
    
  if (resArr === undefined) {
    return resArr;
  } else {
    return [resArr[0][0], resArr[1][0]];
  }
  
 
}