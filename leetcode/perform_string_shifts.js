/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  var totalShiftToRight = 0;

  shift.forEach(function (item) {
    switch (item[0]) {
      case 0:
        // shift left
        totalShiftToRight -= item[1];
        break;

      case 1:
        // shift right
        totalShiftToRight += item[1];
        break;
    }
  });

  console.log(`totalShiftToRight: ${totalShiftToRight}`);
  if (totalShiftToRight == 0) return s;

  if (totalShiftToRight > 0) {
    // Need to shift right.
    for (let i = totalShiftToRight; i > 0; i--)
      s = s[s.length - 1] + s.slice(0, s.length - 1);

  } else {
    // Need to shift left.
    for (let i = totalShiftToRight; i < 0; i++)
      s = s.slice(1, s.length) + s[0];

  }

  return s;

};

var s = 'abcdefg';
var shift = [[1, 1], [1, 1], [0, 2], [1, 3]];

console.log(`shifted string: ${stringShift(s, shift)}`);