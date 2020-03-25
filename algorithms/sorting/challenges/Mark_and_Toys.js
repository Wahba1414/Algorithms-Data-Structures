// Complete the maximumToys function below.
function maximumToys(list, k) {
  // Insertion sort.
  for (let i = 1; i < list.length; i++) {

    let elemToInsert = list[i];

    for (let j = i - 1; j >= 0; j--) {

      if ((j == 0) && (elemToInsert < list[j])) {

        list.unshift(list.splice(i, 1)[0]);

      } else if ((elemToInsert < list[j]) &&
        (elemToInsert >= list[j - 1])) {
        // Note: it is just '<' not '<=' to handle the repeated values and avoid unneeded shifts.
        // Insert.
        list.splice(j, 0, list.splice(i, 1)[0]);
        break;
      }
    }
    // console.log(`inprogress: ${JSON.stringify(list)}`);
  }

  // count.
  var totalPrice = 0;

  for (let i = 0; i < list.length; i++) {
    if (totalPrice + list[i] <= k) {
      totalPrice += list[i];
    } else {
      return i
    }
  }

}

// with Quick Sort.
var quickSort = require('../quick_sort_v3');

function maximumToys2(list, k) {
  quickSort(list, 0, list.length - 1);
  // count.
  var totalPrice = 0;

  for (let i = 0; i < list.length; i++) {
    if (totalPrice + list[i] <= k) {
      totalPrice += list[i];
    } else {
      return i
    }
  }
}

var list = [1, 12, 5, 111, 200, 1000, 10];
var k = 50;
console.log(maximumToys2(list, k));