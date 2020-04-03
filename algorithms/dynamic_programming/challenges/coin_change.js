function waysToReturnChange(denominations, numOfCoins, amount) {

  if (amount === 0) return 1; // Perfect!

  if (amount < 0) return 0; // No solution exists for negative amount

  if (numOfCoins < 0 && amount > 0) return 0; // We don't have coins left!

  // console.log('checking ways to make ' + amount + ' with ' + denominations.slice(numOfCoins));

  return waysToReturnChange(denominations, numOfCoins, amount - denominations[numOfCoins]) +
    waysToReturnChange(denominations, numOfCoins - 1, amount);
}

var denominations = [1, 2, 3];
var amount = 4;
var ways = waysToReturnChange(denominations, denominations.length - 1, amount);
console.log(`ways: ${ways}`);