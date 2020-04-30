/**
 * 
 * @param {String} s1 first string
 * @param {String} s2 second string
 */
function LCSubstring(s1, s2) {
  if (s1.length == 0 || s2.length == 0) {
    return 0;
  }

  var maxLen, maxStr, minStr;

  if (s1.length > s2.length) {
    maxLen = s1.length;
    maxStr = s1;
    minStr = s2;
  } else {
    maxLen = s2.length;
    maxStr = s2;
    minStr = s1;
  }

  var maxSubstring = 0;
  var subString = '';

  for (let i = 0; i < maxLen; i++) {
    subString += maxStr[i];
    if (minStr.indexOf(subString) > -1) {
      maxSubstring = Math.max(maxSubstring, subString.length);
    } else {
      while (minStr.indexOf(subString) == -1) {
        subString = subString.slice(1);
      }
    }
  }

  return maxSubstring;
}

var s1 = 'hey123';
var s2 = 'h1ey1';

console.log(`len: ${LCSubstring(s1, s2)}`);