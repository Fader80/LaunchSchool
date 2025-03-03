function f(s) {
  let resArr = [];

  for (let idx = 0; idx < s.length; idx++) {

    let currPart = s.slice(0, idx + 1);
    let repeatStr = '';
    let k = 1;

    while (repeatStr.length < s.length) {
      repeatStr = currPart.repeat(k);
      if (repeatStr === s) {
        resArr.push(currPart, k);
        return resArr;

      } else {
        k++;
      }

    }

  }

}

console.log(f('abcde'));