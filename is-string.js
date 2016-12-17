'use strict';

const toString = Object.prototype.toString;

module.exports = function isString(value) {
  return (
    typeof value === 'string' || toString.call(value) === '[object String]'
  );
};
