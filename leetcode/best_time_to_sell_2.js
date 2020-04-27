/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var buy = prices[0], sell = null;
  var totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    
    if ((buy == null) || ((sell == null && prices[i] < buy))) {
      buy = prices[i];
    } else if ((sell == null && prices[i] > buy) || (prices[i] > sell)) {
      sell = prices[i];
    } else if (sell && (prices[i] < sell)) {
      totalProfit += (sell - buy);
      buy = prices[i];
      sell = null;
    }

  }

  if (sell != null && buy != null) {
    totalProfit += (sell - buy);
  }

  return totalProfit;
}



// var prices = [7, 1, 5, 3, 6, 4];
// var prices2 = [1, 2, 3, 4, 5];
// var prices3 = [7, 6, 4, 3, 1];
var prices = [2, 1, 2, 0, 1];

console.log(`max Profit: ${maxProfit(prices)}`);
// console.log(`max Profit: ${maxProfit(prices2)}`);
// console.log(`max Profit: ${maxProfit(prices3)}`);
