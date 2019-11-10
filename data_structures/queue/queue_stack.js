class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

// Stacks.
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    var newItem = new Node(value);

    if (!this.length) {
      this.top = this.bottom = newItem;
    } else {
      newItem.next = this.top;
      this.top = newItem;
    }

    this.length++;
    return this;
  }



  pop() {
    if (!this.length) {
      return null;
    }

    if (this.length == 1) {
      let poppedItem = this.top;
      this.top = this.bottom = null;
      this.length--;
      return poppedItem;
    }

    var poppedItem = this.top;
    this.top = this.top.next;

    this.length--;
    return poppedItem;

  }


  isEmpty() {
    return (this.length == 0);
  }



}

class Queue {
  constructor() {
    this.original = new Stack();
    this.helper = new Stack(); //Help in enqueue.
    this.length = 0;
  }

  peek() {
    return this.original.peek().data;
  }

  enqueue(value) {
    // var newItem = new Node(value);

    if (!this.length) {
      this.original.push(value);
    } else {
      // traverse on original and push it to the helper one.
      while (!this.original.isEmpty()) {
        this.helper.push(this.original.pop().data);
      }

      // Push the new item.
      this.original.push(value);

      // get the old items back now.
      while (!this.helper.isEmpty()) {
        this.original.push(this.helper.pop().data);
      }
    }

    this.length++;
    return this;
  }



  dequeue() {
    if (!this.length) {
      return null;
    }

    let poppedItem = this.original.pop();
    this.length--;
    return poppedItem;

  }


  isEmpty() {
    return (this.length == 0);
  }

  print() {

    var toPrint = '';

    // traverse on original and push it to the helper one.
    while (!this.original.isEmpty()) {
      var poppedItem = this.original.pop().data;
      // console.log(JSON.stringify(poppedItem));
      toPrint += poppedItem + ' ';
      this.helper.push(poppedItem);
    }

    // get the old items back now.
    while (!this.helper.isEmpty()) {
      this.original.push(this.helper.pop().data);
    }

    console.log(`Len: ${this.length}\n${toPrint}\n`);
  }


}



// Testing..
// var queue = new Queue();
// queue.enqueue('a');
// queue.print();

// queue.enqueue('b');
// queue.print();

// queue.enqueue('c');
// queue.print();

// console.log(queue.peek());

// queue.dequeue();
// queue.print();

// queue.dequeue();
// queue.print();

// queue.dequeue();
// queue.print();
