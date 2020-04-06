/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var anagrams = {};

  strs.forEach(function (str) {
    let sortedStr = str.split('').sort().join('');
    anagrams[sortedStr] = anagrams[sortedStr] || [];
    anagrams[sortedStr].push(str);

    // console.log(`anagrams: ${JSON.stringify(anagrams)}`);
  });

  var result = [];
  Object.keys(anagrams).forEach(function (key) {
    result.push(anagrams[key]);
  });

  return result;
};

var inputs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(`output: ${JSON.stringify(groupAnagrams(inputs))}`);