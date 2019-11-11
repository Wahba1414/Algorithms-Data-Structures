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


  isEmpty() {
    return this.list.length == 0;
  }

  clear() {
    this.list = [];
  }

  print() {
    console.log(JSON.stringify(this.list));
  }

}

function twoStacks(x, a, b) {
  // build stacks.
  var stack1 = new Stack();
  var stack2 = new Stack();
  var results = {
    count: 0,
    sum: 0
  }

  for (let i = a.length - 1; i >= 0; i--) {
    stack1.push(a[i]);
  }

  for (let i = b.length - 1; i >= 0; i--) {
    stack2.push(b[i]);
  }


  while ((!stack1.isEmpty() || !stack2.isEmpty())) {
    let stack1_Top = stack1.peek();
    let stack2_Top = stack2.peek();

    if (stack1_Top >= stack2_Top) {
      //pop from stack2.
      results.sum += stack2.pop();
      if (results.sum > x) {
        return results.count;
      } else {
        results.count++;
      }

    } else {
      // pop from stack1
      results.sum += stack1.pop();
      if (results.sum > x) {
        return results.count;
      } else {
        results.count++;
      }
    }

  }

  return results.count;


}


var x = 10;
var a = [4, 2, 4, 6, 1];
var b = [2, 1, 8, 5];

console.log(twoStacks(x, a, b));