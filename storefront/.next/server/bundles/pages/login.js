module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkoutCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return payForOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moltin_sdk__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moltin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__moltin_sdk__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var Moltin = Object(__WEBPACK_IMPORTED_MODULE_1__moltin_sdk__["gateway"])({
  client_id: 'GAiErrYtWRqdtw61neMyBR3aWrLY31SPGmgMexQDhU'
});
var getProducts = function getProducts() {
  return Moltin.Products.With('main_image').All();
};
var getProductById = function getProductById(id) {
  return Moltin.Products.With('main_image').Get(id);
};
var addToCart = function addToCart(productId, quantity) {
  return Moltin.Cart().AddProduct(productId, quantity);
};
var getCartItems = function getCartItems(id) {
  return Moltin.Cart(id).Items();
};
var removeFromCart = function removeFromCart(itemId, cartId) {
  return Moltin.Cart(cartId).RemoveItem(itemId);
};
var checkoutCart = function checkoutCart(cartId, customer, billing) {
  return Moltin.Cart(cartId).Checkout(customer, billing);
};
var payForOrder = function payForOrder(orderId, token, email) {
  return Moltin.Orders.Payment(orderId, {
    gateway: 'stripe',
    method: 'purchase',
    payment: token,
    options: {
      receipt_email: email
    }
  });
};
var register =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var email, password, rest, _ref3, _ref3$data, name, id, _ref4, token;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = _ref.email, password = _ref.password, rest = _objectWithoutProperties(_ref, ["email", "password"]);
            _context.next = 3;
            return Moltin.Customers.Create(_objectSpread({
              type: 'customer',
              email: email,
              password: password
            }, rest));

          case 3:
            _ref3 = _context.sent;
            _ref3$data = _ref3.data;
            name = _ref3$data.name;
            id = _ref3$data.id;
            _context.next = 9;
            return login({
              email: email,
              password: password
            });

          case 9:
            _ref4 = _context.sent;
            token = _ref4.token;
            return _context.abrupt("return", {
              id: id,
              name: name,
              email: email,
              token: token
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function register(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var login =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(_ref5) {
    var email, password, _ref7, token;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = _ref5.email, password = _ref5.password;
            _context2.next = 3;
            return Moltin.Customers.Token(email, password);

          case 3:
            _ref7 = _context2.sent;
            token = _ref7.data.token;
            return _context2.abrupt("return", {
              token: token
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function login(_x2) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(1);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(5);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external__nprogress_ = __webpack_require__(8);
var external__nprogress__default = /*#__PURE__*/__webpack_require__.n(external__nprogress_);

// CONCATENATED MODULE: ./components/Header.js







router__default.a.onRouteChangeStart = function (url) {
  return external__nprogress__default.a.start();
};

router__default.a.onRouteChangeComplete = function (url) {
  return external__nprogress__default.a.done();
};

router__default.a.onRouteChangeError = function (url) {
  return external__nprogress__default.a.done();
};

/* harmony default export */ var Header = (function () {
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css"
  })), external__react__default.a.createElement(external__semantic_ui_react_["Menu"], {
    inverted: true,
    fixed: "top",
    size: "huge"
  }, external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
    text: true
  }, external__react__default.a.createElement(link__default.a, {
    href: "/",
    prefetch: true,
    passHref: true
  }, external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, {
    as: "a",
    header: true
  }, external__react__default.a.createElement(external__semantic_ui_react_["Image"], {
    size: "mini",
    src: "/static/logo.jpg",
    style: {
      marginRight: '1.5em'
    }
  }), "CraftyDude Store")), external__react__default.a.createElement(link__default.a, {
    href: "/register",
    prefetch: true,
    passHref: true
  }, external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, {
    as: "a"
  }, "Sign Up")), external__react__default.a.createElement(link__default.a, {
    href: "/login",
    prefetch: true,
    passHref: true
  }, external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, {
    as: "a"
  }, "Sign In")), external__react__default.a.createElement(link__default.a, {
    href: "/cart",
    prefetch: true,
    passHref: true
  }, external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, {
    position: "right",
    as: "a",
    header: true
  }, "Cart")))));
});
// CONCATENATED MODULE: ./components/layout.js




/* harmony default export */ var layout = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("meta", {
    charSet: "utf-8"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
  }), external__react__default.a.createElement("title", null, title)), external__react__default.a.createElement(Header, null), external__react__default.a.createElement(external__semantic_ui_react_["Container"], {
    text: true,
    style: {
      paddingTop: '7em'
    }
  }, children));
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@moltin/sdk");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_layout__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_moltin__ = __webpack_require__(6);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        email: '',
        password: '',
        loading: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "_handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e) {
          var _this$state, email, password, _ref2, token;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  _this$state = _this.state, email = _this$state.email, password = _this$state.password;

                  _this.setState({
                    loading: true
                  });

                  _context.prev = 3;
                  _context.next = 6;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["f" /* login */])({
                    email: email,
                    password: password
                  });

                case 6:
                  _ref2 = _context.sent;
                  token = _ref2.token;
                  localStorage.setItem('customerToken', token);
                  __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/myaccount');
                  _context.next = 16;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](3);
                  console.log(_context.t0);

                  _this.setState({
                    loading: false
                  });

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 12]]);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "_handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref3) {
        var _ref3$target = _ref3.target,
            name = _ref3$target.name,
            _value2 = _ref3$target.value;
        return _this.setState(_defineProperty({}, name, _value2));
      }
    }), _temp));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var loading = this.state.loading;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_layout__["a" /* default */], {
        title: "Login"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Header"], {
        as: "h1"
      }, "Please log in to your account"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Form"], {
        onSubmit: this._handleSubmit,
        loading: loading
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Segment"], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Form"].Field, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "Email"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Input"], {
        fluid: true,
        name: "email",
        type: "email",
        autoFocus: true,
        onChange: function onChange(e) {
          return _this2._handleChange(e);
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Form"].Field, null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", null, "Password"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Input"], {
        fluid: true,
        name: "password",
        type: "password",
        onChange: function onChange(e) {
          return _this2._handleChange(e);
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Button"], {
        type: "submit",
        color: "black"
      }, "Login"))));
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })
/******/ ]);