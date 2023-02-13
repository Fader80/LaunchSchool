let arr = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (var i = 0; i < arr.length; i++) {
  let upperCaseName = arr[i].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);
