function solve(s) {
  let count = 0;

  for (let idx = 0; idx < s.length; idx++) {
    for (let jdx = idx + 1; jdx <= s.length; jdx++) {
      let currPart = s.slice(idx, jdx);
      if (currPart[currPart.length - 1] % 2 === 1) count++;
      console.log(currPart);
    }
  }

  return count;
}