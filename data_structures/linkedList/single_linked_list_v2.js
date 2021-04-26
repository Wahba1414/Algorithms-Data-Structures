class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  append(val) {
    if (!this.head) {
      this.head = this.tail = new Node(val);
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }

    this.len++;
  }

  prepend(val) {
    if (!this.head) {
      this.head = this.tail = new Node(val);
    } else {
      var newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
    }

    this.len++;
  }

  print() {
    var list = [];
    var currentNode = this.head;

    while (currentNode) {
      list.push(currentNode.val);
      currentNode = currentNode.next;
    }

    console.log(`Linked List --> ${list}`);
  }

  reverse() {

  }

  /*
    Insert some value to that specific index.
    Index starts from zero.
  */
  insert(index, val) {
    if (index > this.len) {
      // Impossible
      return;
    }

    if (index == 0) {
      var newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.len++;
      return;
    }



    var currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    var newNode = new Node(val);
    newNode.next = currentNode.next;
    currentNode.next = newNode;



    if (index == this.len) {
      this.tail = newNode;
    }

    this.len++;
  }

  remove(index) {
    // Index is greater than len. or the linked list is empty.
    if ((!this.len) || (index > this.len - 1)) {
      return;
    }
 
    if (index == 0 && this.len == 1) {
      this.head = this.tail = null;
      this.len = 0;
      return;
    }

    // Remove the first element
    if (index == 0) {
      this.head = this.head.next;
      this.len--;
      return;
    }

    var currentNode = this.head;
    for (let i = 0; i <= index - 2; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;

    // If the tail changed
    if (currentNode.next == null) {
      this.tail = currentNode;
    }

    this.len--;

  }
}

var list = new LinkedList();
list.append(0);
list.append(1);
list.append(2);

// list.insert(0, 'pre');
// list.insert(4, 'after');
// list.insert(1, 'in bet');

list.append(3);

list.remove(0);
list.remove(5);

list.print();