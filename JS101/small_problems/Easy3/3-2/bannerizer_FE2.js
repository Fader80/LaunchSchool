//for this advanced FE exercise, I've used LS solution as first helper function
//uses helper functions to keep main function size within the acceptable limit
//final line of wrapped text (if smaller than max length) will be left-justified

const { wrap } = require("module");

function logInBox(argString) {

  let horizontalRule = `+${"-".repeat(argString.length + 2)}+`;
  let emptyLine = `|${" ".repeat(argString.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${argString} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

function argStringSlicer(argString, maxLength) {
  let targArr = [];
  while (argString.length > maxLength) {
    targArr.push(argString.slice(0, maxLength));
    argString = argString.slice(maxLength);
  }
  targArr.push(argString);
  return targArr;
}

function wrapStringLogger(horizontalRule, emptyLine, stringArr, maxLength) {
  console.log(horizontalRule);
  console.log(emptyLine);
  for (let counter = 0; counter < stringArr.length; counter += 1) {
    if (stringArr[counter].length === maxLength) {
      console.log(`| ${stringArr[counter]} |`);
    } else {
      console.log(`| ${stringArr[counter]}${' '.repeat(maxLength - stringArr[counter].length)} |`);
    }
  }
  console.log(emptyLine);
  console.log(horizontalRule);
}

function logInWrap(argString) {
  let maxLength = 7;
  if (argString.length <= maxLength) {
    logInBox(argString);
  } else {
    let stringArr = argStringSlicer(argString, maxLength);

    let horizontalRule = `+${"-".repeat(maxLength + 2)}+`;
    let emptyLine = `|${" ".repeat(maxLength + 2)}|`;

    wrapStringLogger(horizontalRule, emptyLine, stringArr, maxLength);

  }

}
