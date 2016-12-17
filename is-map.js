'use strict';

const toString = Object.prototype.toString;

module.exports = (typeof Map !== 'undefined') ?
  function isMap(value) {
    return (toString.call(value) === '[object Map]');
  } :
  function isMap() {
    return false;
  };
