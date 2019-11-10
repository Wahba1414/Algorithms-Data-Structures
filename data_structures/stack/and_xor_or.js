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
    return (this.list.length == 0);
  }

}

function xor_helper(a, b) {
  return a ^ b;
}

function andXorOr(a) {
  var max = 0;
  var stack = new Stack();

  for (let i = 0; i < a.length; i++) {

    while (!stack.isEmpty()) {
      let newValue = xor_helper(a[i], stack.peek())
      max = (newValue > max) ? newValue : max;

      if (a[i] < stack.peek()) {
        stack.pop();
      } else {
        break;
      }

    }

    stack.push(a[i]);

  }

  return max;

}