"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { GeoJSON as LeafletGeoJSON } from 'leaflet';
import { withLeaflet } from './context';
import Path from './Path';

var GeoJSON = /*#__PURE__*/function (_Path) {
  _inheritsLoose(GeoJSON, _Path);

  function GeoJSON() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = GeoJSON.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new LeafletGeoJSON(props.data, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (typeof toProps.style === 'function') {
      this.leafletElement.setStyle(toProps.style);
    } else {
      this.setStyleIfChanged(fromProps, toProps);
    }
  };

  return GeoJSON;
}(Path);

export default withLeaflet(GeoJSON);