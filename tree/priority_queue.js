class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.data = [];
  }

  enqueue(value, priority) {
    var newItem = new Node(value, priority);

    if (!this.data.length) {
      this.data.push(newItem);
      return this;
    } else {

      for (let i = 0; i < this.data.length; i++) {
        // console.log('this.data[i].priority: ', this.data[i].priority);
        // console.log('priority: ', priority);
        if (this.data[i].priority >= priority) {
          this.data.splice(i, 0, newItem);
          return this;
        }
      }

      this.data.push(newItem);
      return this;

    }

  }

  dequeue() {
    if (!this.data.length) return null;

    return this.data.pop();
  }


  print() {
    console.log(JSON.stringify(this.data));
  }

}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue(1, 1);
priorityQueue.enqueue(4, 4);
priorityQueue.enqueue(3, 3);
priorityQueue.enqueue(5, 5);

priorityQueue.print();

console.log(`popped: ${priorityQueue.dequeue().value}`);

priorityQueue.print();
