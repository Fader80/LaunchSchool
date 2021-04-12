function swapName(argName) {
  let splitName = argName.split(' ');

  return `${splitName[1]}, ${splitName[0]}`;
}

//FURTHER EXPLORATION:

function swapName_FE(argName) {
  let strArr = argName.split(' ');

  return `${strArr[strArr.length - 1]}, ${strArr.slice(0, strArr.length - 1).join(' ')}`;
}