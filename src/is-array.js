'use strict';

const toString = Object.prototype.toString;

module.exports = (Array.isArray) ?
  function isArray(value) {
    return Array.isArray(value);
  } :
  function isArray(value) {
    return (toString.call(value) === '[object Array]');
  };
