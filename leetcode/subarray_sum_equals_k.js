/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  var subarraysCount = 0;
  var tracker = { 0: 1 };
  var sum = 0;

  nums.forEach((num) => {
    sum += num;

    if ((sum - k) in tracker) {
      subarraysCount += tracker[sum - k];
    }

    tracker[sum] = tracker[sum] || 0;
    tracker[sum]++

  });

  return subarraysCount;

};

var nums = [1, 1, 1,1];
var k = 4;

console.log(`count: ${subarraySum(nums, k)}`)
