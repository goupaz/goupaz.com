"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Control } from 'leaflet';
import { withLeaflet } from './context';
import MapControl from './MapControl';

var AttributionControl = /*#__PURE__*/function (_MapControl) {
  _inheritsLoose(AttributionControl, _MapControl);

  function AttributionControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = AttributionControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new Control.Attribution(props);
  };

  return AttributionControl;
}(MapControl);

export default withLeaflet(AttributionControl);