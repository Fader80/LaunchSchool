let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => a.filter(elem => elem % 2 === 1).reduce((acc,elem) => acc + elem) 
- b.filter(elem => elem % 2 === 1).reduce((acc,elem) => acc + elem));

console.log(arr);