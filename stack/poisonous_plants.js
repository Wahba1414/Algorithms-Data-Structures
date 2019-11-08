
// inputs
var p = [6, 5, 8, 4, 7, 10, 9];
var p2 = [3, 7, 5, 20, 10, 8, 9];

function poisonousPlants(p) {
  var dayCounter = 0;

  var original = p;
  // Use for filtering.
  var filter = [];

  var newDieing = true;

  // Need a condition to stop
  while ((original.length) && (newDieing)) { //set later.
    console.log(`day#${dayCounter + 1}`);

    var previousLength = original.length;

    original.forEach(function (plant, index) {
      if (index > 0) {
        let previous = original[index - 1];
        filter.push({
          data: plant,
          isDieing: (plant > previous)
        });
      } else {
        filter.push({
          data: plant,
          isDieing: false
        })
      }
    });

    // filtering.
    original = [];
    filter.forEach(function (item) {
      if (!item.isDieing) original.push(item.data);
    });

    filter = [];

    console.log(`original: `, original);

    var newLength = original.length;

    newDieing = (previousLength != newLength);

    dayCounter++;
  }


  return (dayCounter - 1);


}


function poisonousPlantsV2(p) {
  var dayCounter = 0;

  var original = p;
  
  // Use for filtering.
  var filter = [];

  var newDieing = true;

  // Need a condition to stop
  while ((original.length) && (newDieing)) { //set later.
    console.log(`day#${dayCounter + 1}`);

    var previousLength = original.length;

    original.forEach(function (plant, index) {
      if (index > 0) {
        let previous = original[index - 1];
        filter.push({
          data: plant,
          isDieing: (plant > previous)
        });
      } else {
        filter.push({
          data: plant,
          isDieing: false
        })
      }
    });

    // filtering.
    original = [];
    filter.forEach(function (item) {
      if (!item.isDieing) original.push(item.data);
    });

    filter = [];

    console.log(`original: `, original);

    var newLength = original.length;

    newDieing = (previousLength != newLength);

    dayCounter++;
  }


  return (dayCounter - 1);


}

poisonousPlants(p2);