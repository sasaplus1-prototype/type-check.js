'use strict';

var isPromiseLike = require('./is-promise-like');

var toString = Object.prototype.toString;

module.exports = function isPromise(value) {
  return (isPromiseLike(value) && toString.call(value) === '[object Promise]');
};
