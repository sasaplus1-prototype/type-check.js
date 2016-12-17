'use strict';

const isPromiseLike = require('./is-promise-like');

const toString = Object.prototype.toString;

module.exports = function isPromise(value) {
  return (isPromiseLike(value) && toString.call(value) === '[object Promise]');
};
