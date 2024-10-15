function featuredHelper(num) { //helper function
  let flag = true;
  if (num % 7 !== 0) flag = false;
  if (num % 2 === 0) flag = false;

  let stringNum = String(num);
  let uniqArr = [];
  for (let idx = 0; idx < stringNum.length; idx++) {
    let currLett = stringNum[idx];

    if (uniqArr.indexOf(currLett) === -1) uniqArr.push(currLett);
}
  if (uniqArr.length !== stringNum.length) flag = false;

  return flag;
}

function featured(argNum) {
  const MAX_NUM = 9876543201;
  for (let currNum = argNum + 1; currNum < MAX_NUM; currNum++) {
    if (featuredHelper(currNum)) return currNum;
  }

  return 'There is no possible number that fulfills those requirements.';
}

