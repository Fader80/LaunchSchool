//The FE solution returns the middle word if the string is odd. If the string
//has only one word, that is considered the middle and is returned.
//Same if a string is empty, the empty string is returned.

//If the string has an even number of words, the middle two are returned.
//If the string has only two words,then they are considered the middle two
//and returned.


function penultiMiddleWord(string) {
  let strArr = string.split(' ');

  if (strArr.length % 2 === 1) {
    let oddIndex = (strArr.length - 1) / 2;
    return strArr[oddIndex];
  } else {
    let evenIndex = (strArr.length - 2) / 2;
    return `${strArr[evenIndex]} ${strArr[evenIndex + 1]}`;
  }
}