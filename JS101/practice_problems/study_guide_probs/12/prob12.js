function isPangram(argStr) {
  let alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
  let flag = true;

  let lowerStr = '';

  for (let idx = 0; idx < argStr.length; idx++) {
    let currChar = argStr[idx];
    lowerStr += currChar.toLowerCase();
  }

  for (let idx = 0; idx < alphabetStr.length; idx++) {
    let currChar = alphabetStr[idx];
    if (!lowerStr.includes(currChar)) flag = false;

  }

  return flag;


}
const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);
