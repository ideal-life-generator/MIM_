webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _App = __webpack_require__(1);
	
	var _App2 = _interopRequireDefault(_App);
	
	__webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = new _App2.default();
	
	app.init();
	
	app.render();
	
	document.body.appendChild(app.el);
	
	document.addEventListener('app.Ready', function () {
	  if (navigator.splashscreen && navigator.splashscreen.hide) {
	    navigator.splashscreen.hide();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _SVG2 = __webpack_require__(2);
	
	var _SVG3 = _interopRequireDefault(_SVG2);
	
	var _MainMenuButton = __webpack_require__(6);
	
	var _MainMenuButton2 = _interopRequireDefault(_MainMenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import MainButton from '../containers/MainButton';
	
	var App = function (_SVG) {
	  _inherits(App, _SVG);
	
	  function App() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, App);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.attributes = {
	      width: window.innerWidth,
	      height: window.innerHeight
	    }, _this.components = {
	      mainMenuButton: new _MainMenuButton2.default()
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  return App;
	}(_SVG3.default);
	
	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Element2 = __webpack_require__(3);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	var _Path = __webpack_require__(4);
	
	var _Path2 = _interopRequireDefault(_Path);
	
	var _Figure = __webpack_require__(5);
	
	var _Figure2 = _interopRequireDefault(_Figure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SVG = function (_Element) {
	  _inherits(SVG, _Element);
	
	  function SVG() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SVG);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SVG.__proto__ || Object.getPrototypeOf(SVG)).call.apply(_ref, [this].concat(args))), _this), _this.el = document.createElementNS('http://www.w3.org/2000/svg', 'svg'), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(SVG, [{
	    key: 'attachComponents',
	    value: function attachComponents(components) {
	      var _this2 = this;
	
	      var el = this.el;
	
	
	      Object.keys(components).forEach(function (componentName) {
	        var component = components[componentName];
	
	
	        if (component instanceof _Path2.default) {
	          component.init();
	
	          el.appendChild(component.el);
	        } else if (component instanceof _Figure2.default) {
	          var childrenComponents = component.components;
	
	
	          if (childrenComponents) {
	            _this2.attachComponents(childrenComponents);
	          }
	        }
	      });
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      _get(SVG.prototype.__proto__ || Object.getPrototypeOf(SVG.prototype), 'init', this).call(this);
	
	      var el = this.el,
	          components = this.components,
	          _attributes = this.attributes,
	          width = _attributes.width,
	          height = _attributes.height;
	
	
	      if (components) {
	        this.attachComponents(components);
	      }
	
	      el.addEventListener('touchstart', function (_ref2) {
	        var x = _ref2.pageX,
	            y = _ref2.pageY;
	
	        Object.keys(components).forEach(function (componentName) {
	          var component = components[componentName];
	
	
	          if (component instanceof _Figure2.default) {
	            component.onEmit({ width: width, height: height }, { x: x, y: y });
	          }
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var components = this.components;
	
	
	      Object.keys(components).forEach(function (componentName) {
	        var component = components[componentName];
	
	
	        component.render();
	      });
	    }
	  }]);
	
	  return SVG;
	}(_Element3.default);
	
	exports.default = SVG;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Element = function () {
	  function Element() {
	    _classCallCheck(this, Element);
	  }
	
	  _createClass(Element, [{
	    key: "setAttributes",
	    value: function setAttributes(attributes) {
	      var el = this.el;
	
	
	      Object.keys(attributes).forEach(function (attributeName) {
	        var attributeValue = attributes[attributeName];
	
	
	        el.setAttribute(attributeName, attributeValue);
	      });
	    }
	  }, {
	    key: "setStyle",
	    value: function setStyle(style) {
	      var el = this.el;
	
	
	      Object.keys(style).forEach(function (styleName) {
	        var styleValue = style[styleName];
	
	
	        el.style[styleName] = styleValue;
	      });
	    }
	  }, {
	    key: "bindEvents",
	    value: function bindEvents(events) {
	      var _this = this;
	
	      var el = this.el;
	
	
	      Object.keys(events).forEach(function (eventName) {
	        var eventHandler = events[eventName];
	
	
	        el.addEventListener(eventName, function () {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          return eventHandler.apply(_this, args);
	        });
	      });
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      var attributes = this.attributes,
	          style = this.style,
	          events = this.events,
	          afterInit = this.afterInit;
	
	
	      if (attributes) {
	        this.setAttributes(attributes);
	      }
	
	      if (style) {
	        this.setStyle(style);
	      }
	
	      if (events) {
	        this.bindEvents(events);
	      }
	
	      if (afterInit) {
	        this.afterInit();
	      }
	    }
	  }]);
	
	  return Element;
	}();
	
	exports.default = Element;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Element2 = __webpack_require__(3);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Path = function (_Element) {
	  _inherits(Path, _Element);
	
	  function Path() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Path);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Path.__proto__ || Object.getPrototypeOf(Path)).call.apply(_ref, [this].concat(args))), _this), _this.el = document.createElementNS('http://www.w3.org/2000/svg', 'path'), _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  return Path;
	}(_Element3.default);
	
	exports.default = Path;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Figure = function () {
	  function Figure() {
	    _classCallCheck(this, Figure);
	  }
	
	  _createClass(Figure, [{
	    key: "updateParams",
	    value: function updateParams(params) {
	      Object.assign(this, params);
	
	      this.render();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var params = this.params,
	          components = this.components;
	
	
	      Object.keys(components).forEach(function (componentName) {
	        var component = components[componentName];
	
	
	        component.render(params);
	      });
	    }
	  }]);
	
	  return Figure;
	}();
	
	exports.default = Figure;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Figure2 = __webpack_require__(5);
	
	var _Figure3 = _interopRequireDefault(_Figure2);
	
	var _Transform = __webpack_require__(7);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _MainMenuButtonBorder = __webpack_require__(9);
	
	var _MainMenuButtonBorder2 = _interopRequireDefault(_MainMenuButtonBorder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import fps from '../utils/fps';
	
	// const counter = fps('main-menu-button');
	
	var state = 'normal';
	
	var MainMenuButton = function (_Figure) {
	  _inherits(MainMenuButton, _Figure);
	
	  function MainMenuButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MainMenuButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainMenuButton.__proto__ || Object.getPrototypeOf(MainMenuButton)).call.apply(_ref, [this].concat(args))), _this), _this.params = {
	      width: 180,
	      height: 50,
	      alignX: 0.5,
	      alignY: 0,
	      mountX: 0.5,
	      transformX: 0,
	      transformY: 65,
	      stroke: 5,
	      strokeColor: 'rgba(0, 0, 0, 1)',
	      radius: 0
	    }, _this.states = {
	      normal: {
	        width: 180,
	        alignX: 0.5,
	        mountX: 0.5,
	        x: 0,
	        radius: 0
	      },
	      mini: {
	        width: 50,
	        alignX: 0,
	        mountX: 0,
	        x: 15,
	        radius: 1
	      }
	    }, _this.components = {
	      mainMenuButtonBorder: new _MainMenuButtonBorder2.default()
	    }, _this.transform = new _Transform2.default({ duration: 250 }), _this.events = {
	      touchstart: function touchstart() {
	        var _this2 = this;
	
	        console.log('touchstart in figure');
	
	        var previousState = this.states[state];
	
	
	        state = state === 'normal' ? 'mini' : 'normal';
	
	        var newState = this.states[state];
	
	
	        this.transfrom.fromTo(previousState, newState, function (params) {
	          _this2.updateParams(params);
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MainMenuButton, [{
	    key: 'onEmit',
	    value: function onEmit(screen, point) {
	      var _params = this.params,
	          width = _params.width,
	          height = _params.height,
	          alignX = _params.alignX,
	          alignY = _params.alignY,
	          transformX = _params.transformX,
	          transformY = _params.transformY,
	          mountX = _params.mountX,
	          mountY = _params.mountY,
	          radius = _params.radius;
	
	
	      var x = 0;
	      var y = 0;
	
	      if (alignX) {
	        x = alignX * screen.width;
	      }
	
	      if (alignY) {
	        y = alignY * screen.height;
	      }
	
	      if (transformX) {
	        x += transformX;
	      }
	
	      if (transformY) {
	        y += transformY;
	      }
	
	      if (mountX) {
	        x -= mountX * width;
	      }
	
	      if (mountY) {
	        y -= mountY * height;
	      }
	
	      if ((x >= point.x || x <= point.x + width) && (y >= point.y || y <= point.y + height)) {
	        console.log('ok');
	      }
	
	      console.log(x, y, screen, point);
	    }
	  }]);
	
	  return MainMenuButton;
	}(_Figure3.default);
	
	exports.default = MainMenuButton;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _type = __webpack_require__(8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Transform = function () {
	  function Transform(settings) {
	    _classCallCheck(this, Transform);
	
	    this.stage = 1;
	
	    Object.assign(this, settings);
	  }
	
	  _createClass(Transform, [{
	    key: 'fromTo',
	    value: function fromTo(previousState, nextState, onTick) {
	      var _this = this;
	
	      var stage = this.stage,
	          animationIntervalId = this.animationIntervalId;
	      var duration = this.duration;
	
	
	      var startedAt = Date.now();
	      var endAt = startedAt + (stage < 1 ? stage : 1) * duration;
	
	      if ((0, _type.get)(animationIntervalId) === _type.number) {
	        clearInterval(animationIntervalId);
	      }
	
	      animationIntervalId = setInterval(function () {
	        var params = {};
	
	        stage = 1 - (endAt - Date.now()) / duration;
	
	        if (stage >= 1) {
	          stage = 1;
	
	          clearInterval(animationIntervalId);
	        }
	
	        Object.keys(previousState).forEach(function (prop) {
	          var previousValue = previousState[prop];
	          var nextValue = nextState[prop];
	
	
	          params[prop] = previousValue + (nextValue - previousValue) * stage;
	        });
	
	        onTick(params);
	
	        Object.assign(_this, { stage: stage });
	      });
	
	      Object.assign(this, { animationIntervalId: animationIntervalId });
	    }
	  }]);
	
	  return Transform;
	}();
	
	exports.default = Transform;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.get = get;
	var object = exports.object = 'Object';
	var array = exports.array = 'Array';
	var number = exports.number = 'Number';
	
	function get(data) {
	  var typeString = Object.prototype.toString.call(data);
	  var type = typeString.slice(8, -1);
	
	  return type;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Path2 = __webpack_require__(4);
	
	var _Path3 = _interopRequireDefault(_Path2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var startX = 0;
	var startY = 0;
	
	var width = 150;
	var height = 50;
	
	var radius = height / 2;
	var doubleRadius = radius * 2;
	var outside = Math.sqrt(2) - 1;
	var diference = Math.sqrt(Math.pow(outside * radius, 2) / 2);
	
	var corner = Math.sqrt(Math.pow(radius, 2) + Math.pow(radius, 2), 2);
	
	var n = 4 / 3 * Math.tan(Math.PI / 8);
	
	function pointOnVector(startCoord, endCoord, range) {
	  var result = startCoord + (endCoord - startCoord) * range;
	
	  return result;
	}
	
	var MainMenuButtonBorder = function (_Path) {
	  _inherits(MainMenuButtonBorder, _Path);
	
	  function MainMenuButtonBorder() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MainMenuButtonBorder);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainMenuButtonBorder.__proto__ || Object.getPrototypeOf(MainMenuButtonBorder)).call.apply(_ref, [this].concat(args))), _this), _this.coords = [[startX, startY, startX, startY, startX + width, startY, startX + width, startY], [startX + width, startY, startX + width, startY, startX + width, startY + height, startX + width, startY + height], [startX + width, startY + height, startX + width, startY + height, startX, startY + height, startX, startY + height], [startX, startY + height, startX, startY + height, startX, startY, startX, startY]], _this.states = {
	      normal: [[startX, startY, startX, startY, startX + width, startY, startX + width, startY], [startX + width, startY, startX + width, startY, startX + width, startY + height, startX + width, startY + height], [startX + width, startY + height, startX + width, startY + height, startX, startY + height, startX, startY + height], [startX, startY + height, startX, startY + height, startX, startY, startX, startY]],
	      mini: [[startX + diference, startY + diference, startX + pointOnVector(diference, radius, n), startY + pointOnVector(diference, radius - corner, n), startX + pointOnVector(radius * 2 - diference, radius, n), startY + pointOnVector(diference, radius - corner, n), startX + (radius * 2 - diference), startY + diference], [startX + (doubleRadius - diference), startY + diference, startX + pointOnVector(doubleRadius - diference, radius + corner, n), startY + pointOnVector(diference, radius, n), startX + pointOnVector(doubleRadius - diference, radius + corner, n), startY + pointOnVector(doubleRadius - diference, radius, n), startX + (doubleRadius - diference), startY + (doubleRadius - diference)], [startX + (doubleRadius - diference), startY + (doubleRadius - diference), startX + pointOnVector(doubleRadius - diference, radius, n), startY + pointOnVector(doubleRadius - diference, radius + corner, n), startX + pointOnVector(diference, radius, n), startY + pointOnVector(doubleRadius - diference, radius + corner, n), startX + diference, startY + (doubleRadius - diference)], [startX + diference, startY + (doubleRadius - diference), startX + pointOnVector(diference, radius - corner, n), startY + pointOnVector(doubleRadius - diference, radius, n), startX + pointOnVector(diference, radius - corner, n), startY + pointOnVector(diference, radius, n), startX + diference, startY + diference]]
	    }, _this.style = {
	      fill: 'red',
	      stroke: '#1d1d1b',
	      'stroke-width': 5
	    }, _this.events = {
	      touchstart: function touchstart() {
	        console.log('border path');
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MainMenuButtonBorder, [{
	    key: 'toMini',
	    value: function toMini(stage) {
	      var _this2 = this;
	
	      this.states.normal.forEach(function (previousCoords, previousStateIndex) {
	        previousCoords.forEach(function (previousCoord, previousCoordIndex) {
	          var newCoord = _this2.states.mini[previousStateIndex][previousCoordIndex];
	
	          _this2.coords[previousStateIndex][previousCoordIndex] = previousCoord + (newCoord - previousCoord) * stage;
	        });
	      });
	
	      this.render();
	    }
	  }, {
	    key: 'toNormal',
	    value: function toNormal(stage) {
	      var _this3 = this;
	
	      this.states.mini.forEach(function (previousCoords, previousStateIndex) {
	        previousCoords.forEach(function (previousCoord, previousCoordIndex) {
	          var newCoord = _this3.states.normal[previousStateIndex][previousCoordIndex];
	
	          _this3.coords[previousStateIndex][previousCoordIndex] = previousCoord + (newCoord - previousCoord) * stage;
	        });
	      });
	
	      this.render();
	    }
	  }, {
	    key: 'render',
	    value: function render(params) {
	      var el = this.el,
	          coords = this.coords;
	
	
	      console.log(params);
	
	      el.setAttribute('d', '\n      M ' + coords[0][0] + ' ' + coords[0][1] + '\n      C ' + coords[0][2] + ' ' + coords[0][3] + ' ' + coords[0][4] + ' ' + coords[0][5] + ' ' + coords[0][6] + ' ' + coords[0][7] + '\n      M ' + coords[1][0] + ' ' + coords[1][1] + '\n      C ' + coords[1][2] + ' ' + coords[1][3] + ' ' + coords[1][4] + ' ' + coords[1][5] + ' ' + coords[1][6] + ' ' + coords[1][7] + '\n      M ' + coords[2][0] + ' ' + coords[2][1] + '\n      C ' + coords[2][2] + ' ' + coords[2][3] + ' ' + coords[2][4] + ' ' + coords[2][5] + ' ' + coords[2][6] + ' ' + coords[2][7] + '\n      M ' + coords[3][0] + ' ' + coords[3][1] + '\n      C ' + coords[3][2] + ' ' + coords[3][3] + ' ' + coords[3][4] + ' ' + coords[3][5] + ' ' + coords[3][6] + ' ' + coords[3][7] + '\n      Z\n    ');
	    }
	  }]);
	
	  return MainMenuButtonBorder;
	}(_Path3.default);
	
	exports.default = MainMenuButtonBorder;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./common.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[local]!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./common.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  margin: 0px;\n  overflow: hidden; }\n\nsvg {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
]);
//# sourceMappingURL=bundle.js.map