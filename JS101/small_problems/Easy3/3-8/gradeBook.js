function getGrade(score1, score2, score3) {
  let totScore  = score1 + score2 + score3;
  let avgScore = totScore / 3;

  switch (true) {
    case avgScore >= 90 && avgScore <= 100 :
      return 'A';
    case avgScore >= 80 && avgScore < 90 :
      return 'B';
    case avgScore >= 70 && avgScore < 80 :
      return 'C';
    case avgScore >= 60 && avgScore < 70 :
      return 'D';
    case avgScore >= 0 && avgScore < 60 :
      return 'F';
  }
}