(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://this-week-in-react.org/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(20);

var _atoms = __webpack_require__(22);

var _clicky = __webpack_require__(23);

var _reactHelmet = __webpack_require__(24);

var _favicon = __webpack_require__(25);

var _favicon2 = _interopRequireDefault(_favicon);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _react3 = __webpack_require__(6);

var _react4 = _interopRequireDefault(_react3);

var _telegram = __webpack_require__(26);

var _telegram2 = _interopRequireDefault(_telegram);

var _twitter = __webpack_require__(27);

var _twitter2 = _interopRequireDefault(_twitter);

var _twitterCard = __webpack_require__(28);

var _twitterCard2 = _interopRequireDefault(_twitterCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _atoms.createBackgroundPattern)();
      (0, _clicky.clicky)();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            "title",
            null,
            "This Week In React"
          ),
          _react2.default.createElement("meta", { charset: "UTF-8" }),
          _react2.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }),
          _react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
          _react2.default.createElement("meta", { name: "twitter:site", content: "@PhilippSpiess" }),
          _react2.default.createElement("meta", { name: "twitter:title", content: "This Week In React \u269B\uFE0F" }),
          _react2.default.createElement("meta", {
            name: "twitter:description",
            content: "Weekly coverage of interesting pull requests, discussions, and RFCs around React Core and React DOM."
          }),
          _react2.default.createElement("meta", { name: "twitter:image", content: _twitterCard2.default }),
          _react2.default.createElement("link", {
            href: "https://fonts.googleapis.com/css?family=Roboto:300,700",
            rel: "stylesheet"
          }),
          _react2.default.createElement("link", { rel: "icon", type: "image/png", href: _favicon2.default })
        ),
        _react2.default.createElement("div", { "aria-hidden": "true", className: "atoms" }),
        _react2.default.createElement(
          "div",
          { className: "main" },
          _react2.default.createElement(
            "section",
            null,
            _react2.default.createElement(
              "h1",
              null,
              "This Week In React",
              " ",
              _react2.default.createElement("img", {
                src: _react4.default,
                width: "60px",
                alt: "\u269B\uFE0F",
                id: "logo",
                onClick: _atoms.createBackgroundPattern,
                onKeyDown: _atoms.createBackgroundPattern
              })
            ),
            _react2.default.createElement(
              "h2",
              null,
              "Weekly coverage of interesting pull requests, discussions, and RFCs around React Core and React DOM. Coming out every Friday."
            ),
            _react2.default.createElement(
              "div",
              { className: "issues" },
              _react2.default.createElement(
                "ol",
                null,
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "https://twitter.com/PhilippSpiess/status/1055869112277258240" },
                    "Issue 6 \u2014 26 Oct 2018"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "https://twitter.com/PhilippSpiess/status/1053325077687820293" },
                    "Issue 5 \u2014 19 Oct 2018"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "https://twitter.com/PhilippSpiess/status/1050780941151588353" },
                    "Issue 4 \u2014 12 Oct 2018"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "https://twitter.com/PhilippSpiess/status/1048242551998824450" },
                    "Issue 3 \u2014 5 Oct 2018"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "https://twitter.com/PhilippSpiess/status/1045714338684837888" },
                    "Issue 2 \u2014 28 Sept 2018"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "https://twitter.com/PhilippSpiess/status/1043186943624982529" },
                    "Issue 1 \u2014 21 Sept 2018"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "button-row" },
              _react2.default.createElement(
                "a",
                { href: "https://twitter.com/PhilippSpiess" },
                "Follow on Twitter",
                " ",
                _react2.default.createElement(
                  "span",
                  { className: "button-icon" },
                  _react2.default.createElement("img", { src: _twitter2.default, width: "30px", alt: "\uD83D\uDC26" })
                )
              ),
              _react2.default.createElement(
                "a",
                { href: "https://t.me/this_week_in_react" },
                "Read on Telegram",
                " ",
                _react2.default.createElement(
                  "span",
                  { className: "button-icon" },
                  _react2.default.createElement("img", { src: _telegram2.default, width: "30px", alt: "\u2708\uFE0F" })
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "button-row" },
              _react2.default.createElement(
                "a",
                { className: "button", href: "https://eepurl.com/dHV-3X" },
                "Subscribe Now",
                " ",
                _react2.default.createElement(
                  "span",
                  { className: "button-icon", role: "img", "aria-label": "Mail" },
                  "\uD83D\uDC8C"
                )
              )
            ),
            _react2.default.createElement(
              "h3",
              null,
              "Made with",
              " ",
              _react2.default.createElement(
                "span",
                { role: "img", "aria-label": "Hearts" },
                "\uD83D\uDC95"
              ),
              " ",
              "by ",
              _react2.default.createElement(
                "a",
                { href: "https://philippspiess.com" },
                "@PhilippSpiess"
              )
            )
          )
        ),
        _react2.default.createElement(
          "noscript",
          null,
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement("img", {
              alt: "Clicky",
              width: "1",
              height: "1",
              src: "//in.getclicky.com/101142968ns.gif"
            })
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkyIiBoZWlnaHQ9IjQzNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik00OTEuMyAyMTguNWMwLTMyLjUtNDAuNy02My4zLTEwMy4xLTgyLjQgMTQuNC02My42IDgtMTE0LjItMjAuMi0xMzAuNC02LjUtMy44LTE0LjEtNS42LTIyLjQtNS42djIyLjNjNC42IDAgOC4zLjkgMTEuNCAyLjYgMTMuNiA3LjggMTkuNSAzNy41IDE0LjkgNzUuNy0xLjEgOS40LTIuOSAxOS4zLTUuMSAyOS40LTE5LjYtNC44LTQxLTguNS02My41LTEwLjktMTMuNS0xOC41LTI3LjUtMzUuMy00MS42LTUwIDMyLjYtMzAuMyA2My4yLTQ2LjkgODQtNDYuOVYwYy0yNy41IDAtNjMuNSAxOS42LTk5LjkgNTMuNkMyMDkuNCAxOS44IDE3My40LjQgMTQ1LjkuNHYyMi4zYzIwLjcgMCA1MS40IDE2LjUgODQgNDYuNi0xNCAxNC43LTI4IDMxLjQtNDEuMyA0OS45LTIyLjYgMi40LTQ0IDYuMS02My42IDExLTIuMy0xMC00LTE5LjctNS4yLTI5LTQuNy0zOC4yIDEuMS02Ny45IDE0LjYtNzUuOCAzLTEuOCA2LjktMi42IDExLjUtMi42Vi41Yy04LjQgMC0xNiAxLjgtMjIuNiA1LjYtMjguMSAxNi4yLTM0LjQgNjYuNy0xOS45IDEzMC4xQzQxLjIgMTU1LjQuNyAxODYuMS43IDIxOC41YzAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek0yNDYuMiAzNTJjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek0yNDUuNyA4NWM5LjMgOS42IDE4LjYgMjAuMyAyNy44IDMyLTktLjQtMTguMi0uNy0yNy41LS43LTkuNCAwLTE4LjcuMi0yNy44LjcgOS0xMS43IDE4LjMtMjIuNCAyNy41LTMyem0tNzQgNTguOWMtNC45IDcuNy05LjggMTUuNi0xNC40IDIzLjctNC42IDgtOC45IDE2LTEzIDI0LTUuNC0xMy40LTEwLTI2LjgtMTMuOC0zOS44IDEzLjEtMy4xIDI2LjktNS44IDQxLjItNy45ek04MS4yIDI2OS4xYy0zNS40LTE1LjEtNTguMy0zNC45LTU4LjMtNTAuNiAwLTE1LjcgMjIuOS0zNS42IDU4LjMtNTAuNiA4LjYtMy43IDE4LTcgMjcuNy0xMC4xIDUuNyAxOS42IDEzLjIgNDAgMjIuNSA2MC45LTkuMiAyMC44LTE2LjYgNDEuMS0yMi4yIDYwLjYtOS45LTMuMS0xOS4zLTYuNS0yOC0xMC4yek0xMzUgNDEyYy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43IDEuMS05LjQgMi45LTE5LjMgNS4xLTI5LjQgMTkuNiA0LjggNDEgOC41IDYzLjUgMTAuOSAxMy41IDE4LjUgMjcuNSAzNS4zIDQxLjYgNTAtMzIuNiAzMC4zLTYzLjIgNDYuOS04NCA0Ni45LTQuNS0uMS04LjMtMS0xMS4zLTIuN3ptMjM3LjItNzYuMmM0LjcgMzguMi0xLjEgNjcuOS0xNC42IDc1LjgtMyAxLjgtNi45IDIuNi0xMS41IDIuNi0yMC43IDAtNTEuNC0xNi41LTg0LTQ2LjYgMTQtMTQuNyAyOC0zMS40IDQxLjMtNDkuOSAyMi42LTIuNCA0NC02LjEgNjMuNi0xMSAyLjMgMTAuMSA0LjEgMTkuOCA1LjIgMjkuMXptMzguNS02Ni43Yy04LjYgMy43LTE4IDctMjcuNyAxMC4xLTUuNy0xOS42LTEzLjItNDAtMjIuNS02MC45IDkuMi0yMC44IDE2LjYtNDEuMSAyMi4yLTYwLjYgOS45IDMuMSAxOS4zIDYuNSAyOC4xIDEwLjIgMzUuNCAxNS4xIDU4LjMgMzQuOSA1OC4zIDUwLjYtLjEgMTUuNy0yMyAzNS42LTU4LjQgNTAuNnoiLz48Y2lyY2xlIGN4PSIyNDUuOSIgY3k9IjIxOC41IiByPSI0NS43Ii8+PC9nPjwvc3ZnPgo="

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "404 - Oh no's! We couldn't find that page \uD83D\uDD0D"
    )
  );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(11);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(_reactStaticRoutes2.default, null)
    )
  );
};

