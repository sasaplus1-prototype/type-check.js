'use strict';

const isObjectLike = require('./is-object-like');

const toString = Object.prototype.toString;

module.exports = function isObject(value) {
  return (isObjectLike(value) && toString.call(value) === '[object Object]');
};
