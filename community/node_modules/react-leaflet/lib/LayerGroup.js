"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _leaflet = require("leaflet");

var _context = require("./context");

var _MapLayer2 = _interopRequireDefault(require("./MapLayer"));

var LayerGroup = /*#__PURE__*/function (_MapLayer) {
  (0, _inheritsLoose2.default)(LayerGroup, _MapLayer);

  function LayerGroup() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = LayerGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new _leaflet.LayerGroup([], this.getOptions(props));
    this.contextValue = (0, _extends2.default)((0, _extends2.default)({}, props.leaflet), {}, {
      layerContainer: el
    });
    return el;
  };

  return LayerGroup;
}(_MapLayer2.default);

var _default = (0, _context.withLeaflet)(LayerGroup);

exports.default = _default;