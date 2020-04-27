/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  // Special case
  var tracking = {};
  var maxLen = 0;
  var counter = 0;

  nums.forEach(function (num, index) {
    counter += (num == 1) ? 1 : -1;

    if (counter == 0) {
      maxLen = Math.max(maxLen, index + 1);
    } else if (counter in tracking) {
      maxLen = Math.max(maxLen, index - tracking[counter]);
    } else {
      tracking[counter] = index;
    }
    
  });

  return maxLen;

};

var nums = [0, 1];
