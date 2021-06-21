function isBalanced(argString) {
  let flag = true;
  let parLength  = parenList.length;
  let parenList = argString.match(/()/g);

  if (parLength % 2 !== 0) return false;

  if (parenList[0] === ')') return false;

  let parenListHalf1 = parenList.split(0, parLength / 2);

  for (let idx = 0; idx < parenListHalf1.length; idx++) {
    let idxHalf2 = parenLength / 2;
    let currElem = parenListHalf1[idx];
    let comparElem = parenList[idxHalf2];

    if (currElem !== comparElem) {
      flag = false;
      break;
    } else {
      idxHalf2++;
    }
  }

  return flag;

}

//finished, but need to test it in playcode 