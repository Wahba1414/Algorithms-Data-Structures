//Need to be enhanced later.
function buildString(a, b, s) {

  // convert string to list.
  var sList = s.split('');
  var temp = '';
  var finalTarget = '';
  var totalCost = 0;

  for (let i = 0; ((i < sList.length) && (finalTarget != s)); i++) {
    if (i == 0) {
      finalTarget += sList[i];
      totalCost += a;
      continue;
    }

    temp += sList[i];

    if (finalTarget.indexOf(temp) == -1) {

      if (temp.length > 2) {
        // append will happen.
        finalTarget += temp.substr(0, temp.length - 1);

        if (b < ((temp.length - 1) * a)) {
          totalCost += b;
        } else {
          totalCost += ((temp.length - 1) * a);
        }

      } else {
        // add will happen.
        finalTarget += temp[0];
        totalCost += a;

      }

      // Just keep the final char for the next iterations.
      temp = (temp.length > 1) ? temp[temp.length - 1] : '';
    }



  }


  if (temp) {
    console.log('temp: ', temp);
    if (temp.length > 1) {
      finalTarget += temp;
      totalCost += b;
    } else {
      finalTarget += temp;
      totalCost += a;
    }

  }

  // extra check.
  totalCost = (totalCost > (sList.length * a)) ? (sList.length * a) : totalCost;

  return totalCost;

}


var a = 4;
var b = 5;
var s = 'aabaacaba';

var a2 = 8;
var b2 = 9;
var s2 = 'bacbacacb';


console.log(buildString(1, 3, 'cabcjpsdaedsasedsascabcjpsddsdaedsasedsa'));
// console.log(buildString(1, 3, 'acbbqbbqbb'));
// console.log(buildString(2, 4, 'cbabecbahe'));