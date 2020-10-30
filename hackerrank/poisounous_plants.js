function poisonousPlants(p) {
  if (p.length < 2) return 0;

  // convert list to list of objects
  var list = [];

  p.forEach(function (value) {
    list.push({
      data: value,
      isLive: true
    });
  });

  var days = 0;

  while (true) {

    for (let i = 1; i < list.length; i++) {
      if (list[i].data > list[i - 1].data) {
        list[i].isLive = false;
      }
    }

    // console.log(`list: ${JSON.stringify(list)}`);

    let beforeLen = list.length;
    list = list.filter((item) => {
      return item.isLive;
    });

    // console.log(`list after: ${JSON.stringify(list)}`);


    if (list.length == beforeLen) {
      return days;
    }

    days++;


  }



}



// var p = [3, 6, 2, 7, 5];
var p = [6, 5, 8, 4, 7, 10, 9];
console.log(poisonousPlants(p));