// message_filter.js


/*
You are asked to implement a MessageFilter class.

A message filter is created with a list of blocked words. It can then process messages 
by replacing blocked words with a masked version.

Masking rule:

A blocked word should be replaced by a string of * characters of the same length.
Matching is case-sensitive.
Only exact word matches should be masked.
Words are separated by spaces.
*/

/*
Pedac


P:
input: string, array
output: an instance with a `name` property and a `maskWord` function on the class

*/



class MessageFilter {
  #blockedWords;
  #message;

  static maskWord(word) {    
    return '*'.repeat(word.length);
  }

  

  constructor(name, blockedWords) {
    // your code here
    this.name = name;
    this.#blockedWords = blockedWords;
  }

  filter(sentence) {
    
    let processedSentence =  sentence.split(' ').map(word => {
      if (this.#blockedWords.includes(word)) {
        return MessageFilter.maskWord(word);
      } else {
        return word;
      }
    }).join(' ');

    this.#message = processedSentence;

    return processedSentence;

  }

  get filtered() {
    return this.#message;
  }
}





module.exports = MessageFilter;