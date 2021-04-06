function swapName(argName) {
  let splitName = argName.split(' ');

  return `${splitName[1]}, ${splitName[0]}`;
}

//FURTHER EXPLORATION:

function swapName_FE(name) {
  return name.split(' ').reverse().join(', ');
}