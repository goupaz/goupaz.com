"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _leaflet = require("leaflet");

var _reactDom = require("react-dom");

var _context = require("./context");

var _MapComponent2 = _interopRequireDefault(require("./MapComponent"));

function setAttribute(el, name, value) {
  if (value != null) {
    el.setAttribute(name, value);
  } else {
    el.removeAttribute(name);
  }
}

var SVGOverlay = /*#__PURE__*/function (_MapComponent) {
  (0, _inheritsLoose2.default)(SVGOverlay, _MapComponent);

  function SVGOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "leafletElement", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "container", void 0);
    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = SVGOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setAttribute(container, 'xmlns', 'http://www.w3.org/2000/svg');
    setAttribute(container, 'preserveAspectRatio', props.preserveAspectRatio);
    setAttribute(container, 'viewBox', props.viewBox);
    this.container = container;
    return new _leaflet.SVGOverlay(container, props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (this.container && toProps.preserveAspectRatio !== fromProps.preserveAspectRatio) {
      setAttribute(this.container, 'preserveAspectRatio', toProps.preserveAspectRatio);
    }

    if (this.container && toProps.viewBox !== fromProps.viewBox) {
      setAttribute(this.container, 'viewBox', toProps.viewBox);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
    this.container = null;
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null || this.container == null) {
      return null;
    }

    return (0, _reactDom.createPortal)(children, this.container);
  };

  (0, _createClass2.default)(SVGOverlay, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);
  return SVGOverlay;
}(_MapComponent2.default);

var _default = (0, _context.withLeaflet)(SVGOverlay);

exports.default = _default;