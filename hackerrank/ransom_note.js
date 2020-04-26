/**
 * 
 * @param {String[]} magazine 
 * @param {String[]} note 
 */
function checkMagazine(magazine, note) {
  var tempMagazine = JSON.parse(JSON.stringify(magazine));

  for (let i = 0; i < note.length; i++) {
    let index = tempMagazine.indexOf(note[i]);
    if (index == -1) {
      console.log('No');
      return;
    } else {
      tempMagazine.splice(index, 1);
    }

  };

  console.log('Yes');
}

var magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
var note = ['two2', 'times', 'is', 'four'];
checkMagazine(magazine, note);