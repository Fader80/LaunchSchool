function centerOf(argString) {
  let extractIndex;

  if (argString.length % 2 === 1) {
    extractIndex = (argString.length - 1) / 2;
    return argString[extractIndex];
  } else {
    extractIndex = (argString.length - 2) / 2;
    return argString.slice(extractIndex, extractIndex + 2);
  }
}