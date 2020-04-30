'use strict';

const fs = require('fs');
const https = require('https');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

  var totalPages;
  var index = 2;
  var result;

  result = await helper(code, 1);

  if (result.isFound) {
    console.log(result.name);
    return (result.name);
  } else {
    totalPages = result.totalPages;
    console.log(`totalPages: ${totalPages}`);
  }

  while (index <= totalPages) {
    console.log(`index: ${index}`);
    result = await helper(code, index);
    if (result.isFound) {
      console.log(result.name);
      // ws.write(result.name);
      return (result.name);
    }
    index++;
  }

  return 'Not Found';

}

async function helper(code, page) {
  return new Promise(function (resolve, reject) {
    console.log(`Helper function: page: ${page}`);
    var result;
    https.get('https://jsonmock.hackerrank.com/api/countries?page=' + page, function (res) {
      console.log(`status: ${res.statusCode}`);
      res.setEncoding('utf8');
      res.on('data', (data) => {
        data = JSON.parse(data);
        result = data.data.filter((country) => {
          return country.alpha2Code == code;
        });

        if (result.length) {
          resolve({ isFound: true, name: result[0].name });
        } else {
          resolve({ isFound: false, totalPages: data.total_pages });
        }
      })
    });
  })

}

getCountryName('LC');