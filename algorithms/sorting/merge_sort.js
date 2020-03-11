function mergeSort(list) {
  // divide the list to two halfs.
  // recursions.
  if (list.length < 2) {
    return list;
  }

  var middle = Math.floor(list.length / 2);
  var right = list.slice(middle);
  var left = list.slice(0, middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }

  return array.concat(left, right);
}


var list = [10, 2, 5, 4, 8, 12, 9, 20, 12, 40, 34, 32, 50];
// var list = [10, 2, 5, 4, 8, 12];

console.log(mergeSort(list));

module.exports = mergeSort;