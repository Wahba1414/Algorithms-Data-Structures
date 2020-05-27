'use strict';
 
/**
 * 
 * @param {Number} level 
 * @param {String} sep 
 */  
function joinedLogger(level, sep) {
  return function (...msgs) {
    var finalMessage = '';

    msgs.forEach((msg) => {
      if (msg.level >= level) {
        finalMessage += msg.text + sep;
      }
    });

    return finalMessage.slice(0, finalMessage.length - sep.length);

  }

}

var level = 10;
var sep = ',,';

var msgs = [{
  level: 9, text: 'foo'
}, {
  level: 12, text: 'poo'
}, {
  level: 14, text: 'Do'
}];

var logger = joinedLogger(level, sep);
console.log(`output: ${logger(...msgs)}`);