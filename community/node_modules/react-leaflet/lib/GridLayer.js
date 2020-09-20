"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _leaflet = require("leaflet");

var _MapLayer2 = _interopRequireDefault(require("./MapLayer"));

var GridLayer = /*#__PURE__*/function (_MapLayer) {
  (0, _inheritsLoose2.default)(GridLayer, _MapLayer);

  function GridLayer() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = GridLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.GridLayer(this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    var opacity = toProps.opacity,
        zIndex = toProps.zIndex;

    if (opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(opacity);
    }

    if (zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(zIndex);
    }
  };

  _proto.getOptions = function getOptions(props) {
    var options = (0, _extends2.default)({}, _MapLayer.prototype.getOptions.call(this, props));
    var map = props.leaflet.map;

    if (map != null) {
      // $FlowFixMe: Object spread
      if (options.maxZoom == null && map.options.maxZoom != null) {
        // $FlowFixMe: Object spread
        options.maxZoom = map.options.maxZoom;
      } // $FlowFixMe: Object spread


      if (options.minZoom == null && map.options.minZoom != null) {
        // $FlowFixMe: Object spread
        options.minZoom = map.options.minZoom;
      }
    }

    return options;
  };

  _proto.render = function render() {
    return null;
  };

  return GridLayer;
}(_MapLayer2.default);

exports.default = GridLayer;