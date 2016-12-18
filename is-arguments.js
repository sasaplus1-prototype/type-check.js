'use strict';

var toString = Object.prototype.toString;

module.exports = function isArguments(value) {
  return (toString.call(value) === '[object Arguments]');
};
