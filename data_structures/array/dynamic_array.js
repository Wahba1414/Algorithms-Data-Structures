function dynamicArray(n, queries) {
  // Create a n list.
  var seqList = [];

  for (let i = 0; i < n; i++)
    seqList[i] = [];


  var lastAnswer = 0;

  queries.forEach(function (query) {
    var action = query[0];
    var param1 = query[1];
    var param2 = query[2];

    let index = (param1 ^ lastAnswer) % n;


    switch (action) {
      case 1:
        seqList[index].push(param2);
        break;

      case 2:
        let seq = seqList[index];
        let seqIndex = param2 % seq.length;
        lastAnswer = seq[seqIndex];
        console.log(lastAnswer);
        break;
    }

  });

}

var input = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]];
var n = 2;

dynamicArray(n, input);