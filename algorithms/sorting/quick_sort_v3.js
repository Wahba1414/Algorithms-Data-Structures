function quickSort(list, start, end) {
  // Choose the pivot.
  var pivotIndex = end;
  // Arrange the list according to this pivot.
  pivotIndex = arrangeListByPivot(list, start, end, pivotIndex);

  // console.log(`array: ${list}`)
  // do recursion on the right & left sub lists or just return if the length is <= 2
  if ((end - start + 1) <= 2) return;

  quickSort(list, 0, pivotIndex - 1);
  quickSort(list, pivotIndex + 1, end);

  return list;
}

// Helper functions.
// This function arranges the list according to the pivot and finally returns the new index of this pivot.
function arrangeListByPivot(list, start, end, pivotIndex) {

  for (let i = end - 1; i >= start; i--) {

    if (list[i] > list[pivotIndex]) {

      // do two swaps.
      if ((pivotIndex - i) != 1) {
        [list[pivotIndex], list[pivotIndex - 1]] = [list[pivotIndex - 1], list[pivotIndex]];
        // console.log('swap');
      }

      [list[pivotIndex], list[i]] = [list[i], list[pivotIndex]];
      // console.log('swap');

      // The new index for the pivot
      pivotIndex--;

    }

  }

  return pivotIndex;
}


// var list = [10, 2, 5, 4, 8, 12, 9, 20, 12, 40, 34, 32, 50];

// const list = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// var list = [10, 2, 5, 4, 8, 12, 9, 20, 40, 34, 32, 50];

// var list = [10, 2, 5, 4, 8, 12];

var list = [7, 15, 12, 3];

console.log(quickSort(list, 0, list.length - 1));

module.exports = quickSort;