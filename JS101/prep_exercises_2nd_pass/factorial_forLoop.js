function factorial(num) {
  if (num < 1) {
    return 1;
} else {
  sum = 1;
  for (var i = num; i > 1; i--) {
  sum *= i;
  }
 }

return sum;

}

console.log(factorial(7));
