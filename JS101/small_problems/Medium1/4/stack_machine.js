const { type } = require("os");

function minilang(progStr) {

  let stack = [];
  let register = 0;

  let commandArr = progStr.split(' ');

  for (let idx = 0; idx < commandArr.length; idx++) {
    let currCommand = commandArr[idx];

    switch(currCommand) {
      case "PUSH" : {
        stack.push(register);
        break;
      }
      case "ADD" : {
        register += stack.pop();
        break;
      }
      case "SUB" : {
        register -= stack.pop();
        break;
      }
      case "MULT" : {
        register *= stack.pop();
        break;
      }
      case "DIV" : {
        register = Math.round(register / stack.pop());
        break;
      }
      case "REMAINDER" : {
        register %= stack.pop();
        break;
      }
      case "POP" : {
        register = stack.pop();
        break;
      }
      case "PRINT" : {
        console.log(register);
        break;
      }
      default : {
        register = parseInt(currCommand);
        break;
      }
    }
  }


}

//all commands tested and working

//FURTHER EXPLORATION:


function minilangFE(progStr) {

  let stack = [];
  let register = 0;
  let validTokens = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'POP', 'PRINT'];

  let commandArr = progStr.split(' ');

  for (let idx = 0; idx < commandArr.length; idx++) {
    let currCommand = commandArr[idx];

    if (!validTokens.includes(currCommand) && Number.isNaN(Number(currCommand))) {
      throw new ReferenceError('program contains invalid token/s');
    }

    switch(currCommand) {
      case "PUSH" : {
        stack.push(register);
        break;
      }
      case "ADD" : {
        if (Number.isNaN(register += stack.pop())) {
          throw new ReferenceError('no value exists to pop from the stack');
        }
        break;
      }
      case "SUB" : {
        if (Number.isNaN(register -= stack.pop())) {
          throw new ReferenceError('no value exists to pop from the stack');
        }
        break;
      }
      case "MULT" : {
        if (Number.isNaN(register *= stack.pop())) {
          throw new ReferenceError('no value exists to pop from the stack');
        }
        break;
      }
      case "DIV" : {
        if (Number.isNaN(register = Math.round(register / stack.pop()))) {
          throw new ReferenceError('no value exists to pop from the stack');
        }
        break;
      }
      case "REMAINDER" : {
        if (Number.isNaN(register %= stack.pop())) {
          throw new ReferenceError('no value exists to pop from the stack');
        }
        break;
      }
      case "POP" : {
        if ((register = stack.pop()) === undefined) {
          throw new ReferenceError('no value exists to pop from the stack');
        }
        break;
      }
      case "PRINT" : {
        console.log(register);
        break;
      }
      default : {
        register = parseInt(currCommand);
        break;
      }
    }
  }


}


//FE solution tested and working