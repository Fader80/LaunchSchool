function searchWord2(word, text) {
  let regEx  = new RegExp (`${word}`, 'gi');

  let newTxt = text.replace(regEx, `**${word.toUpperCase()}**`);

  return newTxt;
}