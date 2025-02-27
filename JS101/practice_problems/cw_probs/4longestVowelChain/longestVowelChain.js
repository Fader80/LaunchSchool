function solve(s) {
  const VOWELS = 'aeiou';

  let longestSub = 0;

  for (let idx = 0; idx < s.length; idx++) {
    for (let jdx = idx + 1; jdx <= s.length; jdx++) {
      let currSub = s.slice(idx, jdx);
      if (currSub.split('').every(lett => VOWELS.includes(lett))) {
        if (currSub.length > longestSub) longestSub = currSub.length;
      }
    }
  }
  return longestSub;

}