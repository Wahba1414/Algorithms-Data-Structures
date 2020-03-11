//O(n^2)
function insertionSort(list) {

  for (let i = 1; i < list.length; i++) {

    let elemToInsert = list[i];

    for (let j = i - 1; j >= 0; j--) {

      if ((j == 0) && (elemToInsert < list[j])) {

        list.unshift(list.splice(i, 1)[0]);

      } else if ((elemToInsert <= list[j]) &&
        (elemToInsert >= list[j - 1])) {
        // Insert.
        list.splice(j, 0, list.splice(i, 1)[0]);
        break;
      }
    }
    console.log(`inprogress: ${JSON.stringify(list)}`);
  }
}

var list = [10, 2, 5, 4, 8, 12, 9, 20, 12, 40, 34, 32, 50];
// var list = [10, 2, 5, 4, 8, 12];
console.log(`Start: ${JSON.stringify(list)}`);

insertionSort(list);
console.log(list);

module.exports = insertionSort;