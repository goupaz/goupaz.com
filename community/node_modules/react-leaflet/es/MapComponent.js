"use strict";

import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import MapEvented from './MapEvented';

var MapComponent = /*#__PURE__*/function (_MapEvented) {
  _inheritsLoose(MapComponent, _MapEvented);

  function MapComponent() {
    return _MapEvented.apply(this, arguments) || this;
  }

  var _proto = MapComponent.prototype;

  _proto.getOptions = function getOptions(props) {
    if (props.pane != null) {
      return props;
    }

    if (props.leaflet != null && props.leaflet.pane != null) {
      return _extends(_extends({}, props), {}, {
        pane: props.leaflet.pane
      });
    }

    return props;
  };

  return MapComponent;
}(MapEvented);

export { MapComponent as default };