/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 */
function twoStrings(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if(s2.indexOf(s1[i]) > -1){
      console.log('YES');
      return;
    }
  }

  console.log('NO');
}