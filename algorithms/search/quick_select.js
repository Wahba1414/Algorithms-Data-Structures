// To get the kth smallest number in the list.
function quickSelect(list, start, end, k) {
  // Choose the pivot.
  var pivotIndex = end;
  // Arrange the list according to this pivot.
  pivotIndex = arrangeListByPivot(list, start, end, pivotIndex);

  if ((end - start + 1) <= 2) {
    return list[k];
  }

  if (pivotIndex == k) {

    return list[pivotIndex];

  } else if (pivotIndex > k) {

    // go left.
    return quickSelect(list, 0, pivotIndex - 1, k);

  } else {

    // go right
    return quickSelect(list, pivotIndex + 1, end, k);

  }

}

// Helper functions.


// This function arranges the list according to the pivot and finally returns the new index of this pivot.
function arrangeListByPivot(list, start, end, pivotIndex) {

  for (let i = end - 1; i >= start; i--) {

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

// var list = [0, 1, 2, 4, 6, 5, 3];

// var list = [10, 4, 5, 8, 6, 11, 26];
// console.log(`starting list: ${list}`);
// console.log(`K: ${Math.floor(list.length / 2)}`);
// console.log(quickSelect(list, 0, list.length - 1, Math.floor(list.length / 2)))

var list = [7, 10, 4, 3, 20, 15];
// console.log(`list: ${JSON.stringify(list)}`);
console.log(quickSelect(list, 0, list.length - 1, 2));
