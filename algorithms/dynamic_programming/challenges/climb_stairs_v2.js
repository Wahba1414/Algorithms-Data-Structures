var cache = {};

function engineR(n, steps) {
  if ((n + '_' + steps) in cache) {
    return cache[n + '_' + steps];
  } else if (steps > n) {
    return 0;
  } else if (steps == n) {
    return 1;
  } else {
    // return engineR(n, steps + 1) + engineR(n, steps + 2);
    cache[n + '_' + steps] = engineR(n, steps + 1) + engineR(n, steps + 2);
    //  console.log(cache)
    return cache[n + '_' + steps]
  }
};

var climbStairs = function (n) {
  cache = {};
  return engineR(n, 0);
};

var stairs = 100;
console.log(`Distinct Paths: ${climbStairs(stairs)}`);