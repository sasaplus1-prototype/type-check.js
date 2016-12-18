'use strict';

var toString = Object.prototype.toString;

module.exports = function isDate(value) {
  return (toString.call(value) === '[object Date]');
};
