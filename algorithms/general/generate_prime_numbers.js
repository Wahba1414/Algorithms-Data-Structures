function generatePrimes(maximum) {
  var notPrimes = {};
  var primes = [];


  for (let i = 2; i <= maximum; i++) {

    // if this number is not present in this object, so it is not a mulitpliction of any other prime number,
    //  so it's a prime.
    if (!notPrimes[i]) {

      // is a prime number.
      primes.push(i);

      // Now the time to exclude all its multipilcation (in advance) till the maximum because for sure,
      //  they are not primes.
      for (let j = 2 * i; j <= maximum; j += i) {
        notPrimes[j] = true;
      }
    }

  }

  return primes;


}

console.log(generatePrimes(50));