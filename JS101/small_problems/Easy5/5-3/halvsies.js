function halvsies(argArr) {
  let targArr = [[], []];
  let splitPoint = Math.ceil(argArr.length / 2);

  for (let counter = 0; counter < splitPoint; counter++ ) {
    let currElem = argArr[counter];
    targArr[0].push(currElem);
  }

  for (let counter = splitPoint; counter < argArr.length; counter++) {
    let currElem = argArr[counter];
    targArr[1].push(currElem);
  }

  return targArr;
}