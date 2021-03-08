function logInBox(argString, maxLength) {

  if (maxLength) {
    argString = argString.slice(0, maxLength);
  }

  let strLength = argString.length;

  let logString = `+-${'-'.repeat(strLength)}-+\n\n|${' '.repeat(strLength + 2)}|\n\n` +
  `| ${argString} |\n\n|${' '.repeat(strLength + 2)}|\n\n` +
  `+-${'-'.repeat(strLength)}-+`;

  return logString;

}