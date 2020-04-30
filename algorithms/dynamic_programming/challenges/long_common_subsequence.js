/**
 * 
 * @param {*} s1 first string
 * @param {*} len1 last index to check
 * @param {*} s2 second string
 * @param {*} len2 last index to check
 */
function LCS(s1, len1, s2, len2) {
  tracker[len1 + '-' + len2] = tracker[len1 + '-' + len2] || 0;

  if (tracker[len1 + '-' + len2]) {
    return tracker[len1 + '-' + len2];
  }

  if (len1 < 0 || len2 < 0) {
    return 0;
  }

  if ((s1[len1] != undefined) && (s1[len1] == s2[len2])) {
    tracker[len1 + '-' + len2] = 1 + LCS(s1, len1 - 1, s2, len2 - 1);
  } else {
    tracker[len1 + '-' + len2] = Math.max(LCS(s1, len1 - 1, s2, len2), LCS(s1, len1, s2, len2 - 1));
  }

  return tracker[len1 + '-' + len2];

}

var s1 = 'def';
var s2 = 'abc';

var tracker = {};
console.time('searching');
console.log(`len = ${LCS(s1, s1.length, s2, s2.length)}`);
console.timeEnd('searching');

console.log(`counters: ${JSON.stringify(tracker, null, 3)}`);