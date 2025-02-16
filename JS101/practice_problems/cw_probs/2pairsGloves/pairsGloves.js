function numberOfPairs(gloves) {
  let uniqArr = [];
  let count = 0;

  gloves.forEach(glove => {
    if (!uniqArr.includes(glove)) uniqArr.push(glove);
  });

  uniqArr.forEach(glove => {
    let selectArr = gloves.filter(colour => colour === glove);
    let pairs = Math.floor(selectArr.length / 2);
    count += pairs;
  });

  return count;
}
