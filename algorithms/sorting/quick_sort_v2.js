function quickSort(list, start, end) {
  var len = end - start + 1;

  // Choose the pivot.
  var pivotIndex = end;

  console.log(`start=${start} , end=${end} , len=${len}`);
  console.log(`list: ${list.slice(start, start + len)}`)
  console.log(`pivot: index = ${pivotIndex} _ value = ${list[pivotIndex]}`);

  // Arrange the list according to this pivot.
  pivotIndex = arrangeListByPivot(list, start, len, pivotIndex);



  console.log(`new pivot: index = ${pivotIndex} _ value = ${list[pivotIndex]}`);
  console.log(`new list: ${JSON.stringify(list)}`);
  console.log(`left: ${list.slice(0, pivotIndex)}`);
  console.log(`right: ${list.slice(pivotIndex + 1, len)}\n\n`);

  // do recursion on the right & left sub lists or just return if the length is <= 2
  if (len <= 2) {
    return;
  }

  quickSort(list, 0, pivotIndex - 1);
  quickSort(list, pivotIndex + 1, len - 1);

  return list;
}

// Helper functions.


// This function arranges the list according to the pivot and finally returns the new index of this pivot.
function arrangeListByPivot(list, start, len, pivotIndex) {
  for (let i = len - 2; i >= start; i--) {
    if (list[i] > list[pivotIndex]) {
      console.log(`list[i]=${list[i]}_list[pivotIndex]=${list[pivotIndex]}`);
      // do two swaps.
      if ((pivotIndex - i) != 1) {
        [list[pivotIndex], list[pivotIndex - 1]] = [list[pivotIndex - 1], list[pivotIndex]];
        console.log(`list #1: ${list.slice(start, len)}`)
      }

      [list[pivotIndex], list[i]] = [list[i], list[pivotIndex]];
      console.log(`list #2: ${list.slice(start, len)}`)

      // The new index for the pivot
      pivotIndex--;
    }
  }

  return pivotIndex;
}




// var list = [10, 2, 5, 4, 8, 12, 9, 20, 12, 40, 34, 32, 50];

var list = [10, 2, 5, 4, 8, 12, 9, 20, 40, 34, 32, 50];

// var list = [10, 2, 5, 4, 8, 12];

console.log(quickSort(list, 0, list.length - 1));

module.exports = quickSort;