/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  var count = 0;
  var tracking = {};

  for (let i = 0; i < arr.length; i++) {

    if (tracking[arr[i] + 1]) {
      count++;
    }

    if ((tracking[arr[i] - 1]) && (!tracking[arr[i]])) {
      count += tracking[arr[i] - 1];
    }

    tracking[arr[i]] = tracking[arr[i]] || 0;
    tracking[arr[i]]++;

  }

  return count;
};

var arr = [1, 3, 2, 3, 5, 0];
// var arr = [1, 2, 3];
// var arr = [1, 1, 2, 2];

console.log(`output: ${countElements(arr)}`);