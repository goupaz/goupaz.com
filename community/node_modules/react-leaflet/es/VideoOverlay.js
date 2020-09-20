"use strict";

import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { VideoOverlay as LeafletVideoOverlay, latLngBounds } from 'leaflet';
import { withLeaflet } from './context';
import MapLayer from './MapLayer';

var VideoOverlay = /*#__PURE__*/function (_MapLayer) {
  _inheritsLoose(VideoOverlay, _MapLayer);

  function VideoOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = VideoOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new LeafletVideoOverlay(props.url, props.bounds, this.getOptions(props));
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapLayer.prototype.componentDidMount.call(this);

    if (this.props.play === true) {
      this.leafletElement.getElement().play();
    }
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(latLngBounds(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    } // flowlint-next-line sketchy-null-bool:off


    if (toProps.play === true && !fromProps.play) {
      this.leafletElement.getElement().play(); // flowlint-next-line sketchy-null-bool:off
    } else if (!toProps.play && fromProps.play === true) {
      this.leafletElement.getElement().pause();
    }
  };

  return VideoOverlay;
}(MapLayer);

export default withLeaflet(VideoOverlay);