'use strict';

var toString = Object.prototype.toString;

var isArray = (Array.isArray) ?
  function isArray(value) {
    return Array.isArray(value);
  } :
  function isArray(value) {
    return (toString.call(value) === '[object Array]');
  };

function isFunction(value) {
  return (
    typeof value === 'function' || toString.call(value) === '[object Function]'
  );
}

function isObjectLike(value) {
  return (value !== null && typeof value === 'object');
}

function isObject(value) {
  return (isObjectLike(value) && toString.call(value) === '[object Object]');
}

function isRegExp(value) {
  return (toString.call(value) === '[object RegExp]');
}

function isString(value) {
  return (
    typeof value === 'string' || toString.call(value) === '[object String]'
  );
}

module.exports = {
  isArray: isArray,
  isFunction: isFunction,
  isObjectLike: isObjectLike,
  isObject: isObject,
  isRegExp: isRegExp,
  isString: isString
};
