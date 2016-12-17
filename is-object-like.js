'use strict';

module.exports = function isObjectLike(value) {
  return (value !== null && typeof value === 'object');
};
