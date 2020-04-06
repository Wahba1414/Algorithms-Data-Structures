/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  var maxLen = 1;
  var subString = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (subString.includes(s[i])) {
      if (subString.length > maxLen) maxLen = subString.length;
      subString.splice(0, subString.indexOf(s[i]) + 1);
    }

    subString.push(s[i]);

  }

  if (subString.length > maxLen) maxLen = subString.length;

  return maxLen;
};

var s = 'abcabcbb';
console.log(`maxLen: ${lengthOfLongestSubstring(s)}`);