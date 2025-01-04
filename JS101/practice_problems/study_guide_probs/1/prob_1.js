function smallerNumbersThanCurrent(argArr) {
  let resArr = [];

  for (let idx = 0; idx < argArr.length; idx++) {
    let currElem = argArr[idx];

    let copyArr = argArr.slice();

    copyArr.splice(idx, 1);

    let uniqCopyArr = [];

    copyArr.forEach(elem => {
      if (!uniqCopyArr.includes(elem)) uniqCopyArr.push(elem);
    });

    let filtArr = uniqCopyArr.filter(num => num < currElem);

    resArr.push(filtArr.length);
  }

  return resArr;
}