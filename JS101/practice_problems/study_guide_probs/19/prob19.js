function oddFellow(argArr) {
  for (let idx = 0; idx < argArr.length; idx++) {
    let currElem = argArr[idx];

    let filtArr = argArr.filter(elem => elem === currElem);
    if (filtArr.length % 2 ===  1) return currElem;
  }
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
