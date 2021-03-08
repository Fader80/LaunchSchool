function xor(arg1, arg2) {
  let tally = 0;

  let argArr = [...arguments];

  argArr.forEach(function(argument) {
    if (argument) {
      tally += 1;
    }
  });

  return tally === 1;

}