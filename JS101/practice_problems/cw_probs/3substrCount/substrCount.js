function solution(fullText, searchText) {
  let count = 0;
  const SEARCH_LENGTH = searchText.length;

  let idx = 0;

  while (idx < fullText.length) {
    let currPortion = fullText.slice(idx, idx + SEARCH_LENGTH);
    if (currPortion === searchText) {
      count++;
      idx += SEARCH_LENGTH;
    } else {
      idx++;
    }

  }

  return count;
}

solution("aa_bb_cc_dd_bb_e", "bb");
