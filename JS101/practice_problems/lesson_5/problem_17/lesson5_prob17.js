//Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. 
//The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
//Write a function that takes no parameters and returns a UUID.
//use one  array containing all the characters, and math.random for the index?
// use helper function to generate the digits?

function genUUID() {

  let charArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let sequence = [8, 4, 4, 4, 12];
  let str = '';


  function strGen(reps) {
    for (let idx = 0; idx < reps; idx++) {
      let randomIndex = Math.floor(Math.random() * charArr.length);
      str += charArr[randomIndex];
    }
    str += '-';
  }

  sequence.forEach(elem => {
    strGen(elem);
  });

  return  str.slice(0, str.length - 1);
}
