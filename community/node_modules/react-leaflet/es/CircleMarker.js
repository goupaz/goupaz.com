"use strict";

import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { CircleMarker as LeafletCircleMarker } from 'leaflet';
import { withLeaflet } from './context';
import Path from './Path';

var CircleMarker = /*#__PURE__*/function (_Path) {
  _inheritsLoose(CircleMarker, _Path);

  function CircleMarker() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = CircleMarker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new LeafletCircleMarker(props.center, this.getOptions(props));
    this.contextValue = _extends(_extends({}, props.leaflet), {}, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return CircleMarker;
}(Path);

export default withLeaflet(CircleMarker);