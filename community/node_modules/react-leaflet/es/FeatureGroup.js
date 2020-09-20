"use strict";

import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { FeatureGroup as LeafletFeatureGroup } from 'leaflet';
import { withLeaflet } from './context';
import Path from './Path';

var FeatureGroup = /*#__PURE__*/function (_Path) {
  _inheritsLoose(FeatureGroup, _Path);

  function FeatureGroup() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = FeatureGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new LeafletFeatureGroup(this.getOptions(props));
    this.contextValue = _extends(_extends({}, props.leaflet), {}, {
      layerContainer: el,
      popupContainer: el
    });
    return el;
  };

  _proto.componentDidMount = function componentDidMount() {
    _Path.prototype.componentDidMount.call(this);

    this.setStyle(this.props);
  };

  return FeatureGroup;
}(Path);

export default withLeaflet(FeatureGroup);