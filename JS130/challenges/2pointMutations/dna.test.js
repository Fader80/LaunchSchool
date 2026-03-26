//const { describe, test } = require("node:test");
const Dna = require("./dna");



describe('tests to see that Dna class is functioning', () => {


  test('check to see if instance of `Dna` is an object', () => {
    let myDna = new Dna('ACGT');
    expect(typeof myDna).toBe('object');
  })

  test('check that invalid inputs to constructor throw', () => {
    expect(() => {let myDna = new Dna('CGBBAT')}).toThrow();
    expect(() => {let myDna = new Dna('12356')}).toThrow();
    expect(() => {let myDna = new Dna(null)}).toThrow();
    expect(() => {let myDna = new Dna(1256)}).toThrow();

  })

  test('check that invalid inputs to `hammingDistance` throw', () => {
    let myDna = new Dna('ACGT');
    expect(() => myDna.hammingDistance('CGBBAT')).toThrow();
    expect(() => myDna.hammingDistance('12356')).toThrow();
    expect(() => myDna.hammingDistance(null)).toThrow();
    expect(() => myDna.hammingDistance(1256)).toThrow();
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

  test('check to see if `strand1` remains unaltered after running method', () => {
    let myDna = new Dna('ACGTTACGTCCG');
    expect(myDna.hammingDistance('ACGCT')).toBe(1);
    expect(myDna.hammingDistance('AGGTTACGTTCGGGTCACTGGCTC')).toBe(2);
    expect(myDna.hammingDistance('ACGGTTC')).toBe(2);
    expect(myDna.strand1).toBe('ACGTTACGTCCG');
    
  })
  
}) 

