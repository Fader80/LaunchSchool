function fridayThe13ths(argYear) {
  let thirteenCount = 0;
  let monthArr = ['January', 'February', 'March', 'April', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  for (let idx = 0; idx < monthArr.length; idx++) {
    let currMonth = monthArr[idx];

    let date = new Date(`${currMonth} 13, ${argYear}`);

    if (date.getDay() === 5) thirteenCount++;
}

  return thirteenCount;
}