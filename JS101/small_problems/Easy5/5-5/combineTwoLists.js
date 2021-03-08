function interleave(argArr1, argArr2) {
  let targArr = [];

  for (let idx = 0; idx < argArr1.length; idx++) {
    let currElem1 = argArr1[idx];
    let currElem2 = argArr2[idx];
    targArr.push(currElem1, currElem2);
  }

  return targArr;
}