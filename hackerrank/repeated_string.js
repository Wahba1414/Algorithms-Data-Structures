function repeatedString(s, n) {
  s = s.toLowerCase();
  var characterList = s.split('');

  if (characterList.length < 1 || characterList.length > 100 ||
    n < 1 || (n > 1000000000000)) {
    return 0;
  }

  var aOccurancesInsideRepeatedString = 0;
  var aOccurancePartialCount = 0;

  var countOfCompletedRepeats = parseInt(n / characterList.length);

  var partialCount = n % characterList.length;


  characterList.forEach(function (char, index) {
    if (char == 'a') {

      if (index < partialCount) {
        aOccurancePartialCount++;
      }

      aOccurancesInsideRepeatedString++;
    }
  });

  var total = (countOfCompletedRepeats * aOccurancesInsideRepeatedString) + aOccurancePartialCount;

  return total;


}