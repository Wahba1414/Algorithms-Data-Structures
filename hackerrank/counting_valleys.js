function countingValleys(n, s) {
  // constrains.
  if (n < 2 || n > 1000000) {
    console.log('Constrains problem!!');
    return 0;
  }

  var steps = s.split('');

  var dropUpSequenceCount = 0;
  var valleysCount = 0;
  var type = ''; //M for Mountain , and V for valley


  steps.forEach(function (step, index) {

    if (step == 'U') {
      
      if (dropUpSequenceCount == 0)
        type = 'M';

      dropUpSequenceCount++;

    } else if (step == 'D') {

      if (dropUpSequenceCount == 0)
        type = 'V';

      dropUpSequenceCount--;
    }

    if(dropUpSequenceCount == 0 && type == 'V'){
      valleysCount++;
    }


  });

  return valleysCount;
}


var n = 8;
var s = 'DUUDDDUDUU';
console.log(`countingValleys: ${countingValleys(n,s)}`);