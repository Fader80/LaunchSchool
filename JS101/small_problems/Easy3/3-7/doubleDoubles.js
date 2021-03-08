function twice(argNum) {
  let argString = argNum.toString();

  if (argString.length % 2 !== 0) {
    return argNum * 2;
  };

  let numFirstHalf = argString.slice(0, argString.length / 2);
  let numSecondHalf = argString.slice(argString.length / 2);

  if (numFirstHalf === numSecondHalf) {
    return argNum;
  } else {
    return argNum * 2;
  }

}