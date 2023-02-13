function triangle(num1, num2, num3) {
    let numArr = [...arguments];
    let uniqArr = [];

    let zeros = uniqArr.some(num => num === 0);

    if (zeros) return 'invalid';

}