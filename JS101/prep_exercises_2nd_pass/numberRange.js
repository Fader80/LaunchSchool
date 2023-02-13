function numberRange(num) {
switch(true) {
  case num < 0: {
    console.log(`${num} is less than 0`);
   break;
   }
   case num >= 0 && num <= 50: {
    console.log(`${num} is between 0 and 50`);
    break;
    }
    case num > 50 && num <= 100: {
    console.log(`${num} is between 51 and 100`);
    break;
    }
    default: {
    console.log(`${num} is greater than 100`);
    break;
    }
    }
}

numberRange(-25);
