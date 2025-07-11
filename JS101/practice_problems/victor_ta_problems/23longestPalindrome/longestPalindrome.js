function palinHelper(argWord) { //helper function
  let reversedWord = argWord.split('').reverse().join('');
  return argWord === reversedWord;
}

function longestPalindromicSubstring(argStr) {
  argStr = argStr.toLowerCase();

  let regEx = /\W/g;

  argStr = argStr.replaceAll(regEx,'' );

  let allSubs = [];
  let longestPalindrome = '';

  for (let idx = 0; idx < argStr.length; idx++) {
    for (let jdx = idx + 1; jdx <= argStr.length; jdx++) {

      let currSub = argStr.slice(idx, jdx);

      if (palinHelper(currSub) && currSub.length > longestPalindrome.length) longestPalindrome = currSub;
    }
  }

  return longestPalindrome;

}


console.log(longestPalindromicSubstring("Madam Arora teaches malayalam")); // "malayalam"
console.log(longestPalindromicSubstring("Nurses Run")); // "nursesrun"
console.log(longestPalindromicSubstring("ABC")); // "a"