let longText =
'Four score and seven years ago our fathers brought forth on this ' +
'continent a new nation, conceived in liberty, and dedicated to the ' +
'proposition that all men are created equal. Now we are engaged in a ' +
'great civil war, testing whether that nation, or any nation so ' +
'conceived and so dedicated, can long endure. We are met on a great ' +
'battlefield of that war. We have come to dedicate a portion of that ' +
'field, as a final resting place for those who here gave their lives ' +
'that that nation might live. It is altogether fitting and proper that ' +
'we should do this.';

let longerText = 'It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.'

function numWordHelper(sentence) {//helper
  let wordsInSentence = sentence.split(' ');
  return wordsInSentence.length;
}


function longestSentence(argText) {
  let regEx = /(\.|!|\?)/g;
  let sentenceArr = argText.split(regEx);
  sentenceArr = sentenceArr.filter(sentence => sentence.length > 1);

  let sentenceArrNumWords = sentenceArr.map(sentence => numWordHelper(sentence));

  let result =  Math.max(...sentenceArrNumWords);
  return `The longest sentence has ${result} words.`;
}


//Further exploration longest word:
function wordHelper(sentence) { //helper function
  let wordArrLength = sentence.split(' ').map(word => word.length);
  return Math.max(...wordArrLength);
}


function sentenceWithLongestWord(argText) {
  let regEx = /(\.|!|\?)/g;
  let sentenceArr = argText.split(regEx);
  sentenceArr = sentenceArr.filter(sentence => sentence.length > 1);

  sentenceArr.sort((a, b) => wordHelper(a) - wordHelper(b));
  console.log(sentenceArr);

  let result = sentenceArr[sentenceArr.length - 1];

  return `The longest sentence is: ${result}.`;
}

//further exploration longest paragraph:


let regEx = /\n/g;

function longestPara(argText) {
  let paraArr = longText.split(regEx);
  paraArr.sort((a, b) => a.length - b.length);

  return paraArr[paraArr.length - 1];
}

console.log(longestPara(longText));