'use strict';

const toString = Object.prototype.toString;

module.exports = (typeof WeakSet !== 'undefined') ?
  function isWeakSet(value) {
    return (toString.call(value) === '[object WeakSet]');
  } :
  function isWeakSet() {
    return false;
  };
