"use strict";

import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { LayerGroup as LeafletLayerGroup } from 'leaflet';
import { withLeaflet } from './context';
import MapLayer from './MapLayer';

var LayerGroup = /*#__PURE__*/function (_MapLayer) {
  _inheritsLoose(LayerGroup, _MapLayer);

  function LayerGroup() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = LayerGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new LeafletLayerGroup([], this.getOptions(props));
    this.contextValue = _extends(_extends({}, props.leaflet), {}, {
      layerContainer: el
    });
    return el;
  };

  return LayerGroup;
}(MapLayer);

export default withLeaflet(LayerGroup);