/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // stop conditions.
  if (!nums.length) {
    return -1;
  }

  return searchHelper(nums, 0, nums.length - 1, target);

};

function searchHelper(nums, start, end, target) {
  if ((end - start + 1) <= 2) {
    for (let i = start; i <= end; i++) {
      if (nums[i] == target) {
        return i;
      }
    }
    return -1;
  }

  // get the middle.
  var middle = Math.floor((end - start + 1) / 2);
  // var left = nums.slice(0, middle);
  // var right = nums.slice(middle, nums.length);

  // Decide which part will be the next.

  if ((nums[start] <= nums[start + middle - 1]) && (inBetween(nums[start], nums[start + middle - 1], target))) {
    return searchHelper(nums, start, start + middle - 1, target);
  } else if ((nums[start + middle] <= nums[end]) && (inBetween(nums[start + middle], nums[end], target))) {
    return searchHelper(nums, start + middle, end, target);
  }

  if (nums[start] > nums[start + middle - 1]) {
    return searchHelper(nums, start, start + middle - 1, target);
  } else if (nums[start + middle] > nums[end]) {
    return searchHelper(nums, start + middle, end, target);
  }

  return -1;

}

function inBetween(start, end, target) {
  return ((start <= target) && (end >= target));
}

var nums = [4, 5, 6, 7, 0, 1, 2];
var target = 7;

console.log(`Number index: ${search(nums, target)}`)