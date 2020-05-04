/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  var binaryStr = num.toString(2).split('');

  binaryStr.forEach((char, i) => {
    if (char == 1) {
      binaryStr[i] = 0;
    } else {
      binaryStr[i] = 1;
    }
  });

  return parseInt(binaryStr.join(''),2)

};

findComplement(5)