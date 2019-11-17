function maximizingXor(l, r) {
  var max = 0;
  var currentValue;

  for (let i = l; i <= r; i++) {
    for (let j = l; j <= r; j++) {
      currentValue = i ^ j;
      if (currentValue > max) max = currentValue;
    }
  }

  return max;

}

var l = 10, r = 15;

console.log(maximizingXor(l,r));