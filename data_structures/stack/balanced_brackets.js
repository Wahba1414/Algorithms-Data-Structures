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







function isPair(char1, char2) {
  // console.log(`char1: ${char1} , char2: ${char2}`);

  switch (char1) {
    case '}':
      return ((char2 == '{') ? true : false);
    // break;

    case ')':
      return ((char2 == '(') ? true : false);

    // break;

    case ']':
      return ((char2 == '[') ? true : false);

    // break;
  }
}

function isBalanced(s) {
  var lines = s.split('\n');
  var stack = new Stack();

  lines.forEach(function (line) {
    // console.log(`line: ${line}`);

    let charList = line.split('');

    charList.forEach((char) => {
      // console.log(`char: ${char}`);

      if (isPair(char, stack.peek())) {
        // console.log('equal');
        stack.pop();
      } else {
        // console.log('Not equal');
        stack.push(char);
      }
    });

    if (stack.isEmpty()) {
      console.log('YES');
    } else {
      console.log('NO');
    }

    // clear stack for the next check.
    stack.clear();

  })

}

var s = `{[()]}
{[(])}
{{[[(())]]}}`;

var s1 = `{[()]}`;

isBalanced(s);
