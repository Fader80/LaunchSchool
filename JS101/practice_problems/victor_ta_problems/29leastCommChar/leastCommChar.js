function leastCommonChar(argStr) {
  argStr = argStr.toLowerCase();

  let argCharArr = argStr.split('');

  let lowestNum = Infinity;
  let lowestChar = '';

  let uniqChars = [];

  argCharArr.forEach(lett => {
    if (!uniqChars.includes(lett)) uniqChars.push(lett);
  });

  uniqChars.forEach(lett => {
    let length = argCharArr.filter(char => char === lett).length;
    if ( length < lowestNum) {
      lowestNum = length;
      lowestChar = lett;
    }
  });

  return lowestChar;

}

console.log(leastCommonChar("Hello World")); // "h"
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers")); // "t"
console.log(leastCommonChar("Mississippi")); // "m"
console.log(leastCommonChar("Happy birthday!")); // ' '
console.log(leastCommonChar("aaaaaAAAA")); // 'a'
