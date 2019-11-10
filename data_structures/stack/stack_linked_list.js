class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

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



}