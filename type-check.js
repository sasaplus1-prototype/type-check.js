/*!
 * @license type-check.js ver.0.3.2 Copyright(c) 2016 sasa+1
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  isArguments: __webpack_require__(4),
	  isArray: __webpack_require__(5),
	  isBoolean: __webpack_require__(6),
	  isBuffer: __webpack_require__(7),
	  isDate: __webpack_require__(8),
	  isError: __webpack_require__(9),
	  isFunction: __webpack_require__(2),
	  isMap: __webpack_require__(10),
	  isNumber: __webpack_require__(11),
	  isObjectLike: __webpack_require__(1),
	  isObject: __webpack_require__(12),
	  isPromiseLike: __webpack_require__(3),
	  isPromise: __webpack_require__(13),
	  isRegExp: __webpack_require__(14),
	  isSet: __webpack_require__(15),
	  isSymbol: __webpack_require__(16),
	  isWeakMap: __webpack_require__(17),
	  isWeakSet: __webpack_require__(18)
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function isObjectLike(value) {
	  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isFunction(value) {
	  return typeof value === 'function' || toString.call(value) === '[object Function]';
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(2),
	    isObjectLike = __webpack_require__(1);

	module.exports = function isPromiseLike(value) {
	  return isObjectLike(value) && isFunction(value.then) && isFunction(value['catch']);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isArguments(value) {
	  return toString.call(value) === '[object Arguments]';
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = Array.isArray ? function isArray(value) {
	  return Array.isArray(value);
	} : function isArray(value) {
	  return toString.call(value) === '[object Array]';
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isBoolean(value) {
	  return typeof value === 'boolean' || toString.call(value) === '[object Boolean]';
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = typeof Buffer !== 'undefined' && Buffer.isBuffer ? function isBuffer(value) {
	  return Buffer.isBuffer(value);
	} : function isBuffer() {
	  return false;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isDate(value) {
	  return toString.call(value) === '[object Date]';
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isError(value) {
	  return toString.call(value) === '[object Error]';
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = typeof Map !== 'undefined' ? function isMap(value) {
	  return toString.call(value) === '[object Map]';
	} : function isMap() {
	  return false;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isNumber(value) {
	  return typeof value === 'number' || toString.call(value) === '[object Number]';
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObjectLike = __webpack_require__(1);

	var toString = Object.prototype.toString;

	module.exports = function isObject(value) {
	  return isObjectLike(value) && toString.call(value) === '[object Object]';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isPromiseLike = __webpack_require__(3);

	var toString = Object.prototype.toString;

	module.exports = function isPromise(value) {
	  return isPromiseLike(value) && toString.call(value) === '[object Promise]';
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isRegExp(value) {
	  return toString.call(value) === '[object RegExp]';
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = typeof Set !== 'undefined' ? function isSet(value) {
	  return toString.call(value) === '[object Set]';
	} : function isSet() {
	  return false;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var toString = Object.prototype.toString;

	module.exports = typeof Symbol !== 'undefined' && _typeof(Symbol()) === 'symbol' ? function isSymbol(value) {
	  return (
	    // NOTE: `typeof Object(Symbol())` returns 'object', but it is Symbol.
	    (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol' || toString.call(value) === '[object Symbol]'
	  );
	} : function isSymbol() {
	  return false;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = typeof WeakMap !== 'undefined' ? function isWeakMap(value) {
	  return toString.call(value) === '[object WeakMap]';
	} : function isWeakMap() {
	  return false;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = typeof WeakSet !== 'undefined' ? function isWeakSet(value) {
	  return toString.call(value) === '[object WeakSet]';
	} : function isWeakSet() {
	  return false;
	};

/***/ }
/******/ ])
});
;