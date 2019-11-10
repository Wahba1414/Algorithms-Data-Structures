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

  size() {
    return this.data.length;
  }

}

class MaxBinaryHeap {
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

      if ((this.data[index] < child1) && (this.data[index] < child2)) {
        // greater than both children.
        // get the min. and replace with it.
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

  sort() {
    while (this.data.length) {
      console.log(this.extractMax());
    }
  }

  print() {
    console.log(this.data);
  }

  size() {
    return this.data.length;
  }

}


// helper function.
function getMedian(minHeap, maxHeap) {
  var minHeapSize = minHeap.size();
  var maxHeapSize = maxHeap.size();

  if (minHeapSize == (maxHeapSize + 1)) {

    return minHeap.getMin();

  } else if (maxHeapSize == (minHeapSize + 1)) {

    return maxHeap.getMax();

  } else if (maxHeapSize == minHeapSize) {

    return ((minHeap.getMin() + maxHeap.getMax()) / 2);

  } else {

    var steps = Math.abs(minHeapSize - maxHeapSize) - 1;

    if (minHeapSize > maxHeapSize) {

      for (let i = 1; i <= steps; i++) {
        maxHeap.insert(minHeap.extractMin());
      }

    } else {

      for (let i = 1; i <= steps; i++) {
        minHeap.insert(maxHeap.extractMax());
      }

    }

    return getMedian(minHeap, maxHeap);


  }

}

function runningMedian(a) {
  var minHeap = new MinBinaryHeap();
  // console.log(minHeap.size());
  var maxHeap = new MaxBinaryHeap();

  var logs = [];

  var latestMean;

  a.forEach(function (item, index) {
    if (index == 0) {

      logs.push(item.toFixed(1));

      if (a.length > 1) {
        if (a[index] < a[index + 1]) {
          maxHeap.insert(item);
        } else {
          minHeap.insert(item);
        }

      } else {
        minHeap.insert(item);
      }

    } else if (index == 1) {
      if (maxHeap.size() == 0) maxHeap.insert(item);
      if (minHeap.size() == 0) minHeap.insert(item);

      latestMean = ((minHeap.getMin() + maxHeap.getMax()) / 2);
      logs.push(latestMean.toFixed(1));
    } else {

      if (item > latestMean) {
        minHeap.insert(item);
      } else {
        maxHeap.insert(item);
      }

      latestMean = getMedian(minHeap, maxHeap);
      logs.push(latestMean.toFixed(1));

    }


    // console.log('index: ', index);
    // console.log(`minHeap: ${JSON.stringify(minHeap)}`);
    // console.log(`maxHeap: ${JSON.stringify(maxHeap)}`);
    // console.log(`LatestMean: ${latestMean}\n\n`);


  });

  return logs;
}

var input = [12, 4, 5, 3, 8, 7];
var input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(runningMedian(input));