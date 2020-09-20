"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Polyline as LeafletPolyline } from 'leaflet';
import { withLeaflet } from './context';
import Path from './Path';

var Polyline = /*#__PURE__*/function (_Path) {
  _inheritsLoose(Polyline, _Path);

  function Polyline() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polyline.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new LeafletPolyline(props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polyline;
}(Path);

export default withLeaflet(Polyline);