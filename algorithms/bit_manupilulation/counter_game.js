function counterGame(n) {
  var isStarter = true; //Louise here for this game.
  var log2;

  while (n > 1) {
    log2 = Math.log2(n)
    // console.log(log2);
    if (log2 == Math.trunc(log2)) {
      // console.log('log2')
      // 2 ^ n
      n /= 2;
    } else {
      // console.log('not')
      // get the next lower which is a power of 2.
      var nextLower = Math.pow(2, Math.trunc(log2));
      // console.log('nextLower: ', nextLower);
      n -= nextLower;
    }

    // console.log('n: ', n);

    if (n == 1) {
      break;
    } else {
      isStarter = !isStarter;
    }

  }

  if (isStarter) {
    console.log('Louise');
  } else {
    console.log('Richard');
  }

}

counterGame(1560834904)
counterGame(1768820483)
counterGame(1533726144)
counterGame(1620434450)
counterGame(1463674015)