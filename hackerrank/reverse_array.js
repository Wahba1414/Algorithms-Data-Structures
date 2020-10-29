function reverseArray(a) {
  // return a.reverse();

  for (let left = 0, right = a.length - 1; left < right; left++, right--) {
    // swap.
    [a[left], a[right]] = [a[right], a[left]];
  }

  return a;
}