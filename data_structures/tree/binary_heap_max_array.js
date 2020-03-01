class MaxBinaryHeap {
  constructor() {
    this.data = [];
  }
  //O(log(n))
  insert(value) {
    if (this.data.length == 0) {
      this.data.push(value);
    } else {
      this.data.push(value);
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
      if (this.data[index] > this.data[parentIndex]) {
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
      if ((this.data[index] < child1) && (this.data[index] < child2)) {
        if (child1 > child2) {
          // swap.
          [this.data[2 * index + 1], this.data[index]] = [this.data[index], this.data[2 * index + 1]];
          this.bubbleDown(2 * index + 1);
        } else if (child2 > child1) {
          //swap
          [this.data[2 * index + 2], this.data[index]] = [this.data[index], this.data[2 * index + 2]];
          this.bubbleDown(2 * index + 2);
        }
      } else if (this.data[index] < child1) {
        // swap.
        [this.data[2 * index + 1], this.data[index]] = [this.data[index], this.data[2 * index + 1]];
        this.bubbleDown(2 * index + 1);
      } else if (this.data[index] < child2) {
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
maxBinaryHeap.insert(2);
maxBinaryHeap.insert(7);
maxBinaryHeap.insert(26);
maxBinaryHeap.insert(25);
maxBinaryHeap.insert(30);
maxBinaryHeap.insert(50);
maxBinaryHeap.insert(40);

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
