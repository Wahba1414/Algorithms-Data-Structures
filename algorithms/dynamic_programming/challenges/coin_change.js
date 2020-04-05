function getWays(n, c, index, cache) {
  cache = cache || {};

  if ((n + '_' + c[index]) in cache) {
    return cache[n + '_' + c[index]];
  }

  if (n == 0)
    return 1;

  if (index < 0 || n < 0)
    return 0;

  return cache[n + '_' + c[index]] = getWays(n - c[index], c, index, cache) +
    getWays(n, c, index - 1, cache);
}

var n = 10000;
var c = [2, 5, 3, 6 , 9, 10, 20, 30,22,40];

console.log(`# of ways: ${getWays(n, c, c.length - 1)}`);