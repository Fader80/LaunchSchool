function evenSubstrings(argStr) {
  let allSubs = [];
  let counter = 0;

  for (let idx = 0; idx < argStr.length; idx++) {
    for (let jdx = idx + 1; jdx <= argStr.length; jdx++) {
      let currSub = argStr.slice(idx, jdx);
      allSubs.push(currSub);
    }
  }

  allSubs = allSubs.map(numStr => +numStr);

  allSubs.forEach(num => {
    if (num % 2 === 0) counter++;
  });

  return counter;
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);
