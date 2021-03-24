const MS_PER_MINUTE = 60000;
const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function timeString(day, hours, mins) {

  if (hours.toString().length === 1) {
    hours = '0' + hours;
  }

  if (mins.toString().length === 1) {
    mins = '0' + mins;
  }

  return `${day} ${hours}:${mins}`;

}

function timeOfDay_FE(argInteger) {
  let midnightSunday = new Date('March 14, 2021 00:00:00');

  let resultDate = Number(midnightSunday) + (argInteger * MS_PER_MINUTE);

  resultDate = new Date(resultDate);


  let dayIndex = resultDate.getDay();

  let day = daysArr[dayIndex];

  let hours = resultDate.getHours();

  let mins = resultDate.getMinutes();

  return timeString(day, hours, mins);
}


