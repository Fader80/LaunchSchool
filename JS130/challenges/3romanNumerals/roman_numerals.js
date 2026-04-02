class RomanNumeral {
  constructor(number) {
    this.number = number;
    if (number > 3000) throw new RangeError('number should not exceed 3000');
  }
  
  toRoman() {
    let numberChunkArr = [['M', 1000, 0], ['D', 500, 0], ['C', 100, 0], ['L', 50, 0], ['X', 10, 0], ['V', 5, 0], ['I', 1, 0]]; 

for (let idx = 0; idx < numberChunkArr.length; idx++) {
  let currSubArr = numberChunkArr[idx];

  let currChunkNum = currSubArr[1];

  if (this.number < currChunkNum) continue;
  
  while (this.number >= currChunkNum) {
    this.number -= currChunkNum;    
    currSubArr[2]++;
  }
  
}

let numeralStringArr = [];

for (let idx = numberChunkArr.length - 1; idx >= 0; idx--) {
    
  let [currChunkName, currChunkNum, currChunkReps] = [...numberChunkArr[idx]];
  if (currChunkReps === 4) {
    let prevChunk = numberChunkArr[idx - 1];
    let prevPrevChunk = numberChunkArr[idx - 2];
    if (prevChunk[2] === 0) {
      
      numeralStringArr.unshift(currChunkName + prevChunk[0]);
      idx--;
      continue;
    } else {
      numeralStringArr.unshift(currChunkName + prevPrevChunk[0]);
      idx--;
      continue;
    }
  }
  
  numeralStringArr.unshift(currChunkName.repeat(currChunkReps));
}
    
    return numeralStringArr.join('');

  }
}

 let number = new RomanNumeral(3000);

console.log(number.toRoman());

module.exports = RomanNumeral;