// Important Note: The quick sorting makes the job done, but
// it more suits for the count sorting, it will be more 
// quicker.
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

function activityNotifications(expenditure, d) {
  var meanList = [];
  var notificationsNo = 0;
  var isOdd = d % 2;

  // console.log(`isOdd: ${isOdd}`);

  for (let i = 0; i < d; i++) {
    meanList.push(expenditure[i]);
  }

  // console.log(`meanList: ${meanList}`);


  for (let i = d; i < expenditure.length; i++) {
    let median;
    var clone = JSON.parse(JSON.stringify(meanList));

    if (isOdd) {
      median = quickSelect(clone, 0, meanList.length - 1,
        Math.floor(meanList.length / 2));
    } else {
      // median = (quickSelect(clone, 0, meanList.length - 1,
      //   meanList.length / 2) + quickSelect(meanList, 0, meanList.length - 1,
      //     (meanList.length / 2) - 1)) / 2;

      let firstMiddle = quickSelect(clone, 0, meanList.length - 1,
        meanList.length / 2);
      median = (firstMiddle + clone[(meanList.length / 2) - 1]) / 2;
    }

    // console.log(`expenditure[i] : ${expenditure[i]}`);
    // console.log(`median : ${median}`);

    if (expenditure[i] >= (2 * median)) {
      notificationsNo++;
      // console.log('incremented')
    }

    // update the meanlist.
    meanList.shift();
    meanList.push(expenditure[i]);

    // console.log(`updated list: ${meanList}\n\n`)

  }

  return notificationsNo;

}

// var list = [2, 3, 4, 2, 3, 6, 8, 4, 5];
// var d = 5;
var list = [1, 2, 3, 4, 4];
var d = 4;
console.log(activityNotifications(list, d));