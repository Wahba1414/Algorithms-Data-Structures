class MinBinaryHeap {
  constructor() {
    this.data = [];
  }


  insert(value) {
    if (this.data.length == 0) {
      this.data.push(value);
    } else {
      this.data.push(value);
      this.bubbleUp(this.data.length - 1);
    }
  }

  // Helper functions.
  bubbleUp(index) {
    if (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.data[index] < this.data[parentIndex]) {
        // swap.
        [this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]];
        this.bubbleUp(parentIndex);
      }
    }
  }

  getMin() {
    if (this.data.length) return this.data[0];
  }

  extractMin() {
    if (this.data.length == 0) {
      return null;
    }

    if (this.data.length == 1) {
      return this.data.pop();
    }

    var min = this.data[0];
    this.data[0] = this.data.pop();

    this.bubbleDown(0);

    return min;
  }

  // helper function.
  bubbleDown(index) {
    if (index < this.data.length - 1) {
      var [child1, child2] = [this.data[2 * index + 1], this.data[2 * index + 2]];

      if ((this.data[index] > child1) && (this.data[index] > child2)) {
        // greater than both children.
        // get the min. and replace with it.
        if (child1 < child2) {
          // swap.
          [this.data[2 * index + 1], this.data[index]] = [this.data[index], this.data[2 * index + 1]];
          this.bubbleDown(2 * index + 1)
        } else if (child1 > child2) {
          //swap
          [this.data[2 * index + 2], this.data[index]] = [this.data[index], this.data[2 * index + 2]];
          this.bubbleDown(2 * index + 2)
        }
      } else if (this.data[index] > child1) {
        // swap.
        [this.data[2 * index + 1], this.data[index]] = [this.data[index], this.data[2 * index + 1]];
        this.bubbleDown(2 * index + 1)
      } else if (this.data[index] > child2) {
        //swap
        [this.data[2 * index + 2], this.data[index]] = [this.data[index], this.data[2 * index + 2]];
        this.bubbleDown(2 * index + 2)
      }

    }
  }

  sort() {
    while (this.data.length) {
      console.log(this.extractMin());
    }
  }

  print() {
    console.log(this.data);
    console.log('\n\n')
  }

}

var minBinaryHeap = new MinBinaryHeap();
minBinaryHeap.insert(50);
// minBinaryHeap.print();



minBinaryHeap.insert(7);
// minBinaryHeap.print();

minBinaryHeap.insert(26);
// minBinaryHeap.print();


minBinaryHeap.insert(25);
// minBinaryHeap.print();


minBinaryHeap.insert(30);
// minBinaryHeap.print();

minBinaryHeap.insert(2);
// minBinaryHeap.print();

minBinaryHeap.insert(40);
minBinaryHeap.print();

// console.log(minBinaryHeap.extractMin());
// minBinaryHeap.print();

minBinaryHeap.sort();



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
