/**
 * 
 * @param {Array} arr 
 */
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  var swapCount = 0;

  for (let index = 0; index < arr.length; index++) {

    if (arr[index] != (index + 1)) {

      while (arr[index] != (index + 1)) {

        // swap.
        let temp = arr[index];
        arr[index] = arr[arr[index] - 1];
        arr[temp - 1] = temp;

        // console.log(`arr: ${arr}`);

        // increment the counter.
        swapCount++;
      }


    }

  };

  return swapCount;

}

var arr = [1, 3, 5, 2, 4, 6, 7];
console.log(`min swap count: ${minimumSwaps(arr)}`);