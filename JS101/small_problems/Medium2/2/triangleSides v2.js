function triangle(num1, num2, num3) {
  let argArr = [...arguments];
  if (argArr.includes(0)) return 'invalid';

  argArr.sort((a, b) => a - b);

  let lastElem = argArr[2];

  let firstTwoElem = argArr[0] + argArr[1];

  if (lastElem >= firstTwoElem) return 'invalid';

  let uniqNumArr = [];
  argArr.forEach(num => {
    if (uniqNumArr.indexOf(num) === -1) uniqNumArr.push(num);
  });

  switch (uniqNumArr.length) {
    case 1 : return `equilateral`;
    case 2 : return `isosceles`;
    case 3: return `scalene`;

  }
}