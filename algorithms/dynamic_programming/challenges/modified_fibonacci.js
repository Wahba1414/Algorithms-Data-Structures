// Complete the fibonacciModified function below.
function fibonacciModified(t1, t2, n, cache) {
  cache = cache || {};

  if (n in cache)
    return cache[n];

  if (n == 1) {
    return t1;
  } else if (n == 2) {
    return t2;
  }

  cache[n] = fibonacciModified(t1, t2, n - 2, cache) + (Math.pow(fibonacciModified(t1, t2, n - 1, cache), 2));

  return cache[n];
}

var t1 = 0;
var t2 = 1;
var n = 5;

console.log(fibonacciModified(t1, t2, n));