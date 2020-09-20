"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Rectangle as LeafletRectangle } from 'leaflet';
import { withLeaflet } from './context';
import Path from './Path';

var Rectangle = /*#__PURE__*/function (_Path) {
  _inheritsLoose(Rectangle, _Path);

  function Rectangle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Rectangle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new LeafletRectangle(props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Rectangle;
}(Path);

export default withLeaflet(Rectangle);