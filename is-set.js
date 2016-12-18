'use strict';

var toString = Object.prototype.toString;

module.exports = (typeof Set === 'function') ?
  function isSet(value) {
    return (toString.call(value) === '[object Set]');
  } :
  function isSet() {
    return false;
  };
