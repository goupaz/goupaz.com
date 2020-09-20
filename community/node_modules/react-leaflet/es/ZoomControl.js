"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Control } from 'leaflet';
import { withLeaflet } from './context';
import MapControl from './MapControl';

var ZoomControl = /*#__PURE__*/function (_MapControl) {
  _inheritsLoose(ZoomControl, _MapControl);

  function ZoomControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ZoomControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new Control.Zoom(props);
  };

  return ZoomControl;
}(MapControl);

export default withLeaflet(ZoomControl);