var cache = {};

// var allComibinations = [];

function engineR(n, steps, parts) {
  if ((n + '_' + steps) in cache) {
    return cache[n + '_' + steps];
  } else if (steps > n) {
    return 0;
  } else if (steps == n) {
    return 1;
  } else {
    cache[n + '_' + steps] = 0;

    parts.forEach(part => {
      cache[n + '_' + steps] += engineR(n, steps + part, parts)
    });

    return cache[n + '_' + steps];
  }
};

var possibleCombinations = function (n, parts) {
  cache = {};
  return engineR(n, 0, parts);
};

var stairs = 4;
var parts = [1, 2 , 3];
console.log(`Distinct Paths: ${possibleCombinations(stairs, parts)}`);