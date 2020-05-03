/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var allLetters = {};

  for (let i = 0; i < magazine.length; i++) {
    allLetters[magazine[i]] = allLetters[magazine[i]] || 0;
    allLetters[magazine[i]]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!allLetters[ransomNote[i]]) {
      return false;
    }

    allLetters[ransomNote[i]]--;
  }

  return true;

};

var ransomNote = 'a';
var magazine = 'b';

console.log(`${canConstruct(ransomNote, magazine)}`);