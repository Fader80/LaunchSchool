const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

function hourMinHelper(argTime) {
  const MY_DATE = new Date(`March 22, 2021 ${argTime}:00`);
  let hours = MY_DATE.getHours();
  let mins = MY_DATE.getMinutes();

  return [hours, mins];
}

function afterMidnight(argTime) {
  let [hours, mins] = hourMinHelper(argTime);
  let totalMins = (hours * MINUTES_PER_HOUR) + mins;

  if (totalMins === MINUTES_PER_DAY) {
    totalMins = 0;
  }
  return totalMins;

}

function beforeMidnight(argTime) {
  let [hours, mins] = hourMinHelper(argTime);
  let totalMins = (hours * MINUTES_PER_HOUR) + mins;

  if (totalMins === 0) {
    totalMins = MINUTES_PER_DAY;
  }

  return MINUTES_PER_DAY - totalMins;
}
