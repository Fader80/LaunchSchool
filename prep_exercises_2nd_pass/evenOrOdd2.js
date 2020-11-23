function evenOrOdd(arg) {
  if (Number.isInteger(arg) === false) {
  console.log('error, arg is not an integer');
  return; 
} else if (arg % 2 === 0) {
  console.log('even')
} else {
  console.log('odd');
}

}

evenOrOdd(1.5);
