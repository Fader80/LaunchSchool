//remainder method:

function timeOfDay(argInteger) {
  let absInteger = Math.abs(argInteger);
  let totalMins;

  if (argInteger < 0) {
    totalMins = 1440 - (absInteger % 1440);
  } else {
    totalMins = absInteger % 1440;
  }

  let minPortion = totalMins % 60;
  let hourPortion = (totalMins - minPortion) / 60;

  return `${hourPortion.toString().length === 1 ? '0' + hourPortion : hourPortion}:${minPortion.toString().length
   === 1 ? '0' + minPortion : minPortion}`;

}

//counter resetting method w/loop:

function timeOfDayCounter(argInteger) {
  let absInteger = Math.abs(argInteger);
  let hours;
  let mins;

  if (argInteger >= 0) {
    [hours, mins] = positiveVals(absInteger);
  } else {
    [hours, mins] = negativeVals(absInteger);
  }

  return `${hours.toString().length === 1 ? '0' + hours : hours}:${mins.toString().length === 1 ? '0' + mins : mins}`;

}

//helper function for dealing with positive integer arguments
function positiveVals(absInt) {
  let hours = 0;
  let mins = 0;

  for (let idx = 0; idx < absInt; idx++) {
    mins += 1;
    if (mins > 59) {
      hours += 1;
      mins = 0;
    }
    if (hours > 23) {
      hours = 0;
    }
  }
  return [hours, mins];
}

//helper function for dealing with negative integer arguments
function negativeVals(absInt) {
  let hours = 23;
  let mins = 59;

  for (let idx = 1; idx < absInt; idx++) {
    mins -= 1;
    if (mins < 0) {
      hours -= 1;
      mins = 59;
    }
    if (hours < 0) {
      hours = 23;
    }
  }
  return [hours, mins];
}
