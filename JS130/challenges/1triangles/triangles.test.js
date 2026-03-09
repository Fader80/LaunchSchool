/* eslint-disable max-lines-per-function */


let Triangle = require("./triangles");

describe('Triangle', () => {
  test('invalid triangle - one side is 0', () => {
    //const triangle = new Triangle(2, 3, 0);
    expect(() => new Triangle(2, 3, 0)).toThrow();
  });

  test('invalid triangle - one side isn\'t smaller than the sum of the other two', () => {
    expect(() => new Triangle(3, 4, 7)).toThrow();
  });

  test('invalid triangle - any side is negative integer', () => {
    expect(() => new Triangle(4, 4, -7)).toThrow();
  });

  test('invalid triangle - any side is non-integer', () => {
    expect(() => new Triangle(4, 6, 'string')).toThrow();
  });

  test('if all three equal sides return the string "equilateral', () => {
    const triangle = new Triangle(4, 4, 4);
    expect(triangle.kind()).toBe('equilateral');
  });

  test('if two equal sides and one different return the string "isosceles"', () => {
    const triangle = new Triangle(6, 4, 4);
    expect(triangle.kind()).toBe('isosceles');
  });

  test('if all three sides being different returns the string "scalene"', () => {
    const triangle = new Triangle(3, 5, 7);
    expect(triangle.kind()).toBe('scalene');

  });

});