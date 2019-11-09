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

  mean() {
    if (this.data.length == 1) {
      return this.data[0].priority.toFixed(1);
    } else if (this.data.length % 2) {
      // console.log('length is odd');
      return this.data[Math.floor(this.data.length / 2)].priority.toFixed(1);
    } else {
      // console.log('length is even');
      var halfLen = this.data.length / 2;
      return ((this.data[halfLen].priority + this.data[halfLen - 1].priority) / 2).toFixed(1);
    }
  }

}


function runningMedian(a) {
  var priorityQueue = new PriorityQueue();

  a.forEach(function (item) {
    priorityQueue.enqueue(0, item);
    // priorityQueue.print();
    console.log(priorityQueue.mean());
  });
}

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

runningMedian(input);
