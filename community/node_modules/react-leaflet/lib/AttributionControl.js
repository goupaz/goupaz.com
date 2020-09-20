"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _leaflet = require("leaflet");

var _context = require("./context");

var _MapControl2 = _interopRequireDefault(require("./MapControl"));

var AttributionControl = /*#__PURE__*/function (_MapControl) {
  (0, _inheritsLoose2.default)(AttributionControl, _MapControl);

  function AttributionControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = AttributionControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Control.Attribution(props);
  };

  return AttributionControl;
}(_MapControl2.default);

var _default = (0, _context.withLeaflet)(AttributionControl);

exports.default = _default;