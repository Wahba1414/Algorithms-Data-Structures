/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 2) {
    return true;
  }

  var refSlope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])

  var newSlope; 

  
  for (let i = 2; i < coordinates.length; i++) {
      newSlope = (coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]);
      
      if(Math.abs(refSlope - newSlope) > Number.EPSILON){
          return false;
      }
  }

  return true;

};