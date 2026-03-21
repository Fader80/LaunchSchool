const { describe, beforeEach } = require("node:test");
const Dna = require("./dna");


describe('tests to see that Dna class is functioning', () => {
 

  test('check if `strand1` matches the input', () => {
    let Dna  = new Dna('CCAGCATCG');
    expect(Dna.strand1).toBe('CCAGCATCG');
  })


  
  test('works if both strands are same length', () => {
    let Dna = new Dna('CCACGTAC');
    expect(Dna.hammingDistance('CCACGTCC')).toBe(1);


  })
}) 

//why are these tests throwing an error in jest?