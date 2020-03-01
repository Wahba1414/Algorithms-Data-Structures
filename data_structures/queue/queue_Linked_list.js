class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //O(1)
  peek() {
    return this.first.data;
  }

  // O(1)
  enqueue(value) {
    var newItem = new Node(value);

    if (!this.length) {
      this.first = this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }

    this.length++;
    return this;
  }
  // O(1)
  dequeue() {
    if (!this.length) {
      return null;
    }

    if (this.length == 1) {
      let poppedItem = this.first;
      this.first = this.last = null;
      this.length--;
      return poppedItem;
    }

    var poppedItem = this.first;
    this.first = this.first.next;

    this.length--;
    return poppedItem;

  }


  isEmpty() {
    return (this.length == 0);
  }

  print() {
    var currentItem = this.first;
    var toPrint = '';
    while (currentItem) {
      toPrint += (currentItem.data) + ' ';
      currentItem = currentItem.next;
    }

    console.log(`Len: ${this.length}\n${toPrint}\n`);
  }


}

// Testing..
var queue = new Queue();
queue.enqueue('a');
queue.print();

queue.enqueue('b');
queue.print();

queue.enqueue('c');
queue.print();

console.log(queue.peek());

queue.dequeue();
queue.print();

queue.dequeue();
queue.print();

queue.dequeue();
queue.print();
