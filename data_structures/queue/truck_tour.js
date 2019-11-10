class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first.data;
  }

  enqueue(value) {
    var newItem = new Node(value);

    if (!this.length) {
      this.first = this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }

    this.length++;
    return this;
  }



  dequeue() {
    if (!this.length) {
      return null;
    }

    if (this.length == 1) {
      let poppedItem = this.first;
      this.first = this.last = null;
      this.length--;
      return poppedItem;
    }

    var poppedItem = this.first;
    this.first = this.first.next;

    this.length--;
    return poppedItem;

  }


  isEmpty() {
    return (this.length == 0);
  }

  print() {
    var currentItem = this.first;
    var toPrint = '';
    while (currentItem) {
      toPrint += (JSON.stringify(currentItem.data)) + '\n';
      currentItem = currentItem.next;
    }

    console.log(`Len: ${this.length}\n${toPrint}\n\n`);
  }


}


var petrolpumps = [[1, 5], [10, 3], [3, 4]];
var petrolpumps2 = [[10, 3], [3, 4], [1, 5]];
var petrolpumps3 = [[3, 4], [1, 5], [10, 3]];
var petrolpumps4 = [[1, 5], [2, 3], [3, 4]];

function truckTour(petrolpumps) {
  //  Build Queue.
  var queue = new Queue();

  petrolpumps.forEach(function (item, index) {
    queue.enqueue({
      index,
      value: item[0] - item[1]
    })
  });

  var poppedItem;
  var accumulate = 0;
  var trackedIndex = -1;

  var isEnd = {};
  // var isDone = false;

  while (1) {
    poppedItem = queue.dequeue().data;

    console.log(`poppedItem.index: ${poppedItem.index}`);

    if (trackedIndex < 0) {
      console.log('Tracked index is negative');
      if (Object.keys(isEnd).length >= petrolpumps.length) return null;
      trackedIndex = poppedItem.index;
      isEnd[trackedIndex] = true;
    } else {
      console.log('Tracked index is positive');
      if (trackedIndex == poppedItem.index) {
        return trackedIndex; //done
      }
    }

    accumulate += poppedItem.value;
    console.log(`accumulate: ${accumulate}`);

    if (accumulate < 0) {
      console.log('Negative accumulate');
      accumulate = 0;
      trackedIndex = -1; //to pickup the next item to track.
    }

    queue.enqueue(poppedItem);

  }
  return null;
}

console.log(truckTour(petrolpumps));
console.log(truckTour(petrolpumps2));
console.log(truckTour(petrolpumps3));
console.log(truckTour(petrolpumps4));