/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return (evaluate(S) == evaluate(T));
};

function evaluate(s) {
  var result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '#') {
      //backspace.
      if (result.length) {
        result.pop();
      }
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
}

var s = '#ab##';
console.log(`Evaluated string: ${evaluate(s)}`);