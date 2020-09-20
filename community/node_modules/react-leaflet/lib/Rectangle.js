"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _leaflet = require("leaflet");

var _context = require("./context");

var _Path2 = _interopRequireDefault(require("./Path"));

var Rectangle = /*#__PURE__*/function (_Path) {
  (0, _inheritsLoose2.default)(Rectangle, _Path);

  function Rectangle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Rectangle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new _leaflet.Rectangle(props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Rectangle;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(Rectangle);

exports.default = _default;