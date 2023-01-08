function fibonacci(argNum) {

  if (argNum < 3) {
    return argNum;
  }

  let f1 = 1;

  let f2 = 1;

  let fib;

  for (let idx = 2; idx < argNum; idx++) {
    fib = f1 + f2;
    f1 = f2;
    f2 = fib;
  }

  return fib;
}