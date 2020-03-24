var QuickSort = require('../quick_sort_v3');

function closestNumbers(arr) {
  var sortedArray = QuickSort(arr, 0, arr.length - 1);

  var results = {
    min: null,
    pairs: [], // array of pairs.
  }

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let diff = Math.abs(sortedArray[i] - sortedArray[i + 1]);

    if (results.min == diff) {
      results.pairs.push(sortedArray[i], sortedArray[i + 1]);
    } else if ((results.min == null) || (results.min > diff)) {
      results.min = diff;
      // clear first.
      results.pairs = [];
      results.pairs.push(sortedArray[i], sortedArray[i + 1]);
    }

  }

  console.log(results.pairs.join(' '));

}

var arr = [5, 4, 3, 2];

closestNumbers(arr);
