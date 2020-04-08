class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  // O(1)
  addAtTheEnd(val) {
    if (this.head) {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(val);
    } else {
      this.head = new Node(val);
    }

    this.len++;
    return this.head;
  }

  // O(N)
  removeFromTheEnd() {
    if (this.head) {
      let currentNode = this.head;
      let previous = null;

      while (currentNode.next) {
        previous = currentNode;
        currentNode = currentNode.next;
      }

      if (previous) {
        previous.next = null;
      }

      return currentNode.val;

    } else {
      return null
    }
  }


  print(head) {
    console.log('Inside print list function');

    while (head) {
      console.log(head.val);
      head = head.next;
    }
  }

  isReversable(head) {

  }

  isPalindrome_stack(head) {
    if (!head) return true;

    // Time = O(n) && Space = O(n)
    // Use list as an array for simplicity here.
    var stack = [head.val];
    var currentNode = head.next;

    while (currentNode) {
      stack.push(currentNode.val);
      currentNode = currentNode.next;
    }

    currentNode = head;
    while (currentNode) {
      if (currentNode.val != stack.pop()) {
        return false;
      }

      currentNode = currentNode.next;
    }

    return true;

  }

  isPalindrome_twoPointers(head) {
    var left = this.head;

    function isPalindrome_twoPointers_util(head) {
      if (!head) {
        return true;
      }

      var result = isPalindrome_twoPointers_util(head.next);

      if (!result) return result;

      if (left.val != head.val) {
        return false;
      }

      left = left.next;

      return result;
    }

    return isPalindrome_twoPointers_util(head);

  }


}

var linkedList = new LinkedList();
linkedList.addAtTheEnd(1);
linkedList.addAtTheEnd(2);
linkedList.addAtTheEnd(3);
linkedList.addAtTheEnd(3);
linkedList.addAtTheEnd(2);
linkedList.addAtTheEnd(1);

// linkedList.removeFromTheEnd();

linkedList.print(linkedList.head);

console.log(`Stack isPalindrome: ${linkedList.isPalindrome_stack(linkedList.head)}`);
console.log(`Two Pointers isPalindrome: ${linkedList.isPalindrome_twoPointers(linkedList.head)}`);