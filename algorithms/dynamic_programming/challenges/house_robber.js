/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) {
    return 0;
  } else if (nums.length < 2) {
    return nums[0];
  }

  var results = [];

  results[0] = nums[0];
  results[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    results[i] = Math.max(results[i - 1], results[i - 2] + nums[i])
  }

  return results.pop();
};

var nums = [10, 2, 3, 20]
console.log(`maximum profit: ${rob(nums)}`);