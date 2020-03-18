function quickSort(list) {
  var pivotIndex;

  // Choose the pivot.
  pivotIndex = choosePivot(list);

  // Arrange the list according to this pivot.
  pivotIndex = arrangeListByPivot(list, pivotIndex);

  // do recursion on the right & left sub lists or just return if the length is <= 2
  if (list.length <= 2) {
    return list;
  }

  var left = list.slice(0, pivotIndex);
  var right = list.slice(pivotIndex + 1);

  return merge(quickSort(left), list[pivotIndex], quickSort(right));
}

// Helper functions.
function choosePivot(list) {
  // lets keep it simple as a start by choosing the last item in the list.
  return list.length - 1;
}

// This function arranges the list according to the pivot and finally returns the new index of this pivot.
function arrangeListByPivot(list, pivotIndex) {
  for (let i = list.length - 2; i >= 0; i--) {
    if (list[i] > list[pivotIndex]) {
      // do two swaps.
      if ((pivotIndex - i) != 1) { 
        [list[pivotIndex], list[pivotIndex - 1]] = [list[pivotIndex - 1], list[pivotIndex]];
      }

      [list[pivotIndex], list[i]] = [list[i], list[pivotIndex]];

      // The new index for the pivot
      pivotIndex--;
    }
  }

  return pivotIndex;
}

function merge(left, pivot, right) {
  var array = [];

  return array.concat(left, pivot, right);
}


var list = [10, 2, 5, 4, 8, 12, 9, 20, 12, 40, 34, 32, 50];

// var list = [10, 2, 5, 4, 8, 12, 9, 20, 40, 34, 32, 50];

// var list = [10, 2, 5, 4, 8, 12];

console.log(quickSort(list));

module.exports = quickSort;