"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Control } from 'leaflet';
import { withLeaflet } from './context';
import MapControl from './MapControl';

var ScaleControl = /*#__PURE__*/function (_MapControl) {
  _inheritsLoose(ScaleControl, _MapControl);

  function ScaleControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ScaleControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new Control.Scale(props);
  };

  return ScaleControl;
}(MapControl);

export default withLeaflet(ScaleControl);