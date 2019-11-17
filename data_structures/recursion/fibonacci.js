// to get the list.
function fibonacci(n) {
  n--;

  if (n == 0) { //base case.
    return [0];
  } else if (n == 1) { //second base case.
    return [0, 1];
  } else { //iterative (repeated) case.
    var returnedList = fibonacci(n);
    var len = returnedList.length;
    returnedList.push(returnedList[len - 1] + returnedList[len - 2]);
    return returnedList;
  }

}

/*
Pros and cons over iterative approach.

Pros: 
-readability.

Cons:
-Complexity increases from O(N) to O(2^n).

*/

// to get the value of the last item.
function fabonacciByIndex(index) { //zero-indexed.
  if (index < 2) {
    return index;
  } else {
    return fabonacciByIndex(index - 1) + fabonacciByIndex(index - 2);
  }
}

console.log(fibonacci(6));
console.log(fabonacciByIndex(6));