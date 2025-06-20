function findMatchingPairs(argStr) {

  let resArr = [];

  let wordArr = argStr.split(' ');
  wordArr = wordArr.filter(word => word.length > 1);

  for (let idx = 0; idx < wordArr.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < wordArr.length; jdx++) {
      let currPair = [wordArr[idx], wordArr[jdx]];
      let [a, b] = currPair;
      let start = a[0].toLowerCase();
      let end = b[b.length  - 1].toLowerCase();
      if (start === end) resArr.push(currPair);
    }
  }

  return resArr;
}

console.log(findMatchingPairs("The cat in the hat")); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
console.log(findMatchingPairs("A man a plan a canal Panama")); // []
console.log(findMatchingPairs("This sentence has no pairs")); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
console.log(findMatchingPairs("Apple leads to leap")); // []
