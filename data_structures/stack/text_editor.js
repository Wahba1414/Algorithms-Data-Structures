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

  print() {
    console.log(`Stack: ${this.list.toString()}`);
    console.log(`Length: ${this.list.length}`);
  }
}


var input = `8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`;

var input2 = `10
1 lchbfcjtfpsmjrqsdgci
3 19
1 cpcvixlm
1 apdjgjydvpbpvyiy
2 29
4
4
3 9
4
4`;


function processData(input) {
  // original stack;
  var original = new Stack();
  // done Stack;
  var done = new Stack();
  // traverse stack;
  var traverse = new Stack();

  //Enter your code here
  var inputLines = input.split('\n');

  for (let i = 1; i < inputLines.length; i++) {
    let query = inputLines[i].split(' ');

    let action = query[0];
    let param = query[1];

    switch (action) {
      case '1':
        console.log('\n\nqeury #1');
        // original
        param.split('').forEach(function (char) {
          original.push(char);
        });
        // done for undo operations.
        done.push({
          action: 2,
          param: param.length,
        });
        original.print();
        break;

      case '2':
        console.log(`\n\nqeury #2  [${Number(param)}]`);
        var poppedString = [];
        for (let i = 0; i < Number(param); i++) {
          poppedString.push(original.pop());
        }

        done.push({
          action: 1,
          param: poppedString.reverse(),
        })
        original.print();

        break;

      case '3':
        console.log('\n\nqeury #3');

        while (!original.isEmpty()) {
          traverse.push(original.pop())
        }

        var index = 1;

        while (!traverse.isEmpty()) {
          let poppedValue = traverse.pop();
          if (index == param) console.log(poppedValue);
          original.push(poppedValue);
          index++;
        }
        original.print();

        break;

      case '4':
        console.log('\n\nqeury #4');

        let undoAction = done.pop();
        console.log(`undoAction: ${JSON.stringify(undoAction)}`)
        switch (undoAction.action) {
          case 1:
            console.log('#1');
            undoAction.param.forEach(function (char) {
              original.push(char);
            });
            break;

          case 2:
            console.log('#2');
            for (let i = 0; i < Number(undoAction.param); i++) {
              var poppedString = [];
              poppedString.push(original.pop());
            }
            break;
        }

        original.print();
        break;
    }
  }
}

processData(input2);