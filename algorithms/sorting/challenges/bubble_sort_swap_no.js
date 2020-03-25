// Complete the countSwaps function below.
function countSwaps(list) {
  var swapCounts = 0;

  for (let i = 0; i < list.length; i++) {

    for (let j = 1; j < list.length; j++) {
      if (list[j] < list[j - 1]) {
        // swap
        let temp = list[j];
        list[j] = list[j - 1];
        list[j - 1] = temp;

        swapCounts++;
      }
    }
  }

  console.log(`Array is sorted in ${swapCounts} swaps.`);
  console.log(`First Element: ${list[0]}`);
  console.log(`Last Element: ${list[list.length - 1]}`);

}

var list = [3, 2, 1];

countSwaps(list);