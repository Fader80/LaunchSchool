function minilang(argStr) {
  let stack  = [];
  let register = 0;

  let commandArr = argStr.split(' ');

  commandArr = commandArr.map(elem => {
    let parsed = parseInt(elem);
    if (Number.isNaN(parsed)) {
      return elem;
    } else {
      return parsed;
    }
  });


  for (let idx = 0; idx < commandArr.length; idx++) {
    let currCommand = commandArr[idx];

    console.log(stack, register);
    switch (true) {
      case currCommand === `PRINT` : {
        console.log(register);
          break;
      } case Number.isInteger(currCommand) : {

        register = currCommand;
        break;
      } case currCommand === `PUSH` : {
        stack.push(register);
        break;
      } case currCommand === `ADD` : {
        register += stack.pop();
        break;
      } case currCommand === `SUB` : {
        register -= stack.pop();
        break;
      } case currCommand === 'MULT' : {
        register *= stack.pop();
        break;
      } case currCommand === 'DIV' : {
        register = Math.floor(register / stack.pop());
        break;
      } case currCommand === 'REMAINDER' : {

        register %= stack.pop();
        break;
      } case currCommand === 'POP' : {
        register = stack.pop();
        break;
      }
  }
}

}
