const RomanNumeral = require("./roman_numerals");

describe("RomanNumeral class", () => {
    test("works with single digit numbers", () => {
        let myNum = new RomanNumeral(1);
        expect(myNum.toRoman()).toBe('I');

        let myNum1 = new RomanNumeral(2);
        expect(myNum1.toRoman()).toBe('II');

        let myNum2 = new RomanNumeral(3);
        expect(myNum2.toRoman()).toBe('III');

        let myNum3 = new RomanNumeral(4);
        expect(myNum3.toRoman()).toBe('IV');

        let myNum4 = new RomanNumeral(5);
        expect(myNum4.toRoman()).toBe('V');

        let myNum5 = new RomanNumeral(6);
        expect(myNum5.toRoman()).toBe('VI');

        let myNum6 = new RomanNumeral(9);
        expect(myNum6.toRoman()).toBe('IX');
        
    })

    test("works with double digit numbers", () => {
        let myNum = new RomanNumeral(11);
        expect(myNum.toRoman()).toBe('XI');

        let myNum1 = new RomanNumeral(12);
        expect(myNum1.toRoman()).toBe('XII');

        let myNum2 = new RomanNumeral(13);
        expect(myNum2.toRoman()).toBe('XIII');

        let myNum3 = new RomanNumeral(24);
        expect(myNum3.toRoman()).toBe('XXIV');

        let myNum4 = new RomanNumeral(35);
        expect(myNum4.toRoman()).toBe('XXXV');

        let myNum5 = new RomanNumeral(64);
        expect(myNum5.toRoman()).toBe('LXIV');
        
        let myNum6 = new RomanNumeral(92);
        expect(myNum6.toRoman()).toBe('XCII');
        
    })

    test("works with triple digit numbers", () => {
        let myNum = new RomanNumeral(111);
        expect(myNum.toRoman()).toBe('CXI');

        let myNum1 = new RomanNumeral(129);
        expect(myNum1.toRoman()).toBe('CXXIX');

        let myNum2 = new RomanNumeral(157);
        expect(myNum2.toRoman()).toBe('CLVII');

        let myNum3 = new RomanNumeral(249);
        expect(myNum3.toRoman()).toBe('CCXLIX');

        let myNum4 = new RomanNumeral(635);
        expect(myNum4.toRoman()).toBe('DCXXXV');

        let myNum5 = new RomanNumeral(864);
        expect(myNum5.toRoman()).toBe('DCCCLXIV');
        
        let myNum6 = new RomanNumeral(944);
        expect(myNum6.toRoman()).toBe('CMXLIV');
        
    })

    test("works with quadruple digit numbers", () => {
        let myNum = new RomanNumeral(1021);
        expect(myNum.toRoman()).toBe('MXXI');

        let myNum1 = new RomanNumeral(1234);
        expect(myNum1.toRoman()).toBe('MCCXXXIV');

        let myNum2 = new RomanNumeral(1658);
        expect(myNum2.toRoman()).toBe('MDCLVIII');

        let myNum3 = new RomanNumeral(2487);
        expect(myNum3.toRoman()).toBe('MMCDLXXXVII');

        let myNum4 = new RomanNumeral(2954);
        expect(myNum4.toRoman()).toBe('MMCMLIV');
    })

    test("number higher than 3000 throws", () => {
        expect(() => new RomanNumeral(3002)).toThrow(RangeError);
    })

})