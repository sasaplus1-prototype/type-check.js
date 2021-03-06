'use strict';

var toString = Object.prototype.toString;

module.exports = function isError(value) {
  return (toString.call(value) === '[object Error]');
};
