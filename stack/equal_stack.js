class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.list = [];
  }

  peek() {
    return (this.list.length) ? this.list[this.list.length - 1] : null;
  }

  push(value) {
    this.list.push(value);
    return this;
  }

  pop() {
    return this.list.pop();
  }

  max() {
    if (!this.list.length) return null;
    var max = this.list[0];
    this.list.forEach(function (item) {
      if (item > max) max = item;
    });

    return max;
  }

  sum() {
    if (!this.list.length) return 0;
    var sum = 0;

    this.list.forEach(function (item) {
      sum += item
    });

    return sum;
  }


}


function equalStacks(h1, h2, h3) {
  /*
   * Write your code here.
   */

  // Fill in the stacks.
  var stack1 = new Stack();
  var stack2 = new Stack();
  var stack3 = new Stack();

  h1 = h1.reverse();
  h2 = h2.reverse();
  h3 = h3.reverse();

  h1.forEach(function (item) {
    stack1.push(item);
  });

  h2.forEach(function (item) {
    stack2.push(item);
  });

  h3.forEach(function (item) {
    stack3.push(item);
  });

  //O(N)
  var stacksInfo = [];
  stacksInfo.push({
    ref: stack1,
    sum: stack1.sum()
  });
  stacksInfo.push({
    ref: stack2,
    sum: stack2.sum()
  });
  stacksInfo.push({
    ref: stack3,
    sum: stack3.sum()
  });

  // console.log('stacksInfo: ', stacksInfo);

  while (!((stacksInfo[0].sum == stacksInfo[1].sum) && (stacksInfo[1].sum == stacksInfo[2].sum))) { //O(a+b+c)
    
    //O(N)
    // Sort based on sum.
    stacksInfo.sort(function (item1, item2) {
      return item2.sum - item1.sum;
    });

    // O(1)
    var poppedValue = stacksInfo[0].ref.pop();

    // console.log('stacksInfo[0].ref.list: ', stacksInfo[0].ref.list)
    // console.log('poppedValue: ', poppedValue);

    //O(1)
    stacksInfo[0].sum -= poppedValue;

    // console.log('stacksInfo[0].sum: ', stacksInfo[0].sum);
    // console.log('stacksInfo[1].sum: ', stacksInfo[1].sum);
    // console.log('stacksInfo[2].sum: ', stacksInfo[2].sum);


  }

  return stacksInfo[0].sum;


}

var h1 = [3, 2, 1, 1, 1];
var h2 = [4, 3, 2];
var h3 = [1, 1, 4, 1];

var finalSum = equalStacks(h1, h2, h3);
console.log('finalSum: ', finalSum);