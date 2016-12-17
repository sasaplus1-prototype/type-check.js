'use strict';

const toString = Object.prototype.toString;

module.exports = (typeof Set !== 'undefined') ?
  function isSet(value) {
    return (toString.call(value) === '[object Set]');
  } :
  function isSet() {
    return false;
  };
