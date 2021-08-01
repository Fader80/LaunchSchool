function isBalanced(argString) {
  let flag = true;

  let parenList = argString.match(/[()]/g);

  if (!parenList) return true; // this is to handle no parentheses in sentence

  let parLength = parenList.length;

  if (parLength % 2 !== 0) return false;

  if (parenList[0] === ')') return false;

  let parenListHalf1Rev = parenList.slice(0, parLength / 2).reverse(); // fix this - see note #2 below

  for (let idx = 0; idx < parenListHalf1Rev.length; idx++) {
    let currElem = parenListHalf1Rev[idx];
    currElem === '(' ? parenListHalf1Rev[idx] = ')' : parenListHalf1Rev[idx] = '(';
  }

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
