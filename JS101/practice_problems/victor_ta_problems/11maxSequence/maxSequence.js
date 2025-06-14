function sumHelper(subArr) {
  return subArr.reduce((acc, elem) => acc + elem);
}

function maxSequence(argArr) {
  if (argArr.every(num => num < 0)) return 0;

  let allSubs = [];

  for (let idx = 0; idx < argArr.length; idx++) {
    for (let jdx = idx + 1; jdx <= argArr.length; jdx++) {
      allSubs.push(argArr.slice(idx, jdx));
    }
  }

  let totalsOfSubs = allSubs.map(sub => sumHelper(sub));


  return Math.max(...totalsOfSubs);
}


console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true
