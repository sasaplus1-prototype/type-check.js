'use strict';

var toString = Object.prototype.toString;

function isArguments(value) {
  return (toString.call(value) === '[object Arguments]');
}

var isArray = (Array.isArray) ?
  function isArray(value) {
    return Array.isArray(value);
  } :
  function isArray(value) {
    return (toString.call(value) === '[object Array]');
  };

function isBoolean(value) {
  return (
    typeof value === 'boolean' || toString.call(value) === '[object Boolean]'
  );
}

var isBuffer = (typeof Buffer !== 'undefined' && Buffer.isBuffer) ?
  function isBuffer(value) {
    return Buffer.isBuffer(value);
  } :
  function isBuffer() {
    return false;
  };

function isDate(value) {
  return (toString.call(value) === '[object Date]');
}

function isError(value) {
  return (toString.call(value) === '[object Error]');
}

function isFunction(value) {
  return (
    typeof value === 'function' || toString.call(value) === '[object Function]'
  );
}

var isMap = (typeof Map !== 'undefined') ?
  function isMap(value) {
    return (toString.call(value) === '[object Map]');
  } :
  function isMap() {
    return false;
  };

function isNumber(value) {
  return (
    typeof value === 'number' || toString.call(value) === '[object Number]'
  );
}

function isObjectLike(value) {
  return (value !== null && typeof value === 'object');
}

function isObject(value) {
  return (isObjectLike(value) && toString.call(value) === '[object Object]');
}

function isPromiseLike(value) {
  return (
    isObjectLike(value) && isFunction(value.then) && isFunction(value['catch'])
  );
}

function isRegExp(value) {
  return (toString.call(value) === '[object RegExp]');
}

var isSet = (typeof Set !== 'undefined') ?
  function isSet() {
    return (toString.call(value) === '[object Set]');
  } :
  function isSet() {
    return false;
  };

function isString(value) {
  return (
    typeof value === 'string' || toString.call(value) === '[object String]'
  );
}

var isSymbol = (typeof Symbol !== 'undefined' && typeof Symbol() === 'symbol') ?
  function isSymbol(value) {
    return (
      // NOTE: `typeof Object(Symbol())` returns 'object', but it is Symbol.
      typeof value === 'symbol' || toString.call(value) === '[object Symbol]'
    );
  } :
  function isSymbol() {
    return false;
  };

var isWeakMap = (typeof WeakMap !== 'undefined') ?
  function isWeakMap(value) {
    return (toString.call(value) === '[object WeakMap]');
  } :
  function isWeakMap() {
    return false;
  };

var isWeakSet = (typeof WeakSet !== 'undefined') ?
  function isWeakSet(value) {
    return (toString.call(value) === '[object WeakSet]');
  } :
  function isWeakSet() {
    return false;
  };

module.exports = {
  isArguments: isArguments,
  isArray: isArray,
  isBoolean: isBoolean,
  isBuffer: isBuffer,
  isDate: isDate,
  isError: isError,
  isFunction: isFunction,
  isMap: isMap,
  isNumber: isNumber,
  isObjectLike: isObjectLike,
  isObject: isObject,
  isPromise: isPromise,
  isRegExp: isRegExp,
  isSet: isSet,
  isString: isString,
  isSymbol: isSymbol,
  isWeakMap: isWeakMap,
  isWeakSet: isWeakSet
};