exports.default = App;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(12);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(13);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(14);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(15);

var _reactUniversalComponent = __webpack_require__(16);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/Users/philipp/dev/this-week-in-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 5)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(5);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/philipp/dev/this-week-in-react/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 1

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(17);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(18);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(19);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(3);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "body,html{height:100%;margin:0}html{background:-webkit-linear-gradient(bottom,rgba(0,0,0,.25) -5%,transparent),-webkit-linear-gradient(292deg,#874da2,#c43a30);background:-o-linear-gradient(bottom,rgba(0,0,0,.25) -5%,transparent 100%),-o-linear-gradient(292deg,#874da2 0,#c43a30 100%);background:linear-gradient(0deg,rgba(0,0,0,.25) -5%,transparent),linear-gradient(158deg,#874da2,#c43a30);background-repeat:no-repeat;background-attachment:fixed}#logo{cursor:pointer;-webkit-transition:-webkit-transform .6s ease-out;transition:-webkit-transform .6s ease-out;-o-transition:transform ease-out .6s;transition:transform .6s ease-out;transition:transform .6s ease-out,-webkit-transform .6s ease-out}#logo:hover{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}body{color:#fff;font-family:-apple-system,BlinkMacSystemFont,Helvetica,sans-serif}.atoms,.main{position:absolute;top:0;left:0;right:0;bottom:0}a{color:#fff}.atoms{position:fixed;overflow:hidden;opacity:.07}.main{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}section{max-width:calc(100% - 20px);width:500px}h1{font-weight:700;font-size:46px;text-shadow:rgba(0,0,0,.18) 0 2px 4px;margin-bottom:20px;line-height:80px}h1>img{top:8px;left:8px;position:relative}.issues,h2{font-size:24px;margin-bottom:40px}.issues,h2,h3{font-weight:300;line-height:1.8}h3{font-size:20px;margin-top:40px}h3,ol{text-align:center}ol{list-style:none;text-indent:0;padding:0}.issues a,h3>a{color:#fff}.button-row{display:-ms-flexbox;display:flex;margin:20px 0;-ms-flex-pack:center;justify-content:center}.button-row>*{margin:0;padding:0 20px;text-align:center}.button,.button-row a{text-decoration:none}.button{-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;line-height:60px;border:2px solid #fff;border-radius:100px;background:transparent;font-weight:300;font-size:20px;color:#fff;-webkit-transition:background .15s ease-in-out;-o-transition:background ease-in-out .15s;transition:background .15s ease-in-out;cursor:pointer}a.button:hover,button:hover{background:hsla(0,0%,100%,.2)}.button-icon{position:relative;font-size:30px;left:6px;top:6px}.button+.button{margin-left:20px}@media only screen and (max-width:600px){a.button,button{width:100%}.button+.button{margin-left:0;margin-top:10px}.button-row+.button-row{margin-top:10px}.main{-ms-flex-align:baseline;align-items:baseline}}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBackgroundPattern = createBackgroundPattern;

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRandomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

