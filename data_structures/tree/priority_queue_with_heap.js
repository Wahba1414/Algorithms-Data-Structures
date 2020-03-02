class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.data = [];
  }
  //O(log(n))
  insert(value, priority = 1) {
    if (this.data.length == 0) {
      this.data.push(new Node(value, priority));
    } else {
      this.data.push(new Node(value, priority));
      this.bubbleUp(this.data.length - 1);
    }
  }
  /*
  It compares the new inserted item against its parent until it reaches the 
  most upper node to maintain this heap a maximum one.
  */
  bubbleUp(index) {
    if (index > 0) {
      //the equation to get the parent for some index in the array.
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.data[index].priority > this.data[parentIndex].priority) {
        // swap.
        [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
        this.bubbleUp(parentIndex);
      }
    }
  }

  getMax() {
    if (this.data.length) return this.data[0];
  }

  // log(n)
  extractMax() {
    if (this.data.length == 0) {
      return null;
    }

    if (this.data.length == 1) {
      return this.data.pop();
    }

    var max = this.data[0];

    // Remove the last item and use its value to replace the root node.
    this.data[0] = this.data.pop();

    this.bubbleDown(0);

    return max;
  }

  /*It compares the new value of the root item against its children until it reaches 
  the most lower node to maintain this heap a maximum one.*/
  bubbleDown(index) {
    if (index < this.data.length - 1) {
      // Equations to get children indexes for some parent (array index).
      var [child1, child2] = [this.data[2 * index + 1], this.data[2 * index + 2]];

      // console.log(`child1: ${JSON.stringify(child1)}`)
      // console.log(`child2: ${JSON.stringify(child2)}`)
      // console.log(`this.data[index]: ${JSON.stringify(this.data[index])}`)

      if ((child1 && child2) && (this.data[index].priority < child1.priority) && (this.data[index].priority < child2.priority)) {

        if (child1.priority > child2.priority) {
          // swap.
          [this.data[2 * index + 1], this.data[index]] = [this.data[index], this.data[2 * index + 1]];
          this.bubbleDown(2 * index + 1);
        } else if (child2.priority > child1.priority) {
          //swap
          [this.data[2 * index + 2], this.data[index]] = [this.data[index], this.data[2 * index + 2]];
          this.bubbleDown(2 * index + 2);
        }

      } else if ( child1 && this.data[index].priority < child1.priority) {
        // swap.
        [this.data[2 * index + 1], this.data[index]] = [this.data[index], this.data[2 * index + 1]];
        this.bubbleDown(2 * index + 1);
      } else if (child2 && this.data[index].priority < child2.priority) {
        //swap
        [this.data[2 * index + 2], this.data[index]] = [this.data[index], this.data[2 * index + 2]];
        this.bubbleDown(2 * index + 2);
      }

    }
  }

  // Heap sorting. (nlog(n))
  sort() {
    while (this.data.length) {
      console.log(this.extractMax());
    }
  }

  print() {
    console.log(this.data);
  }

}

var maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(2, 2);
maxBinaryHeap.insert(7, 7);
maxBinaryHeap.insert(26, 26);
maxBinaryHeap.insert(25, 25);
maxBinaryHeap.insert(30, 30);
maxBinaryHeap.insert(50, 50);
maxBinaryHeap.insert(40, 40);

maxBinaryHeap.print();

maxBinaryHeap.sort();

// console.log(maxBinaryHeap.extractMax());

// maxBinaryHeap.print();

// console.log(maxBinaryHeap.extractMax());

// maxBinaryHeap.print();

// console.log(maxBinaryHeap.extractMax());

// maxBinaryHeap.print();

// console.log(maxBinaryHeap.extractMax());

// maxBinaryHeap.print();

// console.log(maxBinaryHeap.extractMax());

// maxBinaryHeap.print();

// console.log(maxBinaryHeap.extractMax());

// maxBinaryHeap.print();

// console.log(maxBinaryHeap.extractMax());

// maxBinaryHeap.print();

// console.log(maxBinaryHeap.extractMax());

// maxBinaryHeap.print();

module.exports = MaxBinaryHeap;