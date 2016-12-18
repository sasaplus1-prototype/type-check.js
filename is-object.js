'use strict';

var isObjectLike = require('./is-object-like');

var toString = Object.prototype.toString;

module.exports = function isObject(value) {
  return (isObjectLike(value) && toString.call(value) === '[object Object]');
};
