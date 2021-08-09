function parenListHalf1Reverser(parenArr, parArrLength) { // the arguments should be parenList and parLength
  let half1Rev = parenArr.slice(0, parArrLength / 2).reverse();

  for (let idx = 0; idx < half1Rev.length; idx++) {
    let currElem = half1Rev[idx];
    currElem === '(' ? half1Rev[idx] = ')' : half1Rev[idx] = '(';
  }

  return half1Rev;

}


function isBalanced(argString) {
  let flag = true;

  let parenList = argString.match(/[()]/g);

  if (!parenList) return true; // this is to handle no parentheses in sentence

  let parLength = parenList.length;

  if (parLength % 2 !== 0) return false;

  if (parenList[0] === ')') return false;

  let parenListHalf1Rev = parenListHalf1Reverser(parenList, parLength);


  let idxHalf2 = parLength / 2;

  for (let idx = 0; idx < parenListHalf1Rev.length; idx++) {

    let currElem = parenListHalf1Rev[idx];
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


//code is now working fully as intended - but need to extract some of the code into helper function if possible (too long)
//extract the for loops into separate functions - FIRST ONE DONE



