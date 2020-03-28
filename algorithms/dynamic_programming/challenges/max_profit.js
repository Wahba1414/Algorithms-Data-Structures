/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min, max;
  min = max = prices[0];

  var maximumProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      if (min >= 0 && max >= 0 && ((max - min) > maximumProfit)) {
        maximumProfit = max - min;
      }
      min = prices[i];
      max = -1;
    } else if (prices[i] > max) {
      max = prices[i]
    }
  }

  if (min >= 0 && max >= 0 && ((max - min) > maximumProfit)) {
    maximumProfit = max - min;
  }

  return maximumProfit;
  // return Math.max(profit, anotherProfit);

};

// var prices = [7, 1, 5, 3, 6, 4];
// var prices = [2,4,1];
var prices = [2, 1, 2, 1, 0, 1, 2];
console.log('max profit:', maxProfit(prices));