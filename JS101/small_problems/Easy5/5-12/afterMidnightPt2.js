const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

function hourMinHelper(argTime) {
  let timeArr = argTime.split(':');
  let hours = timeArr[0];
  let mins = timeArr[1];

  return [hours, mins];
}

function afterMidnight(argTime) {
  let [hours, mins] = hourMinHelper(argTime);
  let totalMins = (hours * MINUTES_PER_HOUR) + Number(mins);

  if (totalMins === MINUTES_PER_DAY) {
    totalMins = 0;
  }
  return totalMins;

}

function beforeMidnight(argTime) {
  let [hours, mins] = hourMinHelper(argTime);
  let totalMins = (hours * MINUTES_PER_HOUR) + Number(mins);

  if (totalMins === 0) {
    totalMins = MINUTES_PER_DAY;
  }

  return MINUTES_PER_DAY - totalMins;
}