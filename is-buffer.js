'use strict';

module.exports = (typeof Buffer === 'function' && Buffer.isBuffer) ?
  function isBuffer(value) {
    return Buffer.isBuffer(value);
  } :
  function isBuffer() {
    return false;
  };
