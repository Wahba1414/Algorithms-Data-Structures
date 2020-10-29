function timeConversion(s) {
  /*
   * Write your code here.
   */
  var newFormat;

  var PMAM = s.slice(s.length - 2);

  var hours = s.slice(0, 2);

  newFormat = hours;

  if (hours == '12' && PMAM == 'AM') {
    newFormat = '00';
  } else if (Number(hours) < 12 && PMAM == 'PM') {
    newFormat = Number(hours) + 12;
  }

  newFormat += s.slice(2, s.length - 2);

  return newFormat;
}