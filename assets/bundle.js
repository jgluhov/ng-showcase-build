/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $___46__46__47_styles_47_app_46_styl__,
	    $__config_46_jsx__,
	    $__run_46_jsx__,
	    $__controllers_47_showcaseCtrl_46_jsx__,
	    $__directives_47_fileModel_46_jsx__,
	    $__directives_47_showcase_46_jsx__,
	    $__directives_47_thumbnail_46_jsx__,
	    $__directives_47_deleteAll_46_jsx__,
	    $__directives_47_addProduct_46_jsx__,
	    $__directives_47_totalProducts_46_jsx__,
	    $__directives_47_showcaseSearch_46_jsx__,
	    $__directives_47_showcasePerPage_46_jsx__,
	    $__factories_47_mProduct_46_jsx__,
	    $__factories_47_perPageFactory_46_jsx__,
	    $__filters_47_status_46_jsx__,
	    $__filters_47_sale_46_jsx__;
	__webpack_require__(1);
	'use strict';
	($___46__46__47_styles_47_app_46_styl__ = __webpack_require__(3), $___46__46__47_styles_47_app_46_styl__ && $___46__46__47_styles_47_app_46_styl__.__esModule && $___46__46__47_styles_47_app_46_styl__ || {default: $___46__46__47_styles_47_app_46_styl__});
	var config = ($__config_46_jsx__ = __webpack_require__(7), $__config_46_jsx__ && $__config_46_jsx__.__esModule && $__config_46_jsx__ || {default: $__config_46_jsx__}).config;
	var run = ($__run_46_jsx__ = __webpack_require__(8), $__run_46_jsx__ && $__run_46_jsx__.__esModule && $__run_46_jsx__ || {default: $__run_46_jsx__}).run;
	var showcaseCtrl = ($__controllers_47_showcaseCtrl_46_jsx__ = __webpack_require__(9), $__controllers_47_showcaseCtrl_46_jsx__ && $__controllers_47_showcaseCtrl_46_jsx__.__esModule && $__controllers_47_showcaseCtrl_46_jsx__ || {default: $__controllers_47_showcaseCtrl_46_jsx__}).showcaseCtrl;
	var fileModel = ($__directives_47_fileModel_46_jsx__ = __webpack_require__(10), $__directives_47_fileModel_46_jsx__ && $__directives_47_fileModel_46_jsx__.__esModule && $__directives_47_fileModel_46_jsx__ || {default: $__directives_47_fileModel_46_jsx__}).fileModel;
	var showcase = ($__directives_47_showcase_46_jsx__ = __webpack_require__(11), $__directives_47_showcase_46_jsx__ && $__directives_47_showcase_46_jsx__.__esModule && $__directives_47_showcase_46_jsx__ || {default: $__directives_47_showcase_46_jsx__}).showcase;
	var thumbnail = ($__directives_47_thumbnail_46_jsx__ = __webpack_require__(14), $__directives_47_thumbnail_46_jsx__ && $__directives_47_thumbnail_46_jsx__.__esModule && $__directives_47_thumbnail_46_jsx__ || {default: $__directives_47_thumbnail_46_jsx__}).thumbnail;
	var deleteAll = ($__directives_47_deleteAll_46_jsx__ = __webpack_require__(15), $__directives_47_deleteAll_46_jsx__ && $__directives_47_deleteAll_46_jsx__.__esModule && $__directives_47_deleteAll_46_jsx__ || {default: $__directives_47_deleteAll_46_jsx__}).deleteAll;
	var addProduct = ($__directives_47_addProduct_46_jsx__ = __webpack_require__(16), $__directives_47_addProduct_46_jsx__ && $__directives_47_addProduct_46_jsx__.__esModule && $__directives_47_addProduct_46_jsx__ || {default: $__directives_47_addProduct_46_jsx__}).addProduct;
	var totalProducts = ($__directives_47_totalProducts_46_jsx__ = __webpack_require__(17), $__directives_47_totalProducts_46_jsx__ && $__directives_47_totalProducts_46_jsx__.__esModule && $__directives_47_totalProducts_46_jsx__ || {default: $__directives_47_totalProducts_46_jsx__}).totalProducts;
	var showcaseSearch = ($__directives_47_showcaseSearch_46_jsx__ = __webpack_require__(18), $__directives_47_showcaseSearch_46_jsx__ && $__directives_47_showcaseSearch_46_jsx__.__esModule && $__directives_47_showcaseSearch_46_jsx__ || {default: $__directives_47_showcaseSearch_46_jsx__}).showcaseSearch;
	var showcasePerPage = ($__directives_47_showcasePerPage_46_jsx__ = __webpack_require__(19), $__directives_47_showcasePerPage_46_jsx__ && $__directives_47_showcasePerPage_46_jsx__.__esModule && $__directives_47_showcasePerPage_46_jsx__ || {default: $__directives_47_showcasePerPage_46_jsx__}).showcasePerPage;
	var mProduct = ($__factories_47_mProduct_46_jsx__ = __webpack_require__(20), $__factories_47_mProduct_46_jsx__ && $__factories_47_mProduct_46_jsx__.__esModule && $__factories_47_mProduct_46_jsx__ || {default: $__factories_47_mProduct_46_jsx__}).mProduct;
	var perPageFactory = ($__factories_47_perPageFactory_46_jsx__ = __webpack_require__(21), $__factories_47_perPageFactory_46_jsx__ && $__factories_47_perPageFactory_46_jsx__.__esModule && $__factories_47_perPageFactory_46_jsx__ || {default: $__factories_47_perPageFactory_46_jsx__}).perPageFactory;
	var status = ($__filters_47_status_46_jsx__ = __webpack_require__(22), $__filters_47_status_46_jsx__ && $__filters_47_status_46_jsx__.__esModule && $__filters_47_status_46_jsx__ || {default: $__filters_47_status_46_jsx__}).status;
	var sale = ($__filters_47_sale_46_jsx__ = __webpack_require__(23), $__filters_47_sale_46_jsx__ && $__filters_47_sale_46_jsx__.__esModule && $__filters_47_sale_46_jsx__ || {default: $__filters_47_sale_46_jsx__}).sale;
	var ngShowcase = angular.module('ngShowcase', ['ui.router', 'ngStorage', 'angularUtils.directives.dirPagination']);
	ngShowcase.config(config);
	ngShowcase.run(run);
	ngShowcase.controller('showcaseCtrl', showcaseCtrl);
	ngShowcase.factory('mProduct', mProduct).factory('perPageFactory', perPageFactory);
	ngShowcase.directive('addProduct', addProduct).directive('fileModel', fileModel).directive('showcase', showcase).directive('thumbnail', thumbnail).directive('deleteAll', deleteAll).directive('totalProducts', totalProducts).directive('showcaseSearch', showcaseSearch).directive('showcasePerPage', showcasePerPage);
	ngShowcase.filter('status', status).filter('sale', sale);
	angular.bootstrap(document, ['ngShowcase']);
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function(global) {
	  'use strict';
	  if (global.$traceurRuntime) {
	    return;
	  }
	  var $Object = Object;
	  var $TypeError = TypeError;
	  var $create = $Object.create;
	  var $defineProperties = $Object.defineProperties;
	  var $defineProperty = $Object.defineProperty;
	  var $freeze = $Object.freeze;
	  var $getOwnPropertyDescriptor = $Object.getOwnPropertyDescriptor;
	  var $getOwnPropertyNames = $Object.getOwnPropertyNames;
	  var $keys = $Object.keys;
	  var $hasOwnProperty = $Object.prototype.hasOwnProperty;
	  var $toString = $Object.prototype.toString;
	  var $preventExtensions = Object.preventExtensions;
	  var $seal = Object.seal;
	  var $isExtensible = Object.isExtensible;
	  function nonEnum(value) {
	    return {
	      configurable: true,
	      enumerable: false,
	      value: value,
	      writable: true
	    };
	  }
	  var types = {
	    void: function voidType() {},
	    any: function any() {},
	    string: function string() {},
	    number: function number() {},
	    boolean: function boolean() {}
	  };
	  var method = nonEnum;
	  var counter = 0;
	  function newUniqueString() {
	    return '__$' + Math.floor(Math.random() * 1e9) + '$' + ++counter + '$__';
	  }
	  var symbolInternalProperty = newUniqueString();
	  var symbolDescriptionProperty = newUniqueString();
	  var symbolDataProperty = newUniqueString();
	  var symbolValues = $create(null);
	  var privateNames = $create(null);
	  function isPrivateName(s) {
	    return privateNames[s];
	  }
	  function createPrivateName() {
	    var s = newUniqueString();
	    privateNames[s] = true;
	    return s;
	  }
	  function isShimSymbol(symbol) {
	    return typeof symbol === 'object' && symbol instanceof SymbolValue;
	  }
	  function typeOf(v) {
	    if (isShimSymbol(v))
	      return 'symbol';
	    return typeof v;
	  }
	  function Symbol(description) {
	    var value = new SymbolValue(description);
	    if (!(this instanceof Symbol))
	      return value;
	    throw new TypeError('Symbol cannot be new\'ed');
	  }
	  $defineProperty(Symbol.prototype, 'constructor', nonEnum(Symbol));
	  $defineProperty(Symbol.prototype, 'toString', method(function() {
	    var symbolValue = this[symbolDataProperty];
	    if (!getOption('symbols'))
	      return symbolValue[symbolInternalProperty];
	    if (!symbolValue)
	      throw TypeError('Conversion from symbol to string');
	    var desc = symbolValue[symbolDescriptionProperty];
	    if (desc === undefined)
	      desc = '';
	    return 'Symbol(' + desc + ')';
	  }));
	  $defineProperty(Symbol.prototype, 'valueOf', method(function() {
	    var symbolValue = this[symbolDataProperty];
	    if (!symbolValue)
	      throw TypeError('Conversion from symbol to string');
	    if (!getOption('symbols'))
	      return symbolValue[symbolInternalProperty];
	    return symbolValue;
	  }));
	  function SymbolValue(description) {
	    var key = newUniqueString();
	    $defineProperty(this, symbolDataProperty, {value: this});
	    $defineProperty(this, symbolInternalProperty, {value: key});
	    $defineProperty(this, symbolDescriptionProperty, {value: description});
	    freeze(this);
	    symbolValues[key] = this;
	  }
	  $defineProperty(SymbolValue.prototype, 'constructor', nonEnum(Symbol));
	  $defineProperty(SymbolValue.prototype, 'toString', {
	    value: Symbol.prototype.toString,
	    enumerable: false
	  });
	  $defineProperty(SymbolValue.prototype, 'valueOf', {
	    value: Symbol.prototype.valueOf,
	    enumerable: false
	  });
	  var hashProperty = createPrivateName();
	  var hashPropertyDescriptor = {value: undefined};
	  var hashObjectProperties = {
	    hash: {value: undefined},
	    self: {value: undefined}
	  };
	  var hashCounter = 0;
	  function getOwnHashObject(object) {
	    var hashObject = object[hashProperty];
	    if (hashObject && hashObject.self === object)
	      return hashObject;
	    if ($isExtensible(object)) {
	      hashObjectProperties.hash.value = hashCounter++;
	      hashObjectProperties.self.value = object;
	      hashPropertyDescriptor.value = $create(null, hashObjectProperties);
	      $defineProperty(object, hashProperty, hashPropertyDescriptor);
	      return hashPropertyDescriptor.value;
	    }
	    return undefined;
	  }
	  function freeze(object) {
	    getOwnHashObject(object);
	    return $freeze.apply(this, arguments);
	  }
	  function preventExtensions(object) {
	    getOwnHashObject(object);
	    return $preventExtensions.apply(this, arguments);
	  }
	  function seal(object) {
	    getOwnHashObject(object);
	    return $seal.apply(this, arguments);
	  }
	  freeze(SymbolValue.prototype);
	  function isSymbolString(s) {
	    return symbolValues[s] || privateNames[s];
	  }
	  function toProperty(name) {
	    if (isShimSymbol(name))
	      return name[symbolInternalProperty];
	    return name;
	  }
	  function removeSymbolKeys(array) {
	    var rv = [];
	    for (var i = 0; i < array.length; i++) {
	      if (!isSymbolString(array[i])) {
	        rv.push(array[i]);
	      }
	    }
	    return rv;
	  }
	  function getOwnPropertyNames(object) {
	    return removeSymbolKeys($getOwnPropertyNames(object));
	  }
	  function keys(object) {
	    return removeSymbolKeys($keys(object));
	  }
	  function getOwnPropertySymbols(object) {
	    var rv = [];
	    var names = $getOwnPropertyNames(object);
	    for (var i = 0; i < names.length; i++) {
	      var symbol = symbolValues[names[i]];
	      if (symbol) {
	        rv.push(symbol);
	      }
	    }
	    return rv;
	  }
	  function getOwnPropertyDescriptor(object, name) {
	    return $getOwnPropertyDescriptor(object, toProperty(name));
	  }
	  function hasOwnProperty(name) {
	    return $hasOwnProperty.call(this, toProperty(name));
	  }
	  function getOption(name) {
	    return global.traceur && global.traceur.options[name];
	  }
	  function defineProperty(object, name, descriptor) {
	    if (isShimSymbol(name)) {
	      name = name[symbolInternalProperty];
	    }
	    $defineProperty(object, name, descriptor);
	    return object;
	  }
	  function polyfillObject(Object) {
	    $defineProperty(Object, 'defineProperty', {value: defineProperty});
	    $defineProperty(Object, 'getOwnPropertyNames', {value: getOwnPropertyNames});
	    $defineProperty(Object, 'getOwnPropertyDescriptor', {value: getOwnPropertyDescriptor});
	    $defineProperty(Object.prototype, 'hasOwnProperty', {value: hasOwnProperty});
	    $defineProperty(Object, 'freeze', {value: freeze});
	    $defineProperty(Object, 'preventExtensions', {value: preventExtensions});
	    $defineProperty(Object, 'seal', {value: seal});
	    $defineProperty(Object, 'keys', {value: keys});
	  }
	  function exportStar(object) {
	    for (var i = 1; i < arguments.length; i++) {
	      var names = $getOwnPropertyNames(arguments[i]);
	      for (var j = 0; j < names.length; j++) {
	        var name = names[j];
	        if (isSymbolString(name))
	          continue;
	        (function(mod, name) {
	          $defineProperty(object, name, {
	            get: function() {
	              return mod[name];
	            },
	            enumerable: true
	          });
	        })(arguments[i], names[j]);
	      }
	    }
	    return object;
	  }
	  function isObject(x) {
	    return x != null && (typeof x === 'object' || typeof x === 'function');
	  }
	  function toObject(x) {
	    if (x == null)
	      throw $TypeError();
	    return $Object(x);
	  }
	  function checkObjectCoercible(argument) {
	    if (argument == null) {
	      throw new TypeError('Value cannot be converted to an Object');
	    }
	    return argument;
	  }
	  function polyfillSymbol(global, Symbol) {
	    if (!global.Symbol) {
	      global.Symbol = Symbol;
	      Object.getOwnPropertySymbols = getOwnPropertySymbols;
	    }
	    if (!global.Symbol.iterator) {
	      global.Symbol.iterator = Symbol('Symbol.iterator');
	    }
	  }
	  function setupGlobals(global) {
	    polyfillSymbol(global, Symbol);
	    global.Reflect = global.Reflect || {};
	    global.Reflect.global = global.Reflect.global || global;
	    polyfillObject(global.Object);
	  }
	  setupGlobals(global);
	  global.$traceurRuntime = {
	    checkObjectCoercible: checkObjectCoercible,
	    createPrivateName: createPrivateName,
	    defineProperties: $defineProperties,
	    defineProperty: $defineProperty,
	    exportStar: exportStar,
	    getOwnHashObject: getOwnHashObject,
	    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	    getOwnPropertyNames: $getOwnPropertyNames,
	    isObject: isObject,
	    isPrivateName: isPrivateName,
	    isSymbolString: isSymbolString,
	    keys: $keys,
	    setupGlobals: setupGlobals,
	    toObject: toObject,
	    toProperty: toProperty,
	    type: types,
	    typeof: typeOf
	  };
	})(typeof global !== 'undefined' ? global : this);
	(function() {
	  'use strict';
	  function spread() {
	    var rv = [],
	        j = 0,
	        iterResult;
	    for (var i = 0; i < arguments.length; i++) {
	      var valueToSpread = $traceurRuntime.checkObjectCoercible(arguments[i]);
	      if (typeof valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)] !== 'function') {
	        throw new TypeError('Cannot spread non-iterable object.');
	      }
	      var iter = valueToSpread[$traceurRuntime.toProperty(Symbol.iterator)]();
	      while (!(iterResult = iter.next()).done) {
	        rv[j++] = iterResult.value;
	      }
	    }
	    return rv;
	  }
	  $traceurRuntime.spread = spread;
	})();
	(function() {
	  'use strict';
	  var $Object = Object;
	  var $TypeError = TypeError;
	  var $create = $Object.create;
	  var $defineProperties = $traceurRuntime.defineProperties;
	  var $defineProperty = $traceurRuntime.defineProperty;
	  var $getOwnPropertyDescriptor = $traceurRuntime.getOwnPropertyDescriptor;
	  var $getOwnPropertyNames = $traceurRuntime.getOwnPropertyNames;
	  var $getPrototypeOf = Object.getPrototypeOf;
	  var $__0 = Object,
	      getOwnPropertyNames = $__0.getOwnPropertyNames,
	      getOwnPropertySymbols = $__0.getOwnPropertySymbols;
	  function superDescriptor(homeObject, name) {
	    var proto = $getPrototypeOf(homeObject);
	    do {
	      var result = $getOwnPropertyDescriptor(proto, name);
	      if (result)
	        return result;
	      proto = $getPrototypeOf(proto);
	    } while (proto);
	    return undefined;
	  }
	  function superCall(self, homeObject, name, args) {
	    return superGet(self, homeObject, name).apply(self, args);
	  }
	  function superGet(self, homeObject, name) {
	    var descriptor = superDescriptor(homeObject, name);
	    if (descriptor) {
	      if (!descriptor.get)
	        return descriptor.value;
	      return descriptor.get.call(self);
	    }
	    return undefined;
	  }
	  function superSet(self, homeObject, name, value) {
	    var descriptor = superDescriptor(homeObject, name);
	    if (descriptor && descriptor.set) {
	      descriptor.set.call(self, value);
	      return value;
	    }
	    throw $TypeError(("super has no setter '" + name + "'."));
	  }
	  function getDescriptors(object) {
	    var descriptors = {};
	    var names = getOwnPropertyNames(object);
	    for (var i = 0; i < names.length; i++) {
	      var name = names[i];
	      descriptors[name] = $getOwnPropertyDescriptor(object, name);
	    }
	    var symbols = getOwnPropertySymbols(object);
	    for (var i = 0; i < symbols.length; i++) {
	      var symbol = symbols[i];
	      descriptors[$traceurRuntime.toProperty(symbol)] = $getOwnPropertyDescriptor(object, $traceurRuntime.toProperty(symbol));
	    }
	    return descriptors;
	  }
	  function createClass(ctor, object, staticObject, superClass) {
	    $defineProperty(object, 'constructor', {
	      value: ctor,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	    if (arguments.length > 3) {
	      if (typeof superClass === 'function')
	        ctor.__proto__ = superClass;
	      ctor.prototype = $create(getProtoParent(superClass), getDescriptors(object));
	    } else {
	      ctor.prototype = object;
	    }
	    $defineProperty(ctor, 'prototype', {
	      configurable: false,
	      writable: false
	    });
	    return $defineProperties(ctor, getDescriptors(staticObject));
	  }
	  function getProtoParent(superClass) {
	    if (typeof superClass === 'function') {
	      var prototype = superClass.prototype;
	      if ($Object(prototype) === prototype || prototype === null)
	        return superClass.prototype;
	      throw new $TypeError('super prototype must be an Object or null');
	    }
	    if (superClass === null)
	      return null;
	    throw new $TypeError(("Super expression must either be null or a function, not " + typeof superClass + "."));
	  }
	  function defaultSuperCall(self, homeObject, args) {
	    if ($getPrototypeOf(homeObject) !== null)
	      superCall(self, homeObject, 'constructor', args);
	  }
	  $traceurRuntime.createClass = createClass;
	  $traceurRuntime.defaultSuperCall = defaultSuperCall;
	  $traceurRuntime.superCall = superCall;
	  $traceurRuntime.superGet = superGet;
	  $traceurRuntime.superSet = superSet;
	})();
	(function() {
	  'use strict';
	  var createPrivateName = $traceurRuntime.createPrivateName;
	  var $defineProperties = $traceurRuntime.defineProperties;
	  var $defineProperty = $traceurRuntime.defineProperty;
	  var $create = Object.create;
	  var $TypeError = TypeError;
	  function nonEnum(value) {
	    return {
	      configurable: true,
	      enumerable: false,
	      value: value,
	      writable: true
	    };
	  }
	  var ST_NEWBORN = 0;
	  var ST_EXECUTING = 1;
	  var ST_SUSPENDED = 2;
	  var ST_CLOSED = 3;
	  var END_STATE = -2;
	  var RETHROW_STATE = -3;
	  function getInternalError(state) {
	    return new Error('Traceur compiler bug: invalid state in state machine: ' + state);
	  }
	  function GeneratorContext() {
	    this.state = 0;
	    this.GState = ST_NEWBORN;
	    this.storedException = undefined;
	    this.finallyFallThrough = undefined;
	    this.sent_ = undefined;
	    this.returnValue = undefined;
	    this.tryStack_ = [];
	  }
	  GeneratorContext.prototype = {
	    pushTry: function(catchState, finallyState) {
	      if (finallyState !== null) {
	        var finallyFallThrough = null;
	        for (var i = this.tryStack_.length - 1; i >= 0; i--) {
	          if (this.tryStack_[i].catch !== undefined) {
	            finallyFallThrough = this.tryStack_[i].catch;
	            break;
	          }
	        }
	        if (finallyFallThrough === null)
	          finallyFallThrough = RETHROW_STATE;
	        this.tryStack_.push({
	          finally: finallyState,
	          finallyFallThrough: finallyFallThrough
	        });
	      }
	      if (catchState !== null) {
	        this.tryStack_.push({catch: catchState});
	      }
	    },
	    popTry: function() {
	      this.tryStack_.pop();
	    },
	    get sent() {
	      this.maybeThrow();
	      return this.sent_;
	    },
	    set sent(v) {
	      this.sent_ = v;
	    },
	    get sentIgnoreThrow() {
	      return this.sent_;
	    },
	    maybeThrow: function() {
	      if (this.action === 'throw') {
	        this.action = 'next';
	        throw this.sent_;
	      }
	    },
	    end: function() {
	      switch (this.state) {
	        case END_STATE:
	          return this;
	        case RETHROW_STATE:
	          throw this.storedException;
	        default:
	          throw getInternalError(this.state);
	      }
	    },
	    handleException: function(ex) {
	      this.GState = ST_CLOSED;
	      this.state = END_STATE;
	      throw ex;
	    }
	  };
	  function nextOrThrow(ctx, moveNext, action, x) {
	    switch (ctx.GState) {
	      case ST_EXECUTING:
	        throw new Error(("\"" + action + "\" on executing generator"));
	      case ST_CLOSED:
	        if (action == 'next') {
	          return {
	            value: undefined,
	            done: true
	          };
	        }
	        throw x;
	      case ST_NEWBORN:
	        if (action === 'throw') {
	          ctx.GState = ST_CLOSED;
	          throw x;
	        }
	        if (x !== undefined)
	          throw $TypeError('Sent value to newborn generator');
	      case ST_SUSPENDED:
	        ctx.GState = ST_EXECUTING;
	        ctx.action = action;
	        ctx.sent = x;
	        var value = moveNext(ctx);
	        var done = value === ctx;
	        if (done)
	          value = ctx.returnValue;
	        ctx.GState = done ? ST_CLOSED : ST_SUSPENDED;
	        return {
	          value: value,
	          done: done
	        };
	    }
	  }
	  var ctxName = createPrivateName();
	  var moveNextName = createPrivateName();
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  $defineProperty(GeneratorFunctionPrototype, 'constructor', nonEnum(GeneratorFunction));
	  GeneratorFunctionPrototype.prototype = {
	    constructor: GeneratorFunctionPrototype,
	    next: function(v) {
	      return nextOrThrow(this[ctxName], this[moveNextName], 'next', v);
	    },
	    throw: function(v) {
	      return nextOrThrow(this[ctxName], this[moveNextName], 'throw', v);
	    }
	  };
	  $defineProperties(GeneratorFunctionPrototype.prototype, {
	    constructor: {enumerable: false},
	    next: {enumerable: false},
	    throw: {enumerable: false}
	  });
	  Object.defineProperty(GeneratorFunctionPrototype.prototype, Symbol.iterator, nonEnum(function() {
	    return this;
	  }));
	  function createGeneratorInstance(innerFunction, functionObject, self) {
	    var moveNext = getMoveNext(innerFunction, self);
	    var ctx = new GeneratorContext();
	    var object = $create(functionObject.prototype);
	    object[ctxName] = ctx;
	    object[moveNextName] = moveNext;
	    return object;
	  }
	  function initGeneratorFunction(functionObject) {
	    functionObject.prototype = $create(GeneratorFunctionPrototype.prototype);
	    functionObject.__proto__ = GeneratorFunctionPrototype;
	    return functionObject;
	  }
	  function AsyncFunctionContext() {
	    GeneratorContext.call(this);
	    this.err = undefined;
	    var ctx = this;
	    ctx.result = new Promise(function(resolve, reject) {
	      ctx.resolve = resolve;
	      ctx.reject = reject;
	    });
	  }
	  AsyncFunctionContext.prototype = $create(GeneratorContext.prototype);
	  AsyncFunctionContext.prototype.end = function() {
	    switch (this.state) {
	      case END_STATE:
	        this.resolve(this.returnValue);
	        break;
	      case RETHROW_STATE:
	        this.reject(this.storedException);
	        break;
	      default:
	        this.reject(getInternalError(this.state));
	    }
	  };
	  AsyncFunctionContext.prototype.handleException = function() {
	    this.state = RETHROW_STATE;
	  };
	  function asyncWrap(innerFunction, self) {
	    var moveNext = getMoveNext(innerFunction, self);
	    var ctx = new AsyncFunctionContext();
	    ctx.createCallback = function(newState) {
	      return function(value) {
	        ctx.state = newState;
	        ctx.value = value;
	        moveNext(ctx);
	      };
	    };
	    ctx.errback = function(err) {
	      handleCatch(ctx, err);
	      moveNext(ctx);
	    };
	    moveNext(ctx);
	    return ctx.result;
	  }
	  function getMoveNext(innerFunction, self) {
	    return function(ctx) {
	      while (true) {
	        try {
	          return innerFunction.call(self, ctx);
	        } catch (ex) {
	          handleCatch(ctx, ex);
	        }
	      }
	    };
	  }
	  function handleCatch(ctx, ex) {
	    ctx.storedException = ex;
	    var last = ctx.tryStack_[ctx.tryStack_.length - 1];
	    if (!last) {
	      ctx.handleException(ex);
	      return;
	    }
	    ctx.state = last.catch !== undefined ? last.catch : last.finally;
	    if (last.finallyFallThrough !== undefined)
	      ctx.finallyFallThrough = last.finallyFallThrough;
	  }
	  $traceurRuntime.asyncWrap = asyncWrap;
	  $traceurRuntime.initGeneratorFunction = initGeneratorFunction;
	  $traceurRuntime.createGeneratorInstance = createGeneratorInstance;
	})();
	(function() {
	  function buildFromEncodedParts(opt_scheme, opt_userInfo, opt_domain, opt_port, opt_path, opt_queryData, opt_fragment) {
	    var out = [];
	    if (opt_scheme) {
	      out.push(opt_scheme, ':');
	    }
	    if (opt_domain) {
	      out.push('//');
	      if (opt_userInfo) {
	        out.push(opt_userInfo, '@');
	      }
	      out.push(opt_domain);
	      if (opt_port) {
	        out.push(':', opt_port);
	      }
	    }
	    if (opt_path) {
	      out.push(opt_path);
	    }
	    if (opt_queryData) {
	      out.push('?', opt_queryData);
	    }
	    if (opt_fragment) {
	      out.push('#', opt_fragment);
	    }
	    return out.join('');
	  }
	  ;
	  var splitRe = new RegExp('^' + '(?:' + '([^:/?#.]+)' + ':)?' + '(?://' + '(?:([^/?#]*)@)?' + '([\\w\\d\\-\\u0100-\\uffff.%]*)' + '(?::([0-9]+))?' + ')?' + '([^?#]+)?' + '(?:\\?([^#]*))?' + '(?:#(.*))?' + '$');
	  var ComponentIndex = {
	    SCHEME: 1,
	    USER_INFO: 2,
	    DOMAIN: 3,
	    PORT: 4,
	    PATH: 5,
	    QUERY_DATA: 6,
	    FRAGMENT: 7
	  };
	  function split(uri) {
	    return (uri.match(splitRe));
	  }
	  function removeDotSegments(path) {
	    if (path === '/')
	      return '/';
	    var leadingSlash = path[0] === '/' ? '/' : '';
	    var trailingSlash = path.slice(-1) === '/' ? '/' : '';
	    var segments = path.split('/');
	    var out = [];
	    var up = 0;
	    for (var pos = 0; pos < segments.length; pos++) {
	      var segment = segments[pos];
	      switch (segment) {
	        case '':
	        case '.':
	          break;
	        case '..':
	          if (out.length)
	            out.pop();
	          else
	            up++;
	          break;
	        default:
	          out.push(segment);
	      }
	    }
	    if (!leadingSlash) {
	      while (up-- > 0) {
	        out.unshift('..');
	      }
	      if (out.length === 0)
	        out.push('.');
	    }
	    return leadingSlash + out.join('/') + trailingSlash;
	  }
	  function joinAndCanonicalizePath(parts) {
	    var path = parts[ComponentIndex.PATH] || '';
	    path = removeDotSegments(path);
	    parts[ComponentIndex.PATH] = path;
	    return buildFromEncodedParts(parts[ComponentIndex.SCHEME], parts[ComponentIndex.USER_INFO], parts[ComponentIndex.DOMAIN], parts[ComponentIndex.PORT], parts[ComponentIndex.PATH], parts[ComponentIndex.QUERY_DATA], parts[ComponentIndex.FRAGMENT]);
	  }
	  function canonicalizeUrl(url) {
	    var parts = split(url);
	    return joinAndCanonicalizePath(parts);
	  }
	  function resolveUrl(base, url) {
	    var parts = split(url);
	    var baseParts = split(base);
	    if (parts[ComponentIndex.SCHEME]) {
	      return joinAndCanonicalizePath(parts);
	    } else {
	      parts[ComponentIndex.SCHEME] = baseParts[ComponentIndex.SCHEME];
	    }
	    for (var i = ComponentIndex.SCHEME; i <= ComponentIndex.PORT; i++) {
	      if (!parts[i]) {
	        parts[i] = baseParts[i];
	      }
	    }
	    if (parts[ComponentIndex.PATH][0] == '/') {
	      return joinAndCanonicalizePath(parts);
	    }
	    var path = baseParts[ComponentIndex.PATH];
	    var index = path.lastIndexOf('/');
	    path = path.slice(0, index + 1) + parts[ComponentIndex.PATH];
	    parts[ComponentIndex.PATH] = path;
	    return joinAndCanonicalizePath(parts);
	  }
	  function isAbsolute(name) {
	    if (!name)
	      return false;
	    if (name[0] === '/')
	      return true;
	    var parts = split(name);
	    if (parts[ComponentIndex.SCHEME])
	      return true;
	    return false;
	  }
	  $traceurRuntime.canonicalizeUrl = canonicalizeUrl;
	  $traceurRuntime.isAbsolute = isAbsolute;
	  $traceurRuntime.removeDotSegments = removeDotSegments;
	  $traceurRuntime.resolveUrl = resolveUrl;
	})();
	(function(global) {
	  'use strict';
	  var $__2 = $traceurRuntime,
	      canonicalizeUrl = $__2.canonicalizeUrl,
	      resolveUrl = $__2.resolveUrl,
	      isAbsolute = $__2.isAbsolute;
	  var moduleInstantiators = Object.create(null);
	  var baseURL;
	  if (global.location && global.location.href)
	    baseURL = resolveUrl(global.location.href, './');
	  else
	    baseURL = '';
	  var UncoatedModuleEntry = function UncoatedModuleEntry(url, uncoatedModule) {
	    this.url = url;
	    this.value_ = uncoatedModule;
	  };
	  ($traceurRuntime.createClass)(UncoatedModuleEntry, {}, {});
	  var ModuleEvaluationError = function ModuleEvaluationError(erroneousModuleName, cause) {
	    this.message = this.constructor.name + ': ' + this.stripCause(cause) + ' in ' + erroneousModuleName;
	    if (!(cause instanceof $ModuleEvaluationError) && cause.stack)
	      this.stack = this.stripStack(cause.stack);
	    else
	      this.stack = '';
	  };
	  var $ModuleEvaluationError = ModuleEvaluationError;
	  ($traceurRuntime.createClass)(ModuleEvaluationError, {
	    stripError: function(message) {
	      return message.replace(/.*Error:/, this.constructor.name + ':');
	    },
	    stripCause: function(cause) {
	      if (!cause)
	        return '';
	      if (!cause.message)
	        return cause + '';
	      return this.stripError(cause.message);
	    },
	    loadedBy: function(moduleName) {
	      this.stack += '\n loaded by ' + moduleName;
	    },
	    stripStack: function(causeStack) {
	      var stack = [];
	      causeStack.split('\n').some((function(frame) {
	        if (/UncoatedModuleInstantiator/.test(frame))
	          return true;
	        stack.push(frame);
	      }));
	      stack[0] = this.stripError(stack[0]);
	      return stack.join('\n');
	    }
	  }, {}, Error);
	  var UncoatedModuleInstantiator = function UncoatedModuleInstantiator(url, func) {
	    $traceurRuntime.superCall(this, $UncoatedModuleInstantiator.prototype, "constructor", [url, null]);
	    this.func = func;
	  };
	  var $UncoatedModuleInstantiator = UncoatedModuleInstantiator;
	  ($traceurRuntime.createClass)(UncoatedModuleInstantiator, {getUncoatedModule: function() {
	      if (this.value_)
	        return this.value_;
	      try {
	        return this.value_ = this.func.call(global);
	      } catch (ex) {
	        if (ex instanceof ModuleEvaluationError) {
	          ex.loadedBy(this.url);
	          throw ex;
	        }
	        throw new ModuleEvaluationError(this.url, ex);
	      }
	    }}, {}, UncoatedModuleEntry);
	  function getUncoatedModuleInstantiator(name) {
	    if (!name)
	      return;
	    var url = ModuleStore.normalize(name);
	    return moduleInstantiators[url];
	  }
	  ;
	  var moduleInstances = Object.create(null);
	  var liveModuleSentinel = {};
	  function Module(uncoatedModule) {
	    var isLive = arguments[1];
	    var coatedModule = Object.create(null);
	    Object.getOwnPropertyNames(uncoatedModule).forEach((function(name) {
	      var getter,
	          value;
	      if (isLive === liveModuleSentinel) {
	        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
	        if (descr.get)
	          getter = descr.get;
	      }
	      if (!getter) {
	        value = uncoatedModule[name];
	        getter = function() {
	          return value;
	        };
	      }
	      Object.defineProperty(coatedModule, name, {
	        get: getter,
	        enumerable: true
	      });
	    }));
	    Object.preventExtensions(coatedModule);
	    return coatedModule;
	  }
	  var ModuleStore = {
	    normalize: function(name, refererName, refererAddress) {
	      if (typeof name !== "string")
	        throw new TypeError("module name must be a string, not " + typeof name);
	      if (isAbsolute(name))
	        return canonicalizeUrl(name);
	      if (/[^\.]\/\.\.\//.test(name)) {
	        throw new Error('module name embeds /../: ' + name);
	      }
	      if (name[0] === '.' && refererName)
	        return resolveUrl(refererName, name);
	      return canonicalizeUrl(name);
	    },
	    get: function(normalizedName) {
	      var m = getUncoatedModuleInstantiator(normalizedName);
	      if (!m)
	        return undefined;
	      var moduleInstance = moduleInstances[m.url];
	      if (moduleInstance)
	        return moduleInstance;
	      moduleInstance = Module(m.getUncoatedModule(), liveModuleSentinel);
	      return moduleInstances[m.url] = moduleInstance;
	    },
	    set: function(normalizedName, module) {
	      normalizedName = String(normalizedName);
	      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, (function() {
	        return module;
	      }));
	      moduleInstances[normalizedName] = module;
	    },
	    get baseURL() {
	      return baseURL;
	    },
	    set baseURL(v) {
	      baseURL = String(v);
	    },
	    registerModule: function(name, func) {
	      var normalizedName = ModuleStore.normalize(name);
	      if (moduleInstantiators[normalizedName])
	        throw new Error('duplicate module named ' + normalizedName);
	      moduleInstantiators[normalizedName] = new UncoatedModuleInstantiator(normalizedName, func);
	    },
	    bundleStore: Object.create(null),
	    register: function(name, deps, func) {
	      if (!deps || !deps.length && !func.length) {
	        this.registerModule(name, func);
	      } else {
	        this.bundleStore[name] = {
	          deps: deps,
	          execute: function() {
	            var $__0 = arguments;
	            var depMap = {};
	            deps.forEach((function(dep, index) {
	              return depMap[dep] = $__0[index];
	            }));
	            var registryEntry = func.call(this, depMap);
	            registryEntry.execute.call(this);
	            return registryEntry.exports;
	          }
	        };
	      }
	    },
	    getAnonymousModule: function(func) {
	      return new Module(func.call(global), liveModuleSentinel);
	    },
	    getForTesting: function(name) {
	      var $__0 = this;
	      if (!this.testingPrefix_) {
	        Object.keys(moduleInstances).some((function(key) {
	          var m = /(traceur@[^\/]*\/)/.exec(key);
	          if (m) {
	            $__0.testingPrefix_ = m[1];
	            return true;
	          }
	        }));
	      }
	      return this.get(this.testingPrefix_ + name);
	    }
	  };
	  ModuleStore.set('@traceur/src/runtime/ModuleStore', new Module({ModuleStore: ModuleStore}));
	  var setupGlobals = $traceurRuntime.setupGlobals;
	  $traceurRuntime.setupGlobals = function(global) {
	    setupGlobals(global);
	  };
	  $traceurRuntime.ModuleStore = ModuleStore;
	  global.System = {
	    register: ModuleStore.register.bind(ModuleStore),
	    get: ModuleStore.get,
	    set: ModuleStore.set,
	    normalize: ModuleStore.normalize
	  };
	  $traceurRuntime.getModuleImpl = function(name) {
	    var instantiator = getUncoatedModuleInstantiator(name);
	    return instantiator && instantiator.getUncoatedModule();
	  };
	})(typeof global !== 'undefined' ? global : this);
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/utils", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/utils";
	  var $ceil = Math.ceil;
	  var $floor = Math.floor;
	  var $isFinite = isFinite;
	  var $isNaN = isNaN;
	  var $pow = Math.pow;
	  var $min = Math.min;
	  var toObject = $traceurRuntime.toObject;
	  function toUint32(x) {
	    return x >>> 0;
	  }
	  function isObject(x) {
	    return x && (typeof x === 'object' || typeof x === 'function');
	  }
	  function isCallable(x) {
	    return typeof x === 'function';
	  }
	  function isNumber(x) {
	    return typeof x === 'number';
	  }
	  function toInteger(x) {
	    x = +x;
	    if ($isNaN(x))
	      return 0;
	    if (x === 0 || !$isFinite(x))
	      return x;
	    return x > 0 ? $floor(x) : $ceil(x);
	  }
	  var MAX_SAFE_LENGTH = $pow(2, 53) - 1;
	  function toLength(x) {
	    var len = toInteger(x);
	    return len < 0 ? 0 : $min(len, MAX_SAFE_LENGTH);
	  }
	  function checkIterable(x) {
	    return !isObject(x) ? undefined : x[Symbol.iterator];
	  }
	  function isConstructor(x) {
	    return isCallable(x);
	  }
	  function createIteratorResultObject(value, done) {
	    return {
	      value: value,
	      done: done
	    };
	  }
	  function maybeDefine(object, name, descr) {
	    if (!(name in object)) {
	      Object.defineProperty(object, name, descr);
	    }
	  }
	  function maybeDefineMethod(object, name, value) {
	    maybeDefine(object, name, {
	      value: value,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	  }
	  function maybeDefineConst(object, name, value) {
	    maybeDefine(object, name, {
	      value: value,
	      configurable: false,
	      enumerable: false,
	      writable: false
	    });
	  }
	  function maybeAddFunctions(object, functions) {
	    for (var i = 0; i < functions.length; i += 2) {
	      var name = functions[i];
	      var value = functions[i + 1];
	      maybeDefineMethod(object, name, value);
	    }
	  }
	  function maybeAddConsts(object, consts) {
	    for (var i = 0; i < consts.length; i += 2) {
	      var name = consts[i];
	      var value = consts[i + 1];
	      maybeDefineConst(object, name, value);
	    }
	  }
	  function maybeAddIterator(object, func, Symbol) {
	    if (!Symbol || !Symbol.iterator || object[Symbol.iterator])
	      return;
	    if (object['@@iterator'])
	      func = object['@@iterator'];
	    Object.defineProperty(object, Symbol.iterator, {
	      value: func,
	      configurable: true,
	      enumerable: false,
	      writable: true
	    });
	  }
	  var polyfills = [];
	  function registerPolyfill(func) {
	    polyfills.push(func);
	  }
	  function polyfillAll(global) {
	    polyfills.forEach((function(f) {
	      return f(global);
	    }));
	  }
	  return {
	    get toObject() {
	      return toObject;
	    },
	    get toUint32() {
	      return toUint32;
	    },
	    get isObject() {
	      return isObject;
	    },
	    get isCallable() {
	      return isCallable;
	    },
	    get isNumber() {
	      return isNumber;
	    },
	    get toInteger() {
	      return toInteger;
	    },
	    get toLength() {
	      return toLength;
	    },
	    get checkIterable() {
	      return checkIterable;
	    },
	    get isConstructor() {
	      return isConstructor;
	    },
	    get createIteratorResultObject() {
	      return createIteratorResultObject;
	    },
	    get maybeDefine() {
	      return maybeDefine;
	    },
	    get maybeDefineMethod() {
	      return maybeDefineMethod;
	    },
	    get maybeDefineConst() {
	      return maybeDefineConst;
	    },
	    get maybeAddFunctions() {
	      return maybeAddFunctions;
	    },
	    get maybeAddConsts() {
	      return maybeAddConsts;
	    },
	    get maybeAddIterator() {
	      return maybeAddIterator;
	    },
	    get registerPolyfill() {
	      return registerPolyfill;
	    },
	    get polyfillAll() {
	      return polyfillAll;
	    }
	  };
	});
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Map", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Map";
	  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
	      isObject = $__0.isObject,
	      maybeAddIterator = $__0.maybeAddIterator,
	      registerPolyfill = $__0.registerPolyfill;
	  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
	  var $hasOwnProperty = Object.prototype.hasOwnProperty;
	  var deletedSentinel = {};
	  function lookupIndex(map, key) {
	    if (isObject(key)) {
	      var hashObject = getOwnHashObject(key);
	      return hashObject && map.objectIndex_[hashObject.hash];
	    }
	    if (typeof key === 'string')
	      return map.stringIndex_[key];
	    return map.primitiveIndex_[key];
	  }
	  function initMap(map) {
	    map.entries_ = [];
	    map.objectIndex_ = Object.create(null);
	    map.stringIndex_ = Object.create(null);
	    map.primitiveIndex_ = Object.create(null);
	    map.deletedCount_ = 0;
	  }
	  var Map = function Map() {
	    var iterable = arguments[0];
	    if (!isObject(this))
	      throw new TypeError('Map called on incompatible type');
	    if ($hasOwnProperty.call(this, 'entries_')) {
	      throw new TypeError('Map can not be reentrantly initialised');
	    }
	    initMap(this);
	    if (iterable !== null && iterable !== undefined) {
	      for (var $__2 = iterable[Symbol.iterator](),
	          $__3; !($__3 = $__2.next()).done; ) {
	        var $__4 = $__3.value,
	            key = $__4[0],
	            value = $__4[1];
	        {
	          this.set(key, value);
	        }
	      }
	    }
	  };
	  ($traceurRuntime.createClass)(Map, {
	    get size() {
	      return this.entries_.length / 2 - this.deletedCount_;
	    },
	    get: function(key) {
	      var index = lookupIndex(this, key);
	      if (index !== undefined)
	        return this.entries_[index + 1];
	    },
	    set: function(key, value) {
	      var objectMode = isObject(key);
	      var stringMode = typeof key === 'string';
	      var index = lookupIndex(this, key);
	      if (index !== undefined) {
	        this.entries_[index + 1] = value;
	      } else {
	        index = this.entries_.length;
	        this.entries_[index] = key;
	        this.entries_[index + 1] = value;
	        if (objectMode) {
	          var hashObject = getOwnHashObject(key);
	          var hash = hashObject.hash;
	          this.objectIndex_[hash] = index;
	        } else if (stringMode) {
	          this.stringIndex_[key] = index;
	        } else {
	          this.primitiveIndex_[key] = index;
	        }
	      }
	      return this;
	    },
	    has: function(key) {
	      return lookupIndex(this, key) !== undefined;
	    },
	    delete: function(key) {
	      var objectMode = isObject(key);
	      var stringMode = typeof key === 'string';
	      var index;
	      var hash;
	      if (objectMode) {
	        var hashObject = getOwnHashObject(key);
	        if (hashObject) {
	          index = this.objectIndex_[hash = hashObject.hash];
	          delete this.objectIndex_[hash];
	        }
	      } else if (stringMode) {
	        index = this.stringIndex_[key];
	        delete this.stringIndex_[key];
	      } else {
	        index = this.primitiveIndex_[key];
	        delete this.primitiveIndex_[key];
	      }
	      if (index !== undefined) {
	        this.entries_[index] = deletedSentinel;
	        this.entries_[index + 1] = undefined;
	        this.deletedCount_++;
	        return true;
	      }
	      return false;
	    },
	    clear: function() {
	      initMap(this);
	    },
	    forEach: function(callbackFn) {
	      var thisArg = arguments[1];
	      for (var i = 0; i < this.entries_.length; i += 2) {
	        var key = this.entries_[i];
	        var value = this.entries_[i + 1];
	        if (key === deletedSentinel)
	          continue;
	        callbackFn.call(thisArg, value, key, this);
	      }
	    },
	    entries: $traceurRuntime.initGeneratorFunction(function $__5() {
	      var i,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < this.entries_.length) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return [key, value];
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__5, this);
	    }),
	    keys: $traceurRuntime.initGeneratorFunction(function $__6() {
	      var i,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < this.entries_.length) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return key;
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__6, this);
	    }),
	    values: $traceurRuntime.initGeneratorFunction(function $__7() {
	      var i,
	          key,
	          value;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              i = 0;
	              $ctx.state = 12;
	              break;
	            case 12:
	              $ctx.state = (i < this.entries_.length) ? 8 : -2;
	              break;
	            case 4:
	              i += 2;
	              $ctx.state = 12;
	              break;
	            case 8:
	              key = this.entries_[i];
	              value = this.entries_[i + 1];
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = (key === deletedSentinel) ? 4 : 6;
	              break;
	            case 6:
	              $ctx.state = 2;
	              return value;
	            case 2:
	              $ctx.maybeThrow();
	              $ctx.state = 4;
	              break;
	            default:
	              return $ctx.end();
	          }
	      }, $__7, this);
	    })
	  }, {});
	  Object.defineProperty(Map.prototype, Symbol.iterator, {
	    configurable: true,
	    writable: true,
	    value: Map.prototype.entries
	  });
	  function polyfillMap(global) {
	    var $__4 = global,
	        Object = $__4.Object,
	        Symbol = $__4.Symbol;
	    if (!global.Map)
	      global.Map = Map;
	    var mapPrototype = global.Map.prototype;
	    if (mapPrototype.entries === undefined)
	      global.Map = Map;
	    if (mapPrototype.entries) {
	      maybeAddIterator(mapPrototype, mapPrototype.entries, Symbol);
	      maybeAddIterator(Object.getPrototypeOf(new global.Map().entries()), function() {
	        return this;
	      }, Symbol);
	    }
	  }
	  registerPolyfill(polyfillMap);
	  return {
	    get Map() {
	      return Map;
	    },
	    get polyfillMap() {
	      return polyfillMap;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Map" + '');
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Set", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Set";
	  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
	      isObject = $__0.isObject,
	      maybeAddIterator = $__0.maybeAddIterator,
	      registerPolyfill = $__0.registerPolyfill;
	  var Map = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Map").Map;
	  var getOwnHashObject = $traceurRuntime.getOwnHashObject;
	  var $hasOwnProperty = Object.prototype.hasOwnProperty;
	  function initSet(set) {
	    set.map_ = new Map();
	  }
	  var Set = function Set() {
	    var iterable = arguments[0];
	    if (!isObject(this))
	      throw new TypeError('Set called on incompatible type');
	    if ($hasOwnProperty.call(this, 'map_')) {
	      throw new TypeError('Set can not be reentrantly initialised');
	    }
	    initSet(this);
	    if (iterable !== null && iterable !== undefined) {
	      for (var $__4 = iterable[Symbol.iterator](),
	          $__5; !($__5 = $__4.next()).done; ) {
	        var item = $__5.value;
	        {
	          this.add(item);
	        }
	      }
	    }
	  };
	  ($traceurRuntime.createClass)(Set, {
	    get size() {
	      return this.map_.size;
	    },
	    has: function(key) {
	      return this.map_.has(key);
	    },
	    add: function(key) {
	      this.map_.set(key, key);
	      return this;
	    },
	    delete: function(key) {
	      return this.map_.delete(key);
	    },
	    clear: function() {
	      return this.map_.clear();
	    },
	    forEach: function(callbackFn) {
	      var thisArg = arguments[1];
	      var $__2 = this;
	      return this.map_.forEach((function(value, key) {
	        callbackFn.call(thisArg, key, key, $__2);
	      }));
	    },
	    values: $traceurRuntime.initGeneratorFunction(function $__7() {
	      var $__8,
	          $__9;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              $__8 = this.map_.keys()[Symbol.iterator]();
	              $ctx.sent = void 0;
	              $ctx.action = 'next';
	              $ctx.state = 12;
	              break;
	            case 12:
	              $__9 = $__8[$ctx.action]($ctx.sentIgnoreThrow);
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = ($__9.done) ? 3 : 2;
	              break;
	            case 3:
	              $ctx.sent = $__9.value;
	              $ctx.state = -2;
	              break;
	            case 2:
	              $ctx.state = 12;
	              return $__9.value;
	            default:
	              return $ctx.end();
	          }
	      }, $__7, this);
	    }),
	    entries: $traceurRuntime.initGeneratorFunction(function $__10() {
	      var $__11,
	          $__12;
	      return $traceurRuntime.createGeneratorInstance(function($ctx) {
	        while (true)
	          switch ($ctx.state) {
	            case 0:
	              $__11 = this.map_.entries()[Symbol.iterator]();
	              $ctx.sent = void 0;
	              $ctx.action = 'next';
	              $ctx.state = 12;
	              break;
	            case 12:
	              $__12 = $__11[$ctx.action]($ctx.sentIgnoreThrow);
	              $ctx.state = 9;
	              break;
	            case 9:
	              $ctx.state = ($__12.done) ? 3 : 2;
	              break;
	            case 3:
	              $ctx.sent = $__12.value;
	              $ctx.state = -2;
	              break;
	            case 2:
	              $ctx.state = 12;
	              return $__12.value;
	            default:
	              return $ctx.end();
	          }
	      }, $__10, this);
	    })
	  }, {});
	  Object.defineProperty(Set.prototype, Symbol.iterator, {
	    configurable: true,
	    writable: true,
	    value: Set.prototype.values
	  });
	  Object.defineProperty(Set.prototype, 'keys', {
	    configurable: true,
	    writable: true,
	    value: Set.prototype.values
	  });
	  function polyfillSet(global) {
	    var $__6 = global,
	        Object = $__6.Object,
	        Symbol = $__6.Symbol;
	    if (!global.Set)
	      global.Set = Set;
	    var setPrototype = global.Set.prototype;
	    if (setPrototype.values) {
	      maybeAddIterator(setPrototype, setPrototype.values, Symbol);
	      maybeAddIterator(Object.getPrototypeOf(new global.Set().values()), function() {
	        return this;
	      }, Symbol);
	    }
	  }
	  registerPolyfill(polyfillSet);
	  return {
	    get Set() {
	      return Set;
	    },
	    get polyfillSet() {
	      return polyfillSet;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Set" + '');
	System.register("traceur-runtime@0.0.72/node_modules/rsvp/lib/rsvp/asap", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/node_modules/rsvp/lib/rsvp/asap";
	  var len = 0;
	  function asap(callback, arg) {
	    queue[len] = callback;
	    queue[len + 1] = arg;
	    len += 2;
	    if (len === 2) {
	      scheduleFlush();
	    }
	  }
	  var $__default = asap;
	  var browserGlobal = (typeof window !== 'undefined') ? window : {};
	  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	  function useNextTick() {
	    return function() {
	      process.nextTick(flush);
	    };
	  }
	  function useMutationObserver() {
	    var iterations = 0;
	    var observer = new BrowserMutationObserver(flush);
	    var node = document.createTextNode('');
	    observer.observe(node, {characterData: true});
	    return function() {
	      node.data = (iterations = ++iterations % 2);
	    };
	  }
	  function useMessageChannel() {
	    var channel = new MessageChannel();
	    channel.port1.onmessage = flush;
	    return function() {
	      channel.port2.postMessage(0);
	    };
	  }
	  function useSetTimeout() {
	    return function() {
	      setTimeout(flush, 1);
	    };
	  }
	  var queue = new Array(1000);
	  function flush() {
	    for (var i = 0; i < len; i += 2) {
	      var callback = queue[i];
	      var arg = queue[i + 1];
	      callback(arg);
	      queue[i] = undefined;
	      queue[i + 1] = undefined;
	    }
	    len = 0;
	  }
	  var scheduleFlush;
	  if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
	    scheduleFlush = useNextTick();
	  } else if (BrowserMutationObserver) {
	    scheduleFlush = useMutationObserver();
	  } else if (isWorker) {
	    scheduleFlush = useMessageChannel();
	  } else {
	    scheduleFlush = useSetTimeout();
	  }
	  return {get default() {
	      return $__default;
	    }};
	});
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Promise", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Promise";
	  var async = System.get("traceur-runtime@0.0.72/node_modules/rsvp/lib/rsvp/asap").default;
	  var registerPolyfill = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils").registerPolyfill;
	  var promiseRaw = {};
	  function isPromise(x) {
	    return x && typeof x === 'object' && x.status_ !== undefined;
	  }
	  function idResolveHandler(x) {
	    return x;
	  }
	  function idRejectHandler(x) {
	    throw x;
	  }
	  function chain(promise) {
	    var onResolve = arguments[1] !== (void 0) ? arguments[1] : idResolveHandler;
	    var onReject = arguments[2] !== (void 0) ? arguments[2] : idRejectHandler;
	    var deferred = getDeferred(promise.constructor);
	    switch (promise.status_) {
	      case undefined:
	        throw TypeError;
	      case 0:
	        promise.onResolve_.push(onResolve, deferred);
	        promise.onReject_.push(onReject, deferred);
	        break;
	      case +1:
	        promiseEnqueue(promise.value_, [onResolve, deferred]);
	        break;
	      case -1:
	        promiseEnqueue(promise.value_, [onReject, deferred]);
	        break;
	    }
	    return deferred.promise;
	  }
	  function getDeferred(C) {
	    if (this === $Promise) {
	      var promise = promiseInit(new $Promise(promiseRaw));
	      return {
	        promise: promise,
	        resolve: (function(x) {
	          promiseResolve(promise, x);
	        }),
	        reject: (function(r) {
	          promiseReject(promise, r);
	        })
	      };
	    } else {
	      var result = {};
	      result.promise = new C((function(resolve, reject) {
	        result.resolve = resolve;
	        result.reject = reject;
	      }));
	      return result;
	    }
	  }
	  function promiseSet(promise, status, value, onResolve, onReject) {
	    promise.status_ = status;
	    promise.value_ = value;
	    promise.onResolve_ = onResolve;
	    promise.onReject_ = onReject;
	    return promise;
	  }
	  function promiseInit(promise) {
	    return promiseSet(promise, 0, undefined, [], []);
	  }
	  var Promise = function Promise(resolver) {
	    if (resolver === promiseRaw)
	      return;
	    if (typeof resolver !== 'function')
	      throw new TypeError;
	    var promise = promiseInit(this);
	    try {
	      resolver((function(x) {
	        promiseResolve(promise, x);
	      }), (function(r) {
	        promiseReject(promise, r);
	      }));
	    } catch (e) {
	      promiseReject(promise, e);
	    }
	  };
	  ($traceurRuntime.createClass)(Promise, {
	    catch: function(onReject) {
	      return this.then(undefined, onReject);
	    },
	    then: function(onResolve, onReject) {
	      if (typeof onResolve !== 'function')
	        onResolve = idResolveHandler;
	      if (typeof onReject !== 'function')
	        onReject = idRejectHandler;
	      var that = this;
	      var constructor = this.constructor;
	      return chain(this, function(x) {
	        x = promiseCoerce(constructor, x);
	        return x === that ? onReject(new TypeError) : isPromise(x) ? x.then(onResolve, onReject) : onResolve(x);
	      }, onReject);
	    }
	  }, {
	    resolve: function(x) {
	      if (this === $Promise) {
	        if (isPromise(x)) {
	          return x;
	        }
	        return promiseSet(new $Promise(promiseRaw), +1, x);
	      } else {
	        return new this(function(resolve, reject) {
	          resolve(x);
	        });
	      }
	    },
	    reject: function(r) {
	      if (this === $Promise) {
	        return promiseSet(new $Promise(promiseRaw), -1, r);
	      } else {
	        return new this((function(resolve, reject) {
	          reject(r);
	        }));
	      }
	    },
	    all: function(values) {
	      var deferred = getDeferred(this);
	      var resolutions = [];
	      try {
	        var count = values.length;
	        if (count === 0) {
	          deferred.resolve(resolutions);
	        } else {
	          for (var i = 0; i < values.length; i++) {
	            this.resolve(values[i]).then(function(i, x) {
	              resolutions[i] = x;
	              if (--count === 0)
	                deferred.resolve(resolutions);
	            }.bind(undefined, i), (function(r) {
	              deferred.reject(r);
	            }));
	          }
	        }
	      } catch (e) {
	        deferred.reject(e);
	      }
	      return deferred.promise;
	    },
	    race: function(values) {
	      var deferred = getDeferred(this);
	      try {
	        for (var i = 0; i < values.length; i++) {
	          this.resolve(values[i]).then((function(x) {
	            deferred.resolve(x);
	          }), (function(r) {
	            deferred.reject(r);
	          }));
	        }
	      } catch (e) {
	        deferred.reject(e);
	      }
	      return deferred.promise;
	    }
	  });
	  var $Promise = Promise;
	  var $PromiseReject = $Promise.reject;
	  function promiseResolve(promise, x) {
	    promiseDone(promise, +1, x, promise.onResolve_);
	  }
	  function promiseReject(promise, r) {
	    promiseDone(promise, -1, r, promise.onReject_);
	  }
	  function promiseDone(promise, status, value, reactions) {
	    if (promise.status_ !== 0)
	      return;
	    promiseEnqueue(value, reactions);
	    promiseSet(promise, status, value);
	  }
	  function promiseEnqueue(value, tasks) {
	    async((function() {
	      for (var i = 0; i < tasks.length; i += 2) {
	        promiseHandle(value, tasks[i], tasks[i + 1]);
	      }
	    }));
	  }
	  function promiseHandle(value, handler, deferred) {
	    try {
	      var result = handler(value);
	      if (result === deferred.promise)
	        throw new TypeError;
	      else if (isPromise(result))
	        chain(result, deferred.resolve, deferred.reject);
	      else
	        deferred.resolve(result);
	    } catch (e) {
	      try {
	        deferred.reject(e);
	      } catch (e) {}
	    }
	  }
	  var thenableSymbol = '@@thenable';
	  function isObject(x) {
	    return x && (typeof x === 'object' || typeof x === 'function');
	  }
	  function promiseCoerce(constructor, x) {
	    if (!isPromise(x) && isObject(x)) {
	      var then;
	      try {
	        then = x.then;
	      } catch (r) {
	        var promise = $PromiseReject.call(constructor, r);
	        x[thenableSymbol] = promise;
	        return promise;
	      }
	      if (typeof then === 'function') {
	        var p = x[thenableSymbol];
	        if (p) {
	          return p;
	        } else {
	          var deferred = getDeferred(constructor);
	          x[thenableSymbol] = deferred.promise;
	          try {
	            then.call(x, deferred.resolve, deferred.reject);
	          } catch (r) {
	            deferred.reject(r);
	          }
	          return deferred.promise;
	        }
	      }
	    }
	    return x;
	  }
	  function polyfillPromise(global) {
	    if (!global.Promise)
	      global.Promise = Promise;
	  }
	  registerPolyfill(polyfillPromise);
	  return {
	    get Promise() {
	      return Promise;
	    },
	    get polyfillPromise() {
	      return polyfillPromise;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Promise" + '');
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/StringIterator", [], function() {
	  "use strict";
	  var $__2;
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/StringIterator";
	  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
	      createIteratorResultObject = $__0.createIteratorResultObject,
	      isObject = $__0.isObject;
	  var toProperty = $traceurRuntime.toProperty;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var iteratedString = Symbol('iteratedString');
	  var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
	  var StringIterator = function StringIterator() {};
	  ($traceurRuntime.createClass)(StringIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
	    value: function() {
	      var o = this;
	      if (!isObject(o) || !hasOwnProperty.call(o, iteratedString)) {
	        throw new TypeError('this must be a StringIterator object');
	      }
	      var s = o[toProperty(iteratedString)];
	      if (s === undefined) {
	        return createIteratorResultObject(undefined, true);
	      }
	      var position = o[toProperty(stringIteratorNextIndex)];
	      var len = s.length;
	      if (position >= len) {
	        o[toProperty(iteratedString)] = undefined;
	        return createIteratorResultObject(undefined, true);
	      }
	      var first = s.charCodeAt(position);
	      var resultString;
	      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
	        resultString = String.fromCharCode(first);
	      } else {
	        var second = s.charCodeAt(position + 1);
	        if (second < 0xDC00 || second > 0xDFFF) {
	          resultString = String.fromCharCode(first);
	        } else {
	          resultString = String.fromCharCode(first) + String.fromCharCode(second);
	        }
	      }
	      o[toProperty(stringIteratorNextIndex)] = position + resultString.length;
	      return createIteratorResultObject(resultString, false);
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), Object.defineProperty($__2, Symbol.iterator, {
	    value: function() {
	      return this;
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), $__2), {});
	  function createStringIterator(string) {
	    var s = String(string);
	    var iterator = Object.create(StringIterator.prototype);
	    iterator[toProperty(iteratedString)] = s;
	    iterator[toProperty(stringIteratorNextIndex)] = 0;
	    return iterator;
	  }
	  return {get createStringIterator() {
	      return createStringIterator;
	    }};
	});
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/String", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/String";
	  var createStringIterator = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/StringIterator").createStringIterator;
	  var $__1 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
	      maybeAddFunctions = $__1.maybeAddFunctions,
	      maybeAddIterator = $__1.maybeAddIterator,
	      registerPolyfill = $__1.registerPolyfill;
	  var $toString = Object.prototype.toString;
	  var $indexOf = String.prototype.indexOf;
	  var $lastIndexOf = String.prototype.lastIndexOf;
	  function startsWith(search) {
	    var string = String(this);
	    if (this == null || $toString.call(search) == '[object RegExp]') {
	      throw TypeError();
	    }
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var position = arguments.length > 1 ? arguments[1] : undefined;
	    var pos = position ? Number(position) : 0;
	    if (isNaN(pos)) {
	      pos = 0;
	    }
	    var start = Math.min(Math.max(pos, 0), stringLength);
	    return $indexOf.call(string, searchString, pos) == start;
	  }
	  function endsWith(search) {
	    var string = String(this);
	    if (this == null || $toString.call(search) == '[object RegExp]') {
	      throw TypeError();
	    }
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var pos = stringLength;
	    if (arguments.length > 1) {
	      var position = arguments[1];
	      if (position !== undefined) {
	        pos = position ? Number(position) : 0;
	        if (isNaN(pos)) {
	          pos = 0;
	        }
	      }
	    }
	    var end = Math.min(Math.max(pos, 0), stringLength);
	    var start = end - searchLength;
	    if (start < 0) {
	      return false;
	    }
	    return $lastIndexOf.call(string, searchString, start) == start;
	  }
	  function contains(search) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var stringLength = string.length;
	    var searchString = String(search);
	    var searchLength = searchString.length;
	    var position = arguments.length > 1 ? arguments[1] : undefined;
	    var pos = position ? Number(position) : 0;
	    if (isNaN(pos)) {
	      pos = 0;
	    }
	    var start = Math.min(Math.max(pos, 0), stringLength);
	    return $indexOf.call(string, searchString, pos) != -1;
	  }
	  function repeat(count) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var n = count ? Number(count) : 0;
	    if (isNaN(n)) {
	      n = 0;
	    }
	    if (n < 0 || n == Infinity) {
	      throw RangeError();
	    }
	    if (n == 0) {
	      return '';
	    }
	    var result = '';
	    while (n--) {
	      result += string;
	    }
	    return result;
	  }
	  function codePointAt(position) {
	    if (this == null) {
	      throw TypeError();
	    }
	    var string = String(this);
	    var size = string.length;
	    var index = position ? Number(position) : 0;
	    if (isNaN(index)) {
	      index = 0;
	    }
	    if (index < 0 || index >= size) {
	      return undefined;
	    }
	    var first = string.charCodeAt(index);
	    var second;
	    if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
	      second = string.charCodeAt(index + 1);
	      if (second >= 0xDC00 && second <= 0xDFFF) {
	        return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	      }
	    }
	    return first;
	  }
	  function raw(callsite) {
	    var raw = callsite.raw;
	    var len = raw.length >>> 0;
	    if (len === 0)
	      return '';
	    var s = '';
	    var i = 0;
	    while (true) {
	      s += raw[i];
	      if (i + 1 === len)
	        return s;
	      s += arguments[++i];
	    }
	  }
	  function fromCodePoint() {
	    var codeUnits = [];
	    var floor = Math.floor;
	    var highSurrogate;
	    var lowSurrogate;
	    var index = -1;
	    var length = arguments.length;
	    if (!length) {
	      return '';
	    }
	    while (++index < length) {
	      var codePoint = Number(arguments[index]);
	      if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
	        throw RangeError('Invalid code point: ' + codePoint);
	      }
	      if (codePoint <= 0xFFFF) {
	        codeUnits.push(codePoint);
	      } else {
	        codePoint -= 0x10000;
	        highSurrogate = (codePoint >> 10) + 0xD800;
	        lowSurrogate = (codePoint % 0x400) + 0xDC00;
	        codeUnits.push(highSurrogate, lowSurrogate);
	      }
	    }
	    return String.fromCharCode.apply(null, codeUnits);
	  }
	  function stringPrototypeIterator() {
	    var o = $traceurRuntime.checkObjectCoercible(this);
	    var s = String(o);
	    return createStringIterator(s);
	  }
	  function polyfillString(global) {
	    var String = global.String;
	    maybeAddFunctions(String.prototype, ['codePointAt', codePointAt, 'contains', contains, 'endsWith', endsWith, 'startsWith', startsWith, 'repeat', repeat]);
	    maybeAddFunctions(String, ['fromCodePoint', fromCodePoint, 'raw', raw]);
	    maybeAddIterator(String.prototype, stringPrototypeIterator, Symbol);
	  }
	  registerPolyfill(polyfillString);
	  return {
	    get startsWith() {
	      return startsWith;
	    },
	    get endsWith() {
	      return endsWith;
	    },
	    get contains() {
	      return contains;
	    },
	    get repeat() {
	      return repeat;
	    },
	    get codePointAt() {
	      return codePointAt;
	    },
	    get raw() {
	      return raw;
	    },
	    get fromCodePoint() {
	      return fromCodePoint;
	    },
	    get stringPrototypeIterator() {
	      return stringPrototypeIterator;
	    },
	    get polyfillString() {
	      return polyfillString;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.72/src/runtime/polyfills/String" + '');
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/ArrayIterator", [], function() {
	  "use strict";
	  var $__2;
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/ArrayIterator";
	  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
	      toObject = $__0.toObject,
	      toUint32 = $__0.toUint32,
	      createIteratorResultObject = $__0.createIteratorResultObject;
	  var ARRAY_ITERATOR_KIND_KEYS = 1;
	  var ARRAY_ITERATOR_KIND_VALUES = 2;
	  var ARRAY_ITERATOR_KIND_ENTRIES = 3;
	  var ArrayIterator = function ArrayIterator() {};
	  ($traceurRuntime.createClass)(ArrayIterator, ($__2 = {}, Object.defineProperty($__2, "next", {
	    value: function() {
	      var iterator = toObject(this);
	      var array = iterator.iteratorObject_;
	      if (!array) {
	        throw new TypeError('Object is not an ArrayIterator');
	      }
	      var index = iterator.arrayIteratorNextIndex_;
	      var itemKind = iterator.arrayIterationKind_;
	      var length = toUint32(array.length);
	      if (index >= length) {
	        iterator.arrayIteratorNextIndex_ = Infinity;
	        return createIteratorResultObject(undefined, true);
	      }
	      iterator.arrayIteratorNextIndex_ = index + 1;
	      if (itemKind == ARRAY_ITERATOR_KIND_VALUES)
	        return createIteratorResultObject(array[index], false);
	      if (itemKind == ARRAY_ITERATOR_KIND_ENTRIES)
	        return createIteratorResultObject([index, array[index]], false);
	      return createIteratorResultObject(index, false);
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), Object.defineProperty($__2, Symbol.iterator, {
	    value: function() {
	      return this;
	    },
	    configurable: true,
	    enumerable: true,
	    writable: true
	  }), $__2), {});
	  function createArrayIterator(array, kind) {
	    var object = toObject(array);
	    var iterator = new ArrayIterator;
	    iterator.iteratorObject_ = object;
	    iterator.arrayIteratorNextIndex_ = 0;
	    iterator.arrayIterationKind_ = kind;
	    return iterator;
	  }
	  function entries() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_ENTRIES);
	  }
	  function keys() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_KEYS);
	  }
	  function values() {
	    return createArrayIterator(this, ARRAY_ITERATOR_KIND_VALUES);
	  }
	  return {
	    get entries() {
	      return entries;
	    },
	    get keys() {
	      return keys;
	    },
	    get values() {
	      return values;
	    }
	  };
	});
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Array", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Array";
	  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/ArrayIterator"),
	      entries = $__0.entries,
	      keys = $__0.keys,
	      values = $__0.values;
	  var $__1 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
	      checkIterable = $__1.checkIterable,
	      isCallable = $__1.isCallable,
	      isConstructor = $__1.isConstructor,
	      maybeAddFunctions = $__1.maybeAddFunctions,
	      maybeAddIterator = $__1.maybeAddIterator,
	      registerPolyfill = $__1.registerPolyfill,
	      toInteger = $__1.toInteger,
	      toLength = $__1.toLength,
	      toObject = $__1.toObject;
	  function from(arrLike) {
	    var mapFn = arguments[1];
	    var thisArg = arguments[2];
	    var C = this;
	    var items = toObject(arrLike);
	    var mapping = mapFn !== undefined;
	    var k = 0;
	    var arr,
	        len;
	    if (mapping && !isCallable(mapFn)) {
	      throw TypeError();
	    }
	    if (checkIterable(items)) {
	      arr = isConstructor(C) ? new C() : [];
	      for (var $__2 = items[Symbol.iterator](),
	          $__3; !($__3 = $__2.next()).done; ) {
	        var item = $__3.value;
	        {
	          if (mapping) {
	            arr[k] = mapFn.call(thisArg, item, k);
	          } else {
	            arr[k] = item;
	          }
	          k++;
	        }
	      }
	      arr.length = k;
	      return arr;
	    }
	    len = toLength(items.length);
	    arr = isConstructor(C) ? new C(len) : new Array(len);
	    for (; k < len; k++) {
	      if (mapping) {
	        arr[k] = typeof thisArg === 'undefined' ? mapFn(items[k], k) : mapFn.call(thisArg, items[k], k);
	      } else {
	        arr[k] = items[k];
	      }
	    }
	    arr.length = len;
	    return arr;
	  }
	  function of() {
	    for (var items = [],
	        $__4 = 0; $__4 < arguments.length; $__4++)
	      items[$__4] = arguments[$__4];
	    var C = this;
	    var len = items.length;
	    var arr = isConstructor(C) ? new C(len) : new Array(len);
	    for (var k = 0; k < len; k++) {
	      arr[k] = items[k];
	    }
	    arr.length = len;
	    return arr;
	  }
	  function fill(value) {
	    var start = arguments[1] !== (void 0) ? arguments[1] : 0;
	    var end = arguments[2];
	    var object = toObject(this);
	    var len = toLength(object.length);
	    var fillStart = toInteger(start);
	    var fillEnd = end !== undefined ? toInteger(end) : len;
	    fillStart = fillStart < 0 ? Math.max(len + fillStart, 0) : Math.min(fillStart, len);
	    fillEnd = fillEnd < 0 ? Math.max(len + fillEnd, 0) : Math.min(fillEnd, len);
	    while (fillStart < fillEnd) {
	      object[fillStart] = value;
	      fillStart++;
	    }
	    return object;
	  }
	  function find(predicate) {
	    var thisArg = arguments[1];
	    return findHelper(this, predicate, thisArg);
	  }
	  function findIndex(predicate) {
	    var thisArg = arguments[1];
	    return findHelper(this, predicate, thisArg, true);
	  }
	  function findHelper(self, predicate) {
	    var thisArg = arguments[2];
	    var returnIndex = arguments[3] !== (void 0) ? arguments[3] : false;
	    var object = toObject(self);
	    var len = toLength(object.length);
	    if (!isCallable(predicate)) {
	      throw TypeError();
	    }
	    for (var i = 0; i < len; i++) {
	      var value = object[i];
	      if (predicate.call(thisArg, value, i, object)) {
	        return returnIndex ? i : value;
	      }
	    }
	    return returnIndex ? -1 : undefined;
	  }
	  function polyfillArray(global) {
	    var $__5 = global,
	        Array = $__5.Array,
	        Object = $__5.Object,
	        Symbol = $__5.Symbol;
	    maybeAddFunctions(Array.prototype, ['entries', entries, 'keys', keys, 'values', values, 'fill', fill, 'find', find, 'findIndex', findIndex]);
	    maybeAddFunctions(Array, ['from', from, 'of', of]);
	    maybeAddIterator(Array.prototype, values, Symbol);
	    maybeAddIterator(Object.getPrototypeOf([].values()), function() {
	      return this;
	    }, Symbol);
	  }
	  registerPolyfill(polyfillArray);
	  return {
	    get from() {
	      return from;
	    },
	    get of() {
	      return of;
	    },
	    get fill() {
	      return fill;
	    },
	    get find() {
	      return find;
	    },
	    get findIndex() {
	      return findIndex;
	    },
	    get polyfillArray() {
	      return polyfillArray;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Array" + '');
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Object", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Object";
	  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
	      maybeAddFunctions = $__0.maybeAddFunctions,
	      registerPolyfill = $__0.registerPolyfill;
	  var $__1 = $traceurRuntime,
	      defineProperty = $__1.defineProperty,
	      getOwnPropertyDescriptor = $__1.getOwnPropertyDescriptor,
	      getOwnPropertyNames = $__1.getOwnPropertyNames,
	      isPrivateName = $__1.isPrivateName,
	      keys = $__1.keys;
	  function is(left, right) {
	    if (left === right)
	      return left !== 0 || 1 / left === 1 / right;
	    return left !== left && right !== right;
	  }
	  function assign(target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	      var props = keys(source);
	      var p,
	          length = props.length;
	      for (p = 0; p < length; p++) {
	        var name = props[p];
	        if (isPrivateName(name))
	          continue;
	        target[name] = source[name];
	      }
	    }
	    return target;
	  }
	  function mixin(target, source) {
	    var props = getOwnPropertyNames(source);
	    var p,
	        descriptor,
	        length = props.length;
	    for (p = 0; p < length; p++) {
	      var name = props[p];
	      if (isPrivateName(name))
	        continue;
	      descriptor = getOwnPropertyDescriptor(source, props[p]);
	      defineProperty(target, props[p], descriptor);
	    }
	    return target;
	  }
	  function polyfillObject(global) {
	    var Object = global.Object;
	    maybeAddFunctions(Object, ['assign', assign, 'is', is, 'mixin', mixin]);
	  }
	  registerPolyfill(polyfillObject);
	  return {
	    get is() {
	      return is;
	    },
	    get assign() {
	      return assign;
	    },
	    get mixin() {
	      return mixin;
	    },
	    get polyfillObject() {
	      return polyfillObject;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Object" + '');
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/Number", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/Number";
	  var $__0 = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils"),
	      isNumber = $__0.isNumber,
	      maybeAddConsts = $__0.maybeAddConsts,
	      maybeAddFunctions = $__0.maybeAddFunctions,
	      registerPolyfill = $__0.registerPolyfill,
	      toInteger = $__0.toInteger;
	  var $abs = Math.abs;
	  var $isFinite = isFinite;
	  var $isNaN = isNaN;
	  var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
	  var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
	  var EPSILON = Math.pow(2, -52);
	  function NumberIsFinite(number) {
	    return isNumber(number) && $isFinite(number);
	  }
	  ;
	  function isInteger(number) {
	    return NumberIsFinite(number) && toInteger(number) === number;
	  }
	  function NumberIsNaN(number) {
	    return isNumber(number) && $isNaN(number);
	  }
	  ;
	  function isSafeInteger(number) {
	    if (NumberIsFinite(number)) {
	      var integral = toInteger(number);
	      if (integral === number)
	        return $abs(integral) <= MAX_SAFE_INTEGER;
	    }
	    return false;
	  }
	  function polyfillNumber(global) {
	    var Number = global.Number;
	    maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
	    maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
	  }
	  registerPolyfill(polyfillNumber);
	  return {
	    get MAX_SAFE_INTEGER() {
	      return MAX_SAFE_INTEGER;
	    },
	    get MIN_SAFE_INTEGER() {
	      return MIN_SAFE_INTEGER;
	    },
	    get EPSILON() {
	      return EPSILON;
	    },
	    get isFinite() {
	      return NumberIsFinite;
	    },
	    get isInteger() {
	      return isInteger;
	    },
	    get isNaN() {
	      return NumberIsNaN;
	    },
	    get isSafeInteger() {
	      return isSafeInteger;
	    },
	    get polyfillNumber() {
	      return polyfillNumber;
	    }
	  };
	});
	System.get("traceur-runtime@0.0.72/src/runtime/polyfills/Number" + '');
	System.register("traceur-runtime@0.0.72/src/runtime/polyfills/polyfills", [], function() {
	  "use strict";
	  var __moduleName = "traceur-runtime@0.0.72/src/runtime/polyfills/polyfills";
	  var polyfillAll = System.get("traceur-runtime@0.0.72/src/runtime/polyfills/utils").polyfillAll;
	  polyfillAll(this);
	  var setupGlobals = $traceurRuntime.setupGlobals;
	  $traceurRuntime.setupGlobals = function(global) {
	    setupGlobals(global);
	    polyfillAll(global);
	  };
	  return {};
	});
	System.get("traceur-runtime@0.0.72/src/runtime/polyfills/polyfills" + '');
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  config: {get: function() {
	      return config;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function config($stateProvider, $urlRouterProvider, paginationTemplateProvider) {
	  $urlRouterProvider.otherwise('/active');
	  $stateProvider.state('active', {
	    url: '/active',
	    params: {status: 'active'},
	    templateUrl: './assets/templates/showcase.html'
	  }).state('inactive', {
	    url: '/inactive',
	    params: {status: 'inactive'},
	    templateUrl: './assets/templates/showcase.html'
	  });
	  paginationTemplateProvider.setPath('./assets/templates/pagination.html');
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  run: {get: function() {
	      return run;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function run($rootScope, $state, $localStorage) {
	  $rootScope.$state = $state;
	  $rootScope.$storage = $localStorage;
	  $rootScope.$storage.products = $rootScope.$storage.products || [];
	  $rootScope.$storage.perPage = $rootScope.$storage.perPage || '8';
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  showcaseCtrl: {get: function() {
	      return showcaseCtrl;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function showcaseCtrl($scope, $rootScope) {
	  $scope.submit = (function(form) {
	    if (!$rootScope.$storage.products)
	      $rootScope.$storage.products = [];
	    $rootScope.$storage.products.push(angular.copy($scope.product));
	  });
	  $scope.onDeleteSelectedProducts = (function() {});
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  fileModel: {get: function() {
	      return fileModel;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function fileModel($parse, $q) {
	  function link(scope, element, attrs) {
	    var model = $parse(attrs.fileModel);
	    var modelSetter = model.assign;
	    element.on('change', function() {
	      var file = element[0].files[0];
	      readFile(file).then((function(data) {
	        modelSetter(scope, {
	          name: file.name,
	          data: data
	        });
	      }));
	    });
	    var readFile = function(file) {
	      var deffered = $q.defer();
	      var reader = new FileReader();
	      reader.onload = (function(e) {
	        deffered.resolve(e.target.result);
	      });
	      reader.onerror = (function(e) {
	        deffered.reject(e);
	      });
	      reader.readAsDataURL(file);
	      return deffered.promise;
	    };
	  }
	  return {
	    restrict: 'A',
	    link: link
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  showcase: {get: function() {
	      return showcase;
	    }},
	  __esModule: {value: true}
	});
	var $___46__46__47__46__46__47_styles_47_showcase_46_styl__;
	__webpack_require__(1);
	($___46__46__47__46__46__47_styles_47_showcase_46_styl__ = __webpack_require__(12), $___46__46__47__46__46__47_styles_47_showcase_46_styl__ && $___46__46__47__46__46__47_styles_47_showcase_46_styl__.__esModule && $___46__46__47__46__46__47_styles_47_showcase_46_styl__ || {default: $___46__46__47__46__46__47_styles_47_showcase_46_styl__});
	function showcase($rootScope) {
	  var template = "\n  <nav class=\"uk-navbar sc-navbar\">\n    <div class=\"uk-navbar-nav\">\n      <li>\n        <a href=\"#addProduct\"\n          ng-show=\"$state.params.status === 'active'\"\n          class=\"uk-button uk-button-success uk-float-left uk-margin-right green\"\n          data-uk-modal=\"{center:true}\">\n          <i class=\"uk-icon-plus\"></i> Добавить товар\n        </a>\n      </li>\n      <add-product modal-id=\"addProduct\"></add-product>\n    </div>\n    <showcase-search class=\"uk-navbar-content uk-navbar-flip\"  search-query='searchQuery'></showcase-search>\n  </nav>\n    <nav class=\"uk-navbar\">\n      <div class=\"uk-navbar-content\" total-products></div>\n      <div class=\"uk-navbar-content\" delete-all></div>\n\n\n      <div class=\"uk-navbar-flip\">\n        <showcase-per-page class=\"uk-navbar-content\" per-page=\"perPage\"></showcase-per-page>\n      </div>\n    </nav>\n    <div class=\"showcase-content\">\n    <dir-pagination-controls\n        class=\"uk-navbar-content uk-navbar-center\"\n        direction-links=\"false\"\n        auto-hide=\"false\"\n        max-size=\"8\">\n      </dir-pagination-controls>\n    <ul class=\"uk-grid uk-grid-small\">\n      <li dir-paginate=\"product in $storage.products | status: status | filter: { name: searchQuery } | itemsPerPage: $storage.perPage\"\n\n        class=\"uk-width-medium-1-4\"\n        ng-class=\"{'uk-grid-margin': $index > 3}\">\n\n        <thumbnail\n          product=\"product\"\n          on-edit=\"onEdit(product)\"\n          on-select=\"onSelect(product)\">\n        </thumbnail>\n\n      </li>\n    </ul>\n    </div>";
	  function link(scope) {
	    scope.status = $rootScope.$state.params.status;
	    scope.mSelected = _.filter($rootScope.$storage.products, {'selected': true});
	    scope.searchQuery = '';
	    scope.onSelect = (function(product) {
	      product.selected = !product.selected;
	      var index = scope.mSelected.indexOf(product);
	      return index < 0 ? scope.mSelected.push(product) : scope.mSelected.splice(index, 1);
	    });
	    scope.onEdit = (function(product) {
	      console.log(("Edit " + product));
	    });
	  }
	  return {
	    link: link,
	    template: template
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  thumbnail: {get: function() {
	      return thumbnail;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function thumbnail($rootScope) {
	  var template = "\n  <a class=\"uk-thumbnail\" ng-click=\"onSelect()\">\n    <img ng-src=\"{{product.photo.data}}\" alt=\"\">\n    <div class=\"uk-thumbnail-caption uk-margin-small-bottom thumbnail-name\" ng-bind=\"product.name\"></div>\n    <div class=\"uk-thumbnail-caption uk-margin-small-bottom\">\n      <div class=\"uk-flex uk-flex-middle uk-flex-space-around\">\n        <div class=\"uk-text-large sale\" ng-bind=\"product.cost | sale: 1.3 | currency: $ : 0\"></div>\n        <div class=\"uk-text-large\" ng-bind=\"product.cost | currency: $ : 0\"></div>\n      </div>\n    </div>\n    <div class=\"uk-thumbnail-caption\">\n      <div class=\"uk-flex uk-flex-middle uk-flex-space-between\">\n        <button class=\"uk-button uk-button-primary\" type=\"button\" ng-click=\"onEdit()\">Редактировать</button>\n        <button class=\"uk-button\" type=\"button\" ng-click=\"onDelete()\">Удалить</button>\n      </div>\n    </div>\n  </a>";
	  function link(scope, element) {
	    var status = $rootScope.$state.params.status;
	    var thumbnail = element.find('.uk-thumbnail');
	    if (scope.product.selected)
	      thumbnail.addClass('selected');
	    scope.onDelete = (function() {
	      return status === 'active' ? scope.product.status = 'inactive' : $rootScope.$storage.products.splice($rootScope.$storage.products.indexOf(scope.product), 1);
	    });
	    element.bind('click', function() {
	      thumbnail.toggleClass('selected');
	    });
	  }
	  return {
	    link: link,
	    template: template,
	    scope: {
	      product: '=',
	      onEdit: '&',
	      onSelect: '&'
	    }
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  deleteAll: {get: function() {
	      return deleteAll;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function deleteAll($rootScope) {
	  var template = "\n  <button ng-show=\"mSelected.length\" class=\"uk-button uk-button-muted\" ng-click=\"onPress()\">\n    <i class=\"uk-icon-trash\"></i> Удалить все\n     <div class=\"uk-badge uk-badge-notification\" ng-bind=\"mSelected.length\"></div>\n  </button>";
	  function link(scope) {
	    scope.onPress = function() {
	      var status = $rootScope.$state.params.status;
	      _.forEach(scope.mSelected, function(product) {
	        var index = $rootScope.$storage.products.indexOf(product);
	        if (status === 'active') {
	          $rootScope.$storage.products[index].status = 'inactive';
	          $rootScope.$storage.products[index].selected = false;
	        } else {
	          $rootScope.$storage.products.splice(index, 1);
	        }
	      });
	      scope.mSelected.length = 0;
	    };
	  }
	  return {
	    link: link,
	    template: template
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  addProduct: {get: function() {
	      return addProduct;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function addProduct($rootScope, mProduct) {
	  var template = "\n  <form class=\"uk-form uk-form-stacked\" name=\"productForm\" novalidate ng-submit=\"onSubmit(productForm)\">\n        <div class=\"uk-modal\">\n            <div class=\"uk-modal-dialog\">\n                <a class=\"uk-modal-close uk-close\"></a>\n                <div class=\"uk-modal-header\">\n                    <h2>Добавить товар</h2>\n                </div>\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\" for=\"name\">Название</label>\n                    <div class=\"uk-form-controls\">\n                        <input type=\"text\" id=\"name\" class=\"uk-width-1-1\" ng-model=\"product.name\" name=\"name\"\n                               placeholder=\"Название товара\" ng-class=\"{'uk-form-danger': submitted && productForm.name.$error.required}\" required>\n                    </div>\n                </div>\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\" for=\"cost\">Цена</label>\n                    <div class=\"uk-form-controls\">\n                        <input type=\"number\" id=\"cost\" class=\"uk-width-1-3\" ng-model=\"product.cost\" name=\"cost\"\n                               placeholder=\"Цена товара\" ng-class=\"{'uk-form-danger': submitted && productForm.cost.$error.required}\" required>\n                    </div>\n                </div>\n                <div class=\"uk-form-row\">\n                    <label class=\"uk-form-label\" for=\"photo\">Фото</label>\n                    <div class=\"uk-form-controls uk-form-controls-text\">\n                        <p class=\"uk-form-controls-condensed\">\n                          <input type=\"file\" id=\"photo\" class=\"uk-width-1-3\" style=\"display: none;\" file-model=\"product.photo\" name=\"photo\" required>\n                          <input type=\"button\"\n                            class=\"uk-button uk-width-1-3\"\n                            value=\"Выбрать...\"\n                            onclick=\"document.getElementById('photo').click();\"\n                            ng-class=\"{'uk-button-danger': submitted && productForm.photo.$error.required}\">\n                          <div class=\"uk-panel uk-panel-box\" ng-if=\"product.photo\" ng-bind=\"product.photo.name\"></div>\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"uk-modal-footer uk-text-right\">\n                    <button type=\"button\" class=\"uk-button\">Отмена</button>\n                    <button type=\"submit\" class=\"uk-button uk-button-primary\">Добавить</button>\n                </div>\n            </div>\n        </div>\n    </form>\n  ";
	  function link(scope, element, attrs) {
	    angular.element('.uk-modal').attr('id', scope.modalId);
	    scope.submitted = false;
	    scope.product = Object.assign({}, mProduct);
	    scope.onSubmit = function(productForm) {
	      if (productForm.$invalid) {
	        return scope.submitted = true;
	      }
	      $rootScope.$storage.products.push(scope.product);
	      scope.product = Object.assign({}, mProduct);
	      var modal = UIkit.modal(".uk-modal");
	      modal.hide();
	    };
	  }
	  return {
	    link: link,
	    template: template,
	    scope: {modalId: '@'}
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  totalProducts: {get: function() {
	      return totalProducts;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function totalProducts($rootScope) {
	  var template = "<strong>Всего товаров: <span ng-bind=\"$storage.products.length\"></span></strong>";
	  function link() {}
	  return {
	    link: link,
	    template: template
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  showcaseSearch: {get: function() {
	      return showcaseSearch;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function showcaseSearch() {
	  var template = "\n    <form class=\"uk-form uk-margin-remove uk-display-inline-block\">\n      <input type=\"text\" placeholder=\"Введите название товара для поиска\"  ng-model='search' class=\"uk-form-width-large\">\n      <button class=\"uk-button uk-button-primary\" ng-click=\"searchQuery = search\">Искать</button>\n    </form>\n  ";
	  function link() {}
	  return {
	    link: link,
	    template: template,
	    scope: {searchQuery: '='}
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  showcasePerPage: {get: function() {
	      return showcasePerPage;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function showcasePerPage($rootScope, perPageFactory) {
	  var template = "\n    <ul class=\"uk-pagination\">\n      <li\n        ng-class=\"{ 'uk-active' : item.name === selected }\"\n        ng-repeat=\"item in items\"\n        ng-click=\"select(item)\">\n        <span ng-bind=\"item.name\"></span>\n      </li>\n    </ul>\n  ";
	  function link(scope, element, attrs) {
	    scope.items = Object.assign({}, perPageFactory);
	    scope.selected = $rootScope.$storage.perPage;
	    var status = $rootScope.$state.params.status;
	    scope.select = (function(item) {
	      if (item.name === 'Все') {
	        scope.selected = item.name;
	        return status === 'active' ? $rootScope.$storage.perPage = (_.filter($rootScope.$storage.products, {'status': 'active'})).length : $rootScope.$storage.perPage = (_.filter($rootScope.$storage.products, {'status': 'inactive'})).length;
	      }
	      $rootScope.$storage.perPage = scope.selected = item.name;
	    });
	  }
	  return {
	    link: link,
	    template: template
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  mProduct: {get: function() {
	      return mProduct;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function mProduct() {
	  return {
	    name: null,
	    cost: null,
	    photo: null,
	    status: 'active',
	    selected: false
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  perPageFactory: {get: function() {
	      return perPageFactory;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function perPageFactory() {
	  return [{name: '8'}, {name: '12'}, {name: '16'}, {name: 'Все'}];
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  status: {get: function() {
	      return status;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function status() {
	  return function(items, selection) {
	    var results = [];
	    angular.forEach(items, (function(v, k) {
	      angular.forEach(v, (function(value, key) {
	        if (key === 'status' && value === selection) {
	          results.push(v);
	        }
	      }));
	    }));
	    return results;
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperties(exports, {
	  sale: {get: function() {
	      return sale;
	    }},
	  __esModule: {value: true}
	});
	__webpack_require__(1);
	function sale() {
	  return function(text, coeff) {
	    coeff = coeff || 1;
	    return parseInt(text) * coeff;
	  };
	}
	
	//# sourceMappingURL=<compileOutput>


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjdlZTViNTYyOWM0MjE1NjYyNTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wIiwid2VicGFjazovLy8uL34vdHJhY2V1ci1sb2FkZXIvfi90cmFjZXVyL2Jpbi90cmFjZXVyLXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYXBwLnN0eWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29uZmlnLmpzeCIsIndlYnBhY2s6Ly8vQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci80Iiwid2VicGFjazovLy9AdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMiIsIndlYnBhY2s6Ly8vQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzMiLCJ3ZWJwYWNrOi8vL0B0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci81Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3J1bi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlcnMvc2hvd2Nhc2VDdHJsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kaXJlY3RpdmVzL2ZpbGVNb2RlbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZGlyZWN0aXZlcy9zaG93Y2FzZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zaG93Y2FzZS5zdHlsIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpcmVjdGl2ZXMvdGh1bWJuYWlsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kaXJlY3RpdmVzL2RlbGV0ZUFsbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZGlyZWN0aXZlcy9hZGRQcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9kaXJlY3RpdmVzL3RvdGFsUHJvZHVjdHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpcmVjdGl2ZXMvc2hvd2Nhc2VTZWFyY2guanN4Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpcmVjdGl2ZXMvc2hvd2Nhc2VQZXJQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9mYWN0b3JpZXMvbVByb2R1Y3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZhY3Rvcmllcy9wZXJQYWdlRmFjdG9yeS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZmlsdGVycy9zdGF0dXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMvc2FsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQVEsRUFBaUgsQ0FBQztBQUFDLFlBQVcsQ0FBQztBQ0F0SSx5Q0FBb0IscUJBQU8sRUFBa0IsQ0FDdEMsMENBQXFCLGtEQUEyQiwwQ0FBcUIsR0FBSyxFQUFDLE9BQU0sd0NBQW1CLENBQUMsQ0FBQztHREV0RyxPQUFLLEVDSGIsRUFBQyxvQkFBb0IscUJBQU8sRUFBa0IsQ0FDdEMsc0JBQXFCLDhCQUEyQixzQkFBcUIsR0FBSyxFQUFDLE9BQU0sb0JBQW1CLENBQUMsQ0FBQztHREd0RyxJQUFFLEVDSlYsRUFBQyxpQkFBb0IscUJBQU8sRUFBa0IsQ0FDdEMsbUJBQXFCLDJCQUEyQixtQkFBcUIsR0FBSyxFQUFDLE9BQU0saUJBQW1CLENBQUMsQ0FBQztHREl0RyxhQUFXLEVDTG5CLEVBQUMseUNBQW9CLHFCQUFPLEVBQWtCLENBQ3RDLDJDQUFxQixtREFBMkIsMkNBQXFCLEdBQUssRUFBQyxPQUFNLHlDQUFtQixDQUFDLENBQUM7R0RLdEcsVUFBUSxFQ05oQixFQUFDLHFDQUFvQixxQkFBTyxHQUFrQixDQUN0Qyx1Q0FBcUIsK0NBQTJCLHVDQUFxQixHQUFLLEVBQUMsT0FBTSxxQ0FBbUIsQ0FBQyxDQUFDO0dETXRHLFNBQU8sRUNQZixFQUFDLG9DQUFvQixxQkFBTyxHQUFrQixDQUN0QyxzQ0FBcUIsOENBQTJCLHNDQUFxQixHQUFLLEVBQUMsT0FBTSxvQ0FBbUIsQ0FBQyxDQUFDO0dET3RHLFVBQVEsRUNSaEIsRUFBQyxxQ0FBb0IscUJBQU8sR0FBa0IsQ0FDdEMsdUNBQXFCLCtDQUEyQix1Q0FBcUIsR0FBSyxFQUFDLE9BQU0scUNBQW1CLENBQUMsQ0FBQztHRFF0RyxVQUFRLEVDVGhCLEVBQUMscUNBQW9CLHFCQUFPLEdBQWtCLENBQ3RDLHVDQUFxQiwrQ0FBMkIsdUNBQXFCLEdBQUssRUFBQyxPQUFNLHFDQUFtQixDQUFDLENBQUM7R0RTdEcsV0FBUyxFQ1ZqQixFQUFDLHNDQUFvQixxQkFBTyxHQUFrQixDQUN0Qyx3Q0FBcUIsZ0RBQTJCLHdDQUFxQixHQUFLLEVBQUMsT0FBTSxzQ0FBbUIsQ0FBQyxDQUFDO0dEVXRHLGNBQVksRUNYcEIsRUFBQyx5Q0FBb0IscUJBQU8sR0FBa0IsQ0FDdEMsMkNBQXFCLG1EQUEyQiwyQ0FBcUIsR0FBSyxFQUFDLE9BQU0seUNBQW1CLENBQUMsQ0FBQztHRFd0RyxlQUFhLEVDWnJCLEVBQUMsMENBQW9CLHFCQUFPLEdBQWtCLENBQ3RDLDRDQUFxQixvREFBMkIsNENBQXFCLEdBQUssRUFBQyxPQUFNLDBDQUFtQixDQUFDLENBQUM7R0RZdEcsZ0JBQWMsRUNidEIsRUFBQywyQ0FBb0IscUJBQU8sR0FBa0IsQ0FDdEMsNkNBQXFCLHFEQUEyQiw2Q0FBcUIsR0FBSyxFQUFDLE9BQU0sMkNBQW1CLENBQUMsQ0FBQztHRGN0RyxTQUFPLEVDZmYsRUFBQyxtQ0FBb0IscUJBQU8sR0FBa0IsQ0FDdEMscUNBQXFCLDZDQUEyQixxQ0FBcUIsR0FBSyxFQUFDLE9BQU0sbUNBQW1CLENBQUMsQ0FBQztHRGV0RyxlQUFhLEVDaEJyQixFQUFDLHlDQUFvQixxQkFBTyxHQUFrQixDQUN0QywyQ0FBcUIsbURBQTJCLDJDQUFxQixHQUFLLEVBQUMsT0FBTSx5Q0FBbUIsQ0FBQyxDQUFDO0dEaUJ0RyxPQUFLLEVDbEJiLEVBQUMsK0JBQW9CLHFCQUFPLEdBQWtCLENBQ3RDLGlDQUFxQix5Q0FBMkIsaUNBQXFCLEdBQUssRUFBQyxPQUFNLCtCQUFtQixDQUFDLENBQUM7R0RrQnRHLEtBQUcsRUNuQlgsRUFBQyw2QkFBb0IscUJBQU8sR0FBa0IsQ0FDdEMsK0JBQXFCLHVDQUEyQiwrQkFBcUIsR0FBSyxFQUFDLE9BQU0sNkJBQW1CLENBQUMsQ0FBQztBRG9CMUcsY0FBUyxFQUFJLFFBQU0sT0FBUSxDQUFDLFlBQVcsQ0FBRyxFQUFDLFdBQVUsQ0FBRyxZQUFVLENBQUcsd0NBQXNDLENBQUMsQ0FBQyxDQUFDO0FBRWxILFVBQVMsT0FBUSxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQ3pCLFVBQVMsSUFBSyxDQUFDLEdBQUUsQ0FBQyxDQUFDO0FBRW5CLFVBQVMsV0FDSSxDQUFDLGNBQWEsQ0FBRyxhQUFXLENBQUMsQ0FBQztBQUUzQyxVQUFTLFFBQ0MsQ0FBQyxVQUFTLENBQUcsU0FBTyxDQUFDLFFBQ3JCLENBQUMsZ0JBQWUsQ0FBRyxlQUFhLENBQUMsQ0FBQztBQUU1QyxVQUFTLFVBQ0csQ0FBQyxZQUFXLENBQUcsV0FBUyxDQUFDLFVBQ3pCLENBQUMsV0FBVSxDQUFHLFVBQVEsQ0FBQyxVQUN2QixDQUFDLFVBQVMsQ0FBRyxTQUFPLENBQUMsVUFDckIsQ0FBQyxXQUFVLENBQUcsVUFBUSxDQUFDLFVBQ3ZCLENBQUMsV0FBVSxDQUFHLFVBQVEsQ0FBQyxVQUN2QixDQUFDLGVBQWMsQ0FBRyxjQUFZLENBQUMsVUFDL0IsQ0FBQyxnQkFBZSxDQUFHLGVBQWEsQ0FBQyxVQUNqQyxDQUFDLGlCQUFnQixDQUFHLGdCQUFjLENBQUMsQ0FBQztBQUVoRCxVQUFTLE9BQ0EsQ0FBQyxRQUFPLENBQUcsT0FBSyxDQUFDLE9BQ2pCLENBQUMsTUFBSyxDQUFHLEtBQUcsQ0FBQyxDQUFDO0FBR3ZCLE9BQU0sVUFBVyxDQUFDLFFBQU8sQ0FBRyxFQUFDLFlBQVcsQ0FBQyxDQUFDLENBQUM7QUFDM0M7Ozs7Ozs7O0FFakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLDJCQUEwQjtBQUMxQixpQ0FBZ0M7QUFDaEMsaUNBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsZ0RBQStDLFlBQVk7QUFDM0Qsb0RBQW1ELFdBQVc7QUFDOUQsdURBQXNELG1CQUFtQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxpQ0FBZ0M7QUFDaEM7QUFDQSxZQUFXLGlCQUFpQjtBQUM1QixZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0Msc0JBQXNCO0FBQ3JFLHFEQUFvRCwyQkFBMkI7QUFDL0UsMERBQXlELGdDQUFnQztBQUN6RiwwREFBeUQsc0JBQXNCO0FBQy9FLHdDQUF1QyxjQUFjO0FBQ3JELG1EQUFrRCx5QkFBeUI7QUFDM0Usc0NBQXFDLFlBQVk7QUFDakQsc0NBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQSxzQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsOEJBQTZCLGtCQUFrQjtBQUMvQztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLGtCQUFrQjtBQUNwQyxZQUFXLGtCQUFrQjtBQUM3QixhQUFZO0FBQ1osSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0Esd0NBQXVDLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU0sSUFBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQWtFLHlCQUF5QjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMLElBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSw0QkFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMLElBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQztBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCwwQkFBeUIsbUJBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFlBQVc7QUFDWDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUcsWUFBWTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxTQUFTO0FBQ25CO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEOzs7Ozs7OztBQzE0RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQzVCLFNBQUksRUFBSSxNQUFJLEdBQUssR0FBQztBQUNsQixVQUFPLFNBQVEsQ0FBQyxJQUFHLENBQUMsRUFBSSxNQUFJLENBQUM7R0FDL0I7QUFDRjtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjdlZTViNTYyOWM0MjE1NjYyNTlcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuc3R5bCc7XG5cbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2NvbmZpZy5qc3gnO1xuaW1wb3J0IHtydW59IGZyb20gJy4vcnVuLmpzeCc7XG5pbXBvcnQge3Nob3djYXNlQ3RybH0gZnJvbSAnLi9jb250cm9sbGVycy9zaG93Y2FzZUN0cmwuanN4JztcbmltcG9ydCB7ZmlsZU1vZGVsfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmlsZU1vZGVsLmpzeCc7XG5pbXBvcnQge3Nob3djYXNlfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2hvd2Nhc2UuanN4JztcbmltcG9ydCB7dGh1bWJuYWlsfSBmcm9tICcuL2RpcmVjdGl2ZXMvdGh1bWJuYWlsLmpzeCc7XG5pbXBvcnQge2RlbGV0ZUFsbH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RlbGV0ZUFsbC5qc3gnO1xuaW1wb3J0IHthZGRQcm9kdWN0fSBmcm9tICcuL2RpcmVjdGl2ZXMvYWRkUHJvZHVjdC5qc3gnO1xuaW1wb3J0IHt0b3RhbFByb2R1Y3RzfSBmcm9tICcuL2RpcmVjdGl2ZXMvdG90YWxQcm9kdWN0cy5qc3gnO1xuaW1wb3J0IHtzaG93Y2FzZVNlYXJjaH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Nob3djYXNlU2VhcmNoLmpzeCc7XG5pbXBvcnQge3Nob3djYXNlUGVyUGFnZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3Nob3djYXNlUGVyUGFnZS5qc3gnO1xuXG5pbXBvcnQge21Qcm9kdWN0fSBmcm9tICcuL2ZhY3Rvcmllcy9tUHJvZHVjdC5qc3gnO1xuaW1wb3J0IHtwZXJQYWdlRmFjdG9yeX0gZnJvbSAnLi9mYWN0b3JpZXMvcGVyUGFnZUZhY3RvcnkuanN4JztcblxuaW1wb3J0IHtzdGF0dXN9IGZyb20gJy4vZmlsdGVycy9zdGF0dXMuanN4JztcbmltcG9ydCB7c2FsZX0gZnJvbSAnLi9maWx0ZXJzL3NhbGUuanN4JztcblxubGV0IG5nU2hvd2Nhc2UgPSBhbmd1bGFyLm1vZHVsZSgnbmdTaG93Y2FzZScsIFsndWkucm91dGVyJywgJ25nU3RvcmFnZScsICdhbmd1bGFyVXRpbHMuZGlyZWN0aXZlcy5kaXJQYWdpbmF0aW9uJ10pO1xuXG5uZ1Nob3djYXNlLmNvbmZpZyhjb25maWcpO1xubmdTaG93Y2FzZS5ydW4ocnVuKTtcblxubmdTaG93Y2FzZVxuICAuY29udHJvbGxlcignc2hvd2Nhc2VDdHJsJywgc2hvd2Nhc2VDdHJsKTtcblxubmdTaG93Y2FzZVxuICAuZmFjdG9yeSgnbVByb2R1Y3QnLCBtUHJvZHVjdClcbiAgLmZhY3RvcnkoJ3BlclBhZ2VGYWN0b3J5JywgcGVyUGFnZUZhY3RvcnkpO1xuXG5uZ1Nob3djYXNlXG4gIC5kaXJlY3RpdmUoJ2FkZFByb2R1Y3QnLCBhZGRQcm9kdWN0KVxuICAuZGlyZWN0aXZlKCdmaWxlTW9kZWwnLCBmaWxlTW9kZWwpXG4gIC5kaXJlY3RpdmUoJ3Nob3djYXNlJywgc2hvd2Nhc2UpXG4gIC5kaXJlY3RpdmUoJ3RodW1ibmFpbCcsIHRodW1ibmFpbClcbiAgLmRpcmVjdGl2ZSgnZGVsZXRlQWxsJywgZGVsZXRlQWxsKVxuICAuZGlyZWN0aXZlKCd0b3RhbFByb2R1Y3RzJywgdG90YWxQcm9kdWN0cylcbiAgLmRpcmVjdGl2ZSgnc2hvd2Nhc2VTZWFyY2gnLCBzaG93Y2FzZVNlYXJjaClcbiAgLmRpcmVjdGl2ZSgnc2hvd2Nhc2VQZXJQYWdlJywgc2hvd2Nhc2VQZXJQYWdlKTtcblxubmdTaG93Y2FzZVxuICAuZmlsdGVyKCdzdGF0dXMnLCBzdGF0dXMpXG4gIC5maWx0ZXIoJ3NhbGUnLCBzYWxlKTtcblxuXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWyduZ1Nob3djYXNlJ10pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9tYWluLmpzeFxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMFxuICoqLyIsIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAoZ2xvYmFsLiR0cmFjZXVyUnVudGltZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgJE9iamVjdCA9IE9iamVjdDtcbiAgdmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4gIHZhciAkY3JlYXRlID0gJE9iamVjdC5jcmVhdGU7XG4gIHZhciAkZGVmaW5lUHJvcGVydGllcyA9ICRPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbiAgdmFyICRkZWZpbmVQcm9wZXJ0eSA9ICRPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gIHZhciAkZnJlZXplID0gJE9iamVjdC5mcmVlemU7XG4gIHZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIHZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9ICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgdmFyICRrZXlzID0gJE9iamVjdC5rZXlzO1xuICB2YXIgJGhhc093blByb3BlcnR5ID0gJE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciAkdG9TdHJpbmcgPSAkT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyICRwcmV2ZW50RXh0ZW5zaW9ucyA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucztcbiAgdmFyICRzZWFsID0gT2JqZWN0LnNlYWw7XG4gIHZhciAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcbiAgZnVuY3Rpb24gbm9uRW51bSh2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgfVxuICB2YXIgdHlwZXMgPSB7XG4gICAgdm9pZDogZnVuY3Rpb24gdm9pZFR5cGUoKSB7fSxcbiAgICBhbnk6IGZ1bmN0aW9uIGFueSgpIHt9LFxuICAgIHN0cmluZzogZnVuY3Rpb24gc3RyaW5nKCkge30sXG4gICAgbnVtYmVyOiBmdW5jdGlvbiBudW1iZXIoKSB7fSxcbiAgICBib29sZWFuOiBmdW5jdGlvbiBib29sZWFuKCkge31cbiAgfTtcbiAgdmFyIG1ldGhvZCA9IG5vbkVudW07XG4gIHZhciBjb3VudGVyID0gMDtcbiAgZnVuY3Rpb24gbmV3VW5pcXVlU3RyaW5nKCkge1xuICAgIHJldHVybiAnX18kJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlOSkgKyAnJCcgKyArK2NvdW50ZXIgKyAnJF9fJztcbiAgfVxuICB2YXIgc3ltYm9sSW50ZXJuYWxQcm9wZXJ0eSA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICB2YXIgc3ltYm9sRGVzY3JpcHRpb25Qcm9wZXJ0eSA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICB2YXIgc3ltYm9sRGF0YVByb3BlcnR5ID0gbmV3VW5pcXVlU3RyaW5nKCk7XG4gIHZhciBzeW1ib2xWYWx1ZXMgPSAkY3JlYXRlKG51bGwpO1xuICB2YXIgcHJpdmF0ZU5hbWVzID0gJGNyZWF0ZShudWxsKTtcbiAgZnVuY3Rpb24gaXNQcml2YXRlTmFtZShzKSB7XG4gICAgcmV0dXJuIHByaXZhdGVOYW1lc1tzXTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQcml2YXRlTmFtZSgpIHtcbiAgICB2YXIgcyA9IG5ld1VuaXF1ZVN0cmluZygpO1xuICAgIHByaXZhdGVOYW1lc1tzXSA9IHRydWU7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgZnVuY3Rpb24gaXNTaGltU3ltYm9sKHN5bWJvbCkge1xuICAgIHJldHVybiB0eXBlb2Ygc3ltYm9sID09PSAnb2JqZWN0JyAmJiBzeW1ib2wgaW5zdGFuY2VvZiBTeW1ib2xWYWx1ZTtcbiAgfVxuICBmdW5jdGlvbiB0eXBlT2Yodikge1xuICAgIGlmIChpc1NoaW1TeW1ib2wodikpXG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgcmV0dXJuIHR5cGVvZiB2O1xuICB9XG4gIGZ1bmN0aW9uIFN5bWJvbChkZXNjcmlwdGlvbikge1xuICAgIHZhciB2YWx1ZSA9IG5ldyBTeW1ib2xWYWx1ZShkZXNjcmlwdGlvbik7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFN5bWJvbCkpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3ltYm9sIGNhbm5vdCBiZSBuZXdcXCdlZCcpO1xuICB9XG4gICRkZWZpbmVQcm9wZXJ0eShTeW1ib2wucHJvdG90eXBlLCAnY29uc3RydWN0b3InLCBub25FbnVtKFN5bWJvbCkpO1xuICAkZGVmaW5lUHJvcGVydHkoU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgbWV0aG9kKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzeW1ib2xWYWx1ZSA9IHRoaXNbc3ltYm9sRGF0YVByb3BlcnR5XTtcbiAgICBpZiAoIWdldE9wdGlvbignc3ltYm9scycpKVxuICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlW3N5bWJvbEludGVybmFsUHJvcGVydHldO1xuICAgIGlmICghc3ltYm9sVmFsdWUpXG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0NvbnZlcnNpb24gZnJvbSBzeW1ib2wgdG8gc3RyaW5nJyk7XG4gICAgdmFyIGRlc2MgPSBzeW1ib2xWYWx1ZVtzeW1ib2xEZXNjcmlwdGlvblByb3BlcnR5XTtcbiAgICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKVxuICAgICAgZGVzYyA9ICcnO1xuICAgIHJldHVybiAnU3ltYm9sKCcgKyBkZXNjICsgJyknO1xuICB9KSk7XG4gICRkZWZpbmVQcm9wZXJ0eShTeW1ib2wucHJvdG90eXBlLCAndmFsdWVPZicsIG1ldGhvZChmdW5jdGlvbigpIHtcbiAgICB2YXIgc3ltYm9sVmFsdWUgPSB0aGlzW3N5bWJvbERhdGFQcm9wZXJ0eV07XG4gICAgaWYgKCFzeW1ib2xWYWx1ZSlcbiAgICAgIHRocm93IFR5cGVFcnJvcignQ29udmVyc2lvbiBmcm9tIHN5bWJvbCB0byBzdHJpbmcnKTtcbiAgICBpZiAoIWdldE9wdGlvbignc3ltYm9scycpKVxuICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlW3N5bWJvbEludGVybmFsUHJvcGVydHldO1xuICAgIHJldHVybiBzeW1ib2xWYWx1ZTtcbiAgfSkpO1xuICBmdW5jdGlvbiBTeW1ib2xWYWx1ZShkZXNjcmlwdGlvbikge1xuICAgIHZhciBrZXkgPSBuZXdVbmlxdWVTdHJpbmcoKTtcbiAgICAkZGVmaW5lUHJvcGVydHkodGhpcywgc3ltYm9sRGF0YVByb3BlcnR5LCB7dmFsdWU6IHRoaXN9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkodGhpcywgc3ltYm9sSW50ZXJuYWxQcm9wZXJ0eSwge3ZhbHVlOiBrZXl9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkodGhpcywgc3ltYm9sRGVzY3JpcHRpb25Qcm9wZXJ0eSwge3ZhbHVlOiBkZXNjcmlwdGlvbn0pO1xuICAgIGZyZWV6ZSh0aGlzKTtcbiAgICBzeW1ib2xWYWx1ZXNba2V5XSA9IHRoaXM7XG4gIH1cbiAgJGRlZmluZVByb3BlcnR5KFN5bWJvbFZhbHVlLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgbm9uRW51bShTeW1ib2wpKTtcbiAgJGRlZmluZVByb3BlcnR5KFN5bWJvbFZhbHVlLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywge1xuICAgIHZhbHVlOiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGVudW1lcmFibGU6IGZhbHNlXG4gIH0pO1xuICAkZGVmaW5lUHJvcGVydHkoU3ltYm9sVmFsdWUucHJvdG90eXBlLCAndmFsdWVPZicsIHtcbiAgICB2YWx1ZTogU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mLFxuICAgIGVudW1lcmFibGU6IGZhbHNlXG4gIH0pO1xuICB2YXIgaGFzaFByb3BlcnR5ID0gY3JlYXRlUHJpdmF0ZU5hbWUoKTtcbiAgdmFyIGhhc2hQcm9wZXJ0eURlc2NyaXB0b3IgPSB7dmFsdWU6IHVuZGVmaW5lZH07XG4gIHZhciBoYXNoT2JqZWN0UHJvcGVydGllcyA9IHtcbiAgICBoYXNoOiB7dmFsdWU6IHVuZGVmaW5lZH0sXG4gICAgc2VsZjoge3ZhbHVlOiB1bmRlZmluZWR9XG4gIH07XG4gIHZhciBoYXNoQ291bnRlciA9IDA7XG4gIGZ1bmN0aW9uIGdldE93bkhhc2hPYmplY3Qob2JqZWN0KSB7XG4gICAgdmFyIGhhc2hPYmplY3QgPSBvYmplY3RbaGFzaFByb3BlcnR5XTtcbiAgICBpZiAoaGFzaE9iamVjdCAmJiBoYXNoT2JqZWN0LnNlbGYgPT09IG9iamVjdClcbiAgICAgIHJldHVybiBoYXNoT2JqZWN0O1xuICAgIGlmICgkaXNFeHRlbnNpYmxlKG9iamVjdCkpIHtcbiAgICAgIGhhc2hPYmplY3RQcm9wZXJ0aWVzLmhhc2gudmFsdWUgPSBoYXNoQ291bnRlcisrO1xuICAgICAgaGFzaE9iamVjdFByb3BlcnRpZXMuc2VsZi52YWx1ZSA9IG9iamVjdDtcbiAgICAgIGhhc2hQcm9wZXJ0eURlc2NyaXB0b3IudmFsdWUgPSAkY3JlYXRlKG51bGwsIGhhc2hPYmplY3RQcm9wZXJ0aWVzKTtcbiAgICAgICRkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGhhc2hQcm9wZXJ0eSwgaGFzaFByb3BlcnR5RGVzY3JpcHRvcik7XG4gICAgICByZXR1cm4gaGFzaFByb3BlcnR5RGVzY3JpcHRvci52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBmcmVlemUob2JqZWN0KSB7XG4gICAgZ2V0T3duSGFzaE9iamVjdChvYmplY3QpO1xuICAgIHJldHVybiAkZnJlZXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMob2JqZWN0KSB7XG4gICAgZ2V0T3duSGFzaE9iamVjdChvYmplY3QpO1xuICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBmdW5jdGlvbiBzZWFsKG9iamVjdCkge1xuICAgIGdldE93bkhhc2hPYmplY3Qob2JqZWN0KTtcbiAgICByZXR1cm4gJHNlYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBmcmVlemUoU3ltYm9sVmFsdWUucHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gaXNTeW1ib2xTdHJpbmcocykge1xuICAgIHJldHVybiBzeW1ib2xWYWx1ZXNbc10gfHwgcHJpdmF0ZU5hbWVzW3NdO1xuICB9XG4gIGZ1bmN0aW9uIHRvUHJvcGVydHkobmFtZSkge1xuICAgIGlmIChpc1NoaW1TeW1ib2wobmFtZSkpXG4gICAgICByZXR1cm4gbmFtZVtzeW1ib2xJbnRlcm5hbFByb3BlcnR5XTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVTeW1ib2xLZXlzKGFycmF5KSB7XG4gICAgdmFyIHJ2ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFpc1N5bWJvbFN0cmluZyhhcnJheVtpXSkpIHtcbiAgICAgICAgcnYucHVzaChhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBydjtcbiAgfVxuICBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCkge1xuICAgIHJldHVybiByZW1vdmVTeW1ib2xLZXlzKCRnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCkpO1xuICB9XG4gIGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgcmV0dXJuIHJlbW92ZVN5bWJvbEtleXMoJGtleXMob2JqZWN0KSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkge1xuICAgIHZhciBydiA9IFtdO1xuICAgIHZhciBuYW1lcyA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHN5bWJvbCA9IHN5bWJvbFZhbHVlc1tuYW1lc1tpXV07XG4gICAgICBpZiAoc3ltYm9sKSB7XG4gICAgICAgIHJ2LnB1c2goc3ltYm9sKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ2O1xuICB9XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIG5hbWUpIHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHRvUHJvcGVydHkobmFtZSkpO1xuICB9XG4gIGZ1bmN0aW9uIGhhc093blByb3BlcnR5KG5hbWUpIHtcbiAgICByZXR1cm4gJGhhc093blByb3BlcnR5LmNhbGwodGhpcywgdG9Qcm9wZXJ0eShuYW1lKSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0T3B0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gZ2xvYmFsLnRyYWNldXIgJiYgZ2xvYmFsLnRyYWNldXIub3B0aW9uc1tuYW1lXTtcbiAgfVxuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICBpZiAoaXNTaGltU3ltYm9sKG5hbWUpKSB7XG4gICAgICBuYW1lID0gbmFtZVtzeW1ib2xJbnRlcm5hbFByb3BlcnR5XTtcbiAgICB9XG4gICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbE9iamVjdChPYmplY3QpIHtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknLCB7dmFsdWU6IGRlZmluZVByb3BlcnR5fSk7XG4gICAgJGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2dldE93blByb3BlcnR5TmFtZXMnLCB7dmFsdWU6IGdldE93blByb3BlcnR5TmFtZXN9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywge3ZhbHVlOiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3J9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ2hhc093blByb3BlcnR5Jywge3ZhbHVlOiBoYXNPd25Qcm9wZXJ0eX0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdmcmVlemUnLCB7dmFsdWU6IGZyZWV6ZX0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdwcmV2ZW50RXh0ZW5zaW9ucycsIHt2YWx1ZTogcHJldmVudEV4dGVuc2lvbnN9KTtcbiAgICAkZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnc2VhbCcsIHt2YWx1ZTogc2VhbH0pO1xuICAgICRkZWZpbmVQcm9wZXJ0eShPYmplY3QsICdrZXlzJywge3ZhbHVlOiBrZXlzfSk7XG4gIH1cbiAgZnVuY3Rpb24gZXhwb3J0U3RhcihvYmplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG5hbWVzID0gJGdldE93blByb3BlcnR5TmFtZXMoYXJndW1lbnRzW2ldKTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lc1tqXTtcbiAgICAgICAgaWYgKGlzU3ltYm9sU3RyaW5nKG5hbWUpKVxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAoZnVuY3Rpb24obW9kLCBuYW1lKSB7XG4gICAgICAgICAgJGRlZmluZVByb3BlcnR5KG9iamVjdCwgbmFtZSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1vZFtuYW1lXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKGFyZ3VtZW50c1tpXSwgbmFtZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIGZ1bmN0aW9uIGlzT2JqZWN0KHgpIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHggPT09ICdmdW5jdGlvbicpO1xuICB9XG4gIGZ1bmN0aW9uIHRvT2JqZWN0KHgpIHtcbiAgICBpZiAoeCA9PSBudWxsKVxuICAgICAgdGhyb3cgJFR5cGVFcnJvcigpO1xuICAgIHJldHVybiAkT2JqZWN0KHgpO1xuICB9XG4gIGZ1bmN0aW9uIGNoZWNrT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSB7XG4gICAgaWYgKGFyZ3VtZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gYW4gT2JqZWN0Jyk7XG4gICAgfVxuICAgIHJldHVybiBhcmd1bWVudDtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbFN5bWJvbChnbG9iYWwsIFN5bWJvbCkge1xuICAgIGlmICghZ2xvYmFsLlN5bWJvbCkge1xuICAgICAgZ2xvYmFsLlN5bWJvbCA9IFN5bWJvbDtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gICAgfVxuICAgIGlmICghZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcikge1xuICAgICAgZ2xvYmFsLlN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbCgnU3ltYm9sLml0ZXJhdG9yJyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldHVwR2xvYmFscyhnbG9iYWwpIHtcbiAgICBwb2x5ZmlsbFN5bWJvbChnbG9iYWwsIFN5bWJvbCk7XG4gICAgZ2xvYmFsLlJlZmxlY3QgPSBnbG9iYWwuUmVmbGVjdCB8fCB7fTtcbiAgICBnbG9iYWwuUmVmbGVjdC5nbG9iYWwgPSBnbG9iYWwuUmVmbGVjdC5nbG9iYWwgfHwgZ2xvYmFsO1xuICAgIHBvbHlmaWxsT2JqZWN0KGdsb2JhbC5PYmplY3QpO1xuICB9XG4gIHNldHVwR2xvYmFscyhnbG9iYWwpO1xuICBnbG9iYWwuJHRyYWNldXJSdW50aW1lID0ge1xuICAgIGNoZWNrT2JqZWN0Q29lcmNpYmxlOiBjaGVja09iamVjdENvZXJjaWJsZSxcbiAgICBjcmVhdGVQcml2YXRlTmFtZTogY3JlYXRlUHJpdmF0ZU5hbWUsXG4gICAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gICAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgICBleHBvcnRTdGFyOiBleHBvcnRTdGFyLFxuICAgIGdldE93bkhhc2hPYmplY3Q6IGdldE93bkhhc2hPYmplY3QsXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgICBpc1ByaXZhdGVOYW1lOiBpc1ByaXZhdGVOYW1lLFxuICAgIGlzU3ltYm9sU3RyaW5nOiBpc1N5bWJvbFN0cmluZyxcbiAgICBrZXlzOiAka2V5cyxcbiAgICBzZXR1cEdsb2JhbHM6IHNldHVwR2xvYmFscyxcbiAgICB0b09iamVjdDogdG9PYmplY3QsXG4gICAgdG9Qcm9wZXJ0eTogdG9Qcm9wZXJ0eSxcbiAgICB0eXBlOiB0eXBlcyxcbiAgICB0eXBlb2Y6IHR5cGVPZlxuICB9O1xufSkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0aGlzKTtcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBmdW5jdGlvbiBzcHJlYWQoKSB7XG4gICAgdmFyIHJ2ID0gW10sXG4gICAgICAgIGogPSAwLFxuICAgICAgICBpdGVyUmVzdWx0O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsdWVUb1NwcmVhZCA9ICR0cmFjZXVyUnVudGltZS5jaGVja09iamVjdENvZXJjaWJsZShhcmd1bWVudHNbaV0pO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZVRvU3ByZWFkWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KFN5bWJvbC5pdGVyYXRvcildICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBzcHJlYWQgbm9uLWl0ZXJhYmxlIG9iamVjdC4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBpdGVyID0gdmFsdWVUb1NwcmVhZFskdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eShTeW1ib2wuaXRlcmF0b3IpXSgpO1xuICAgICAgd2hpbGUgKCEoaXRlclJlc3VsdCA9IGl0ZXIubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIHJ2W2orK10gPSBpdGVyUmVzdWx0LnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcnY7XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLnNwcmVhZCA9IHNwcmVhZDtcbn0pKCk7XG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyICRPYmplY3QgPSBPYmplY3Q7XG4gIHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuICB2YXIgJGNyZWF0ZSA9ICRPYmplY3QuY3JlYXRlO1xuICB2YXIgJGRlZmluZVByb3BlcnRpZXMgPSAkdHJhY2V1clJ1bnRpbWUuZGVmaW5lUHJvcGVydGllcztcbiAgdmFyICRkZWZpbmVQcm9wZXJ0eSA9ICR0cmFjZXVyUnVudGltZS5kZWZpbmVQcm9wZXJ0eTtcbiAgdmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICB2YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgdmFyICRnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyICRfXzAgPSBPYmplY3QsXG4gICAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gJF9fMC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAgICAgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gJF9fMC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4gIGZ1bmN0aW9uIHN1cGVyRGVzY3JpcHRvcihob21lT2JqZWN0LCBuYW1lKSB7XG4gICAgdmFyIHByb3RvID0gJGdldFByb3RvdHlwZU9mKGhvbWVPYmplY3QpO1xuICAgIGRvIHtcbiAgICAgIHZhciByZXN1bHQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBuYW1lKTtcbiAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICBwcm90byA9ICRnZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgfSB3aGlsZSAocHJvdG8pO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gc3VwZXJDYWxsKHNlbGYsIGhvbWVPYmplY3QsIG5hbWUsIGFyZ3MpIHtcbiAgICByZXR1cm4gc3VwZXJHZXQoc2VsZiwgaG9tZU9iamVjdCwgbmFtZSkuYXBwbHkoc2VsZiwgYXJncyk7XG4gIH1cbiAgZnVuY3Rpb24gc3VwZXJHZXQoc2VsZiwgaG9tZU9iamVjdCwgbmFtZSkge1xuICAgIHZhciBkZXNjcmlwdG9yID0gc3VwZXJEZXNjcmlwdG9yKGhvbWVPYmplY3QsIG5hbWUpO1xuICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICBpZiAoIWRlc2NyaXB0b3IuZ2V0KVxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHNlbGYpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIHN1cGVyU2V0KHNlbGYsIGhvbWVPYmplY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBzdXBlckRlc2NyaXB0b3IoaG9tZU9iamVjdCwgbmFtZSk7XG4gICAgaWYgKGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwoc2VsZiwgdmFsdWUpO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB0aHJvdyAkVHlwZUVycm9yKChcInN1cGVyIGhhcyBubyBzZXR0ZXIgJ1wiICsgbmFtZSArIFwiJy5cIikpO1xuICB9XG4gIGZ1bmN0aW9uIGdldERlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIHZhciBuYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXMob2JqZWN0KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbmFtZSA9IG5hbWVzW2ldO1xuICAgICAgZGVzY3JpcHRvcnNbbmFtZV0gPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgbmFtZSk7XG4gICAgfVxuICAgIHZhciBzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3ltYm9sID0gc3ltYm9sc1tpXTtcbiAgICAgIGRlc2NyaXB0b3JzWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KHN5bWJvbCldID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsICR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KHN5bWJvbCkpO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcnM7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQ2xhc3MoY3Rvciwgb2JqZWN0LCBzdGF0aWNPYmplY3QsIHN1cGVyQ2xhc3MpIHtcbiAgICAkZGVmaW5lUHJvcGVydHkob2JqZWN0LCAnY29uc3RydWN0b3InLCB7XG4gICAgICB2YWx1ZTogY3RvcixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDMpIHtcbiAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgY3Rvci5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSAkY3JlYXRlKGdldFByb3RvUGFyZW50KHN1cGVyQ2xhc3MpLCBnZXREZXNjcmlwdG9ycyhvYmplY3QpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3Rvci5wcm90b3R5cGUgPSBvYmplY3Q7XG4gICAgfVxuICAgICRkZWZpbmVQcm9wZXJ0eShjdG9yLCAncHJvdG90eXBlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydGllcyhjdG9yLCBnZXREZXNjcmlwdG9ycyhzdGF0aWNPYmplY3QpKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRQcm90b1BhcmVudChzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcHJvdG90eXBlID0gc3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgICBpZiAoJE9iamVjdChwcm90b3R5cGUpID09PSBwcm90b3R5cGUgfHwgcHJvdG90eXBlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gc3VwZXJDbGFzcy5wcm90b3R5cGU7XG4gICAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignc3VwZXIgcHJvdG90eXBlIG11c3QgYmUgYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgaWYgKHN1cGVyQ2xhc3MgPT09IG51bGwpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcigoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MgKyBcIi5cIikpO1xuICB9XG4gIGZ1bmN0aW9uIGRlZmF1bHRTdXBlckNhbGwoc2VsZiwgaG9tZU9iamVjdCwgYXJncykge1xuICAgIGlmICgkZ2V0UHJvdG90eXBlT2YoaG9tZU9iamVjdCkgIT09IG51bGwpXG4gICAgICBzdXBlckNhbGwoc2VsZiwgaG9tZU9iamVjdCwgJ2NvbnN0cnVjdG9yJywgYXJncyk7XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzID0gY3JlYXRlQ2xhc3M7XG4gICR0cmFjZXVyUnVudGltZS5kZWZhdWx0U3VwZXJDYWxsID0gZGVmYXVsdFN1cGVyQ2FsbDtcbiAgJHRyYWNldXJSdW50aW1lLnN1cGVyQ2FsbCA9IHN1cGVyQ2FsbDtcbiAgJHRyYWNldXJSdW50aW1lLnN1cGVyR2V0ID0gc3VwZXJHZXQ7XG4gICR0cmFjZXVyUnVudGltZS5zdXBlclNldCA9IHN1cGVyU2V0O1xufSkoKTtcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgY3JlYXRlUHJpdmF0ZU5hbWUgPSAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlUHJpdmF0ZU5hbWU7XG4gIHZhciAkZGVmaW5lUHJvcGVydGllcyA9ICR0cmFjZXVyUnVudGltZS5kZWZpbmVQcm9wZXJ0aWVzO1xuICB2YXIgJGRlZmluZVByb3BlcnR5ID0gJHRyYWNldXJSdW50aW1lLmRlZmluZVByb3BlcnR5O1xuICB2YXIgJGNyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG4gIHZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuICBmdW5jdGlvbiBub25FbnVtKHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9O1xuICB9XG4gIHZhciBTVF9ORVdCT1JOID0gMDtcbiAgdmFyIFNUX0VYRUNVVElORyA9IDE7XG4gIHZhciBTVF9TVVNQRU5ERUQgPSAyO1xuICB2YXIgU1RfQ0xPU0VEID0gMztcbiAgdmFyIEVORF9TVEFURSA9IC0yO1xuICB2YXIgUkVUSFJPV19TVEFURSA9IC0zO1xuICBmdW5jdGlvbiBnZXRJbnRlcm5hbEVycm9yKHN0YXRlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignVHJhY2V1ciBjb21waWxlciBidWc6IGludmFsaWQgc3RhdGUgaW4gc3RhdGUgbWFjaGluZTogJyArIHN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiBHZW5lcmF0b3JDb250ZXh0KCkge1xuICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgIHRoaXMuR1N0YXRlID0gU1RfTkVXQk9STjtcbiAgICB0aGlzLnN0b3JlZEV4Y2VwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbmFsbHlGYWxsVGhyb3VnaCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbnRfID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cnlTdGFja18gPSBbXTtcbiAgfVxuICBHZW5lcmF0b3JDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBwdXNoVHJ5OiBmdW5jdGlvbihjYXRjaFN0YXRlLCBmaW5hbGx5U3RhdGUpIHtcbiAgICAgIGlmIChmaW5hbGx5U3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIGZpbmFsbHlGYWxsVGhyb3VnaCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeVN0YWNrXy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmICh0aGlzLnRyeVN0YWNrX1tpXS5jYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmaW5hbGx5RmFsbFRocm91Z2ggPSB0aGlzLnRyeVN0YWNrX1tpXS5jYXRjaDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmluYWxseUZhbGxUaHJvdWdoID09PSBudWxsKVxuICAgICAgICAgIGZpbmFsbHlGYWxsVGhyb3VnaCA9IFJFVEhST1dfU1RBVEU7XG4gICAgICAgIHRoaXMudHJ5U3RhY2tfLnB1c2goe1xuICAgICAgICAgIGZpbmFsbHk6IGZpbmFsbHlTdGF0ZSxcbiAgICAgICAgICBmaW5hbGx5RmFsbFRocm91Z2g6IGZpbmFsbHlGYWxsVGhyb3VnaFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjYXRjaFN0YXRlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudHJ5U3RhY2tfLnB1c2goe2NhdGNoOiBjYXRjaFN0YXRlfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBwb3BUcnk6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50cnlTdGFja18ucG9wKCk7XG4gICAgfSxcbiAgICBnZXQgc2VudCgpIHtcbiAgICAgIHRoaXMubWF5YmVUaHJvdygpO1xuICAgICAgcmV0dXJuIHRoaXMuc2VudF87XG4gICAgfSxcbiAgICBzZXQgc2VudCh2KSB7XG4gICAgICB0aGlzLnNlbnRfID0gdjtcbiAgICB9LFxuICAgIGdldCBzZW50SWdub3JlVGhyb3coKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZW50XztcbiAgICB9LFxuICAgIG1heWJlVGhyb3c6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAndGhyb3cnKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJ25leHQnO1xuICAgICAgICB0aHJvdyB0aGlzLnNlbnRfO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIEVORF9TVEFURTpcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgY2FzZSBSRVRIUk9XX1NUQVRFOlxuICAgICAgICAgIHRocm93IHRoaXMuc3RvcmVkRXhjZXB0aW9uO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IGdldEludGVybmFsRXJyb3IodGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVFeGNlcHRpb246IGZ1bmN0aW9uKGV4KSB7XG4gICAgICB0aGlzLkdTdGF0ZSA9IFNUX0NMT1NFRDtcbiAgICAgIHRoaXMuc3RhdGUgPSBFTkRfU1RBVEU7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH07XG4gIGZ1bmN0aW9uIG5leHRPclRocm93KGN0eCwgbW92ZU5leHQsIGFjdGlvbiwgeCkge1xuICAgIHN3aXRjaCAoY3R4LkdTdGF0ZSkge1xuICAgICAgY2FzZSBTVF9FWEVDVVRJTkc6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJcXFwiXCIgKyBhY3Rpb24gKyBcIlxcXCIgb24gZXhlY3V0aW5nIGdlbmVyYXRvclwiKSk7XG4gICAgICBjYXNlIFNUX0NMT1NFRDpcbiAgICAgICAgaWYgKGFjdGlvbiA9PSAnbmV4dCcpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IHg7XG4gICAgICBjYXNlIFNUX05FV0JPUk46XG4gICAgICAgIGlmIChhY3Rpb24gPT09ICd0aHJvdycpIHtcbiAgICAgICAgICBjdHguR1N0YXRlID0gU1RfQ0xPU0VEO1xuICAgICAgICAgIHRocm93IHg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aHJvdyAkVHlwZUVycm9yKCdTZW50IHZhbHVlIHRvIG5ld2Jvcm4gZ2VuZXJhdG9yJyk7XG4gICAgICBjYXNlIFNUX1NVU1BFTkRFRDpcbiAgICAgICAgY3R4LkdTdGF0ZSA9IFNUX0VYRUNVVElORztcbiAgICAgICAgY3R4LmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgY3R4LnNlbnQgPSB4O1xuICAgICAgICB2YXIgdmFsdWUgPSBtb3ZlTmV4dChjdHgpO1xuICAgICAgICB2YXIgZG9uZSA9IHZhbHVlID09PSBjdHg7XG4gICAgICAgIGlmIChkb25lKVxuICAgICAgICAgIHZhbHVlID0gY3R4LnJldHVyblZhbHVlO1xuICAgICAgICBjdHguR1N0YXRlID0gZG9uZSA/IFNUX0NMT1NFRCA6IFNUX1NVU1BFTkRFRDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZG9uZVxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuICB2YXIgY3R4TmFtZSA9IGNyZWF0ZVByaXZhdGVOYW1lKCk7XG4gIHZhciBtb3ZlTmV4dE5hbWUgPSBjcmVhdGVQcml2YXRlTmFtZSgpO1xuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICRkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgbm9uRW51bShHZW5lcmF0b3JGdW5jdGlvbikpO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIG5leHQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHJldHVybiBuZXh0T3JUaHJvdyh0aGlzW2N0eE5hbWVdLCB0aGlzW21vdmVOZXh0TmFtZV0sICduZXh0Jywgdik7XG4gICAgfSxcbiAgICB0aHJvdzogZnVuY3Rpb24odikge1xuICAgICAgcmV0dXJuIG5leHRPclRocm93KHRoaXNbY3R4TmFtZV0sIHRoaXNbbW92ZU5leHROYW1lXSwgJ3Rocm93Jywgdik7XG4gICAgfVxuICB9O1xuICAkZGVmaW5lUHJvcGVydGllcyhHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge2VudW1lcmFibGU6IGZhbHNlfSxcbiAgICBuZXh0OiB7ZW51bWVyYWJsZTogZmFsc2V9LFxuICAgIHRocm93OiB7ZW51bWVyYWJsZTogZmFsc2V9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlLCBTeW1ib2wuaXRlcmF0b3IsIG5vbkVudW0oZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pKTtcbiAgZnVuY3Rpb24gY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UoaW5uZXJGdW5jdGlvbiwgZnVuY3Rpb25PYmplY3QsIHNlbGYpIHtcbiAgICB2YXIgbW92ZU5leHQgPSBnZXRNb3ZlTmV4dChpbm5lckZ1bmN0aW9uLCBzZWxmKTtcbiAgICB2YXIgY3R4ID0gbmV3IEdlbmVyYXRvckNvbnRleHQoKTtcbiAgICB2YXIgb2JqZWN0ID0gJGNyZWF0ZShmdW5jdGlvbk9iamVjdC5wcm90b3R5cGUpO1xuICAgIG9iamVjdFtjdHhOYW1lXSA9IGN0eDtcbiAgICBvYmplY3RbbW92ZU5leHROYW1lXSA9IG1vdmVOZXh0O1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgZnVuY3Rpb24gaW5pdEdlbmVyYXRvckZ1bmN0aW9uKGZ1bmN0aW9uT2JqZWN0KSB7XG4gICAgZnVuY3Rpb25PYmplY3QucHJvdG90eXBlID0gJGNyZWF0ZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUpO1xuICAgIGZ1bmN0aW9uT2JqZWN0Ll9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgIHJldHVybiBmdW5jdGlvbk9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0Z1bmN0aW9uQ29udGV4dCgpIHtcbiAgICBHZW5lcmF0b3JDb250ZXh0LmNhbGwodGhpcyk7XG4gICAgdGhpcy5lcnIgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgY3R4LnJlc3VsdCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgY3R4LnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgY3R4LnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxuICBBc3luY0Z1bmN0aW9uQ29udGV4dC5wcm90b3R5cGUgPSAkY3JlYXRlKEdlbmVyYXRvckNvbnRleHQucHJvdG90eXBlKTtcbiAgQXN5bmNGdW5jdGlvbkNvbnRleHQucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgY2FzZSBFTkRfU1RBVEU6XG4gICAgICAgIHRoaXMucmVzb2x2ZSh0aGlzLnJldHVyblZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFVEhST1dfU1RBVEU6XG4gICAgICAgIHRoaXMucmVqZWN0KHRoaXMuc3RvcmVkRXhjZXB0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnJlamVjdChnZXRJbnRlcm5hbEVycm9yKHRoaXMuc3RhdGUpKTtcbiAgICB9XG4gIH07XG4gIEFzeW5jRnVuY3Rpb25Db250ZXh0LnByb3RvdHlwZS5oYW5kbGVFeGNlcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRlID0gUkVUSFJPV19TVEFURTtcbiAgfTtcbiAgZnVuY3Rpb24gYXN5bmNXcmFwKGlubmVyRnVuY3Rpb24sIHNlbGYpIHtcbiAgICB2YXIgbW92ZU5leHQgPSBnZXRNb3ZlTmV4dChpbm5lckZ1bmN0aW9uLCBzZWxmKTtcbiAgICB2YXIgY3R4ID0gbmV3IEFzeW5jRnVuY3Rpb25Db250ZXh0KCk7XG4gICAgY3R4LmNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24obmV3U3RhdGUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBjdHguc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgY3R4LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIG1vdmVOZXh0KGN0eCk7XG4gICAgICB9O1xuICAgIH07XG4gICAgY3R4LmVycmJhY2sgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGhhbmRsZUNhdGNoKGN0eCwgZXJyKTtcbiAgICAgIG1vdmVOZXh0KGN0eCk7XG4gICAgfTtcbiAgICBtb3ZlTmV4dChjdHgpO1xuICAgIHJldHVybiBjdHgucmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGdldE1vdmVOZXh0KGlubmVyRnVuY3Rpb24sIHNlbGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oY3R4KSB7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBpbm5lckZ1bmN0aW9uLmNhbGwoc2VsZiwgY3R4KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBoYW5kbGVDYXRjaChjdHgsIGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2F0Y2goY3R4LCBleCkge1xuICAgIGN0eC5zdG9yZWRFeGNlcHRpb24gPSBleDtcbiAgICB2YXIgbGFzdCA9IGN0eC50cnlTdGFja19bY3R4LnRyeVN0YWNrXy5sZW5ndGggLSAxXTtcbiAgICBpZiAoIWxhc3QpIHtcbiAgICAgIGN0eC5oYW5kbGVFeGNlcHRpb24oZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjdHguc3RhdGUgPSBsYXN0LmNhdGNoICE9PSB1bmRlZmluZWQgPyBsYXN0LmNhdGNoIDogbGFzdC5maW5hbGx5O1xuICAgIGlmIChsYXN0LmZpbmFsbHlGYWxsVGhyb3VnaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgY3R4LmZpbmFsbHlGYWxsVGhyb3VnaCA9IGxhc3QuZmluYWxseUZhbGxUaHJvdWdoO1xuICB9XG4gICR0cmFjZXVyUnVudGltZS5hc3luY1dyYXAgPSBhc3luY1dyYXA7XG4gICR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24gPSBpbml0R2VuZXJhdG9yRnVuY3Rpb247XG4gICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZSA9IGNyZWF0ZUdlbmVyYXRvckluc3RhbmNlO1xufSkoKTtcbihmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gYnVpbGRGcm9tRW5jb2RlZFBhcnRzKG9wdF9zY2hlbWUsIG9wdF91c2VySW5mbywgb3B0X2RvbWFpbiwgb3B0X3BvcnQsIG9wdF9wYXRoLCBvcHRfcXVlcnlEYXRhLCBvcHRfZnJhZ21lbnQpIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgaWYgKG9wdF9zY2hlbWUpIHtcbiAgICAgIG91dC5wdXNoKG9wdF9zY2hlbWUsICc6Jyk7XG4gICAgfVxuICAgIGlmIChvcHRfZG9tYWluKSB7XG4gICAgICBvdXQucHVzaCgnLy8nKTtcbiAgICAgIGlmIChvcHRfdXNlckluZm8pIHtcbiAgICAgICAgb3V0LnB1c2gob3B0X3VzZXJJbmZvLCAnQCcpO1xuICAgICAgfVxuICAgICAgb3V0LnB1c2gob3B0X2RvbWFpbik7XG4gICAgICBpZiAob3B0X3BvcnQpIHtcbiAgICAgICAgb3V0LnB1c2goJzonLCBvcHRfcG9ydCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRfcGF0aCkge1xuICAgICAgb3V0LnB1c2gob3B0X3BhdGgpO1xuICAgIH1cbiAgICBpZiAob3B0X3F1ZXJ5RGF0YSkge1xuICAgICAgb3V0LnB1c2goJz8nLCBvcHRfcXVlcnlEYXRhKTtcbiAgICB9XG4gICAgaWYgKG9wdF9mcmFnbWVudCkge1xuICAgICAgb3V0LnB1c2goJyMnLCBvcHRfZnJhZ21lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0LmpvaW4oJycpO1xuICB9XG4gIDtcbiAgdmFyIHNwbGl0UmUgPSBuZXcgUmVnRXhwKCdeJyArICcoPzonICsgJyhbXjovPyMuXSspJyArICc6KT8nICsgJyg/Oi8vJyArICcoPzooW14vPyNdKilAKT8nICsgJyhbXFxcXHdcXFxcZFxcXFwtXFxcXHUwMTAwLVxcXFx1ZmZmZi4lXSopJyArICcoPzo6KFswLTldKykpPycgKyAnKT8nICsgJyhbXj8jXSspPycgKyAnKD86XFxcXD8oW14jXSopKT8nICsgJyg/OiMoLiopKT8nICsgJyQnKTtcbiAgdmFyIENvbXBvbmVudEluZGV4ID0ge1xuICAgIFNDSEVNRTogMSxcbiAgICBVU0VSX0lORk86IDIsXG4gICAgRE9NQUlOOiAzLFxuICAgIFBPUlQ6IDQsXG4gICAgUEFUSDogNSxcbiAgICBRVUVSWV9EQVRBOiA2LFxuICAgIEZSQUdNRU5UOiA3XG4gIH07XG4gIGZ1bmN0aW9uIHNwbGl0KHVyaSkge1xuICAgIHJldHVybiAodXJpLm1hdGNoKHNwbGl0UmUpKTtcbiAgfVxuICBmdW5jdGlvbiByZW1vdmVEb3RTZWdtZW50cyhwYXRoKSB7XG4gICAgaWYgKHBhdGggPT09ICcvJylcbiAgICAgIHJldHVybiAnLyc7XG4gICAgdmFyIGxlYWRpbmdTbGFzaCA9IHBhdGhbMF0gPT09ICcvJyA/ICcvJyA6ICcnO1xuICAgIHZhciB0cmFpbGluZ1NsYXNoID0gcGF0aC5zbGljZSgtMSkgPT09ICcvJyA/ICcvJyA6ICcnO1xuICAgIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKTtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgdmFyIHVwID0gMDtcbiAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCBzZWdtZW50cy5sZW5ndGg7IHBvcysrKSB7XG4gICAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW3Bvc107XG4gICAgICBzd2l0Y2ggKHNlZ21lbnQpIHtcbiAgICAgICAgY2FzZSAnJzpcbiAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy4uJzpcbiAgICAgICAgICBpZiAob3V0Lmxlbmd0aClcbiAgICAgICAgICAgIG91dC5wb3AoKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB1cCsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG91dC5wdXNoKHNlZ21lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWxlYWRpbmdTbGFzaCkge1xuICAgICAgd2hpbGUgKHVwLS0gPiAwKSB7XG4gICAgICAgIG91dC51bnNoaWZ0KCcuLicpO1xuICAgICAgfVxuICAgICAgaWYgKG91dC5sZW5ndGggPT09IDApXG4gICAgICAgIG91dC5wdXNoKCcuJyk7XG4gICAgfVxuICAgIHJldHVybiBsZWFkaW5nU2xhc2ggKyBvdXQuam9pbignLycpICsgdHJhaWxpbmdTbGFzaDtcbiAgfVxuICBmdW5jdGlvbiBqb2luQW5kQ2Fub25pY2FsaXplUGF0aChwYXJ0cykge1xuICAgIHZhciBwYXRoID0gcGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF0gfHwgJyc7XG4gICAgcGF0aCA9IHJlbW92ZURvdFNlZ21lbnRzKHBhdGgpO1xuICAgIHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdID0gcGF0aDtcbiAgICByZXR1cm4gYnVpbGRGcm9tRW5jb2RlZFBhcnRzKHBhcnRzW0NvbXBvbmVudEluZGV4LlNDSEVNRV0sIHBhcnRzW0NvbXBvbmVudEluZGV4LlVTRVJfSU5GT10sIHBhcnRzW0NvbXBvbmVudEluZGV4LkRPTUFJTl0sIHBhcnRzW0NvbXBvbmVudEluZGV4LlBPUlRdLCBwYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXSwgcGFydHNbQ29tcG9uZW50SW5kZXguUVVFUllfREFUQV0sIHBhcnRzW0NvbXBvbmVudEluZGV4LkZSQUdNRU5UXSk7XG4gIH1cbiAgZnVuY3Rpb24gY2Fub25pY2FsaXplVXJsKHVybCkge1xuICAgIHZhciBwYXJ0cyA9IHNwbGl0KHVybCk7XG4gICAgcmV0dXJuIGpvaW5BbmRDYW5vbmljYWxpemVQYXRoKHBhcnRzKTtcbiAgfVxuICBmdW5jdGlvbiByZXNvbHZlVXJsKGJhc2UsIHVybCkge1xuICAgIHZhciBwYXJ0cyA9IHNwbGl0KHVybCk7XG4gICAgdmFyIGJhc2VQYXJ0cyA9IHNwbGl0KGJhc2UpO1xuICAgIGlmIChwYXJ0c1tDb21wb25lbnRJbmRleC5TQ0hFTUVdKSB7XG4gICAgICByZXR1cm4gam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0c1tDb21wb25lbnRJbmRleC5TQ0hFTUVdID0gYmFzZVBhcnRzW0NvbXBvbmVudEluZGV4LlNDSEVNRV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSBDb21wb25lbnRJbmRleC5TQ0hFTUU7IGkgPD0gQ29tcG9uZW50SW5kZXguUE9SVDsgaSsrKSB7XG4gICAgICBpZiAoIXBhcnRzW2ldKSB7XG4gICAgICAgIHBhcnRzW2ldID0gYmFzZVBhcnRzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFydHNbQ29tcG9uZW50SW5kZXguUEFUSF1bMF0gPT0gJy8nKSB7XG4gICAgICByZXR1cm4gam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICAgIH1cbiAgICB2YXIgcGF0aCA9IGJhc2VQYXJ0c1tDb21wb25lbnRJbmRleC5QQVRIXTtcbiAgICB2YXIgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaW5kZXggKyAxKSArIHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdO1xuICAgIHBhcnRzW0NvbXBvbmVudEluZGV4LlBBVEhdID0gcGF0aDtcbiAgICByZXR1cm4gam9pbkFuZENhbm9uaWNhbGl6ZVBhdGgocGFydHMpO1xuICB9XG4gIGZ1bmN0aW9uIGlzQWJzb2x1dGUobmFtZSkge1xuICAgIGlmICghbmFtZSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmFtZVswXSA9PT0gJy8nKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgdmFyIHBhcnRzID0gc3BsaXQobmFtZSk7XG4gICAgaWYgKHBhcnRzW0NvbXBvbmVudEluZGV4LlNDSEVNRV0pXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgJHRyYWNldXJSdW50aW1lLmNhbm9uaWNhbGl6ZVVybCA9IGNhbm9uaWNhbGl6ZVVybDtcbiAgJHRyYWNldXJSdW50aW1lLmlzQWJzb2x1dGUgPSBpc0Fic29sdXRlO1xuICAkdHJhY2V1clJ1bnRpbWUucmVtb3ZlRG90U2VnbWVudHMgPSByZW1vdmVEb3RTZWdtZW50cztcbiAgJHRyYWNldXJSdW50aW1lLnJlc29sdmVVcmwgPSByZXNvbHZlVXJsO1xufSkoKTtcbihmdW5jdGlvbihnbG9iYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgJF9fMiA9ICR0cmFjZXVyUnVudGltZSxcbiAgICAgIGNhbm9uaWNhbGl6ZVVybCA9ICRfXzIuY2Fub25pY2FsaXplVXJsLFxuICAgICAgcmVzb2x2ZVVybCA9ICRfXzIucmVzb2x2ZVVybCxcbiAgICAgIGlzQWJzb2x1dGUgPSAkX18yLmlzQWJzb2x1dGU7XG4gIHZhciBtb2R1bGVJbnN0YW50aWF0b3JzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGJhc2VVUkw7XG4gIGlmIChnbG9iYWwubG9jYXRpb24gJiYgZ2xvYmFsLmxvY2F0aW9uLmhyZWYpXG4gICAgYmFzZVVSTCA9IHJlc29sdmVVcmwoZ2xvYmFsLmxvY2F0aW9uLmhyZWYsICcuLycpO1xuICBlbHNlXG4gICAgYmFzZVVSTCA9ICcnO1xuICB2YXIgVW5jb2F0ZWRNb2R1bGVFbnRyeSA9IGZ1bmN0aW9uIFVuY29hdGVkTW9kdWxlRW50cnkodXJsLCB1bmNvYXRlZE1vZHVsZSkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMudmFsdWVfID0gdW5jb2F0ZWRNb2R1bGU7XG4gIH07XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKFVuY29hdGVkTW9kdWxlRW50cnksIHt9LCB7fSk7XG4gIHZhciBNb2R1bGVFdmFsdWF0aW9uRXJyb3IgPSBmdW5jdGlvbiBNb2R1bGVFdmFsdWF0aW9uRXJyb3IoZXJyb25lb3VzTW9kdWxlTmFtZSwgY2F1c2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyAnOiAnICsgdGhpcy5zdHJpcENhdXNlKGNhdXNlKSArICcgaW4gJyArIGVycm9uZW91c01vZHVsZU5hbWU7XG4gICAgaWYgKCEoY2F1c2UgaW5zdGFuY2VvZiAkTW9kdWxlRXZhbHVhdGlvbkVycm9yKSAmJiBjYXVzZS5zdGFjaylcbiAgICAgIHRoaXMuc3RhY2sgPSB0aGlzLnN0cmlwU3RhY2soY2F1c2Uuc3RhY2spO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfTtcbiAgdmFyICRNb2R1bGVFdmFsdWF0aW9uRXJyb3IgPSBNb2R1bGVFdmFsdWF0aW9uRXJyb3I7XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKE1vZHVsZUV2YWx1YXRpb25FcnJvciwge1xuICAgIHN0cmlwRXJyb3I6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UoLy4qRXJyb3I6LywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgJzonKTtcbiAgICB9LFxuICAgIHN0cmlwQ2F1c2U6IGZ1bmN0aW9uKGNhdXNlKSB7XG4gICAgICBpZiAoIWNhdXNlKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICBpZiAoIWNhdXNlLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBjYXVzZSArICcnO1xuICAgICAgcmV0dXJuIHRoaXMuc3RyaXBFcnJvcihjYXVzZS5tZXNzYWdlKTtcbiAgICB9LFxuICAgIGxvYWRlZEJ5OiBmdW5jdGlvbihtb2R1bGVOYW1lKSB7XG4gICAgICB0aGlzLnN0YWNrICs9ICdcXG4gbG9hZGVkIGJ5ICcgKyBtb2R1bGVOYW1lO1xuICAgIH0sXG4gICAgc3RyaXBTdGFjazogZnVuY3Rpb24oY2F1c2VTdGFjaykge1xuICAgICAgdmFyIHN0YWNrID0gW107XG4gICAgICBjYXVzZVN0YWNrLnNwbGl0KCdcXG4nKS5zb21lKChmdW5jdGlvbihmcmFtZSkge1xuICAgICAgICBpZiAoL1VuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yLy50ZXN0KGZyYW1lKSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgc3RhY2sucHVzaChmcmFtZSk7XG4gICAgICB9KSk7XG4gICAgICBzdGFja1swXSA9IHRoaXMuc3RyaXBFcnJvcihzdGFja1swXSk7XG4gICAgICByZXR1cm4gc3RhY2suam9pbignXFxuJyk7XG4gICAgfVxuICB9LCB7fSwgRXJyb3IpO1xuICB2YXIgVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IgPSBmdW5jdGlvbiBVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcih1cmwsIGZ1bmMpIHtcbiAgICAkdHJhY2V1clJ1bnRpbWUuc3VwZXJDYWxsKHRoaXMsICRVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvci5wcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgW3VybCwgbnVsbF0pO1xuICAgIHRoaXMuZnVuYyA9IGZ1bmM7XG4gIH07XG4gIHZhciAkVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IgPSBVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcjtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3IsIHtnZXRVbmNvYXRlZE1vZHVsZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZV8pXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlXztcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlXyA9IHRoaXMuZnVuYy5jYWxsKGdsb2JhbCk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBpZiAoZXggaW5zdGFuY2VvZiBNb2R1bGVFdmFsdWF0aW9uRXJyb3IpIHtcbiAgICAgICAgICBleC5sb2FkZWRCeSh0aGlzLnVybCk7XG4gICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IE1vZHVsZUV2YWx1YXRpb25FcnJvcih0aGlzLnVybCwgZXgpO1xuICAgICAgfVxuICAgIH19LCB7fSwgVW5jb2F0ZWRNb2R1bGVFbnRyeSk7XG4gIGZ1bmN0aW9uIGdldFVuY29hdGVkTW9kdWxlSW5zdGFudGlhdG9yKG5hbWUpIHtcbiAgICBpZiAoIW5hbWUpXG4gICAgICByZXR1cm47XG4gICAgdmFyIHVybCA9IE1vZHVsZVN0b3JlLm5vcm1hbGl6ZShuYW1lKTtcbiAgICByZXR1cm4gbW9kdWxlSW5zdGFudGlhdG9yc1t1cmxdO1xuICB9XG4gIDtcbiAgdmFyIG1vZHVsZUluc3RhbmNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBsaXZlTW9kdWxlU2VudGluZWwgPSB7fTtcbiAgZnVuY3Rpb24gTW9kdWxlKHVuY29hdGVkTW9kdWxlKSB7XG4gICAgdmFyIGlzTGl2ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgY29hdGVkTW9kdWxlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh1bmNvYXRlZE1vZHVsZSkuZm9yRWFjaCgoZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGdldHRlcixcbiAgICAgICAgICB2YWx1ZTtcbiAgICAgIGlmIChpc0xpdmUgPT09IGxpdmVNb2R1bGVTZW50aW5lbCkge1xuICAgICAgICB2YXIgZGVzY3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHVuY29hdGVkTW9kdWxlLCBuYW1lKTtcbiAgICAgICAgaWYgKGRlc2NyLmdldClcbiAgICAgICAgICBnZXR0ZXIgPSBkZXNjci5nZXQ7XG4gICAgICB9XG4gICAgICBpZiAoIWdldHRlcikge1xuICAgICAgICB2YWx1ZSA9IHVuY29hdGVkTW9kdWxlW25hbWVdO1xuICAgICAgICBnZXR0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29hdGVkTW9kdWxlLCBuYW1lLCB7XG4gICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KSk7XG4gICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKGNvYXRlZE1vZHVsZSk7XG4gICAgcmV0dXJuIGNvYXRlZE1vZHVsZTtcbiAgfVxuICB2YXIgTW9kdWxlU3RvcmUgPSB7XG4gICAgbm9ybWFsaXplOiBmdW5jdGlvbihuYW1lLCByZWZlcmVyTmFtZSwgcmVmZXJlckFkZHJlc3MpIHtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm1vZHVsZSBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiBuYW1lKTtcbiAgICAgIGlmIChpc0Fic29sdXRlKG5hbWUpKVxuICAgICAgICByZXR1cm4gY2Fub25pY2FsaXplVXJsKG5hbWUpO1xuICAgICAgaWYgKC9bXlxcLl1cXC9cXC5cXC5cXC8vLnRlc3QobmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtb2R1bGUgbmFtZSBlbWJlZHMgLy4uLzogJyArIG5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWVbMF0gPT09ICcuJyAmJiByZWZlcmVyTmFtZSlcbiAgICAgICAgcmV0dXJuIHJlc29sdmVVcmwocmVmZXJlck5hbWUsIG5hbWUpO1xuICAgICAgcmV0dXJuIGNhbm9uaWNhbGl6ZVVybChuYW1lKTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24obm9ybWFsaXplZE5hbWUpIHtcbiAgICAgIHZhciBtID0gZ2V0VW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3Iobm9ybWFsaXplZE5hbWUpO1xuICAgICAgaWYgKCFtKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgdmFyIG1vZHVsZUluc3RhbmNlID0gbW9kdWxlSW5zdGFuY2VzW20udXJsXTtcbiAgICAgIGlmIChtb2R1bGVJbnN0YW5jZSlcbiAgICAgICAgcmV0dXJuIG1vZHVsZUluc3RhbmNlO1xuICAgICAgbW9kdWxlSW5zdGFuY2UgPSBNb2R1bGUobS5nZXRVbmNvYXRlZE1vZHVsZSgpLCBsaXZlTW9kdWxlU2VudGluZWwpO1xuICAgICAgcmV0dXJuIG1vZHVsZUluc3RhbmNlc1ttLnVybF0gPSBtb2R1bGVJbnN0YW5jZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24obm9ybWFsaXplZE5hbWUsIG1vZHVsZSkge1xuICAgICAgbm9ybWFsaXplZE5hbWUgPSBTdHJpbmcobm9ybWFsaXplZE5hbWUpO1xuICAgICAgbW9kdWxlSW5zdGFudGlhdG9yc1tub3JtYWxpemVkTmFtZV0gPSBuZXcgVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3Iobm9ybWFsaXplZE5hbWUsIChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgIH0pKTtcbiAgICAgIG1vZHVsZUluc3RhbmNlc1tub3JtYWxpemVkTmFtZV0gPSBtb2R1bGU7XG4gICAgfSxcbiAgICBnZXQgYmFzZVVSTCgpIHtcbiAgICAgIHJldHVybiBiYXNlVVJMO1xuICAgIH0sXG4gICAgc2V0IGJhc2VVUkwodikge1xuICAgICAgYmFzZVVSTCA9IFN0cmluZyh2KTtcbiAgICB9LFxuICAgIHJlZ2lzdGVyTW9kdWxlOiBmdW5jdGlvbihuYW1lLCBmdW5jKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZE5hbWUgPSBNb2R1bGVTdG9yZS5ub3JtYWxpemUobmFtZSk7XG4gICAgICBpZiAobW9kdWxlSW5zdGFudGlhdG9yc1tub3JtYWxpemVkTmFtZV0pXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZHVwbGljYXRlIG1vZHVsZSBuYW1lZCAnICsgbm9ybWFsaXplZE5hbWUpO1xuICAgICAgbW9kdWxlSW5zdGFudGlhdG9yc1tub3JtYWxpemVkTmFtZV0gPSBuZXcgVW5jb2F0ZWRNb2R1bGVJbnN0YW50aWF0b3Iobm9ybWFsaXplZE5hbWUsIGZ1bmMpO1xuICAgIH0sXG4gICAgYnVuZGxlU3RvcmU6IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKG5hbWUsIGRlcHMsIGZ1bmMpIHtcbiAgICAgIGlmICghZGVwcyB8fCAhZGVwcy5sZW5ndGggJiYgIWZ1bmMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJNb2R1bGUobmFtZSwgZnVuYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ1bmRsZVN0b3JlW25hbWVdID0ge1xuICAgICAgICAgIGRlcHM6IGRlcHMsXG4gICAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJF9fMCA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHZhciBkZXBNYXAgPSB7fTtcbiAgICAgICAgICAgIGRlcHMuZm9yRWFjaCgoZnVuY3Rpb24oZGVwLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gZGVwTWFwW2RlcF0gPSAkX18wW2luZGV4XTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHZhciByZWdpc3RyeUVudHJ5ID0gZnVuYy5jYWxsKHRoaXMsIGRlcE1hcCk7XG4gICAgICAgICAgICByZWdpc3RyeUVudHJ5LmV4ZWN1dGUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RyeUVudHJ5LmV4cG9ydHM7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0QW5vbnltb3VzTW9kdWxlOiBmdW5jdGlvbihmdW5jKSB7XG4gICAgICByZXR1cm4gbmV3IE1vZHVsZShmdW5jLmNhbGwoZ2xvYmFsKSwgbGl2ZU1vZHVsZVNlbnRpbmVsKTtcbiAgICB9LFxuICAgIGdldEZvclRlc3Rpbmc6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciAkX18wID0gdGhpcztcbiAgICAgIGlmICghdGhpcy50ZXN0aW5nUHJlZml4Xykge1xuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVJbnN0YW5jZXMpLnNvbWUoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIHZhciBtID0gLyh0cmFjZXVyQFteXFwvXSpcXC8pLy5leGVjKGtleSk7XG4gICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICRfXzAudGVzdGluZ1ByZWZpeF8gPSBtWzFdO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy50ZXN0aW5nUHJlZml4XyArIG5hbWUpO1xuICAgIH1cbiAgfTtcbiAgTW9kdWxlU3RvcmUuc2V0KCdAdHJhY2V1ci9zcmMvcnVudGltZS9Nb2R1bGVTdG9yZScsIG5ldyBNb2R1bGUoe01vZHVsZVN0b3JlOiBNb2R1bGVTdG9yZX0pKTtcbiAgdmFyIHNldHVwR2xvYmFscyA9ICR0cmFjZXVyUnVudGltZS5zZXR1cEdsb2JhbHM7XG4gICR0cmFjZXVyUnVudGltZS5zZXR1cEdsb2JhbHMgPSBmdW5jdGlvbihnbG9iYWwpIHtcbiAgICBzZXR1cEdsb2JhbHMoZ2xvYmFsKTtcbiAgfTtcbiAgJHRyYWNldXJSdW50aW1lLk1vZHVsZVN0b3JlID0gTW9kdWxlU3RvcmU7XG4gIGdsb2JhbC5TeXN0ZW0gPSB7XG4gICAgcmVnaXN0ZXI6IE1vZHVsZVN0b3JlLnJlZ2lzdGVyLmJpbmQoTW9kdWxlU3RvcmUpLFxuICAgIGdldDogTW9kdWxlU3RvcmUuZ2V0LFxuICAgIHNldDogTW9kdWxlU3RvcmUuc2V0LFxuICAgIG5vcm1hbGl6ZTogTW9kdWxlU3RvcmUubm9ybWFsaXplXG4gIH07XG4gICR0cmFjZXVyUnVudGltZS5nZXRNb2R1bGVJbXBsID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpbnN0YW50aWF0b3IgPSBnZXRVbmNvYXRlZE1vZHVsZUluc3RhbnRpYXRvcihuYW1lKTtcbiAgICByZXR1cm4gaW5zdGFudGlhdG9yICYmIGluc3RhbnRpYXRvci5nZXRVbmNvYXRlZE1vZHVsZSgpO1xuICB9O1xufSkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0aGlzKTtcblN5c3RlbS5yZWdpc3RlcihcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzXCI7XG4gIHZhciAkY2VpbCA9IE1hdGguY2VpbDtcbiAgdmFyICRmbG9vciA9IE1hdGguZmxvb3I7XG4gIHZhciAkaXNGaW5pdGUgPSBpc0Zpbml0ZTtcbiAgdmFyICRpc05hTiA9IGlzTmFOO1xuICB2YXIgJHBvdyA9IE1hdGgucG93O1xuICB2YXIgJG1pbiA9IE1hdGgubWluO1xuICB2YXIgdG9PYmplY3QgPSAkdHJhY2V1clJ1bnRpbWUudG9PYmplY3Q7XG4gIGZ1bmN0aW9uIHRvVWludDMyKHgpIHtcbiAgICByZXR1cm4geCA+Pj4gMDtcbiAgfVxuICBmdW5jdGlvbiBpc09iamVjdCh4KSB7XG4gICAgcmV0dXJuIHggJiYgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH1cbiAgZnVuY3Rpb24gaXNDYWxsYWJsZSh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICB9XG4gIGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInO1xuICB9XG4gIGZ1bmN0aW9uIHRvSW50ZWdlcih4KSB7XG4gICAgeCA9ICt4O1xuICAgIGlmICgkaXNOYU4oeCkpXG4gICAgICByZXR1cm4gMDtcbiAgICBpZiAoeCA9PT0gMCB8fCAhJGlzRmluaXRlKHgpKVxuICAgICAgcmV0dXJuIHg7XG4gICAgcmV0dXJuIHggPiAwID8gJGZsb29yKHgpIDogJGNlaWwoeCk7XG4gIH1cbiAgdmFyIE1BWF9TQUZFX0xFTkdUSCA9ICRwb3coMiwgNTMpIC0gMTtcbiAgZnVuY3Rpb24gdG9MZW5ndGgoeCkge1xuICAgIHZhciBsZW4gPSB0b0ludGVnZXIoeCk7XG4gICAgcmV0dXJuIGxlbiA8IDAgPyAwIDogJG1pbihsZW4sIE1BWF9TQUZFX0xFTkdUSCk7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tJdGVyYWJsZSh4KSB7XG4gICAgcmV0dXJuICFpc09iamVjdCh4KSA/IHVuZGVmaW5lZCA6IHhbU3ltYm9sLml0ZXJhdG9yXTtcbiAgfVxuICBmdW5jdGlvbiBpc0NvbnN0cnVjdG9yKHgpIHtcbiAgICByZXR1cm4gaXNDYWxsYWJsZSh4KTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCh2YWx1ZSwgZG9uZSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBkb25lOiBkb25lXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZURlZmluZShvYmplY3QsIG5hbWUsIGRlc2NyKSB7XG4gICAgaWYgKCEobmFtZSBpbiBvYmplY3QpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCBkZXNjcik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1heWJlRGVmaW5lTWV0aG9kKG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBtYXliZURlZmluZShvYmplY3QsIG5hbWUsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZURlZmluZUNvbnN0KG9iamVjdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBtYXliZURlZmluZShvYmplY3QsIG5hbWUsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlQWRkRnVuY3Rpb25zKG9iamVjdCwgZnVuY3Rpb25zKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHZhciBuYW1lID0gZnVuY3Rpb25zW2ldO1xuICAgICAgdmFyIHZhbHVlID0gZnVuY3Rpb25zW2kgKyAxXTtcbiAgICAgIG1heWJlRGVmaW5lTWV0aG9kKG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtYXliZUFkZENvbnN0cyhvYmplY3QsIGNvbnN0cykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uc3RzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICB2YXIgbmFtZSA9IGNvbnN0c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IGNvbnN0c1tpICsgMV07XG4gICAgICBtYXliZURlZmluZUNvbnN0KG9iamVjdCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtYXliZUFkZEl0ZXJhdG9yKG9iamVjdCwgZnVuYywgU3ltYm9sKSB7XG4gICAgaWYgKCFTeW1ib2wgfHwgIVN5bWJvbC5pdGVyYXRvciB8fCBvYmplY3RbU3ltYm9sLml0ZXJhdG9yXSlcbiAgICAgIHJldHVybjtcbiAgICBpZiAob2JqZWN0WydAQGl0ZXJhdG9yJ10pXG4gICAgICBmdW5jID0gb2JqZWN0WydAQGl0ZXJhdG9yJ107XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgU3ltYm9sLml0ZXJhdG9yLCB7XG4gICAgICB2YWx1ZTogZnVuYyxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxuICB2YXIgcG9seWZpbGxzID0gW107XG4gIGZ1bmN0aW9uIHJlZ2lzdGVyUG9seWZpbGwoZnVuYykge1xuICAgIHBvbHlmaWxscy5wdXNoKGZ1bmMpO1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsQWxsKGdsb2JhbCkge1xuICAgIHBvbHlmaWxscy5mb3JFYWNoKChmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gZihnbG9iYWwpO1xuICAgIH0pKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGdldCB0b09iamVjdCgpIHtcbiAgICAgIHJldHVybiB0b09iamVjdDtcbiAgICB9LFxuICAgIGdldCB0b1VpbnQzMigpIHtcbiAgICAgIHJldHVybiB0b1VpbnQzMjtcbiAgICB9LFxuICAgIGdldCBpc09iamVjdCgpIHtcbiAgICAgIHJldHVybiBpc09iamVjdDtcbiAgICB9LFxuICAgIGdldCBpc0NhbGxhYmxlKCkge1xuICAgICAgcmV0dXJuIGlzQ2FsbGFibGU7XG4gICAgfSxcbiAgICBnZXQgaXNOdW1iZXIoKSB7XG4gICAgICByZXR1cm4gaXNOdW1iZXI7XG4gICAgfSxcbiAgICBnZXQgdG9JbnRlZ2VyKCkge1xuICAgICAgcmV0dXJuIHRvSW50ZWdlcjtcbiAgICB9LFxuICAgIGdldCB0b0xlbmd0aCgpIHtcbiAgICAgIHJldHVybiB0b0xlbmd0aDtcbiAgICB9LFxuICAgIGdldCBjaGVja0l0ZXJhYmxlKCkge1xuICAgICAgcmV0dXJuIGNoZWNrSXRlcmFibGU7XG4gICAgfSxcbiAgICBnZXQgaXNDb25zdHJ1Y3RvcigpIHtcbiAgICAgIHJldHVybiBpc0NvbnN0cnVjdG9yO1xuICAgIH0sXG4gICAgZ2V0IGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0O1xuICAgIH0sXG4gICAgZ2V0IG1heWJlRGVmaW5lKCkge1xuICAgICAgcmV0dXJuIG1heWJlRGVmaW5lO1xuICAgIH0sXG4gICAgZ2V0IG1heWJlRGVmaW5lTWV0aG9kKCkge1xuICAgICAgcmV0dXJuIG1heWJlRGVmaW5lTWV0aG9kO1xuICAgIH0sXG4gICAgZ2V0IG1heWJlRGVmaW5lQ29uc3QoKSB7XG4gICAgICByZXR1cm4gbWF5YmVEZWZpbmVDb25zdDtcbiAgICB9LFxuICAgIGdldCBtYXliZUFkZEZ1bmN0aW9ucygpIHtcbiAgICAgIHJldHVybiBtYXliZUFkZEZ1bmN0aW9ucztcbiAgICB9LFxuICAgIGdldCBtYXliZUFkZENvbnN0cygpIHtcbiAgICAgIHJldHVybiBtYXliZUFkZENvbnN0cztcbiAgICB9LFxuICAgIGdldCBtYXliZUFkZEl0ZXJhdG9yKCkge1xuICAgICAgcmV0dXJuIG1heWJlQWRkSXRlcmF0b3I7XG4gICAgfSxcbiAgICBnZXQgcmVnaXN0ZXJQb2x5ZmlsbCgpIHtcbiAgICAgIHJldHVybiByZWdpc3RlclBvbHlmaWxsO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsQWxsKCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsQWxsO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLnJlZ2lzdGVyKFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTWFwXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL01hcFwiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlsc1wiKSxcbiAgICAgIGlzT2JqZWN0ID0gJF9fMC5pc09iamVjdCxcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IgPSAkX18wLm1heWJlQWRkSXRlcmF0b3IsXG4gICAgICByZWdpc3RlclBvbHlmaWxsID0gJF9fMC5yZWdpc3RlclBvbHlmaWxsO1xuICB2YXIgZ2V0T3duSGFzaE9iamVjdCA9ICR0cmFjZXVyUnVudGltZS5nZXRPd25IYXNoT2JqZWN0O1xuICB2YXIgJGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGRlbGV0ZWRTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBsb29rdXBJbmRleChtYXAsIGtleSkge1xuICAgIGlmIChpc09iamVjdChrZXkpKSB7XG4gICAgICB2YXIgaGFzaE9iamVjdCA9IGdldE93bkhhc2hPYmplY3Qoa2V5KTtcbiAgICAgIHJldHVybiBoYXNoT2JqZWN0ICYmIG1hcC5vYmplY3RJbmRleF9baGFzaE9iamVjdC5oYXNoXTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKVxuICAgICAgcmV0dXJuIG1hcC5zdHJpbmdJbmRleF9ba2V5XTtcbiAgICByZXR1cm4gbWFwLnByaW1pdGl2ZUluZGV4X1trZXldO1xuICB9XG4gIGZ1bmN0aW9uIGluaXRNYXAobWFwKSB7XG4gICAgbWFwLmVudHJpZXNfID0gW107XG4gICAgbWFwLm9iamVjdEluZGV4XyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgbWFwLnN0cmluZ0luZGV4XyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgbWFwLnByaW1pdGl2ZUluZGV4XyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgbWFwLmRlbGV0ZWRDb3VudF8gPSAwO1xuICB9XG4gIHZhciBNYXAgPSBmdW5jdGlvbiBNYXAoKSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gYXJndW1lbnRzWzBdO1xuICAgIGlmICghaXNPYmplY3QodGhpcykpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNYXAgY2FsbGVkIG9uIGluY29tcGF0aWJsZSB0eXBlJyk7XG4gICAgaWYgKCRoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsICdlbnRyaWVzXycpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNYXAgY2FuIG5vdCBiZSByZWVudHJhbnRseSBpbml0aWFsaXNlZCcpO1xuICAgIH1cbiAgICBpbml0TWFwKHRoaXMpO1xuICAgIGlmIChpdGVyYWJsZSAhPT0gbnVsbCAmJiBpdGVyYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKHZhciAkX18yID0gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpLFxuICAgICAgICAgICRfXzM7ICEoJF9fMyA9ICRfXzIubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgdmFyICRfXzQgPSAkX18zLnZhbHVlLFxuICAgICAgICAgICAga2V5ID0gJF9fNFswXSxcbiAgICAgICAgICAgIHZhbHVlID0gJF9fNFsxXTtcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShNYXAsIHtcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudHJpZXNfLmxlbmd0aCAvIDIgLSB0aGlzLmRlbGV0ZWRDb3VudF87XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGluZGV4ID0gbG9va3VwSW5kZXgodGhpcywga2V5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzX1tpbmRleCArIDFdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgb2JqZWN0TW9kZSA9IGlzT2JqZWN0KGtleSk7XG4gICAgICB2YXIgc3RyaW5nTW9kZSA9IHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIGluZGV4ID0gbG9va3VwSW5kZXgodGhpcywga2V5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZW50cmllc19baW5kZXggKyAxXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLmVudHJpZXNfLmxlbmd0aDtcbiAgICAgICAgdGhpcy5lbnRyaWVzX1tpbmRleF0gPSBrZXk7XG4gICAgICAgIHRoaXMuZW50cmllc19baW5kZXggKyAxXSA9IHZhbHVlO1xuICAgICAgICBpZiAob2JqZWN0TW9kZSkge1xuICAgICAgICAgIHZhciBoYXNoT2JqZWN0ID0gZ2V0T3duSGFzaE9iamVjdChrZXkpO1xuICAgICAgICAgIHZhciBoYXNoID0gaGFzaE9iamVjdC5oYXNoO1xuICAgICAgICAgIHRoaXMub2JqZWN0SW5kZXhfW2hhc2hdID0gaW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgICAgIHRoaXMuc3RyaW5nSW5kZXhfW2tleV0gPSBpbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByaW1pdGl2ZUluZGV4X1trZXldID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBsb29rdXBJbmRleCh0aGlzLCBrZXkpICE9PSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBkZWxldGU6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIG9iamVjdE1vZGUgPSBpc09iamVjdChrZXkpO1xuICAgICAgdmFyIHN0cmluZ01vZGUgPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBpbmRleDtcbiAgICAgIHZhciBoYXNoO1xuICAgICAgaWYgKG9iamVjdE1vZGUpIHtcbiAgICAgICAgdmFyIGhhc2hPYmplY3QgPSBnZXRPd25IYXNoT2JqZWN0KGtleSk7XG4gICAgICAgIGlmIChoYXNoT2JqZWN0KSB7XG4gICAgICAgICAgaW5kZXggPSB0aGlzLm9iamVjdEluZGV4X1toYXNoID0gaGFzaE9iamVjdC5oYXNoXTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5vYmplY3RJbmRleF9baGFzaF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgICBpbmRleCA9IHRoaXMuc3RyaW5nSW5kZXhfW2tleV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0cmluZ0luZGV4X1trZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSB0aGlzLnByaW1pdGl2ZUluZGV4X1trZXldO1xuICAgICAgICBkZWxldGUgdGhpcy5wcmltaXRpdmVJbmRleF9ba2V5XTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuZW50cmllc19baW5kZXhdID0gZGVsZXRlZFNlbnRpbmVsO1xuICAgICAgICB0aGlzLmVudHJpZXNfW2luZGV4ICsgMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGVsZXRlZENvdW50XysrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIGluaXRNYXAodGhpcyk7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbihjYWxsYmFja0ZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbnRyaWVzXy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5lbnRyaWVzX1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5lbnRyaWVzX1tpICsgMV07XG4gICAgICAgIGlmIChrZXkgPT09IGRlbGV0ZWRTZW50aW5lbClcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgY2FsbGJhY2tGbi5jYWxsKHRoaXNBcmcsIHZhbHVlLCBrZXksIHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZW50cmllczogJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbiAkX181KCkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlO1xuICAgICAgcmV0dXJuICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZShmdW5jdGlvbigkY3R4KSB7XG4gICAgICAgIHdoaWxlICh0cnVlKVxuICAgICAgICAgIHN3aXRjaCAoJGN0eC5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoaSA8IHRoaXMuZW50cmllc18ubGVuZ3RoKSA/IDggOiAtMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAga2V5ID0gdGhpcy5lbnRyaWVzX1tpXTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmVudHJpZXNfW2kgKyAxXTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKGtleSA9PT0gZGVsZXRlZFNlbnRpbmVsKSA/IDQgOiA2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICRjdHgubWF5YmVUaHJvdygpO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gNDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gJGN0eC5lbmQoKTtcbiAgICAgICAgICB9XG4gICAgICB9LCAkX181LCB0aGlzKTtcbiAgICB9KSxcbiAgICBrZXlzOiAkdHJhY2V1clJ1bnRpbWUuaW5pdEdlbmVyYXRvckZ1bmN0aW9uKGZ1bmN0aW9uICRfXzYoKSB7XG4gICAgICB2YXIgaSxcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWU7XG4gICAgICByZXR1cm4gJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlKGZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpXG4gICAgICAgICAgc3dpdGNoICgkY3R4LnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IChpIDwgdGhpcy5lbnRyaWVzXy5sZW5ndGgpID8gOCA6IC0yO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICBrZXkgPSB0aGlzLmVudHJpZXNfW2ldO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZW50cmllc19baSArIDFdO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gOTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoa2V5ID09PSBkZWxldGVkU2VudGluZWwpID8gNCA6IDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgJGN0eC5tYXliZVRocm93KCk7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiAkY3R4LmVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgIH0sICRfXzYsIHRoaXMpO1xuICAgIH0pLFxuICAgIHZhbHVlczogJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbiAkX183KCkge1xuICAgICAgdmFyIGksXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlO1xuICAgICAgcmV0dXJuICR0cmFjZXVyUnVudGltZS5jcmVhdGVHZW5lcmF0b3JJbnN0YW5jZShmdW5jdGlvbigkY3R4KSB7XG4gICAgICAgIHdoaWxlICh0cnVlKVxuICAgICAgICAgIHN3aXRjaCAoJGN0eC5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSAoaSA8IHRoaXMuZW50cmllc18ubGVuZ3RoKSA/IDggOiAtMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAga2V5ID0gdGhpcy5lbnRyaWVzX1tpXTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmVudHJpZXNfW2kgKyAxXTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKGtleSA9PT0gZGVsZXRlZFNlbnRpbmVsKSA/IDQgOiA2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDI7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgJGN0eC5tYXliZVRocm93KCk7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiAkY3R4LmVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgIH0sICRfXzcsIHRoaXMpO1xuICAgIH0pXG4gIH0sIHt9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcC5wcm90b3R5cGUsIFN5bWJvbC5pdGVyYXRvciwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogTWFwLnByb3RvdHlwZS5lbnRyaWVzXG4gIH0pO1xuICBmdW5jdGlvbiBwb2x5ZmlsbE1hcChnbG9iYWwpIHtcbiAgICB2YXIgJF9fNCA9IGdsb2JhbCxcbiAgICAgICAgT2JqZWN0ID0gJF9fNC5PYmplY3QsXG4gICAgICAgIFN5bWJvbCA9ICRfXzQuU3ltYm9sO1xuICAgIGlmICghZ2xvYmFsLk1hcClcbiAgICAgIGdsb2JhbC5NYXAgPSBNYXA7XG4gICAgdmFyIG1hcFByb3RvdHlwZSA9IGdsb2JhbC5NYXAucHJvdG90eXBlO1xuICAgIGlmIChtYXBQcm90b3R5cGUuZW50cmllcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgZ2xvYmFsLk1hcCA9IE1hcDtcbiAgICBpZiAobWFwUHJvdG90eXBlLmVudHJpZXMpIHtcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IobWFwUHJvdG90eXBlLCBtYXBQcm90b3R5cGUuZW50cmllcywgU3ltYm9sKTtcbiAgICAgIG1heWJlQWRkSXRlcmF0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBnbG9iYWwuTWFwKCkuZW50cmllcygpKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSwgU3ltYm9sKTtcbiAgICB9XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbE1hcCk7XG4gIHJldHVybiB7XG4gICAgZ2V0IE1hcCgpIHtcbiAgICAgIHJldHVybiBNYXA7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxNYXAoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxNYXA7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTWFwXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXIoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy9TZXRcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU2V0XCI7XG4gIHZhciAkX18wID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzXCIpLFxuICAgICAgaXNPYmplY3QgPSAkX18wLmlzT2JqZWN0LFxuICAgICAgbWF5YmVBZGRJdGVyYXRvciA9ICRfXzAubWF5YmVBZGRJdGVyYXRvcixcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18wLnJlZ2lzdGVyUG9seWZpbGw7XG4gIHZhciBNYXAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTWFwXCIpLk1hcDtcbiAgdmFyIGdldE93bkhhc2hPYmplY3QgPSAkdHJhY2V1clJ1bnRpbWUuZ2V0T3duSGFzaE9iamVjdDtcbiAgdmFyICRoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIGZ1bmN0aW9uIGluaXRTZXQoc2V0KSB7XG4gICAgc2V0Lm1hcF8gPSBuZXcgTWFwKCk7XG4gIH1cbiAgdmFyIFNldCA9IGZ1bmN0aW9uIFNldCgpIHtcbiAgICB2YXIgaXRlcmFibGUgPSBhcmd1bWVudHNbMF07XG4gICAgaWYgKCFpc09iamVjdCh0aGlzKSlcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NldCBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHR5cGUnKTtcbiAgICBpZiAoJGhhc093blByb3BlcnR5LmNhbGwodGhpcywgJ21hcF8nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2V0IGNhbiBub3QgYmUgcmVlbnRyYW50bHkgaW5pdGlhbGlzZWQnKTtcbiAgICB9XG4gICAgaW5pdFNldCh0aGlzKTtcbiAgICBpZiAoaXRlcmFibGUgIT09IG51bGwgJiYgaXRlcmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgJF9fNCA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0oKSxcbiAgICAgICAgICAkX181OyAhKCRfXzUgPSAkX180Lm5leHQoKSkuZG9uZTsgKSB7XG4gICAgICAgIHZhciBpdGVtID0gJF9fNS52YWx1ZTtcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuYWRkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShTZXQsIHtcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcF8uc2l6ZTtcbiAgICB9LFxuICAgIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBfLmhhcyhrZXkpO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgIHRoaXMubWFwXy5zZXQoa2V5LCBrZXkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBkZWxldGU6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwXy5kZWxldGUoa2V5KTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcF8uY2xlYXIoKTtcbiAgICB9LFxuICAgIGZvckVhY2g6IGZ1bmN0aW9uKGNhbGxiYWNrRm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuICAgICAgdmFyICRfXzIgPSB0aGlzO1xuICAgICAgcmV0dXJuIHRoaXMubWFwXy5mb3JFYWNoKChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgIGNhbGxiYWNrRm4uY2FsbCh0aGlzQXJnLCBrZXksIGtleSwgJF9fMik7XG4gICAgICB9KSk7XG4gICAgfSxcbiAgICB2YWx1ZXM6ICR0cmFjZXVyUnVudGltZS5pbml0R2VuZXJhdG9yRnVuY3Rpb24oZnVuY3Rpb24gJF9fNygpIHtcbiAgICAgIHZhciAkX184LFxuICAgICAgICAgICRfXzk7XG4gICAgICByZXR1cm4gJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlKGZ1bmN0aW9uKCRjdHgpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpXG4gICAgICAgICAgc3dpdGNoICgkY3R4LnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICRfXzggPSB0aGlzLm1hcF8ua2V5cygpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgICAgJGN0eC5zZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAkY3R4LmFjdGlvbiA9ICduZXh0JztcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRfXzkgPSAkX184WyRjdHguYWN0aW9uXSgkY3R4LnNlbnRJZ25vcmVUaHJvdyk7XG4gICAgICAgICAgICAgICRjdHguc3RhdGUgPSA5O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9ICgkX185LmRvbmUpID8gMyA6IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAkY3R4LnNlbnQgPSAkX185LnZhbHVlO1xuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gLTI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gMTI7XG4gICAgICAgICAgICAgIHJldHVybiAkX185LnZhbHVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuICRjdHguZW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgfSwgJF9fNywgdGhpcyk7XG4gICAgfSksXG4gICAgZW50cmllczogJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbihmdW5jdGlvbiAkX18xMCgpIHtcbiAgICAgIHZhciAkX18xMSxcbiAgICAgICAgICAkX18xMjtcbiAgICAgIHJldHVybiAkdHJhY2V1clJ1bnRpbWUuY3JlYXRlR2VuZXJhdG9ySW5zdGFuY2UoZnVuY3Rpb24oJGN0eCkge1xuICAgICAgICB3aGlsZSAodHJ1ZSlcbiAgICAgICAgICBzd2l0Y2ggKCRjdHguc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgJF9fMTEgPSB0aGlzLm1hcF8uZW50cmllcygpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgICAgJGN0eC5zZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAkY3R4LmFjdGlvbiA9ICduZXh0JztcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICRfXzEyID0gJF9fMTFbJGN0eC5hY3Rpb25dKCRjdHguc2VudElnbm9yZVRocm93KTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAkY3R4LnN0YXRlID0gKCRfXzEyLmRvbmUpID8gMyA6IDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAkY3R4LnNlbnQgPSAkX18xMi52YWx1ZTtcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IC0yO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgJGN0eC5zdGF0ZSA9IDEyO1xuICAgICAgICAgICAgICByZXR1cm4gJF9fMTIudmFsdWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gJGN0eC5lbmQoKTtcbiAgICAgICAgICB9XG4gICAgICB9LCAkX18xMCwgdGhpcyk7XG4gICAgfSlcbiAgfSwge30pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2V0LnByb3RvdHlwZSwgU3ltYm9sLml0ZXJhdG9yLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBTZXQucHJvdG90eXBlLnZhbHVlc1xuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNldC5wcm90b3R5cGUsICdrZXlzJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogU2V0LnByb3RvdHlwZS52YWx1ZXNcbiAgfSk7XG4gIGZ1bmN0aW9uIHBvbHlmaWxsU2V0KGdsb2JhbCkge1xuICAgIHZhciAkX182ID0gZ2xvYmFsLFxuICAgICAgICBPYmplY3QgPSAkX182Lk9iamVjdCxcbiAgICAgICAgU3ltYm9sID0gJF9fNi5TeW1ib2w7XG4gICAgaWYgKCFnbG9iYWwuU2V0KVxuICAgICAgZ2xvYmFsLlNldCA9IFNldDtcbiAgICB2YXIgc2V0UHJvdG90eXBlID0gZ2xvYmFsLlNldC5wcm90b3R5cGU7XG4gICAgaWYgKHNldFByb3RvdHlwZS52YWx1ZXMpIHtcbiAgICAgIG1heWJlQWRkSXRlcmF0b3Ioc2V0UHJvdG90eXBlLCBzZXRQcm90b3R5cGUudmFsdWVzLCBTeW1ib2wpO1xuICAgICAgbWF5YmVBZGRJdGVyYXRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IGdsb2JhbC5TZXQoKS52YWx1ZXMoKSksIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sIFN5bWJvbCk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxTZXQpO1xuICByZXR1cm4ge1xuICAgIGdldCBTZXQoKSB7XG4gICAgICByZXR1cm4gU2V0O1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsU2V0KCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsU2V0O1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1NldFwiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyKFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9ub2RlX21vZHVsZXMvcnN2cC9saWIvcnN2cC9hc2FwXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzIvbm9kZV9tb2R1bGVzL3JzdnAvbGliL3JzdnAvYXNhcFwiO1xuICB2YXIgbGVuID0gMDtcbiAgZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gICAgcXVldWVbbGVuXSA9IGNhbGxiYWNrO1xuICAgIHF1ZXVlW2xlbiArIDFdID0gYXJnO1xuICAgIGxlbiArPSAyO1xuICAgIGlmIChsZW4gPT09IDIpIHtcbiAgICAgIHNjaGVkdWxlRmx1c2goKTtcbiAgICB9XG4gIH1cbiAgdmFyICRfX2RlZmF1bHQgPSBhc2FwO1xuICB2YXIgYnJvd3Nlckdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB7fTtcbiAgdmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgdmFyIGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcbiAgZnVuY3Rpb24gdXNlTmV4dFRpY2soKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1c2VTZXRUaW1lb3V0KCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZmx1c2gsIDEpO1xuICAgIH07XG4gIH1cbiAgdmFyIHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcbiAgICAgIHZhciBhcmcgPSBxdWV1ZVtpICsgMV07XG4gICAgICBjYWxsYmFjayhhcmcpO1xuICAgICAgcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICBxdWV1ZVtpICsgMV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxlbiA9IDA7XG4gIH1cbiAgdmFyIHNjaGVkdWxlRmx1c2g7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZU5leHRUaWNrKCk7XG4gIH0gZWxzZSBpZiAoQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICB9IGVsc2UgaWYgKGlzV29ya2VyKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gIH0gZWxzZSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZVNldFRpbWVvdXQoKTtcbiAgfVxuICByZXR1cm4ge2dldCBkZWZhdWx0KCkge1xuICAgICAgcmV0dXJuICRfX2RlZmF1bHQ7XG4gICAgfX07XG59KTtcblN5c3RlbS5yZWdpc3RlcihcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1Byb21pc2VcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvUHJvbWlzZVwiO1xuICB2YXIgYXN5bmMgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9ub2RlX21vZHVsZXMvcnN2cC9saWIvcnN2cC9hc2FwXCIpLmRlZmF1bHQ7XG4gIHZhciByZWdpc3RlclBvbHlmaWxsID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzXCIpLnJlZ2lzdGVyUG9seWZpbGw7XG4gIHZhciBwcm9taXNlUmF3ID0ge307XG4gIGZ1bmN0aW9uIGlzUHJvbWlzZSh4KSB7XG4gICAgcmV0dXJuIHggJiYgdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHguc3RhdHVzXyAhPT0gdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIGlkUmVzb2x2ZUhhbmRsZXIoeCkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIGZ1bmN0aW9uIGlkUmVqZWN0SGFuZGxlcih4KSB7XG4gICAgdGhyb3cgeDtcbiAgfVxuICBmdW5jdGlvbiBjaGFpbihwcm9taXNlKSB7XG4gICAgdmFyIG9uUmVzb2x2ZSA9IGFyZ3VtZW50c1sxXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMV0gOiBpZFJlc29sdmVIYW5kbGVyO1xuICAgIHZhciBvblJlamVjdCA9IGFyZ3VtZW50c1syXSAhPT0gKHZvaWQgMCkgPyBhcmd1bWVudHNbMl0gOiBpZFJlamVjdEhhbmRsZXI7XG4gICAgdmFyIGRlZmVycmVkID0gZ2V0RGVmZXJyZWQocHJvbWlzZS5jb25zdHJ1Y3Rvcik7XG4gICAgc3dpdGNoIChwcm9taXNlLnN0YXR1c18pIHtcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICB0aHJvdyBUeXBlRXJyb3I7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHByb21pc2Uub25SZXNvbHZlXy5wdXNoKG9uUmVzb2x2ZSwgZGVmZXJyZWQpO1xuICAgICAgICBwcm9taXNlLm9uUmVqZWN0Xy5wdXNoKG9uUmVqZWN0LCBkZWZlcnJlZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSArMTpcbiAgICAgICAgcHJvbWlzZUVucXVldWUocHJvbWlzZS52YWx1ZV8sIFtvblJlc29sdmUsIGRlZmVycmVkXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgcHJvbWlzZUVucXVldWUocHJvbWlzZS52YWx1ZV8sIFtvblJlamVjdCwgZGVmZXJyZWRdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9XG4gIGZ1bmN0aW9uIGdldERlZmVycmVkKEMpIHtcbiAgICBpZiAodGhpcyA9PT0gJFByb21pc2UpIHtcbiAgICAgIHZhciBwcm9taXNlID0gcHJvbWlzZUluaXQobmV3ICRQcm9taXNlKHByb21pc2VSYXcpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgIHJlc29sdmU6IChmdW5jdGlvbih4KSB7XG4gICAgICAgICAgcHJvbWlzZVJlc29sdmUocHJvbWlzZSwgeCk7XG4gICAgICAgIH0pLFxuICAgICAgICByZWplY3Q6IChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgcHJvbWlzZVJlamVjdChwcm9taXNlLCByKTtcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIHJlc3VsdC5wcm9taXNlID0gbmV3IEMoKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXN1bHQucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIHJlc3VsdC5yZWplY3QgPSByZWplY3Q7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlU2V0KHByb21pc2UsIHN0YXR1cywgdmFsdWUsIG9uUmVzb2x2ZSwgb25SZWplY3QpIHtcbiAgICBwcm9taXNlLnN0YXR1c18gPSBzdGF0dXM7XG4gICAgcHJvbWlzZS52YWx1ZV8gPSB2YWx1ZTtcbiAgICBwcm9taXNlLm9uUmVzb2x2ZV8gPSBvblJlc29sdmU7XG4gICAgcHJvbWlzZS5vblJlamVjdF8gPSBvblJlamVjdDtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlSW5pdChwcm9taXNlKSB7XG4gICAgcmV0dXJuIHByb21pc2VTZXQocHJvbWlzZSwgMCwgdW5kZWZpbmVkLCBbXSwgW10pO1xuICB9XG4gIHZhciBQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgIGlmIChyZXNvbHZlciA9PT0gcHJvbWlzZVJhdylcbiAgICAgIHJldHVybjtcbiAgICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcjtcbiAgICB2YXIgcHJvbWlzZSA9IHByb21pc2VJbml0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICByZXNvbHZlcigoZnVuY3Rpb24oeCkge1xuICAgICAgICBwcm9taXNlUmVzb2x2ZShwcm9taXNlLCB4KTtcbiAgICAgIH0pLCAoZnVuY3Rpb24ocikge1xuICAgICAgICBwcm9taXNlUmVqZWN0KHByb21pc2UsIHIpO1xuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHByb21pc2VSZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICB9O1xuICAoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKShQcm9taXNlLCB7XG4gICAgY2F0Y2g6IGZ1bmN0aW9uKG9uUmVqZWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3QpO1xuICAgIH0sXG4gICAgdGhlbjogZnVuY3Rpb24ob25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgICAgaWYgKHR5cGVvZiBvblJlc29sdmUgIT09ICdmdW5jdGlvbicpXG4gICAgICAgIG9uUmVzb2x2ZSA9IGlkUmVzb2x2ZUhhbmRsZXI7XG4gICAgICBpZiAodHlwZW9mIG9uUmVqZWN0ICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICBvblJlamVjdCA9IGlkUmVqZWN0SGFuZGxlcjtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICByZXR1cm4gY2hhaW4odGhpcywgZnVuY3Rpb24oeCkge1xuICAgICAgICB4ID0gcHJvbWlzZUNvZXJjZShjb25zdHJ1Y3RvciwgeCk7XG4gICAgICAgIHJldHVybiB4ID09PSB0aGF0ID8gb25SZWplY3QobmV3IFR5cGVFcnJvcikgOiBpc1Byb21pc2UoeCkgPyB4LnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCkgOiBvblJlc29sdmUoeCk7XG4gICAgICB9LCBvblJlamVjdCk7XG4gICAgfVxuICB9LCB7XG4gICAgcmVzb2x2ZTogZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKHRoaXMgPT09ICRQcm9taXNlKSB7XG4gICAgICAgIGlmIChpc1Byb21pc2UoeCkpIHtcbiAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZVNldChuZXcgJFByb21pc2UocHJvbWlzZVJhdyksICsxLCB4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyhmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZXNvbHZlKHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlamVjdDogZnVuY3Rpb24ocikge1xuICAgICAgaWYgKHRoaXMgPT09ICRQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlU2V0KG5ldyAkUHJvbWlzZShwcm9taXNlUmF3KSwgLTEsIHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZWplY3Qocik7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFsbDogZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSBnZXREZWZlcnJlZCh0aGlzKTtcbiAgICAgIHZhciByZXNvbHV0aW9ucyA9IFtdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGNvdW50ID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNvbHV0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZXNbaV0pLnRoZW4oZnVuY3Rpb24oaSwgeCkge1xuICAgICAgICAgICAgICByZXNvbHV0aW9uc1tpXSA9IHg7XG4gICAgICAgICAgICAgIGlmICgtLWNvdW50ID09PSAwKVxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzb2x1dGlvbnMpO1xuICAgICAgICAgICAgfS5iaW5kKHVuZGVmaW5lZCwgaSksIChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgfSxcbiAgICByYWNlOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9IGdldERlZmVycmVkKHRoaXMpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnJlc29sdmUodmFsdWVzW2ldKS50aGVuKChmdW5jdGlvbih4KSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHgpO1xuICAgICAgICAgIH0pLCAoZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHIpO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9XG4gIH0pO1xuICB2YXIgJFByb21pc2UgPSBQcm9taXNlO1xuICB2YXIgJFByb21pc2VSZWplY3QgPSAkUHJvbWlzZS5yZWplY3Q7XG4gIGZ1bmN0aW9uIHByb21pc2VSZXNvbHZlKHByb21pc2UsIHgpIHtcbiAgICBwcm9taXNlRG9uZShwcm9taXNlLCArMSwgeCwgcHJvbWlzZS5vblJlc29sdmVfKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlUmVqZWN0KHByb21pc2UsIHIpIHtcbiAgICBwcm9taXNlRG9uZShwcm9taXNlLCAtMSwgciwgcHJvbWlzZS5vblJlamVjdF8pO1xuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VEb25lKHByb21pc2UsIHN0YXR1cywgdmFsdWUsIHJlYWN0aW9ucykge1xuICAgIGlmIChwcm9taXNlLnN0YXR1c18gIT09IDApXG4gICAgICByZXR1cm47XG4gICAgcHJvbWlzZUVucXVldWUodmFsdWUsIHJlYWN0aW9ucyk7XG4gICAgcHJvbWlzZVNldChwcm9taXNlLCBzdGF0dXMsIHZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlRW5xdWV1ZSh2YWx1ZSwgdGFza3MpIHtcbiAgICBhc3luYygoZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHByb21pc2VIYW5kbGUodmFsdWUsIHRhc2tzW2ldLCB0YXNrc1tpICsgMV0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9taXNlSGFuZGxlKHZhbHVlLCBoYW5kbGVyLCBkZWZlcnJlZCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICBpZiAocmVzdWx0ID09PSBkZWZlcnJlZC5wcm9taXNlKVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yO1xuICAgICAgZWxzZSBpZiAoaXNQcm9taXNlKHJlc3VsdCkpXG4gICAgICAgIGNoYWluKHJlc3VsdCwgZGVmZXJyZWQucmVzb2x2ZSwgZGVmZXJyZWQucmVqZWN0KTtcbiAgICAgIGVsc2VcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG4gIHZhciB0aGVuYWJsZVN5bWJvbCA9ICdAQHRoZW5hYmxlJztcbiAgZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICYmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHggPT09ICdmdW5jdGlvbicpO1xuICB9XG4gIGZ1bmN0aW9uIHByb21pc2VDb2VyY2UoY29uc3RydWN0b3IsIHgpIHtcbiAgICBpZiAoIWlzUHJvbWlzZSh4KSAmJiBpc09iamVjdCh4KSkge1xuICAgICAgdmFyIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICB0aGVuID0geC50aGVuO1xuICAgICAgfSBjYXRjaCAocikge1xuICAgICAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlUmVqZWN0LmNhbGwoY29uc3RydWN0b3IsIHIpO1xuICAgICAgICB4W3RoZW5hYmxlU3ltYm9sXSA9IHByb21pc2U7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBwID0geFt0aGVuYWJsZVN5bWJvbF07XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGRlZmVycmVkID0gZ2V0RGVmZXJyZWQoY29uc3RydWN0b3IpO1xuICAgICAgICAgIHhbdGhlbmFibGVTeW1ib2xdID0gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHgsIGRlZmVycmVkLnJlc29sdmUsIGRlZmVycmVkLnJlamVjdCk7XG4gICAgICAgICAgfSBjYXRjaCAocikge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbFByb21pc2UoZ2xvYmFsKSB7XG4gICAgaWYgKCFnbG9iYWwuUHJvbWlzZSlcbiAgICAgIGdsb2JhbC5Qcm9taXNlID0gUHJvbWlzZTtcbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsUHJvbWlzZSk7XG4gIHJldHVybiB7XG4gICAgZ2V0IFByb21pc2UoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZTtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbFByb21pc2UoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxQcm9taXNlO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1Byb21pc2VcIiArICcnKTtcblN5c3RlbS5yZWdpc3RlcihcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZ0l0ZXJhdG9yXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciAkX18yO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy9TdHJpbmdJdGVyYXRvclwiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlsc1wiKSxcbiAgICAgIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0ID0gJF9fMC5jcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCxcbiAgICAgIGlzT2JqZWN0ID0gJF9fMC5pc09iamVjdDtcbiAgdmFyIHRvUHJvcGVydHkgPSAkdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eTtcbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGl0ZXJhdGVkU3RyaW5nID0gU3ltYm9sKCdpdGVyYXRlZFN0cmluZycpO1xuICB2YXIgc3RyaW5nSXRlcmF0b3JOZXh0SW5kZXggPSBTeW1ib2woJ3N0cmluZ0l0ZXJhdG9yTmV4dEluZGV4Jyk7XG4gIHZhciBTdHJpbmdJdGVyYXRvciA9IGZ1bmN0aW9uIFN0cmluZ0l0ZXJhdG9yKCkge307XG4gICgkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKFN0cmluZ0l0ZXJhdG9yLCAoJF9fMiA9IHt9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoJF9fMiwgXCJuZXh0XCIsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbyA9IHRoaXM7XG4gICAgICBpZiAoIWlzT2JqZWN0KG8pIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGl0ZXJhdGVkU3RyaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlzIG11c3QgYmUgYSBTdHJpbmdJdGVyYXRvciBvYmplY3QnKTtcbiAgICAgIH1cbiAgICAgIHZhciBzID0gb1t0b1Byb3BlcnR5KGl0ZXJhdGVkU3RyaW5nKV07XG4gICAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgICAgdmFyIHBvc2l0aW9uID0gb1t0b1Byb3BlcnR5KHN0cmluZ0l0ZXJhdG9yTmV4dEluZGV4KV07XG4gICAgICB2YXIgbGVuID0gcy5sZW5ndGg7XG4gICAgICBpZiAocG9zaXRpb24gPj0gbGVuKSB7XG4gICAgICAgIG9bdG9Qcm9wZXJ0eShpdGVyYXRlZFN0cmluZyldID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gY3JlYXRlSXRlcmF0b3JSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaXJzdCA9IHMuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgICB2YXIgcmVzdWx0U3RyaW5nO1xuICAgICAgaWYgKGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gbGVuKSB7XG4gICAgICAgIHJlc3VsdFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZmlyc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNlY29uZCA9IHMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpO1xuICAgICAgICBpZiAoc2Vjb25kIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRikge1xuICAgICAgICAgIHJlc3VsdFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZmlyc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZmlyc3QpICsgU3RyaW5nLmZyb21DaGFyQ29kZShzZWNvbmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvW3RvUHJvcGVydHkoc3RyaW5nSXRlcmF0b3JOZXh0SW5kZXgpXSA9IHBvc2l0aW9uICsgcmVzdWx0U3RyaW5nLmxlbmd0aDtcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdChyZXN1bHRTdHJpbmcsIGZhbHNlKTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoJF9fMiwgU3ltYm9sLml0ZXJhdG9yLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KSwgJF9fMiksIHt9KTtcbiAgZnVuY3Rpb24gY3JlYXRlU3RyaW5nSXRlcmF0b3Ioc3RyaW5nKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoc3RyaW5nKTtcbiAgICB2YXIgaXRlcmF0b3IgPSBPYmplY3QuY3JlYXRlKFN0cmluZ0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgaXRlcmF0b3JbdG9Qcm9wZXJ0eShpdGVyYXRlZFN0cmluZyldID0gcztcbiAgICBpdGVyYXRvclt0b1Byb3BlcnR5KHN0cmluZ0l0ZXJhdG9yTmV4dEluZGV4KV0gPSAwO1xuICAgIHJldHVybiBpdGVyYXRvcjtcbiAgfVxuICByZXR1cm4ge2dldCBjcmVhdGVTdHJpbmdJdGVyYXRvcigpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdJdGVyYXRvcjtcbiAgICB9fTtcbn0pO1xuU3lzdGVtLnJlZ2lzdGVyKFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU3RyaW5nXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZ1wiO1xuICB2YXIgY3JlYXRlU3RyaW5nSXRlcmF0b3IgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvU3RyaW5nSXRlcmF0b3JcIikuY3JlYXRlU3RyaW5nSXRlcmF0b3I7XG4gIHZhciAkX18xID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzXCIpLFxuICAgICAgbWF5YmVBZGRGdW5jdGlvbnMgPSAkX18xLm1heWJlQWRkRnVuY3Rpb25zLFxuICAgICAgbWF5YmVBZGRJdGVyYXRvciA9ICRfXzEubWF5YmVBZGRJdGVyYXRvcixcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18xLnJlZ2lzdGVyUG9seWZpbGw7XG4gIHZhciAkdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgJGluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmluZGV4T2Y7XG4gIHZhciAkbGFzdEluZGV4T2YgPSBTdHJpbmcucHJvdG90eXBlLmxhc3RJbmRleE9mO1xuICBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaCkge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCB8fCAkdG9TdHJpbmcuY2FsbChzZWFyY2gpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHNlYXJjaFN0cmluZyA9IFN0cmluZyhzZWFyY2gpO1xuICAgIHZhciBzZWFyY2hMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBwb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbiA/IE51bWJlcihwb3NpdGlvbikgOiAwO1xuICAgIGlmIChpc05hTihwb3MpKSB7XG4gICAgICBwb3MgPSAwO1xuICAgIH1cbiAgICB2YXIgc3RhcnQgPSBNYXRoLm1pbihNYXRoLm1heChwb3MsIDApLCBzdHJpbmdMZW5ndGgpO1xuICAgIHJldHVybiAkaW5kZXhPZi5jYWxsKHN0cmluZywgc2VhcmNoU3RyaW5nLCBwb3MpID09IHN0YXJ0O1xuICB9XG4gIGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaCkge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCB8fCAkdG9TdHJpbmcuY2FsbChzZWFyY2gpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHNlYXJjaFN0cmluZyA9IFN0cmluZyhzZWFyY2gpO1xuICAgIHZhciBzZWFyY2hMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBwb3MgPSBzdHJpbmdMZW5ndGg7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAocG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb3MgPSBwb3NpdGlvbiA/IE51bWJlcihwb3NpdGlvbikgOiAwO1xuICAgICAgICBpZiAoaXNOYU4ocG9zKSkge1xuICAgICAgICAgIHBvcyA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGVuZCA9IE1hdGgubWluKE1hdGgubWF4KHBvcywgMCksIHN0cmluZ0xlbmd0aCk7XG4gICAgdmFyIHN0YXJ0ID0gZW5kIC0gc2VhcmNoTGVuZ3RoO1xuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICRsYXN0SW5kZXhPZi5jYWxsKHN0cmluZywgc2VhcmNoU3RyaW5nLCBzdGFydCkgPT0gc3RhcnQ7XG4gIH1cbiAgZnVuY3Rpb24gY29udGFpbnMoc2VhcmNoKSB7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgdmFyIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gICAgdmFyIHNlYXJjaFN0cmluZyA9IFN0cmluZyhzZWFyY2gpO1xuICAgIHZhciBzZWFyY2hMZW5ndGggPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgIHZhciBwb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbiA/IE51bWJlcihwb3NpdGlvbikgOiAwO1xuICAgIGlmIChpc05hTihwb3MpKSB7XG4gICAgICBwb3MgPSAwO1xuICAgIH1cbiAgICB2YXIgc3RhcnQgPSBNYXRoLm1pbihNYXRoLm1heChwb3MsIDApLCBzdHJpbmdMZW5ndGgpO1xuICAgIHJldHVybiAkaW5kZXhPZi5jYWxsKHN0cmluZywgc2VhcmNoU3RyaW5nLCBwb3MpICE9IC0xO1xuICB9XG4gIGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgIHZhciBuID0gY291bnQgPyBOdW1iZXIoY291bnQpIDogMDtcbiAgICBpZiAoaXNOYU4obikpIHtcbiAgICAgIG4gPSAwO1xuICAgIH1cbiAgICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkge1xuICAgICAgdGhyb3cgUmFuZ2VFcnJvcigpO1xuICAgIH1cbiAgICBpZiAobiA9PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB3aGlsZSAobi0tKSB7XG4gICAgICByZXN1bHQgKz0gc3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgdmFyIHNpemUgPSBzdHJpbmcubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IHBvc2l0aW9uID8gTnVtYmVyKHBvc2l0aW9uKSA6IDA7XG4gICAgaWYgKGlzTmFOKGluZGV4KSkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHNpemUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBmaXJzdCA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICB2YXIgc2Vjb25kO1xuICAgIGlmIChmaXJzdCA+PSAweEQ4MDAgJiYgZmlyc3QgPD0gMHhEQkZGICYmIHNpemUgPiBpbmRleCArIDEpIHtcbiAgICAgIHNlY29uZCA9IHN0cmluZy5jaGFyQ29kZUF0KGluZGV4ICsgMSk7XG4gICAgICBpZiAoc2Vjb25kID49IDB4REMwMCAmJiBzZWNvbmQgPD0gMHhERkZGKSB7XG4gICAgICAgIHJldHVybiAoZmlyc3QgLSAweEQ4MDApICogMHg0MDAgKyBzZWNvbmQgLSAweERDMDAgKyAweDEwMDAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlyc3Q7XG4gIH1cbiAgZnVuY3Rpb24gcmF3KGNhbGxzaXRlKSB7XG4gICAgdmFyIHJhdyA9IGNhbGxzaXRlLnJhdztcbiAgICB2YXIgbGVuID0gcmF3Lmxlbmd0aCA+Pj4gMDtcbiAgICBpZiAobGVuID09PSAwKVxuICAgICAgcmV0dXJuICcnO1xuICAgIHZhciBzID0gJyc7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBzICs9IHJhd1tpXTtcbiAgICAgIGlmIChpICsgMSA9PT0gbGVuKVxuICAgICAgICByZXR1cm4gcztcbiAgICAgIHMgKz0gYXJndW1lbnRzWysraV07XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoKSB7XG4gICAgdmFyIGNvZGVVbml0cyA9IFtdO1xuICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgdmFyIGhpZ2hTdXJyb2dhdGU7XG4gICAgdmFyIGxvd1N1cnJvZ2F0ZTtcbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKTtcbiAgICAgIGlmICghaXNGaW5pdGUoY29kZVBvaW50KSB8fCBjb2RlUG9pbnQgPCAwIHx8IGNvZGVQb2ludCA+IDB4MTBGRkZGIHx8IGZsb29yKGNvZGVQb2ludCkgIT0gY29kZVBvaW50KSB7XG4gICAgICAgIHRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludDogJyArIGNvZGVQb2ludCk7XG4gICAgICB9XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4RkZGRikge1xuICAgICAgICBjb2RlVW5pdHMucHVzaChjb2RlUG9pbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDA7XG4gICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4RDgwMDtcbiAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4REMwMDtcbiAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgY29kZVVuaXRzKTtcbiAgfVxuICBmdW5jdGlvbiBzdHJpbmdQcm90b3R5cGVJdGVyYXRvcigpIHtcbiAgICB2YXIgbyA9ICR0cmFjZXVyUnVudGltZS5jaGVja09iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICB2YXIgcyA9IFN0cmluZyhvKTtcbiAgICByZXR1cm4gY3JlYXRlU3RyaW5nSXRlcmF0b3Iocyk7XG4gIH1cbiAgZnVuY3Rpb24gcG9seWZpbGxTdHJpbmcoZ2xvYmFsKSB7XG4gICAgdmFyIFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG4gICAgbWF5YmVBZGRGdW5jdGlvbnMoU3RyaW5nLnByb3RvdHlwZSwgWydjb2RlUG9pbnRBdCcsIGNvZGVQb2ludEF0LCAnY29udGFpbnMnLCBjb250YWlucywgJ2VuZHNXaXRoJywgZW5kc1dpdGgsICdzdGFydHNXaXRoJywgc3RhcnRzV2l0aCwgJ3JlcGVhdCcsIHJlcGVhdF0pO1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKFN0cmluZywgWydmcm9tQ29kZVBvaW50JywgZnJvbUNvZGVQb2ludCwgJ3JhdycsIHJhd10pO1xuICAgIG1heWJlQWRkSXRlcmF0b3IoU3RyaW5nLnByb3RvdHlwZSwgc3RyaW5nUHJvdG90eXBlSXRlcmF0b3IsIFN5bWJvbCk7XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbFN0cmluZyk7XG4gIHJldHVybiB7XG4gICAgZ2V0IHN0YXJ0c1dpdGgoKSB7XG4gICAgICByZXR1cm4gc3RhcnRzV2l0aDtcbiAgICB9LFxuICAgIGdldCBlbmRzV2l0aCgpIHtcbiAgICAgIHJldHVybiBlbmRzV2l0aDtcbiAgICB9LFxuICAgIGdldCBjb250YWlucygpIHtcbiAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9LFxuICAgIGdldCByZXBlYXQoKSB7XG4gICAgICByZXR1cm4gcmVwZWF0O1xuICAgIH0sXG4gICAgZ2V0IGNvZGVQb2ludEF0KCkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludEF0O1xuICAgIH0sXG4gICAgZ2V0IHJhdygpIHtcbiAgICAgIHJldHVybiByYXc7XG4gICAgfSxcbiAgICBnZXQgZnJvbUNvZGVQb2ludCgpIHtcbiAgICAgIHJldHVybiBmcm9tQ29kZVBvaW50O1xuICAgIH0sXG4gICAgZ2V0IHN0cmluZ1Byb3RvdHlwZUl0ZXJhdG9yKCkge1xuICAgICAgcmV0dXJuIHN0cmluZ1Byb3RvdHlwZUl0ZXJhdG9yO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsU3RyaW5nO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL1N0cmluZ1wiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyKFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlJdGVyYXRvclwiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgJF9fMjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlJdGVyYXRvclwiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlsc1wiKSxcbiAgICAgIHRvT2JqZWN0ID0gJF9fMC50b09iamVjdCxcbiAgICAgIHRvVWludDMyID0gJF9fMC50b1VpbnQzMixcbiAgICAgIGNyZWF0ZUl0ZXJhdG9yUmVzdWx0T2JqZWN0ID0gJF9fMC5jcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdDtcbiAgdmFyIEFSUkFZX0lURVJBVE9SX0tJTkRfS0VZUyA9IDE7XG4gIHZhciBBUlJBWV9JVEVSQVRPUl9LSU5EX1ZBTFVFUyA9IDI7XG4gIHZhciBBUlJBWV9JVEVSQVRPUl9LSU5EX0VOVFJJRVMgPSAzO1xuICB2YXIgQXJyYXlJdGVyYXRvciA9IGZ1bmN0aW9uIEFycmF5SXRlcmF0b3IoKSB7fTtcbiAgKCR0cmFjZXVyUnVudGltZS5jcmVhdGVDbGFzcykoQXJyYXlJdGVyYXRvciwgKCRfXzIgPSB7fSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KCRfXzIsIFwibmV4dFwiLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdG9PYmplY3QodGhpcyk7XG4gICAgICB2YXIgYXJyYXkgPSBpdGVyYXRvci5pdGVyYXRvck9iamVjdF87XG4gICAgICBpZiAoIWFycmF5KSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdCBpcyBub3QgYW4gQXJyYXlJdGVyYXRvcicpO1xuICAgICAgfVxuICAgICAgdmFyIGluZGV4ID0gaXRlcmF0b3IuYXJyYXlJdGVyYXRvck5leHRJbmRleF87XG4gICAgICB2YXIgaXRlbUtpbmQgPSBpdGVyYXRvci5hcnJheUl0ZXJhdGlvbktpbmRfO1xuICAgICAgdmFyIGxlbmd0aCA9IHRvVWludDMyKGFycmF5Lmxlbmd0aCk7XG4gICAgICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgIGl0ZXJhdG9yLmFycmF5SXRlcmF0b3JOZXh0SW5kZXhfID0gSW5maW5pdHk7XG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaXRlcmF0b3IuYXJyYXlJdGVyYXRvck5leHRJbmRleF8gPSBpbmRleCArIDE7XG4gICAgICBpZiAoaXRlbUtpbmQgPT0gQVJSQVlfSVRFUkFUT1JfS0lORF9WQUxVRVMpXG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdChhcnJheVtpbmRleF0sIGZhbHNlKTtcbiAgICAgIGlmIChpdGVtS2luZCA9PSBBUlJBWV9JVEVSQVRPUl9LSU5EX0VOVFJJRVMpXG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdChbaW5kZXgsIGFycmF5W2luZGV4XV0sIGZhbHNlKTtcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyYXRvclJlc3VsdE9iamVjdChpbmRleCwgZmFsc2UpO1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkX18yLCBTeW1ib2wuaXRlcmF0b3IsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCAkX18yKSwge30pO1xuICBmdW5jdGlvbiBjcmVhdGVBcnJheUl0ZXJhdG9yKGFycmF5LCBraW5kKSB7XG4gICAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KGFycmF5KTtcbiAgICB2YXIgaXRlcmF0b3IgPSBuZXcgQXJyYXlJdGVyYXRvcjtcbiAgICBpdGVyYXRvci5pdGVyYXRvck9iamVjdF8gPSBvYmplY3Q7XG4gICAgaXRlcmF0b3IuYXJyYXlJdGVyYXRvck5leHRJbmRleF8gPSAwO1xuICAgIGl0ZXJhdG9yLmFycmF5SXRlcmF0aW9uS2luZF8gPSBraW5kO1xuICAgIHJldHVybiBpdGVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgIHJldHVybiBjcmVhdGVBcnJheUl0ZXJhdG9yKHRoaXMsIEFSUkFZX0lURVJBVE9SX0tJTkRfRU5UUklFUyk7XG4gIH1cbiAgZnVuY3Rpb24ga2V5cygpIHtcbiAgICByZXR1cm4gY3JlYXRlQXJyYXlJdGVyYXRvcih0aGlzLCBBUlJBWV9JVEVSQVRPUl9LSU5EX0tFWVMpO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICByZXR1cm4gY3JlYXRlQXJyYXlJdGVyYXRvcih0aGlzLCBBUlJBWV9JVEVSQVRPUl9LSU5EX1ZBTFVFUyk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXQgZW50cmllcygpIHtcbiAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgIH0sXG4gICAgZ2V0IGtleXMoKSB7XG4gICAgICByZXR1cm4ga2V5cztcbiAgICB9LFxuICAgIGdldCB2YWx1ZXMoKSB7XG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLnJlZ2lzdGVyKFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlJdGVyYXRvclwiKSxcbiAgICAgIGVudHJpZXMgPSAkX18wLmVudHJpZXMsXG4gICAgICBrZXlzID0gJF9fMC5rZXlzLFxuICAgICAgdmFsdWVzID0gJF9fMC52YWx1ZXM7XG4gIHZhciAkX18xID0gU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL3V0aWxzXCIpLFxuICAgICAgY2hlY2tJdGVyYWJsZSA9ICRfXzEuY2hlY2tJdGVyYWJsZSxcbiAgICAgIGlzQ2FsbGFibGUgPSAkX18xLmlzQ2FsbGFibGUsXG4gICAgICBpc0NvbnN0cnVjdG9yID0gJF9fMS5pc0NvbnN0cnVjdG9yLFxuICAgICAgbWF5YmVBZGRGdW5jdGlvbnMgPSAkX18xLm1heWJlQWRkRnVuY3Rpb25zLFxuICAgICAgbWF5YmVBZGRJdGVyYXRvciA9ICRfXzEubWF5YmVBZGRJdGVyYXRvcixcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18xLnJlZ2lzdGVyUG9seWZpbGwsXG4gICAgICB0b0ludGVnZXIgPSAkX18xLnRvSW50ZWdlcixcbiAgICAgIHRvTGVuZ3RoID0gJF9fMS50b0xlbmd0aCxcbiAgICAgIHRvT2JqZWN0ID0gJF9fMS50b09iamVjdDtcbiAgZnVuY3Rpb24gZnJvbShhcnJMaWtlKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzJdO1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgaXRlbXMgPSB0b09iamVjdChhcnJMaWtlKTtcbiAgICB2YXIgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGsgPSAwO1xuICAgIHZhciBhcnIsXG4gICAgICAgIGxlbjtcbiAgICBpZiAobWFwcGluZyAmJiAhaXNDYWxsYWJsZShtYXBGbikpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoY2hlY2tJdGVyYWJsZShpdGVtcykpIHtcbiAgICAgIGFyciA9IGlzQ29uc3RydWN0b3IoQykgPyBuZXcgQygpIDogW107XG4gICAgICBmb3IgKHZhciAkX18yID0gaXRlbXNbU3ltYm9sLml0ZXJhdG9yXSgpLFxuICAgICAgICAgICRfXzM7ICEoJF9fMyA9ICRfXzIubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgdmFyIGl0ZW0gPSAkX18zLnZhbHVlO1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgICAgICAgIGFycltrXSA9IG1hcEZuLmNhbGwodGhpc0FyZywgaXRlbSwgayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycltrXSA9IGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGsrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXJyLmxlbmd0aCA9IGs7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBsZW4gPSB0b0xlbmd0aChpdGVtcy5sZW5ndGgpO1xuICAgIGFyciA9IGlzQ29uc3RydWN0b3IoQykgPyBuZXcgQyhsZW4pIDogbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICg7IGsgPCBsZW47IGsrKykge1xuICAgICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgICAgYXJyW2tdID0gdHlwZW9mIHRoaXNBcmcgPT09ICd1bmRlZmluZWQnID8gbWFwRm4oaXRlbXNba10sIGspIDogbWFwRm4uY2FsbCh0aGlzQXJnLCBpdGVtc1trXSwgayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJba10gPSBpdGVtc1trXTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXJyLmxlbmd0aCA9IGxlbjtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGZ1bmN0aW9uIG9mKCkge1xuICAgIGZvciAodmFyIGl0ZW1zID0gW10sXG4gICAgICAgICRfXzQgPSAwOyAkX180IDwgYXJndW1lbnRzLmxlbmd0aDsgJF9fNCsrKVxuICAgICAgaXRlbXNbJF9fNF0gPSBhcmd1bWVudHNbJF9fNF07XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBsZW4gPSBpdGVtcy5sZW5ndGg7XG4gICAgdmFyIGFyciA9IGlzQ29uc3RydWN0b3IoQykgPyBuZXcgQyhsZW4pIDogbmV3IEFycmF5KGxlbik7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBsZW47IGsrKykge1xuICAgICAgYXJyW2tdID0gaXRlbXNba107XG4gICAgfVxuICAgIGFyci5sZW5ndGggPSBsZW47XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBmdW5jdGlvbiBmaWxsKHZhbHVlKSB7XG4gICAgdmFyIHN0YXJ0ID0gYXJndW1lbnRzWzFdICE9PSAodm9pZCAwKSA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gICAgdmFyIGVuZCA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgb2JqZWN0ID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKG9iamVjdC5sZW5ndGgpO1xuICAgIHZhciBmaWxsU3RhcnQgPSB0b0ludGVnZXIoc3RhcnQpO1xuICAgIHZhciBmaWxsRW5kID0gZW5kICE9PSB1bmRlZmluZWQgPyB0b0ludGVnZXIoZW5kKSA6IGxlbjtcbiAgICBmaWxsU3RhcnQgPSBmaWxsU3RhcnQgPCAwID8gTWF0aC5tYXgobGVuICsgZmlsbFN0YXJ0LCAwKSA6IE1hdGgubWluKGZpbGxTdGFydCwgbGVuKTtcbiAgICBmaWxsRW5kID0gZmlsbEVuZCA8IDAgPyBNYXRoLm1heChsZW4gKyBmaWxsRW5kLCAwKSA6IE1hdGgubWluKGZpbGxFbmQsIGxlbik7XG4gICAgd2hpbGUgKGZpbGxTdGFydCA8IGZpbGxFbmQpIHtcbiAgICAgIG9iamVjdFtmaWxsU3RhcnRdID0gdmFsdWU7XG4gICAgICBmaWxsU3RhcnQrKztcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBmaW5kSGVscGVyKHRoaXMsIHByZWRpY2F0ZSwgdGhpc0FyZyk7XG4gIH1cbiAgZnVuY3Rpb24gZmluZEluZGV4KHByZWRpY2F0ZSkge1xuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBmaW5kSGVscGVyKHRoaXMsIHByZWRpY2F0ZSwgdGhpc0FyZywgdHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gZmluZEhlbHBlcihzZWxmLCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgcmV0dXJuSW5kZXggPSBhcmd1bWVudHNbM10gIT09ICh2b2lkIDApID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG4gICAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KHNlbGYpO1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aChvYmplY3QubGVuZ3RoKTtcbiAgICBpZiAoIWlzQ2FsbGFibGUocHJlZGljYXRlKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9iamVjdFtpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaSwgb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gcmV0dXJuSW5kZXggPyBpIDogdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5JbmRleCA/IC0xIDogdW5kZWZpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsQXJyYXkoZ2xvYmFsKSB7XG4gICAgdmFyICRfXzUgPSBnbG9iYWwsXG4gICAgICAgIEFycmF5ID0gJF9fNS5BcnJheSxcbiAgICAgICAgT2JqZWN0ID0gJF9fNS5PYmplY3QsXG4gICAgICAgIFN5bWJvbCA9ICRfXzUuU3ltYm9sO1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKEFycmF5LnByb3RvdHlwZSwgWydlbnRyaWVzJywgZW50cmllcywgJ2tleXMnLCBrZXlzLCAndmFsdWVzJywgdmFsdWVzLCAnZmlsbCcsIGZpbGwsICdmaW5kJywgZmluZCwgJ2ZpbmRJbmRleCcsIGZpbmRJbmRleF0pO1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKEFycmF5LCBbJ2Zyb20nLCBmcm9tLCAnb2YnLCBvZl0pO1xuICAgIG1heWJlQWRkSXRlcmF0b3IoQXJyYXkucHJvdG90eXBlLCB2YWx1ZXMsIFN5bWJvbCk7XG4gICAgbWF5YmVBZGRJdGVyYXRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YoW10udmFsdWVzKCkpLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIFN5bWJvbCk7XG4gIH1cbiAgcmVnaXN0ZXJQb2x5ZmlsbChwb2x5ZmlsbEFycmF5KTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgZnJvbSgpIHtcbiAgICAgIHJldHVybiBmcm9tO1xuICAgIH0sXG4gICAgZ2V0IG9mKCkge1xuICAgICAgcmV0dXJuIG9mO1xuICAgIH0sXG4gICAgZ2V0IGZpbGwoKSB7XG4gICAgICByZXR1cm4gZmlsbDtcbiAgICB9LFxuICAgIGdldCBmaW5kKCkge1xuICAgICAgcmV0dXJuIGZpbmQ7XG4gICAgfSxcbiAgICBnZXQgZmluZEluZGV4KCkge1xuICAgICAgcmV0dXJuIGZpbmRJbmRleDtcbiAgICB9LFxuICAgIGdldCBwb2x5ZmlsbEFycmF5KCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsQXJyYXk7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvQXJyYXlcIiArICcnKTtcblN5c3RlbS5yZWdpc3RlcihcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL09iamVjdFwiLCBbXSwgZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgX19tb2R1bGVOYW1lID0gXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy9PYmplY3RcIjtcbiAgdmFyICRfXzAgPSBTeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvdXRpbHNcIiksXG4gICAgICBtYXliZUFkZEZ1bmN0aW9ucyA9ICRfXzAubWF5YmVBZGRGdW5jdGlvbnMsXG4gICAgICByZWdpc3RlclBvbHlmaWxsID0gJF9fMC5yZWdpc3RlclBvbHlmaWxsO1xuICB2YXIgJF9fMSA9ICR0cmFjZXVyUnVudGltZSxcbiAgICAgIGRlZmluZVByb3BlcnR5ID0gJF9fMS5kZWZpbmVQcm9wZXJ0eSxcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9ICRfXzEuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAgICAgZ2V0T3duUHJvcGVydHlOYW1lcyA9ICRfXzEuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICAgIGlzUHJpdmF0ZU5hbWUgPSAkX18xLmlzUHJpdmF0ZU5hbWUsXG4gICAgICBrZXlzID0gJF9fMS5rZXlzO1xuICBmdW5jdGlvbiBpcyhsZWZ0LCByaWdodCkge1xuICAgIGlmIChsZWZ0ID09PSByaWdodClcbiAgICAgIHJldHVybiBsZWZ0ICE9PSAwIHx8IDEgLyBsZWZ0ID09PSAxIC8gcmlnaHQ7XG4gICAgcmV0dXJuIGxlZnQgIT09IGxlZnQgJiYgcmlnaHQgIT09IHJpZ2h0O1xuICB9XG4gIGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIHZhciBwcm9wcyA9IGtleXMoc291cmNlKTtcbiAgICAgIHZhciBwLFxuICAgICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcbiAgICAgIGZvciAocCA9IDA7IHAgPCBsZW5ndGg7IHArKykge1xuICAgICAgICB2YXIgbmFtZSA9IHByb3BzW3BdO1xuICAgICAgICBpZiAoaXNQcml2YXRlTmFtZShuYW1lKSlcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gc291cmNlW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGZ1bmN0aW9uIG1peGluKHRhcmdldCwgc291cmNlKSB7XG4gICAgdmFyIHByb3BzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpO1xuICAgIHZhciBwLFxuICAgICAgICBkZXNjcmlwdG9yLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG4gICAgZm9yIChwID0gMDsgcCA8IGxlbmd0aDsgcCsrKSB7XG4gICAgICB2YXIgbmFtZSA9IHByb3BzW3BdO1xuICAgICAgaWYgKGlzUHJpdmF0ZU5hbWUobmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHByb3BzW3BdKTtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcHNbcF0sIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGZ1bmN0aW9uIHBvbHlmaWxsT2JqZWN0KGdsb2JhbCkge1xuICAgIHZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xuICAgIG1heWJlQWRkRnVuY3Rpb25zKE9iamVjdCwgWydhc3NpZ24nLCBhc3NpZ24sICdpcycsIGlzLCAnbWl4aW4nLCBtaXhpbl0pO1xuICB9XG4gIHJlZ2lzdGVyUG9seWZpbGwocG9seWZpbGxPYmplY3QpO1xuICByZXR1cm4ge1xuICAgIGdldCBpcygpIHtcbiAgICAgIHJldHVybiBpcztcbiAgICB9LFxuICAgIGdldCBhc3NpZ24oKSB7XG4gICAgICByZXR1cm4gYXNzaWduO1xuICAgIH0sXG4gICAgZ2V0IG1peGluKCkge1xuICAgICAgcmV0dXJuIG1peGluO1xuICAgIH0sXG4gICAgZ2V0IHBvbHlmaWxsT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHBvbHlmaWxsT2JqZWN0O1xuICAgIH1cbiAgfTtcbn0pO1xuU3lzdGVtLmdldChcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL09iamVjdFwiICsgJycpO1xuU3lzdGVtLnJlZ2lzdGVyKFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTnVtYmVyXCIsIFtdLCBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBfX21vZHVsZU5hbWUgPSBcInRyYWNldXItcnVudGltZUAwLjAuNzIvc3JjL3J1bnRpbWUvcG9seWZpbGxzL051bWJlclwiO1xuICB2YXIgJF9fMCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlsc1wiKSxcbiAgICAgIGlzTnVtYmVyID0gJF9fMC5pc051bWJlcixcbiAgICAgIG1heWJlQWRkQ29uc3RzID0gJF9fMC5tYXliZUFkZENvbnN0cyxcbiAgICAgIG1heWJlQWRkRnVuY3Rpb25zID0gJF9fMC5tYXliZUFkZEZ1bmN0aW9ucyxcbiAgICAgIHJlZ2lzdGVyUG9seWZpbGwgPSAkX18wLnJlZ2lzdGVyUG9seWZpbGwsXG4gICAgICB0b0ludGVnZXIgPSAkX18wLnRvSW50ZWdlcjtcbiAgdmFyICRhYnMgPSBNYXRoLmFicztcbiAgdmFyICRpc0Zpbml0ZSA9IGlzRmluaXRlO1xuICB2YXIgJGlzTmFOID0gaXNOYU47XG4gIHZhciBNQVhfU0FGRV9JTlRFR0VSID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbiAgdmFyIE1JTl9TQUZFX0lOVEVHRVIgPSAtTWF0aC5wb3coMiwgNTMpICsgMTtcbiAgdmFyIEVQU0lMT04gPSBNYXRoLnBvdygyLCAtNTIpO1xuICBmdW5jdGlvbiBOdW1iZXJJc0Zpbml0ZShudW1iZXIpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIobnVtYmVyKSAmJiAkaXNGaW5pdGUobnVtYmVyKTtcbiAgfVxuICA7XG4gIGZ1bmN0aW9uIGlzSW50ZWdlcihudW1iZXIpIHtcbiAgICByZXR1cm4gTnVtYmVySXNGaW5pdGUobnVtYmVyKSAmJiB0b0ludGVnZXIobnVtYmVyKSA9PT0gbnVtYmVyO1xuICB9XG4gIGZ1bmN0aW9uIE51bWJlcklzTmFOKG51bWJlcikge1xuICAgIHJldHVybiBpc051bWJlcihudW1iZXIpICYmICRpc05hTihudW1iZXIpO1xuICB9XG4gIDtcbiAgZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpIHtcbiAgICBpZiAoTnVtYmVySXNGaW5pdGUobnVtYmVyKSkge1xuICAgICAgdmFyIGludGVncmFsID0gdG9JbnRlZ2VyKG51bWJlcik7XG4gICAgICBpZiAoaW50ZWdyYWwgPT09IG51bWJlcilcbiAgICAgICAgcmV0dXJuICRhYnMoaW50ZWdyYWwpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBwb2x5ZmlsbE51bWJlcihnbG9iYWwpIHtcbiAgICB2YXIgTnVtYmVyID0gZ2xvYmFsLk51bWJlcjtcbiAgICBtYXliZUFkZENvbnN0cyhOdW1iZXIsIFsnTUFYX1NBRkVfSU5URUdFUicsIE1BWF9TQUZFX0lOVEVHRVIsICdNSU5fU0FGRV9JTlRFR0VSJywgTUlOX1NBRkVfSU5URUdFUiwgJ0VQU0lMT04nLCBFUFNJTE9OXSk7XG4gICAgbWF5YmVBZGRGdW5jdGlvbnMoTnVtYmVyLCBbJ2lzRmluaXRlJywgTnVtYmVySXNGaW5pdGUsICdpc0ludGVnZXInLCBpc0ludGVnZXIsICdpc05hTicsIE51bWJlcklzTmFOLCAnaXNTYWZlSW50ZWdlcicsIGlzU2FmZUludGVnZXJdKTtcbiAgfVxuICByZWdpc3RlclBvbHlmaWxsKHBvbHlmaWxsTnVtYmVyKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgTUFYX1NBRkVfSU5URUdFUigpIHtcbiAgICAgIHJldHVybiBNQVhfU0FGRV9JTlRFR0VSO1xuICAgIH0sXG4gICAgZ2V0IE1JTl9TQUZFX0lOVEVHRVIoKSB7XG4gICAgICByZXR1cm4gTUlOX1NBRkVfSU5URUdFUjtcbiAgICB9LFxuICAgIGdldCBFUFNJTE9OKCkge1xuICAgICAgcmV0dXJuIEVQU0lMT047XG4gICAgfSxcbiAgICBnZXQgaXNGaW5pdGUoKSB7XG4gICAgICByZXR1cm4gTnVtYmVySXNGaW5pdGU7XG4gICAgfSxcbiAgICBnZXQgaXNJbnRlZ2VyKCkge1xuICAgICAgcmV0dXJuIGlzSW50ZWdlcjtcbiAgICB9LFxuICAgIGdldCBpc05hTigpIHtcbiAgICAgIHJldHVybiBOdW1iZXJJc05hTjtcbiAgICB9LFxuICAgIGdldCBpc1NhZmVJbnRlZ2VyKCkge1xuICAgICAgcmV0dXJuIGlzU2FmZUludGVnZXI7XG4gICAgfSxcbiAgICBnZXQgcG9seWZpbGxOdW1iZXIoKSB7XG4gICAgICByZXR1cm4gcG9seWZpbGxOdW1iZXI7XG4gICAgfVxuICB9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvTnVtYmVyXCIgKyAnJyk7XG5TeXN0ZW0ucmVnaXN0ZXIoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy9wb2x5ZmlsbHNcIiwgW10sIGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIF9fbW9kdWxlTmFtZSA9IFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvcG9seWZpbGxzXCI7XG4gIHZhciBwb2x5ZmlsbEFsbCA9IFN5c3RlbS5nZXQoXCJ0cmFjZXVyLXJ1bnRpbWVAMC4wLjcyL3NyYy9ydW50aW1lL3BvbHlmaWxscy91dGlsc1wiKS5wb2x5ZmlsbEFsbDtcbiAgcG9seWZpbGxBbGwodGhpcyk7XG4gIHZhciBzZXR1cEdsb2JhbHMgPSAkdHJhY2V1clJ1bnRpbWUuc2V0dXBHbG9iYWxzO1xuICAkdHJhY2V1clJ1bnRpbWUuc2V0dXBHbG9iYWxzID0gZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgc2V0dXBHbG9iYWxzKGdsb2JhbCk7XG4gICAgcG9seWZpbGxBbGwoZ2xvYmFsKTtcbiAgfTtcbiAgcmV0dXJuIHt9O1xufSk7XG5TeXN0ZW0uZ2V0KFwidHJhY2V1ci1ydW50aW1lQDAuMC43Mi9zcmMvcnVudGltZS9wb2x5ZmlsbHMvcG9seWZpbGxzXCIgKyAnJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90cmFjZXVyLWxvYWRlci9+L3RyYWNldXIvYmluL3RyYWNldXItcnVudGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMvYXBwLnN0eWxcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsIHBhZ2luYXRpb25UZW1wbGF0ZVByb3ZpZGVyKSB7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2FjdGl2ZScpO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG5cbiAgICAuc3RhdGUoJ2FjdGl2ZScsIHtcbiAgICAgIHVybDogJy9hY3RpdmUnLFxuICAgICAgcGFyYW1zOiB7IHN0YXR1czogJ2FjdGl2ZScgfSxcbiAgICAgIHRlbXBsYXRlVXJsOiAnLi9hc3NldHMvdGVtcGxhdGVzL3Nob3djYXNlLmh0bWwnXG4gICAgfSlcblxuICAgIC5zdGF0ZSgnaW5hY3RpdmUnLCB7XG4gICAgICB1cmw6ICcvaW5hY3RpdmUnLFxuICAgICAgcGFyYW1zOiB7IHN0YXR1czogJ2luYWN0aXZlJyB9LFxuICAgICAgdGVtcGxhdGVVcmw6ICcuL2Fzc2V0cy90ZW1wbGF0ZXMvc2hvd2Nhc2UuaHRtbCdcbiAgICB9KTtcblxuICBwYWdpbmF0aW9uVGVtcGxhdGVQcm92aWRlci5zZXRQYXRoKCcuL2Fzc2V0cy90ZW1wbGF0ZXMvcGFnaW5hdGlvbi5odG1sJylcblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvY29uZmlnLmpzeFxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNlxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNFxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMlxuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvM1xuICoqLyIsIm51bGxcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNVxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBydW4oJHJvb3RTY29wZSwgJHN0YXRlLCAkbG9jYWxTdG9yYWdlKSB7XG4gICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuICAkcm9vdFNjb3BlLiRzdG9yYWdlID0gJGxvY2FsU3RvcmFnZTtcblxuICAkcm9vdFNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzID0gJHJvb3RTY29wZS4kc3RvcmFnZS5wcm9kdWN0cyB8fCBbXTtcblxuICAkcm9vdFNjb3BlLiRzdG9yYWdlLnBlclBhZ2UgPSAkcm9vdFNjb3BlLiRzdG9yYWdlLnBlclBhZ2UgfHwgJzgnO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9ydW4uanN4XG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3djYXNlQ3RybCgkc2NvcGUsICRyb290U2NvcGUpIHtcblxuXG5cbiAgJHNjb3BlLnN1Ym1pdCA9IChmb3JtKSA9PiB7XG4gICAgaWYoISRyb290U2NvcGUuJHN0b3JhZ2UucHJvZHVjdHMpXG4gICAgICAkcm9vdFNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzID0gW107XG5cbiAgICAkcm9vdFNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzLnB1c2goYW5ndWxhci5jb3B5KCRzY29wZS5wcm9kdWN0KSk7XG4gIH07XG5cbiAgJHNjb3BlLm9uRGVsZXRlU2VsZWN0ZWRQcm9kdWN0cyA9ICgpID0+IHtcblxuICAgIC8vYW5ndWxhci5mb3JFYWNoKHNlbGVjdGVkUHJvZHVjdHMsIChwcm9kdWN0KSA9PiB7XG4gICAgLy8gICRyb290U2NvcGUuJHN0YXRlLnBhcmFtcy5zdGF0dXMgPT09ICdhY3RpdmUnID9cbiAgICAvLyAgcHJvZHVjdC5zdGF0dXMgPSAnaW5hY3RpdmUnIDpcbiAgICAvLyAgJHJvb3RTY29wZS4kc3RvcmFnZS5wcm9kdWN0cy5zcGxpY2UoJHJvb3RTY29wZS4kc3RvcmFnZS5wcm9kdWN0cy5pbmRleE9mKHByb2R1Y3QpLCAxKTtcbiAgICAvL30pO1xuICAgIC8vXG4gICAgLy9zZWxlY3RlZFByb2R1Y3RzID0gW107XG4gICAgLy8kc2NvcGUuc2VsZWN0ZWRQcm9kdWN0cyA9IHNlbGVjdGVkUHJvZHVjdHM7XG5cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9jb250cm9sbGVycy9zaG93Y2FzZUN0cmwuanN4XG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbGVNb2RlbCgkcGFyc2UsJHEpIHtcbiAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuICAgIGxldCBtb2RlbCA9ICRwYXJzZShhdHRycy5maWxlTW9kZWwpO1xuICAgIHZhciBtb2RlbFNldHRlciA9IG1vZGVsLmFzc2lnbjtcblxuICAgIC8vbGV0IG9uTG9hZCA9IGZ1bmN0aW9uKHJlYWRlcikge1xuICAgIC8vICBjb25zb2xlLmxvZyhyZWFkZXIpXG4gICAgLy99O1xuICAgIC8vXG4gICAgLy9sZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAvL3JlYWRlci5vbmxvYWQgPSBvbkxvYWQocmVhZGVyKTtcbiAgICAvL1xuICAgIC8vXG4gICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgZmlsZSA9IGVsZW1lbnRbMF0uZmlsZXNbMF07XG5cbiAgICAgIHJlYWRGaWxlKGZpbGUpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgbW9kZWxTZXR0ZXIoc2NvcGUsIHtuYW1lOiBmaWxlLm5hbWUsIGRhdGE6IGRhdGF9KTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBsZXQgcmVhZEZpbGUgPSBmdW5jdGlvbihmaWxlKSB7XG4gICAgICBsZXQgZGVmZmVyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICBkZWZmZXJlZC5yZXNvbHZlKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICB9O1xuXG4gICAgICByZWFkZXIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICAgIGRlZmZlcmVkLnJlamVjdChlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuXG4gICAgICByZXR1cm4gZGVmZmVyZWQucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgLy9lbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgLy8gIGxldCBmaWxlID0gZWxlbWVudFswXS5maWxlc1swXTtcbiAgICAvLyAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy9cbiAgICAvLyAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAvLyAgICBsZXQgZGF0YSA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAvL1xuICAgIC8vICAgIHNjb3BlLiRhcHBseSgoKSA9PiB7XG4gICAgLy8gICAgICBtb2RlbC5hc3NpZ24oc2NvcGUsIHsgZmlsZTogZWxlbWVudFswXS5maWxlc1swXSwgZGF0YTogZGF0YSB9KTtcbiAgICAvLyAgICB9KVxuICAgIC8vICB9O1xuICAgIC8vXG4gICAgLy8gIHJlYWRlci5vbnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgLy9cbiAgICAvLyAgfVxuICAgIC8vXG4gICAgLy8gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIC8vfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogbGlua1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9kaXJlY3RpdmVzL2ZpbGVNb2RlbC5qc3hcbiAqKi8iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zaG93Y2FzZS5zdHlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3djYXNlKCRyb290U2NvcGUpIHtcblxuICBsZXQgdGVtcGxhdGUgPSBgXG4gIDxuYXYgY2xhc3M9XCJ1ay1uYXZiYXIgc2MtbmF2YmFyXCI+XG4gICAgPGRpdiBjbGFzcz1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIiNhZGRQcm9kdWN0XCJcbiAgICAgICAgICBuZy1zaG93PVwiJHN0YXRlLnBhcmFtcy5zdGF0dXMgPT09ICdhY3RpdmUnXCJcbiAgICAgICAgICBjbGFzcz1cInVrLWJ1dHRvbiB1ay1idXR0b24tc3VjY2VzcyB1ay1mbG9hdC1sZWZ0IHVrLW1hcmdpbi1yaWdodCBncmVlblwiXG4gICAgICAgICAgZGF0YS11ay1tb2RhbD1cIntjZW50ZXI6dHJ1ZX1cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cInVrLWljb24tcGx1c1wiPjwvaT4g0JTQvtCx0LDQstC40YLRjCDRgtC+0LLQsNGAXG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8YWRkLXByb2R1Y3QgbW9kYWwtaWQ9XCJhZGRQcm9kdWN0XCI+PC9hZGQtcHJvZHVjdD5cbiAgICA8L2Rpdj5cbiAgICA8c2hvd2Nhc2Utc2VhcmNoIGNsYXNzPVwidWstbmF2YmFyLWNvbnRlbnQgdWstbmF2YmFyLWZsaXBcIiAgc2VhcmNoLXF1ZXJ5PSdzZWFyY2hRdWVyeSc+PC9zaG93Y2FzZS1zZWFyY2g+XG4gIDwvbmF2PlxuICAgIDxuYXYgY2xhc3M9XCJ1ay1uYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ1ay1uYXZiYXItY29udGVudFwiIHRvdGFsLXByb2R1Y3RzPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInVrLW5hdmJhci1jb250ZW50XCIgZGVsZXRlLWFsbD48L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzPVwidWstbmF2YmFyLWZsaXBcIj5cbiAgICAgICAgPHNob3djYXNlLXBlci1wYWdlIGNsYXNzPVwidWstbmF2YmFyLWNvbnRlbnRcIiBwZXItcGFnZT1cInBlclBhZ2VcIj48L3Nob3djYXNlLXBlci1wYWdlPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPGRpdiBjbGFzcz1cInNob3djYXNlLWNvbnRlbnRcIj5cbiAgICA8ZGlyLXBhZ2luYXRpb24tY29udHJvbHNcbiAgICAgICAgY2xhc3M9XCJ1ay1uYXZiYXItY29udGVudCB1ay1uYXZiYXItY2VudGVyXCJcbiAgICAgICAgZGlyZWN0aW9uLWxpbmtzPVwiZmFsc2VcIlxuICAgICAgICBhdXRvLWhpZGU9XCJmYWxzZVwiXG4gICAgICAgIG1heC1zaXplPVwiOFwiPlxuICAgICAgPC9kaXItcGFnaW5hdGlvbi1jb250cm9scz5cbiAgICA8dWwgY2xhc3M9XCJ1ay1ncmlkIHVrLWdyaWQtc21hbGxcIj5cbiAgICAgIDxsaSBkaXItcGFnaW5hdGU9XCJwcm9kdWN0IGluICRzdG9yYWdlLnByb2R1Y3RzIHwgc3RhdHVzOiBzdGF0dXMgfCBmaWx0ZXI6IHsgbmFtZTogc2VhcmNoUXVlcnkgfSB8IGl0ZW1zUGVyUGFnZTogJHN0b3JhZ2UucGVyUGFnZVwiXG5cbiAgICAgICAgY2xhc3M9XCJ1ay13aWR0aC1tZWRpdW0tMS00XCJcbiAgICAgICAgbmctY2xhc3M9XCJ7J3VrLWdyaWQtbWFyZ2luJzogJGluZGV4ID4gM31cIj5cblxuICAgICAgICA8dGh1bWJuYWlsXG4gICAgICAgICAgcHJvZHVjdD1cInByb2R1Y3RcIlxuICAgICAgICAgIG9uLWVkaXQ9XCJvbkVkaXQocHJvZHVjdClcIlxuICAgICAgICAgIG9uLXNlbGVjdD1cIm9uU2VsZWN0KHByb2R1Y3QpXCI+XG4gICAgICAgIDwvdGh1bWJuYWlsPlxuXG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgPC9kaXY+YDtcblxuICBmdW5jdGlvbiBsaW5rKHNjb3BlKSB7XG4gICAgc2NvcGUuc3RhdHVzID0gJHJvb3RTY29wZS4kc3RhdGUucGFyYW1zLnN0YXR1cztcbiAgICBzY29wZS5tU2VsZWN0ZWQgPSBfLmZpbHRlcigkcm9vdFNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzLCB7J3NlbGVjdGVkJzogdHJ1ZX0pO1xuICAgIHNjb3BlLnNlYXJjaFF1ZXJ5ID0gJyc7XG5cbiAgICBzY29wZS5vblNlbGVjdCA9IChwcm9kdWN0KSA9PiB7XG4gICAgICBwcm9kdWN0LnNlbGVjdGVkID0gIXByb2R1Y3Quc2VsZWN0ZWQ7XG5cbiAgICAgIGxldCBpbmRleCA9IHNjb3BlLm1TZWxlY3RlZC5pbmRleE9mKHByb2R1Y3QpO1xuICAgICAgcmV0dXJuIGluZGV4IDwgMCA/XG4gICAgICAgIHNjb3BlLm1TZWxlY3RlZC5wdXNoKHByb2R1Y3QpIDpcbiAgICAgICAgc2NvcGUubVNlbGVjdGVkLnNwbGljZShpbmRleCwgMSlcbiAgICB9O1xuXG4gICAgc2NvcGUub25FZGl0ID0gKHByb2R1Y3QpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBFZGl0ICR7cHJvZHVjdH1gKTtcbiAgICB9O1xuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbms6IGxpbmssXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvZGlyZWN0aXZlcy9zaG93Y2FzZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzL3Nob3djYXNlLnN0eWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHRodW1ibmFpbCgkcm9vdFNjb3BlKSB7XG5cbiAgbGV0IHRlbXBsYXRlID0gYFxuICA8YSBjbGFzcz1cInVrLXRodW1ibmFpbFwiIG5nLWNsaWNrPVwib25TZWxlY3QoKVwiPlxuICAgIDxpbWcgbmctc3JjPVwie3twcm9kdWN0LnBob3RvLmRhdGF9fVwiIGFsdD1cIlwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1ay10aHVtYm5haWwtY2FwdGlvbiB1ay1tYXJnaW4tc21hbGwtYm90dG9tIHRodW1ibmFpbC1uYW1lXCIgbmctYmluZD1cInByb2R1Y3QubmFtZVwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ1ay10aHVtYm5haWwtY2FwdGlvbiB1ay1tYXJnaW4tc21hbGwtYm90dG9tXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidWstZmxleCB1ay1mbGV4LW1pZGRsZSB1ay1mbGV4LXNwYWNlLWFyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWstdGV4dC1sYXJnZSBzYWxlXCIgbmctYmluZD1cInByb2R1Y3QuY29zdCB8IHNhbGU6IDEuMyB8IGN1cnJlbmN5OiAkIDogMFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidWstdGV4dC1sYXJnZVwiIG5nLWJpbmQ9XCJwcm9kdWN0LmNvc3QgfCBjdXJyZW5jeTogJCA6IDBcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ1ay10aHVtYm5haWwtY2FwdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInVrLWZsZXggdWstZmxleC1taWRkbGUgdWstZmxleC1zcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJvbkVkaXQoKVwiPtCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJvbkRlbGV0ZSgpXCI+0KPQtNCw0LvQuNGC0Yw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2E+YDtcblxuICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgbGV0IHN0YXR1cyA9ICRyb290U2NvcGUuJHN0YXRlLnBhcmFtcy5zdGF0dXM7XG4gICAgbGV0IHRodW1ibmFpbCA9IGVsZW1lbnQuZmluZCgnLnVrLXRodW1ibmFpbCcpO1xuXG4gICAgaWYoc2NvcGUucHJvZHVjdC5zZWxlY3RlZCkgdGh1bWJuYWlsLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgc2NvcGUub25EZWxldGUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gc3RhdHVzID09PSAnYWN0aXZlJyA/XG4gICAgICAgIHNjb3BlLnByb2R1Y3Quc3RhdHVzID0gJ2luYWN0aXZlJyA6XG4gICAgICAgICRyb290U2NvcGUuJHN0b3JhZ2UucHJvZHVjdHMuc3BsaWNlKCRyb290U2NvcGUuJHN0b3JhZ2UucHJvZHVjdHMuaW5kZXhPZihzY29wZS5wcm9kdWN0KSwxKVxuICAgIH07XG5cbiAgICBlbGVtZW50LmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB0aHVtYm5haWwudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbms6IGxpbmssXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIHNjb3BlOiB7XG4gICAgICBwcm9kdWN0OiAnPScsXG4gICAgICBvbkVkaXQ6ICcmJyxcbiAgICAgIG9uU2VsZWN0OiAnJidcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvZGlyZWN0aXZlcy90aHVtYm5haWwuanN4XG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpnbHVob3Ygb24gMjYvMDEvMTYuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBbGwoJHJvb3RTY29wZSkge1xuXG4gIGxldCB0ZW1wbGF0ZSA9IGBcbiAgPGJ1dHRvbiBuZy1zaG93PVwibVNlbGVjdGVkLmxlbmd0aFwiIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1tdXRlZFwiIG5nLWNsaWNrPVwib25QcmVzcygpXCI+XG4gICAgPGkgY2xhc3M9XCJ1ay1pY29uLXRyYXNoXCI+PC9pPiDQo9C00LDQu9C40YLRjCDQstGB0LVcbiAgICAgPGRpdiBjbGFzcz1cInVrLWJhZGdlIHVrLWJhZGdlLW5vdGlmaWNhdGlvblwiIG5nLWJpbmQ9XCJtU2VsZWN0ZWQubGVuZ3RoXCI+PC9kaXY+XG4gIDwvYnV0dG9uPmA7XG5cbiAgZnVuY3Rpb24gbGluayhzY29wZSkge1xuICAgIHNjb3BlLm9uUHJlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzdGF0dXMgPSAkcm9vdFNjb3BlLiRzdGF0ZS5wYXJhbXMuc3RhdHVzO1xuXG4gICAgICBfLmZvckVhY2goc2NvcGUubVNlbGVjdGVkLCBmdW5jdGlvbihwcm9kdWN0KSB7XG4gICAgICAgIGxldCBpbmRleCA9ICRyb290U2NvcGUuJHN0b3JhZ2UucHJvZHVjdHMuaW5kZXhPZihwcm9kdWN0KTtcbiAgICAgICAgaWYoc3RhdHVzID09PSAnYWN0aXZlJykge1xuICAgICAgICAgICRyb290U2NvcGUuJHN0b3JhZ2UucHJvZHVjdHNbaW5kZXhdLnN0YXR1cyA9ICdpbmFjdGl2ZSc7XG4gICAgICAgICAgJHJvb3RTY29wZS4kc3RvcmFnZS5wcm9kdWN0c1tpbmRleF0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgc2NvcGUubVNlbGVjdGVkLmxlbmd0aCA9IDA7XG5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsaW5rOiBsaW5rLFxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL2RpcmVjdGl2ZXMvZGVsZXRlQWxsLmpzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0KCRyb290U2NvcGUsIG1Qcm9kdWN0KSB7XG4gIHZhciB0ZW1wbGF0ZSA9IGBcbiAgPGZvcm0gY2xhc3M9XCJ1ay1mb3JtIHVrLWZvcm0tc3RhY2tlZFwiIG5hbWU9XCJwcm9kdWN0Rm9ybVwiIG5vdmFsaWRhdGUgbmctc3VibWl0PVwib25TdWJtaXQocHJvZHVjdEZvcm0pXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1tb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLW1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidWstbW9kYWwtY2xvc2UgdWstY2xvc2VcIj48L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLW1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+0JTQvtCx0LDQstC40YLRjCDRgtC+0LLQsNGAPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidWstZm9ybS1sYWJlbFwiIGZvcj1cIm5hbWVcIj7QndCw0LfQstCw0L3QuNC1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWZvcm0tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzPVwidWstd2lkdGgtMS0xXCIgbmctbW9kZWw9XCJwcm9kdWN0Lm5hbWVcIiBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1INGC0L7QstCw0YDQsFwiIG5nLWNsYXNzPVwieyd1ay1mb3JtLWRhbmdlcic6IHN1Ym1pdHRlZCAmJiBwcm9kdWN0Rm9ybS5uYW1lLiRlcnJvci5yZXF1aXJlZH1cIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVrLWZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInVrLWZvcm0tbGFiZWxcIiBmb3I9XCJjb3N0XCI+0KbQtdC90LA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstZm9ybS1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImNvc3RcIiBjbGFzcz1cInVrLXdpZHRoLTEtM1wiIG5nLW1vZGVsPVwicHJvZHVjdC5jb3N0XCIgbmFtZT1cImNvc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KbQtdC90LAg0YLQvtCy0LDRgNCwXCIgbmctY2xhc3M9XCJ7J3VrLWZvcm0tZGFuZ2VyJzogc3VibWl0dGVkICYmIHByb2R1Y3RGb3JtLmNvc3QuJGVycm9yLnJlcXVpcmVkfVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidWstZm9ybS1sYWJlbFwiIGZvcj1cInBob3RvXCI+0KTQvtGC0L48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstZm9ybS1jb250cm9scyB1ay1mb3JtLWNvbnRyb2xzLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidWstZm9ybS1jb250cm9scy1jb25kZW5zZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJwaG90b1wiIGNsYXNzPVwidWstd2lkdGgtMS0zXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiIGZpbGUtbW9kZWw9XCJwcm9kdWN0LnBob3RvXCIgbmFtZT1cInBob3RvXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInVrLWJ1dHRvbiB1ay13aWR0aC0xLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwi0JLRi9Cx0YDQsNGC0YwuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uY2xpY2s9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG8nKS5jbGljaygpO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctY2xhc3M9XCJ7J3VrLWJ1dHRvbi1kYW5nZXInOiBzdWJtaXR0ZWQgJiYgcHJvZHVjdEZvcm0ucGhvdG8uJGVycm9yLnJlcXVpcmVkfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWstcGFuZWwgdWstcGFuZWwtYm94XCIgbmctaWY9XCJwcm9kdWN0LnBob3RvXCIgbmctYmluZD1cInByb2R1Y3QucGhvdG8ubmFtZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1ay1tb2RhbC1mb290ZXIgdWstdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInVrLWJ1dHRvblwiPtCe0YLQvNC10L3QsDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInVrLWJ1dHRvbiB1ay1idXR0b24tcHJpbWFyeVwiPtCU0L7QsdCw0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIGA7XG5cbiAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICBhbmd1bGFyLmVsZW1lbnQoJy51ay1tb2RhbCcpLmF0dHIoJ2lkJywgc2NvcGUubW9kYWxJZCk7XG4gICAgc2NvcGUuc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgICBzY29wZS5wcm9kdWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgbVByb2R1Y3QpO1xuXG4gICAgc2NvcGUub25TdWJtaXQgPSBmdW5jdGlvbihwcm9kdWN0Rm9ybSkge1xuICAgICAgaWYocHJvZHVjdEZvcm0uJGludmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlLnN1Ym1pdHRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAkcm9vdFNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzLnB1c2goc2NvcGUucHJvZHVjdCk7XG4gICAgICBzY29wZS5wcm9kdWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgbVByb2R1Y3QpO1xuXG4gICAgICB2YXIgbW9kYWwgPSBVSWtpdC5tb2RhbChcIi51ay1tb2RhbFwiKTtcbiAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbms6IGxpbmssXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIHNjb3BlOiB7XG4gICAgICBtb2RhbElkOiAnQCdcbiAgICB9XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zY3JpcHRzL2RpcmVjdGl2ZXMvYWRkUHJvZHVjdC5qc3hcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gdG90YWxQcm9kdWN0cygkcm9vdFNjb3BlKSB7XG4gIHZhciB0ZW1wbGF0ZSA9IGA8c3Ryb25nPtCS0YHQtdCz0L4g0YLQvtCy0LDRgNC+0LI6IDxzcGFuIG5nLWJpbmQ9XCIkc3RvcmFnZS5wcm9kdWN0cy5sZW5ndGhcIj48L3NwYW4+PC9zdHJvbmc+YDtcblxuICBmdW5jdGlvbiBsaW5rKCkge1xuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbms6IGxpbmssXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvZGlyZWN0aXZlcy90b3RhbFByb2R1Y3RzLmpzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBzaG93Y2FzZVNlYXJjaCgpIHtcblxuICBsZXQgdGVtcGxhdGUgPSBgXG4gICAgPGZvcm0gY2xhc3M9XCJ1ay1mb3JtIHVrLW1hcmdpbi1yZW1vdmUgdWstZGlzcGxheS1pbmxpbmUtYmxvY2tcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L3QsNC30LLQsNC90LjQtSDRgtC+0LLQsNGA0LAg0LTQu9GPINC/0L7QuNGB0LrQsFwiICBuZy1tb2RlbD0nc2VhcmNoJyBjbGFzcz1cInVrLWZvcm0td2lkdGgtbGFyZ2VcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJ1ay1idXR0b24gdWstYnV0dG9uLXByaW1hcnlcIiBuZy1jbGljaz1cInNlYXJjaFF1ZXJ5ID0gc2VhcmNoXCI+0JjRgdC60LDRgtGMPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICBgO1xuXG4gIGZ1bmN0aW9uIGxpbmsoKSB7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbms6IGxpbmssXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgIHNjb3BlIDoge1xuICAgICAgc2VhcmNoUXVlcnk6ICc9J1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9kaXJlY3RpdmVzL3Nob3djYXNlU2VhcmNoLmpzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBzaG93Y2FzZVBlclBhZ2UoJHJvb3RTY29wZSwgcGVyUGFnZUZhY3RvcnkpIHtcblxuICBsZXQgdGVtcGxhdGUgPSBgXG4gICAgPHVsIGNsYXNzPVwidWstcGFnaW5hdGlvblwiPlxuICAgICAgPGxpXG4gICAgICAgIG5nLWNsYXNzPVwieyAndWstYWN0aXZlJyA6IGl0ZW0ubmFtZSA9PT0gc2VsZWN0ZWQgfVwiXG4gICAgICAgIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIlxuICAgICAgICBuZy1jbGljaz1cInNlbGVjdChpdGVtKVwiPlxuICAgICAgICA8c3BhbiBuZy1iaW5kPVwiaXRlbS5uYW1lXCI+PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICBgO1xuXG4gIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgc2NvcGUuaXRlbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwZXJQYWdlRmFjdG9yeSk7XG4gICAgc2NvcGUuc2VsZWN0ZWQgPSAkcm9vdFNjb3BlLiRzdG9yYWdlLnBlclBhZ2U7XG5cbiAgICBsZXQgc3RhdHVzID0gJHJvb3RTY29wZS4kc3RhdGUucGFyYW1zLnN0YXR1cztcblxuICAgIHNjb3BlLnNlbGVjdCA9IChpdGVtKSA9PiB7XG4gICAgICBpZihpdGVtLm5hbWUgPT09ICfQktGB0LUnKSB7XG4gICAgICAgIHNjb3BlLnNlbGVjdGVkID0gaXRlbS5uYW1lO1xuICAgICAgICByZXR1cm4gc3RhdHVzID09PSAnYWN0aXZlJyA/XG4gICAgICAgICAgJHJvb3RTY29wZS4kc3RvcmFnZS5wZXJQYWdlID0gKF8uZmlsdGVyKCRyb290U2NvcGUuJHN0b3JhZ2UucHJvZHVjdHMsIHsgJ3N0YXR1cycgOiAnYWN0aXZlJ30pKS5sZW5ndGggOlxuICAgICAgICAgICRyb290U2NvcGUuJHN0b3JhZ2UucGVyUGFnZSA9IChfLmZpbHRlcigkcm9vdFNjb3BlLiRzdG9yYWdlLnByb2R1Y3RzLCB7ICdzdGF0dXMnIDogJ2luYWN0aXZlJ30pKS5sZW5ndGg7XG4gICAgICB9XG4gICAgICAkcm9vdFNjb3BlLiRzdG9yYWdlLnBlclBhZ2UgPSBzY29wZS5zZWxlY3RlZCA9IGl0ZW0ubmFtZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpbms6IGxpbmssXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvZGlyZWN0aXZlcy9zaG93Y2FzZVBlclBhZ2UuanN4XG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIG1Qcm9kdWN0KCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgY29zdDogbnVsbCxcbiAgICBwaG90bzogbnVsbCxcbiAgICBzdGF0dXM6ICdhY3RpdmUnLFxuICAgIHNlbGVjdGVkOiBmYWxzZVxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9mYWN0b3JpZXMvbVByb2R1Y3QuanN4XG4gKiovIiwiZXhwb3J0IGZ1bmN0aW9uIHBlclBhZ2VGYWN0b3J5KCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIG5hbWU6ICc4J1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICcxMidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnMTYnXG4gICAgfSwge1xuICAgICAgbmFtZTogJ9CS0YHQtSdcbiAgICB9XG4gIF1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NjcmlwdHMvZmFjdG9yaWVzL3BlclBhZ2VGYWN0b3J5LmpzeFxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBzdGF0dXMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXRlbXMsIHNlbGVjdGlvbikge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgYW5ndWxhci5mb3JFYWNoKGl0ZW1zLCAodiwgaykgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHYsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmKGtleSA9PT0gJ3N0YXR1cycgJiYgdmFsdWUgPT09IHNlbGVjdGlvbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2KVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9maWx0ZXJzL3N0YXR1cy5qc3hcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gc2FsZSgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0ZXh0LCBjb2VmZikge1xuICAgIGNvZWZmID0gY29lZmYgfHwgMTtcbiAgICByZXR1cm4gcGFyc2VJbnQodGV4dCkgKiBjb2VmZjtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2NyaXB0cy9maWx0ZXJzL3NhbGUuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==