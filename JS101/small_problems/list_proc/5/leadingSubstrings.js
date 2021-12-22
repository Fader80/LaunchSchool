function leadingSubstrings(argString) {

  let targArr = [];

  for (let idx = 1; idx <= argString.length; idx++) {
    targArr.push(argString.slice(0, idx));
  }

  return targArr;
}


//further exploration:

function leadingSubstringsFE(argString) {

  let targArr = [];

  let splitArr = argString.split('');

  splitArr.reduce((accum, curr) => {

    targArr.push(accum + curr);

    return accum + curr;
  }, '');

  return targArr;
}

