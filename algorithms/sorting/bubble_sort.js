//O(n^2)
function bubbleSort(list) {
  for (let i = 0; i < list.length; i++) {

    for (let j = 1; j < list.length; j++) {
      if (list[j] < list[j - 1]) {
        // swap
        let temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;
      }
    }
  }
}

var list = [10, 2, 5, 4, 8, 12, 9, 20, 12];
bubbleSort(list);
console.log(list);


module.exports = bubbleSort;