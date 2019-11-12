'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  // console.log('new data');
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  console.log('End');

  inputString = inputString.trim().split('\n').map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the buildString function below.
 */
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

function main() {
  console.log('here');
  const ws = fs.createWriteStream('./output');

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nab = readLine().split(' ');

    const n = parseInt(nab[0], 10);

    const a = parseInt(nab[1], 10);

    const b = parseInt(nab[2], 10);

    const s = readLine();

    let result = buildString(a, b, s);
    ws.write(result.toString() + '\n');
  }

  ws.end();
}
