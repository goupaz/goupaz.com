"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _context = require("./context");

var _updateClassName = require("./utils/updateClassName");

var _omit = _interopRequireDefault(require("./utils/omit"));

// flowlint sketchy-null-string:off
var idCounter = 0;

var uniqueId = function uniqueId() {
  return ++idCounter;
};

var LEAFLET_PANES = ['tile', 'shadow', 'overlay', 'map', 'marker', 'tooltip', 'popup'];
var PANE_RE = /-*pane/gi;

var isLeafletPane = function isLeafletPane(name) {
  return LEAFLET_PANES.indexOf(name.replace(PANE_RE, '')) !== -1;
};

var paneStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var Pane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Pane, _Component);

  function Pane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      name: undefined,
      context: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setStyle", function (_temp) {
      var _ref = _temp === void 0 ? _this.props : _temp,
          style = _ref.style,
          className = _ref.className;

      var pane = _this.getPane(_this.state.name);

      if (pane) {
        if (className) {
          (0, _updateClassName.addClassName)(pane, className);
        }

        if (style) {
          // Without the cast, Flow throws this error:
          //   Cannot assign style[key] to pane.style[key] because string
          //   is incompatible with number.
          Object.keys(style).forEach(function (key) {
            pane.style[key] = style[key];
          });
        }
      }
    });
    return _this;
  }

  var _proto = Pane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.createPane(this.props);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.state.name) {
      // Do nothing if this.state.name is undefined due to errors or
      // an invalid props.name value
      return;
    } // If the 'name' prop has changed the current pane is unmounted and a new
    // pane is created.


    if (this.props.name !== prevProps.name) {
      this.removePane();
      this.createPane(this.props);
    } else {
      // Remove the previous css class name from the pane if it has changed.
      // setStyle() will take care of adding in the updated className
      if (prevProps.className && this.props.className !== prevProps.className) {
        var pane = this.getPane(this.state.name);

        if (pane != null && prevProps.className != null) {
          (0, _updateClassName.removeClassName)(pane, prevProps.className);
        }
      } // Update the pane's DOM node style and class


      this.setStyle(this.props);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removePane();
  };

  _proto.createPane = function createPane(props) {
    var map = props.leaflet.map;
    var name = props.name || "pane-" + uniqueId();

    if (map != null && map.createPane != null) {
      var isDefault = isLeafletPane(name);
      var existing = isDefault || this.getPane(name);

      if (existing == null) {
        map.createPane(name, this.getParentPane());
      } else {
        var message = isDefault ? "You must use a unique name for a pane that is not a default leaflet pane (" + name + ")" : "A pane with this name already exists. (" + name + ")";
        process.env.NODE_ENV !== "production" ? (0, _warning.default)(false, message) : void 0;
      }

      this.setState({
        name: name,
        context: (0, _extends2.default)((0, _extends2.default)({}, props.leaflet), {}, {
          pane: name
        })
      }, this.setStyle);
    }
  };

  _proto.removePane = function removePane() {
    // Remove the created pane
    var name = this.state.name;

    if (name != null) {
      var pane = this.getPane(name);
      if (pane != null && pane.remove) pane.remove();
      var map = this.props.leaflet.map;

      if (map != null && map._panes != null) {
        map._panes = (0, _omit.default)(map._panes, name);
        map._paneRenderers = (0, _omit.default)(map._paneRenderers, name);
      }
    }
  };

  _proto.getParentPane = function getParentPane() {
    return this.getPane(this.props.pane || this.props.leaflet.pane);
  };

  _proto.getPane = function getPane(name) {
    if (name != null && this.props.leaflet.map != null) {
      return this.props.leaflet.map.getPane(name);
    }
  };

  _proto.render = function render() {
    var context = this.state.context;
    return context ? /*#__PURE__*/_react.default.createElement(_context.LeafletProvider, {
      value: context
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: paneStyles
    }, this.props.children)) : null;
  };

  return Pane;
}(_react.Component);

var _default = (0, _context.withLeaflet)(Pane);

exports.default = _default;