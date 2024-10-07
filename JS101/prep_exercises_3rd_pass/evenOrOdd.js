function evenOrOdd(argNum) {
    if (!Number.isInteger(argNum)) {
        throw new TypeError('expected a number');
    }
    if (argNum % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}