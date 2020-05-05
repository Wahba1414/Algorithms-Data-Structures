/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var tracker = {};

  var strArr = s.split('');

  strArr.forEach((char, i) => {
    tracker[char] = tracker[char] || { count: 0, index: i };
    tracker[char].count++;
  });

  var keys = Object.keys(tracker);

  for (let i = 0; i < keys.length; i++) {
    if (tracker[keys[i]].count == 1) {
      return tracker[keys[i]].index;
    }
  }

  return -1;

};

var s = "loveleetcode";
console.log(firstUniqChar(s));