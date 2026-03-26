class Dna {
  constructor(strand1) {
    
    if (typeof strand1 !== 'string') {
      throw new TypeError('input must be a string');
    }

    if (/[^ACGT]/.test(strand1)) {
    throw new TypeError('invalid character/s in supplied string - must be  A,C,G, or T');
  }
  this.strand1 = strand1;

 }
  hammingDistance(strand2) {

    if (typeof strand2 !== 'string') {
      throw new TypeError('input must be a string');
    }


  if (/[^ACGT]/.test(strand2)) {
    throw new TypeError('invalid character/s in supplied string - must be A,C,G, or T');
  } 

  let strand1Sub = this.strand1;

  if (this.strand1.length !== strand2.length) {
    
    if (this.strand1.length > strand2.length) {
      strand1Sub = this.strand1.slice(0, strand2.length);
    } else {
      strand2 = strand2.slice(0, this.strand1.length);
    }
    
  } // end of strand size compare if statement 
  
  let distance = 0;
  
  for (let idx = 0; idx < strand1Sub.length; idx++) {
    let currElem1 = strand1Sub[idx];
    let currElem2 = strand2[idx];
    if (currElem1 !== currElem2) distance++
  }
  
  return distance;
}
}
  
  let myDNA = new Dna('GAGCCTACTAACGGGAT');




module.exports = Dna;