"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { TileLayer as LeafletTileLayer } from 'leaflet';
import { withLeaflet } from './context';
import GridLayer from './GridLayer';

var TileLayer = /*#__PURE__*/function (_GridLayer) {
  _inheritsLoose(TileLayer, _GridLayer);

  function TileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = TileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new LeafletTileLayer(props.url, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }
  };

  return TileLayer;
}(GridLayer);

export default withLeaflet(TileLayer);