var atomMap = new Map();

function createRandomAtom(id, x, y) {
  var neighborhood = 150;
  var atoms = document.querySelector(".atoms");

  var image = void 0;
  if (atomMap.has(id)) {
    image = atomMap.get(id);
  } else {
    image = new Image();
    image.src = _react2.default;
    image.style.position = "absolute";
    image.style.transition = "all ease-in-out 600ms";
    atoms.appendChild(image);
    atomMap.set(id, image);
  }

  image.width = createRandomNumberBetween(30, 60);
  image.style.left = createRandomNumberBetween(x + 5, x - 10 + neighborhood) + "px";
  image.style.top = createRandomNumberBetween(y + 5, y - 10 + neighborhood) + "px";
}

function createBackgroundPattern() {
  var neighborhood = 150;
  var i = 0;
  for (var x = 0; x < window.screen.width; x += neighborhood) {
    for (var y = 0; y < window.screen.height; y += neighborhood) {
      createRandomAtom(i, x, y);
      i += 1;
    }
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clicky = clicky;
function clicky() {
  var clicky_site_ids = [];
  clicky_site_ids.push(101142968);
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "//static.getclicky.com/js";
  (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(s);
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ2IiBoZWlnaHQ9IjEyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUuMjgzIDQuNjNMMTIyLjQyIDExOS44OTlzLTMuMTk3IDcuOTk0LTExLjk5IDQuMTU3TDU3LjY3MyA4My42MDdsLTE5LjE4NC05LjI3Mkw2LjE5NSA2My40NjNTMS4yMzkgNjEuNzA1Ljc1OSA1Ny44NjhjLS40OC0zLjgzNyA1LjU5Ni01LjkxNSA1LjU5Ni01LjkxNUwxMzQuNzMgMS41OTNzMTAuNTUyLTQuNjM2IDEwLjU1MiAzLjAzOCIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik01My42MTggMTE4LjYwM3MtMS41NC0uMTQzLTMuNDYtNi4yMmMtMS45MTctNi4wNzUtMTEuNjctMzguMDQ4LTExLjY3LTM4LjA0OGw3Ny41MzgtNDkuMjRzNC40NzctMi43MTggNC4zMTcgMGMwIDAgLjc5OS40NzktMS42IDIuNzE2LTIuMzk3IDIuMjQtNjAuOTEgNTQuODM3LTYwLjkxIDU0LjgzNyIgZmlsbD0iI0QyRTVGMSIvPjxwYXRoIGQ9Ik03Ny45MDEgOTkuMTE1bC0yMC44NjcgMTkuMDI2cy0xLjYzMSAxLjIzOC0zLjQxNi40NjJsMy45OTUtMzUuMzQiIGZpbGw9IiNCNUNGRTQiLz48L2c+PC9zdmc+"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk5IiBoZWlnaHQ9IjI0MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOTMuNzE4OCAyNDIuMTg3YzExMi40NjAzIDAgMTczLjk1NjItOTMuMTY3NiAxNzMuOTU2Mi0xNzMuOTU2MiAwLTIuNjQ2My0uMDUzOS01LjI4MDctLjE3MjYtNy45MDMgMTEuOTM4LTguNjMwMiAyMi4zMTQ1LTE5LjQgMzAuNDk3Ny0zMS42Ni0xMC45NTQ2IDQuODY5NS0yMi43NDM2IDguMTQ3NS0zNS4xMTA3IDkuNjI1NiAxMi42MjM0LTcuNTY5MyAyMi4zMTQ0LTE5LjU0MyAyNi44ODU4LTMzLjgxNzQtMTEuODEyOSA3LjAwMy0yNC44OTUyIDEyLjA5My0zOC44MjM4IDE0Ljg0MDZDMjM5Ljc5NCA3LjQzMjIgMjIzLjkxMDYgMCAyMDYuMzIyNCAwYy0zMy43NjM3IDAtNjEuMTQ0MiAyNy4zODA1LTYxLjE0NDIgNjEuMTMyMyAwIDQuNzk3OS41MzY0IDkuNDY0NiAxLjU4NTQgMTMuOTQwNkM5NS45NDggNzIuNTE2IDUwLjg5IDQ4LjE4NzEgMjAuNzM4IDExLjE5MjljLTUuMjUwOCA5LjAzNTUtOC4yNzg1IDE5LjUzMTItOC4yNzg1IDMwLjczMDIgMCAyMS4yMTE4IDEwLjc5MzYgMzkuOTM4MyAyNy4yMDc2IDUwLjg5My0xMC4wMzA3LS4zMS0xOS40NTM2LTMuMDYzNi0yNy42OTA0LTcuNjQ2OS0uMDA5LjI1NjYtLjAwOS41MDY3LS4wMDkuNzgwOCAwIDI5LjYwOTYgMjEuMDc0OCA1NC4zMzIgNDkuMDUxMyA1OS45MzQ0LTUuMTM3NiAxLjQwMDYtMTAuNTQzNCAyLjE1MTYtMTYuMTIyIDIuMTUxNi0zLjkzMzYgMC03Ljc2Ni0uMzg3Mi0xMS40OTEtMS4xMDI3IDcuNzgzOSAyNC4yOTMzIDMwLjM1NDYgNDEuOTcwOCA1Ny4xMTUzIDQyLjQ2NTUtMjAuOTI1OCAxNi40MDItNDcuMjg3MSAyNi4xNzA2LTc1LjkzNzEgMjYuMTcwNi00LjkyOSAwLTkuNzk4NC0uMjgwNC0xNC41ODQzLS44NDYzIDI3LjA1ODcgMTcuMzQzOCA1OS4xODk0IDI3LjQ2NCA5My43MjIgMjcuNDY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiNGRkYiLz48L3N2Zz4K"

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/twitter-card.29f20305.png";

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.392ffb47.js.map