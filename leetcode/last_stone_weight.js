var Heap = require('../data_structures/tree/binary_heap_max_array');

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // Store stones into max heap.
  var heap = new Heap();
  stones.forEach(function (stone) {
    heap.insert(stone);
  });

  // heap.sort();
  while (!heap.isEmpty()) {
    console.log('new iteration');

    let firstMax = heap.extractMax();
    let secondMax = heap.extractMax();

    console.log(firstMax, secondMax);
    console.log('\n')

    if (secondMax == null) return firstMax;

    if (secondMax < firstMax) {
      heap.insert(firstMax - secondMax);
    }

  }

  // if there is no items left.
  return 0;

};

// var stones = [2, 7, 4, 1, 8, 1];
var stones = [2, 6, 6, 9, 4, 3];

console.log(`last stone weight: ${lastStoneWeight(stones)}`);