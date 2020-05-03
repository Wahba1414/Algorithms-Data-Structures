/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
var products = [1, 1];
function isBadVersion(version) {
  return products[version - 1];
};
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    return tracker(1, n, isBadVersion);
  };
};

function tracker(start, end, isBadVersion) {
  if (end - start <= 1) {
    if (isBadVersion(start)) {
      return start;
    }

    return end;
  }

  var middle = Math.floor((end - start + 1) / 2);

  if (isBadVersion(start + middle)) {
    // Go back - left
    return tracker(start, start + middle, isBadVersion);
  } else {
    // Go forward - right
    return tracker(start + middle, end, isBadVersion);
  }

}

var toTrack = solution(isBadVersion);
var firstBadVersion = toTrack(products.length);
console.log(`first bad version: ${firstBadVersion}`);