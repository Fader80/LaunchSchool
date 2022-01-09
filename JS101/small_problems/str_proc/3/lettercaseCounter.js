//helper function
function whichCase(argChar) {
  if (argChar !== argChar.toLowerCase() && argChar !== argChar.toUpperCase()) {
    return 'neither';
  } else if (argChar !== argChar.toLowerCase()) {
    return 'uppercase';
  } else {
    return 'lowercase';
  }

}

function letterCaseCount(argStr) {

  return argStr.split('').reduce((accum, curr) => {
    accum[whichCase(curr)] += 1;
    return accum;

  }, {lowercase: 0, uppercase: 0, neither: 0});

}

//FIND OUT WHY THE ABOVE CODE IS NOT WORKING