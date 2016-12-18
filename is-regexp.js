'use strict';

var toString = Object.prototype.toString;

module.exports = function isRegExp(value) {
  return (toString.call(value) === '[object RegExp]');
};
