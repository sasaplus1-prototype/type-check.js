/*!
 * @license type-check.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/type-check.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["typeCheck"] = factory();
	else
		root["typeCheck"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	var isArray = (Array.isArray) ?
	  function isArray(value) {
	    return Array.isArray(value);
	  } :
	  function isArray(value) {
	    return (isObjectLike(value) && toString.call(value) === '[object Array]');
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
	    typeof value === 'string' ||
	      (isObjectLike(value) && toString.call(value) === '[object String]')
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


/***/ }
/******/ ])
});
;