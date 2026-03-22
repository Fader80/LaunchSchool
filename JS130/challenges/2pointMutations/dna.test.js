//const { describe, test } = require("node:test");
const Dna = require("./dna");



describe('tests to see that Dna class is functioning', () => {


  test('check to see if instance of `Dna` is an object', () => {
    let myDna = new Dna('ACGT');
    expect(typeof myDna).toBe('object');
  })

  test('check that invalid inputs to constructor throw', () => {
    expect(() => {let myDNA = new Dna('CGBBAT')}).toThrow();
    expect(() => {let myDNA = new Dna('12356')}).toThrow();
    expect(() => {let myDNA = new Dna(null)}).toThrow();
    expect(() => {let myDNA = new Dna(1256)}).toThrow();

  })

  test('check that invalid inputs to `hammingDistance` throw', () => {
    let myDNA = new Dna('ACGT');
    expect(() => myDNA.hammingDistance('CGBBAT')).toThrow();
    expect(() => myDNA.hammingDistance('12356')).toThrow();
    expect(() => myDNA.hammingDistance(null)).toThrow();
    expect(() => myDNA.hammingDistance(1256)).toThrow();
  } )
 

  test('check if `strand1` matches the input to constructor', () => {
    let myDna  = new Dna('CCAGCATCG');
    expect(myDna.strand1).toBe('CCAGCATCG');
  })


  
  test('works if both strands are same identical', () => {
    let myDna = new Dna('CCACGTAC');
    expect(myDna.hammingDistance('CCACGTAC')).toBe(0);    
  })

  test('works if both strands are of the same length', () => {
    let myDna = new Dna('CCACGTAC');
    expect(myDna.hammingDistance('CTACGTAC')).toBe(1);
    expect(myDna.hammingDistance('CACCGTAC')).toBe(2);
  })

  test('works if chars are missing from input strand, `strand1`', () => {
    let myDNA = new Dna('CCT AG');
    expect(myDNA.hammingDistance('CCTGAG')).toBe(1);
  })

  test('works if chars are missing from method `strand2`', () => {
    let myDna = new Dna('CCTGAG');
    expect(myDna.hammingDistance('CCT AG')).toBe(1);
  })

  test('works if both strands are empty', () => {
    let myDna = new Dna('');
    expect(myDna.hammingDistance('')).toBe(0);
  })

  test('works if strand from constructor is longer than strand from method', () => {
    let myDna = new Dna('CCGATCGTTCC');
    expect(myDna.hammingDistance('CCGAT')).toBe(0);
    expect(myDna.hammingDistance('CCGCTC')).toBe(1);
    expect(myDna.hammingDistance('CAGCTCGT')).toBe(2);
  })

  test('works if strand from the constructor is shorter than strand from method', () => {
    let myDna = new Dna('CCGATCA');
    expect(myDna.hammingDistance('CCGATCACGTTCG')).toBe(0);
    expect(myDna.hammingDistance('CTGATCACGTTCGATG')).toBe(1);
    expect(myDna.hammingDistance('GTGATCACGTTCGATGGC')).toBe(2);

  })
  
}) 

