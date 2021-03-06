'use strict';

var toString = Object.prototype.toString;

module.exports = function isFunction(value) {
  return (
    typeof value === 'function' || toString.call(value) === '[object Function]'
  );
};
