function wordLengths(argStr) {
  if (!argStr) return [];

  let wordArr = argStr.split(' ');

  let resultArr = wordArr.reduce((accum, word) => {
    accum.push(`${word} ${word.length}`);
    return accum;
  }, []);

  return resultArr;
}