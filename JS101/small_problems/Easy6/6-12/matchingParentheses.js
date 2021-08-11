function parenListHalf1Reverser(parenArr, parArrLength) { // the arguments should be parenList and parLength
  let half1Rev = parenArr.slice(0, parArrLength / 2).reverse();

  for (let idx = 0; idx < half1Rev.length; idx++) {
    let currElem = half1Rev[idx];
    currElem === '(' ? half1Rev[idx] = ')' : half1Rev[idx] = '(';
  }

  return half1Rev;

}


function parenListComparer(arrLength, parenArr, parenArrFirtHalfRev) { // the arguments should be parlength, parenList and parenListHalf1Rev 
  let flag = true;
  let idxHalf2 = arrLength / 2;

  for (let idx = 0; idx < parenArrFirtHalfRev.length; idx++) {

    let currElem = parenArrFirtHalfRev[idx];
    let comparElem = parenArr[idxHalf2];

    if (currElem !== comparElem) {
      flag = false;
      break;
    } else {
      idxHalf2++;
    }
  }
  return flag;

}


function isBalanced(argString) {


  let parenList = argString.match(/[()]/g);

  if (!parenList) return true; // this is to handle no parentheses in sentence

  let parLength = parenList.length;

  if (parLength % 2 !== 0) return false;

  if (parenList[0] === ')') return false;

  let parenListHalf1Rev = parenListHalf1Reverser(parenList, parLength);

  let flag = parenListComparer(parLength, parenList, parenListHalf1Rev);


  return flag;

}

//code is now working fully as intended - post solution to thread

