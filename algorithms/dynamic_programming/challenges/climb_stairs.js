/**
 * @param {number} n
 * @return {number}
 */
var distinctPaths = 0;
var movesList = [1, 2];
var cache = {}


function stepEngineR(n, totalSteps) {
  if (totalSteps == n) {
    distinctPaths++;
  } else {
    movesList.forEach(function (move) {
      if ((totalSteps + move) <= n) {
        stepEngineR(n, totalSteps + move);
      }
    });
  }
}

var climbStairs = function (n) {
  distinctPaths = 0;
  stepEngineR(n, 0);
  return distinctPaths;
};

console.log(`Distinct pathes: ${climbStairs(8)}`)