'use strict';

var toString = Object.prototype.toString;

module.exports = (typeof WeakMap === 'function') ?
  function isWeakMap(value) {
    return (toString.call(value) === '[object WeakMap]');
  } :
  function isWeakMap() {
    return false;
  };
