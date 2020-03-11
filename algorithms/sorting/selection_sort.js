//O(n^2)
function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {

    // To get the minmum
    let minIndex = i;
    let minValue = list[minIndex];

    for (let j = i; j < list.length; j++) {
      if (list[j] < minValue) {
        minIndex = j;
        minValue = list[j]
      }
    }

    // swap.
    let temp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = temp;

  }
}

var list = [10, 2, 5, 4, 8, 12, 9, 20, 12,40,34,32,50];
selectionSort(list);
console.log(list);


module.exports = selectionSort;