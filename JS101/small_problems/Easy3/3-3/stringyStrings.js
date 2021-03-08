function stringy(integerArg) {
  let digitArray = [];

  for (let counter = 0; counter < integerArg; counter += 1) {
    if (counter % 2 === 0) {
      digitArray.push('1');
    } else {
      digitArray.push('0');
    }
  }
  let digitString = digitArray.join('');
  return digitString;
}