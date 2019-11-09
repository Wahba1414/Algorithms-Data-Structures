class BinaryHeap {
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

  extractMax() {
    if (this.data.length == 0) {
      return null;
    }

    if (this.data.length == 1) {
      return this.data.pop();
    }

    var max = this.data[0];
    this.data[0] = this.data.pop();

    this.bubbleDown(0);

    return max;
  }

  // helper function.
  bubbleDown(index) {
    if (index < this.data.length - 1) {
      var [child1, child2] = [this.data[2 * index + 1], this.data[2 * index + 2]];

      if (child1 > child2) {
        // swap.
        [this.data[2 * index + 1], this.data[index]] = [this.data[index], this.data[2 * index + 1]];
        this.bubbleDown(2 * index + 1)
      } else if (child1 < child2) {
        //swap
        [this.data[2 * index + 2], this.data[index]] = [this.data[index], this.data[2 * index + 2]];
        this.bubbleDown(2 * index + 2)
      }

    }
  }

  sort() {
    while (this.data.length) {
      console.log(this.extractMax());
    }
  }

  print() {
    console.log(this.data);
  }

}

var maxBinaryHeap = new BinaryHeap();
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
