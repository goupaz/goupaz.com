"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _leaflet = require("leaflet");

var _context = require("./context");

var _MapControl2 = _interopRequireDefault(require("./MapControl"));

var ZoomControl = /*#__PURE__*/function (_MapControl) {
  (0, _inheritsLoose2.default)(ZoomControl, _MapControl);

  function ZoomControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ZoomControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Control.Zoom(props);
  };

  return ZoomControl;
}(_MapControl2.default);

var _default = (0, _context.withLeaflet)(ZoomControl);

exports.default = _default;