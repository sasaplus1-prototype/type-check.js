'use strict';

const isFunction = require('./is-function'),
      isObjectLike = require('./is-object-like');

module.exports = function isPromiseLike(value) {
  return (
    isObjectLike(value) && isFunction(value.then) && isFunction(value['catch'])
  );
};
