function birthdayCakeCandles(arr) {
  var candles = {};
  var tallest = 0;

  arr.forEach(elem => {
    if (elem > tallest)
      tallest = elem;

    candles[elem] = candles[elem] || 0;
    candles[elem]++;
  });



  return candles[tallest];

}