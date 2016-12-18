'use strict';

var toString = Object.prototype.toString;

module.exports = function isBoolean(value) {
  return (
    typeof value === 'boolean' || toString.call(value) === '[object Boolean]'
  );
};
