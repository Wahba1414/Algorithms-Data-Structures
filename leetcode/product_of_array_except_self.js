/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Won't work if there is a zero in nums.
var productExceptSelf = function (nums) {
  var total = 1;

  nums.forEach(function (num) {
    total *= num;
  });

  var result = [];

  nums.forEach(function (num, i) {
    result[i] = total / num;
  })

  return result;

};

// N^2
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   var result = [];

//   nums.forEach(function (item, i) {
//     result[i] = 1;
//   });

//   console.log(result)

//   nums.forEach(function (num, i) {
//     result.forEach(function (_, j) {
//       if (i != j) {
//         result[j] *= num;
//       }
//     });
//   });

//   return result;

// };


// O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var L = [];
  var R = [];

  L[0] = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    L[i + 1] = L[i] * nums[i]
  }

  console.log(L);

  R[nums.length - 1] = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    R[i - 1] = R[i] * nums[i];
  }

  console.log(R);

  var result = [];

  nums.forEach(function (_, i) {
    result[i] = L[i] * R[i];
  })

  return result;
};

var nums = [1, 0, 3, 4];
console.log(`Result: ${productExceptSelf(nums)}`);