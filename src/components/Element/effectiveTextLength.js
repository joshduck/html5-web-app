// Simple quick and dirty normalization accounting for variable letter widths

const LETTER_WIDTHS = {
  w: 1.6,
  m: 1.6,
  f: 0.6,
  t: 0.6,
  j: 0.6,
  i: 0.3,
  l: 0.3
};

const widthForLetter = letter => LETTER_WIDTHS[letter] || 1;

export default text =>
  text
    .split("")
    .map(widthForLetter)
    .reduce((acc, val) => acc + val, 0);
