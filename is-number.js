'use strict';

var toString = Object.prototype.toString;

module.exports = function isNumber(value) {
  return (
    typeof value === 'number' || toString.call(value) === '[object Number]'
  );
};
