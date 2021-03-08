function triangle(n) {
  for (let counter = 1; counter <= n; counter += 1) {
    console.log(' '.repeat(n - counter) + '*'.repeat(counter));
  }
}