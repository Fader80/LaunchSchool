function vowelHelper(word) {
  let counter = 0;
  const VOWELS = 'AEIOUaeiou';

  for (let idx = 0; idx < word.length; idx++) {
    let currChar = word[idx];
    if (VOWELS.includes(currChar)) counter++;
  }

  return counter > 1;
}

function findTripleWithVowels(argStr) {
  let wordArr = argStr.split(' ');

  let allThrees = [];

  for (let idx = 0; idx < wordArr.length -2; idx++) {
    for (let jdx = idx + 1; jdx < wordArr.length -1; jdx++) {
      for (let ldx = jdx + 1; ldx < wordArr.length; ldx++) {
        let currSub = [wordArr[idx], wordArr[jdx], wordArr[ldx]];
        allThrees.push(currSub);
      }
    }
  }

  allThrees = allThrees.filter(subArr => subArr.every(word => vowelHelper(word)));
  return allThrees;

}

console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
console.log(
  findTripleWithVowels("The quick brown fox jumps over the lazy dog")
); // []
console.log(
  findTripleWithVowels("Beautiful, bright, and sunnier days are lovely")
);
// [
//   [ 'Beautiful,', 'sunnier', 'are' ],
//   [ 'Beautiful,', 'sunnier', 'lovely' ],
//   [ 'Beautiful,', 'are', 'lovely' ],
//   [ 'sunnier', 'are', 'lovely' ]
// ]