function dms(argNum) {
  let sec;
  let roundNum;

  if (argNum < 0 || argNum > 360) {
    roundNum = (argNum % 360) + 360;
  } else {
    roundNum = Math.floor(argNum);
  }

  if (argNum === roundNum) {
    return `${argNum}°00'00"`;
  }

  let fracPart = argNum - roundNum;

  let totSec = fracPart * 3600;

  let min = Math.floor(totSec / 60);

  if (min === (totSec / 60)) {
    sec = '00';
  } else {
    sec = Math.floor(((totSec / 60) - min) * 60);
  }

  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  let resultStr = `${roundNum}°${min}'${sec}"`;

  return resultStr;

}

//the min and sec portion are not working but the main aim of the FE is working
//i.e. dealing with arguments less than 0 or more than 360
//the min and sec could be fixed with tweaking

