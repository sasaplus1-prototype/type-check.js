'use strict';

const toString = Object.prototype.toString;

module.exports = (
    typeof Symbol !== 'undefined' && typeof Symbol() === 'symbol'
  ) ?
  function isSymbol(value) {
    return (
      // NOTE: `typeof Object(Symbol())` returns 'object', but it is Symbol.
      typeof value === 'symbol' || toString.call(value) === '[object Symbol]'
    );
  } :
  function isSymbol() {
    return false;
  };
