'use strict';

const toString = Object.prototype.toString;

module.exports = (typeof WeakMap !== 'undefined') ?
  function isWeakMap(value) {
    return (toString.call(value) === '[object WeakMap]');
  } :
  function isWeakMap() {
    return false;
  };
