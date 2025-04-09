function unscramble(str1, str2) {
  let freq1 = {};
  let freq2 = {};
  let flag = true;
  for (let idx = 0; idx < str1.length; idx++) {
    let currChar = str1[idx];
    if (freq1.hasOwnProperty(currChar)) {
      freq1[currChar] += 1;
    } else {
      freq1[currChar] = 1;
    }
  }

    for (let idx = 0; idx < str2.length; idx++) {
    let currChar = str2[idx];
    if (freq2.hasOwnProperty(currChar)) {
      freq2[currChar] += 1;
    } else {
      freq2[currChar] = 1;
    }
  }

  for (let char in freq2) {
    if (!freq1.hasOwnProperty(char)) flag = false;
    if (freq1[char] < freq2[char]) flag = false;
  }

  return flag;


}


const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);
