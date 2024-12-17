function repeatedSubstringPattern(argStr) {
  let allSubStrings = [];

  for (let idx = 0; idx < argStr.length; idx++) {
    for (let jdx = idx + 1; jdx <= argStr.length; jdx++) {
      let subStr = argStr.slice(idx, jdx);
      allSubStrings.push(subStr);
    }
  }

  allSubStrings = allSubStrings.filter(currSub => currSub !== argStr);


  for (let index = 0; index < allSubStrings.length; index++) {
    let currSubStr = allSubStrings[index];
    let targStr = '';
    while (targStr.length < argStr.length) {
      targStr += currSubStr;
    }

    if (targStr === argStr) return true;
  }

  return false;
}
