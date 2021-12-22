function multiplyAllPairs(argArr1, argArr2) {
  let targArr = [];

  for (let idx = 0; idx < argArr1.length; idx++) {
    let currElem = argArr1[idx];
    argArr2.forEach(num => targArr.push(num * currElem));
  }

  targArr.sort((a, b) => a - b);

  return targArr;
}