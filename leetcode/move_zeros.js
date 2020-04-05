var moveZeroes = function (nums) {
  var length = nums.length;

  var i = 0
  while (i < length) {

    // console.log(`i: ${i} - ${nums[i]} - nums (before): ${nums}`)
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
      length--;
    } else {
      i++;
    }
  }

};

var input = [0, 1, 0, 3, 12];
// var input = [0, 0, 1];

moveZeroes(input);

console.log(`results: ${input}`);
