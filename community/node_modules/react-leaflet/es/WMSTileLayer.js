"use strict";

import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { TileLayer } from 'leaflet';
import isEqual from 'fast-deep-equal';
import { withLeaflet } from './context';
import GridLayer from './GridLayer';
import { EVENTS_RE } from './MapEvented';

var WMSTileLayer = /*#__PURE__*/function (_GridLayer) {
  _inheritsLoose(WMSTileLayer, _GridLayer);

  function WMSTileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = WMSTileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var url = props.url,
        params = _objectWithoutPropertiesLoose(props, ["url"]);

    var _this$getOptions = this.getOptions(params),
        _l = _this$getOptions.leaflet,
        options = _objectWithoutPropertiesLoose(_this$getOptions, ["leaflet"]);

    return new TileLayer.WMS(url, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    var prevUrl = fromProps.url,
        _po = fromProps.opacity,
        _pz = fromProps.zIndex,
        prevProps = _objectWithoutPropertiesLoose(fromProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions2 = this.getOptions(prevProps),
        _pl = _this$getOptions2.leaflet,
        prevParams = _objectWithoutPropertiesLoose(_this$getOptions2, ["leaflet"]);

    var url = toProps.url,
        _o = toProps.opacity,
        _z = toProps.zIndex,
        props = _objectWithoutPropertiesLoose(toProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions3 = this.getOptions(props),
        _l = _this$getOptions3.leaflet,
        params = _objectWithoutPropertiesLoose(_this$getOptions3, ["leaflet"]);

    if (url !== prevUrl) {
      this.leafletElement.setUrl(url);
    }

    if (!isEqual(params, prevParams)) {
      this.leafletElement.setParams(params);
    }
  };

  _proto.getOptions = function getOptions(params) {
    var superOptions = _GridLayer.prototype.getOptions.call(this, params);

    return Object.keys(superOptions).reduce(function (options, key) {
      if (!EVENTS_RE.test(key)) {
        options[key] = superOptions[key];
      }

      return options;
    }, {});
  };

  return WMSTileLayer;
}(GridLayer);

export default withLeaflet(WMSTileLayer);