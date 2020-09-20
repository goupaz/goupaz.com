"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Polygon as LeafletPolygon } from 'leaflet';
import { withLeaflet } from './context';
import Path from './Path';

var Polygon = /*#__PURE__*/function (_Path) {
  _inheritsLoose(Polygon, _Path);

  function Polygon() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polygon.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new LeafletPolygon(props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polygon;
}(Path);

export default withLeaflet(Polygon);