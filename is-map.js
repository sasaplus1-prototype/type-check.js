'use strict';

var toString = Object.prototype.toString;

module.exports = (typeof Map === 'function') ?
  function isMap(value) {
    return (toString.call(value) === '[object Map]');
  } :
  function isMap() {
    return false;
  };
