function reverseLog(sentence) {
  var charTOLog;

  if (sentence == '') {
    return;
  } else {
    charTOLog = sentence[0];
    reverseLog(sentence.substring(1));
  }

  console.log(charTOLog);

}

// Testing.
var input = 'Hello';
reverseLog(input);

function listReverse(list, reversed) {
  var pickedItem;

  if (list == '') {
    return;
  } else {
    pickedItem = list[0];
    listReverse(list.slice(1), reversed);
  }

  reversed.push(pickedItem);

}

// Testing.
var input2 = [1, 2, 3, 4, 5], reversed = [];
listReverse(input2, reversed);
console.log(reversed);


function factorial(num) {
  if (num == 1) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

// inputs
console.log(factorial(4));