function xorMatrix(m, first_row) {
  /*
   * Write your code here.
   */
  var previousRow = first_row;
  var currentRow = [];

  var columns = first_row.length;

  for (let i = 1; i < m; i++) {

    for (var j = 0; j < columns - 1; j++) {
      currentRow[j] = previousRow[j] ^ previousRow[j + 1];
    }

    currentRow[j] = previousRow[0] ^ previousRow[j];

    previousRow = currentRow;

    currentRow = [];

  }

  // console.log(previousRow)
  return previousRow;


}

var m = 2, first_row = [6, 7, 1, 3];

console.log(xorMatrix(m, first_row));