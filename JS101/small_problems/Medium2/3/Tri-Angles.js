function triangle(angle1, angle2, angle3) {
  let argArr = [...arguments];
  if (argArr.includes(0)) return 'invalid';
  if (argArr.reduce((accum, elem) => accum + elem) !== 180) return 'invalid';

  if (argArr.includes(90)) return 'right';

  let lessThan90 = argArr.filter(elem => elem < 90);

  if (lessThan90.length === 3) return 'acute';

  let moreThan90 = argArr.filter(elem => elem > 90);

  if (moreThan90.length !== 0) return 'obtuse';


}
