function union(argArr1, argArr2) {
  let uniqArr = [];
  let joinedArr = argArr1.concat(argArr2);

  for (let counter = 0; counter < joinedArr.length; counter++) {
    let currElem = joinedArr[counter];
    if (!uniqArr.includes(currElem)) {
      uniqArr.push(currElem);
    }
  }

  return uniqArr.sort((a, b) => a - b);

}