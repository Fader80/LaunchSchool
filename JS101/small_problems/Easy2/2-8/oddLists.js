function oddities(inputArray) {
  let oddArray = [];

  for (let current = 0; current < inputArray.length; current += 2) {
    oddArray.push(inputArray[current]);
  }

  return oddArray;
}