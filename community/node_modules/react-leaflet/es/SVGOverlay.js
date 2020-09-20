"use strict";

import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Layer, SVGOverlay as LeafletSVGOverlay } from 'leaflet';
import { createPortal } from 'react-dom';
import { withLeaflet } from './context';
import MapComponent from './MapComponent';

function setAttribute(el, name, value) {
  if (value != null) {
    el.setAttribute(name, value);
  } else {
    el.removeAttribute(name);
  }
}

var SVGOverlay = /*#__PURE__*/function (_MapComponent) {
  _inheritsLoose(SVGOverlay, _MapComponent);

  function SVGOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "leafletElement", void 0);

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = SVGOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setAttribute(container, 'xmlns', 'http://www.w3.org/2000/svg');
    setAttribute(container, 'preserveAspectRatio', props.preserveAspectRatio);
    setAttribute(container, 'viewBox', props.viewBox);
    this.container = container;
    return new LeafletSVGOverlay(container, props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (this.container && toProps.preserveAspectRatio !== fromProps.preserveAspectRatio) {
      setAttribute(this.container, 'preserveAspectRatio', toProps.preserveAspectRatio);
    }

    if (this.container && toProps.viewBox !== fromProps.viewBox) {
      setAttribute(this.container, 'viewBox', toProps.viewBox);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
    this.container = null;
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null || this.container == null) {
      return null;
    }

    return createPortal(children, this.container);
  };

  _createClass(SVGOverlay, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);

  return SVGOverlay;
}(MapComponent);

export default withLeaflet(SVGOverlay);