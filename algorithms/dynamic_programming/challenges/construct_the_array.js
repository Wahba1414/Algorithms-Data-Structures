// function countArray(n, k, x, index, prevNum) {
//   // Return the number of ways to fill in the array.
//   // base cases.
//   if (index == (n - 1)) {
//     if (prevNum == x) {
//       return 0;
//     } else {
//       return 1;
//     }
//   }

//   var result = 0;
//   for (let newNum = 1; newNum <= k; newNum++) {
//     if (newNum != prevNum) {
//       result += countArray(n, k, x, index + 1, newNum);
//     }
//   }

//   return result;

// }

function subProbR(n, k, x, index, prevNum, cache) {
  // Return the number of ways to fill in the array.
  // base cases.
  if ((index + '_' + prevNum) in cache) {
    return cache[index + '_' + prevNum];
  }

  if (index == (n - 1)) {
    if (prevNum == x) {
      return 0;
    } else {
      return 1;
    }
  }

  var result = 0;
  for (let newNum = 1; newNum <= k; newNum++) {
    if (newNum != prevNum) {
      result += subProbR(n, k, x, index + 1, newNum, cache);
    }
  }

  cache[index + '_' + prevNum] = result;

  return result;
}

function countArray(n, k, x) {
  var index = 1;
  var prevNum = 1;

  var cache = {};

  return subProbR(n, k, x, index, prevNum, cache);
}


var n = 4;
var k = 3;
var x = 2;
var index = 1;
var prevNum = 1;

var results = countArray(n, k, x, index, prevNum);

console.log(`results: ${results}`);