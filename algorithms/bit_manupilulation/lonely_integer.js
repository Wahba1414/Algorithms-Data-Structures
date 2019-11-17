// Can be solved by hash table and will be better (O(N))
function lonelyinteger(a) {
  if (a.length == 1) return a[0];

  for (let i = 0; i < a.length; i++) {
    var isRepeated = false;
    for (let j = 0; j < a.length; j++) {
      console.log(`${a[i]} , ${a[j]}  , ${a[i] ^ a[j]}`)

      if ((i != j) && (a[i] ^ a[j]) == 0) isRepeated = true;
    }

    if (!isRepeated) return a[i];
  }

}

var a = [0, 0, 1, 2, 1];

console.log(lonelyinteger(a));