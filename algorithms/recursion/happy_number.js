/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n, previousResults) {
  var sum = n.toString().split('').
    map(num => num * num).reduce((past, current) => past + current);

  if (sum == 1) {
    return true;
  } else if (previousResults.includes(sum)) {
    return false;
  }


  previousResults.push(sum);

  return isHappy(sum, previousResults);
};

console.log(isHappy(12, []));