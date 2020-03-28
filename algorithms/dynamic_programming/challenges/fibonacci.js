// sequance: 0,1,1,2,3,5,8,13,21,34,65,99,..
// normal
var normalCalculationsNo = 0;
function fibonacciNormal(index) {
  normalCalculationsNo++;

  if (index <= 1) {
    return index;
  } else {
    return fibonacciNormal(index - 1) + fibonacciNormal(index - 2);
  }
}


var index = 4;
normalCalculationsNo = 0;
console.log(`Normal Result: index: ${index} -  Result: ${fibonacciNormal(index)} - calculations = ${normalCalculationsNo}`);

index = 6;
normalCalculationsNo = 0;
console.log(`Normal Result: index: ${index} -  Result: ${fibonacciNormal(index)} - calculations = ${normalCalculationsNo}`);

index = 10;
normalCalculationsNo = 0;
console.log(`Normal Result: index: ${index} -  Result: ${fibonacciNormal(index)} - calculations = ${normalCalculationsNo}`);

index = 15;
normalCalculationsNo = 0;
console.log(`Normal Result: index: ${index} -  Result: ${fibonacciNormal(index)} - calculations = ${normalCalculationsNo}`);

index = 20;
normalCalculationsNo = 0;
console.log(`Normal Result: index: ${index} -  Result: ${fibonacciNormal(index)} - calculations = ${normalCalculationsNo}`);

console.log(`\n\n`);
// Bottom up
var tabCalculationsNo = 0;
function fibonacciTabulation(index) {
  // list
  var list = [0, 1];
  for (let i = 2; i <= index; i++) {
    tabCalculationsNo++;
    list[i] = list[i - 1] + list[i - 2];
  }
  return list[index];
}

index = 4;
tabCalculationsNo = 0;
console.log(`Tabulation Result: index: ${index} -  Result: ${fibonacciTabulation(index)} - calculations = ${tabCalculationsNo}`);

index = 6;
tabCalculationsNo = 0;
console.log(`Tabulation Result: index: ${index} -  Result: ${fibonacciTabulation(index)} - calculations = ${tabCalculationsNo}`);

index = 10;
tabCalculationsNo = 0;
console.log(`Tabulation Result: index: ${index} -  Result: ${fibonacciTabulation(index)} - calculations = ${tabCalculationsNo}`);

index = 15;
tabCalculationsNo = 0;
console.log(`Tabulation Result: index: ${index} -  Result: ${fibonacciTabulation(index)} - calculations = ${tabCalculationsNo}`);

var index = 20;
tabCalculationsNo = 0;
console.log(`Tabulation Result: index: ${index} -  Result: ${fibonacciTabulation(index)} - calculations = ${tabCalculationsNo}`);


// Top down
var memoizationCalculationsNo = 0;
function fibonacciMemoizationMaster() {
  var cache = {};
  return function (index) {

    if (index in cache) {
      return cache[index];
    }

    memoizationCalculationsNo++;

    if (index <= 1) {
      cache[index] = index;
      return cache[index]
    } else {
      cache[index] = fibonacciMemoization(index - 1) + fibonacciMemoization(index - 2);
      return cache[index];
    }
  }
}

console.log('\n\n');

var fibonacciMemoization = fibonacciMemoizationMaster();
index = 4;
memoizationCalculationsNo = 0;
console.log(`Memoization Result: index: ${index} -  Result: ${fibonacciMemoization(index)} - calculations = ${memoizationCalculationsNo}`);

index = 6;
memoizationCalculationsNo = 0;
console.log(`Memoization Result: index: ${index} -  Result: ${fibonacciMemoization(index)} - calculations = ${memoizationCalculationsNo}`);

index = 10;
memoizationCalculationsNo = 0;
console.log(`Memoization Result: index: ${index} -  Result: ${fibonacciMemoization(index)} - calculations = ${memoizationCalculationsNo}`);

index = 15;
memoizationCalculationsNo = 0;
console.log(`Memoization Result: index: ${index} -  Result: ${fibonacciMemoization(index)} - calculations = ${memoizationCalculationsNo}`);

var index = 20;
memoizationCalculationsNo = 0;
console.log(`Memoization Result: index: ${index} -  Result: ${fibonacciMemoization(index)} - calculations = ${memoizationCalculationsNo}`);
