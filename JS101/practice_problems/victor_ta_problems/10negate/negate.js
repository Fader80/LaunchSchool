function negate(argStr) {
  let resStr = '';
  const NON_WORD_REGEX = /\W/;
  let idx = 0;
  while (idx < argStr.length) {
    let threePortion = argStr.slice(idx, idx + 3);
    let threeLastChar = threePortion[2];
    if (NON_WORD_REGEX.test(threeLastChar)) {
      let possNo = argStr.slice(idx, idx + 2);
      if (possNo === 'no') {
        resStr += 'yes' + threeLastChar;
        idx += 3;
        continue;
      } else if (possNo === 'No') {
        resStr += 'Yes' + threeLastChar;
        idx += 3;
        continue;
      }
    }
     let fourPortion = argStr.slice(idx, idx + 4);
    let fourLastChar = fourPortion[3];
    if (NON_WORD_REGEX.test(fourLastChar)) {
      let possYes = argStr.slice(idx, idx + 3);
      if (possYes === 'yes') {
        resStr += 'no' + fourLastChar;
        idx += 4;
        continue;
      } else if (possYes === 'Yes') {
        resStr += 'No' + fourLastChar;
        idx += 4;
        continue;
      }
    }



    resStr += argStr[idx];
    idx++;
  }

  return resStr;

}

console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"
